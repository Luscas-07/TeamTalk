create schema if not exists private;
revoke all on schema private from public, anon;
grant usage on schema private to authenticated;

create table public.organizations (
    id uuid primary key default gen_random_uuid(),
    name text not null check (length(btrim(name)) > 0),
    created_at timestamptz not null default now()
);

create table public.departments (
    id uuid primary key default gen_random_uuid(),
    organization_id uuid not null references public.organizations (id) on delete cascade,
    name text not null check (length(btrim(name)) > 0),
    created_at timestamptz not null default now(),
    unique (id, organization_id),
    unique (organization_id, name)
);

create table public.profiles (
    id uuid primary key references auth.users (id) on delete cascade,
    organization_id uuid not null references public.organizations (id) on delete restrict,
    department_id uuid,
    display_name text not null check (length(btrim(display_name)) > 0),
    created_at timestamptz not null default now(),
    unique (id, organization_id),
    constraint profiles_department_same_organization
        foreign key (department_id, organization_id)
        references public.departments (id, organization_id)
        on delete restrict
);

create table public.conversations (
    id uuid primary key default gen_random_uuid(),
    organization_id uuid not null references public.organizations (id) on delete cascade,
    created_by uuid not null,
    created_at timestamptz not null default now(),
    unique (id, organization_id),
    constraint conversations_creator_same_organization
        foreign key (created_by, organization_id)
        references public.profiles (id, organization_id)
        on delete restrict
);

create table public.conversation_participants (
    conversation_id uuid not null,
    organization_id uuid not null,
    user_id uuid not null,
    joined_at timestamptz not null default now(),
    primary key (conversation_id, user_id),
    constraint participants_conversation_same_organization
        foreign key (conversation_id, organization_id)
        references public.conversations (id, organization_id)
        on delete cascade,
    constraint participants_profile_same_organization
        foreign key (user_id, organization_id)
        references public.profiles (id, organization_id)
        on delete cascade
);

create table public.messages (
    id uuid primary key default gen_random_uuid(),
    conversation_id uuid not null,
    organization_id uuid not null,
    sender_id uuid not null,
    body text not null check (
        length(btrim(body)) > 0
        and char_length(body) <= 4000
    ),
    created_at timestamptz not null default now(),
    constraint messages_conversation_same_organization
        foreign key (conversation_id, organization_id)
        references public.conversations (id, organization_id)
        on delete cascade,
    constraint messages_sender_is_participant
        foreign key (conversation_id, sender_id)
        references public.conversation_participants (conversation_id, user_id)
        on delete cascade
);

create index departments_organization_idx
    on public.departments (organization_id);
create index profiles_organization_idx
    on public.profiles (organization_id);
create index profiles_department_idx
    on public.profiles (department_id)
    where department_id is not null;
create index participants_user_idx
    on public.conversation_participants (user_id, conversation_id);
create index messages_history_idx
    on public.messages (conversation_id, created_at desc, id desc);

create function private.current_organization_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
    select p.organization_id
    from public.profiles as p
    where p.id = (select auth.uid())
$$;

create function private.is_conversation_participant(target_conversation_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
    select exists (
        select 1
        from public.conversation_participants as cp
        where cp.conversation_id = target_conversation_id
          and cp.user_id = (select auth.uid())
    )
$$;

revoke all on function private.current_organization_id() from public, anon;
revoke all on function private.is_conversation_participant(uuid) from public, anon;
grant execute on function private.current_organization_id() to authenticated;
grant execute on function private.is_conversation_participant(uuid) to authenticated;

alter table public.organizations enable row level security;
alter table public.departments enable row level security;
alter table public.profiles enable row level security;
alter table public.conversations enable row level security;
alter table public.conversation_participants enable row level security;
alter table public.messages enable row level security;

create policy organizations_read_own
    on public.organizations for select to authenticated
    using (id = (select private.current_organization_id()));

create policy departments_read_own_organization
    on public.departments for select to authenticated
    using (organization_id = (select private.current_organization_id()));

create policy profiles_read_same_organization
    on public.profiles for select to authenticated
    using (organization_id = (select private.current_organization_id()));

create policy conversations_read_as_participant
    on public.conversations for select to authenticated
    using (private.is_conversation_participant(id));

create policy participants_read_conversation
    on public.conversation_participants for select to authenticated
    using (private.is_conversation_participant(conversation_id));

create policy messages_read_as_participant
    on public.messages for select to authenticated
    using (private.is_conversation_participant(conversation_id));

create policy messages_insert_as_sender
    on public.messages for insert to authenticated
    with check (
        sender_id = (select auth.uid())
        and organization_id = (select private.current_organization_id())
        and private.is_conversation_participant(conversation_id)
    );

revoke all on public.organizations,
    public.departments,
    public.profiles,
    public.conversations,
    public.conversation_participants,
    public.messages
from public, anon, authenticated;

grant select on public.organizations,
    public.departments,
    public.profiles,
    public.conversations,
    public.conversation_participants,
    public.messages
to authenticated;

grant insert (conversation_id, organization_id, sender_id, body)
    on public.messages to authenticated;

create function public.create_direct_conversation(other_user_id uuid)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
    actor_id uuid := auth.uid();
    actor_organization_id uuid;
    other_organization_id uuid;
    new_conversation_id uuid;
begin
    if actor_id is null then
        raise exception 'Authentication is required'
            using errcode = '42501';
    end if;

    if other_user_id is null or other_user_id = actor_id then
        raise exception 'A different conversation participant is required'
            using errcode = '22023';
    end if;

    select p.organization_id
      into actor_organization_id
      from public.profiles as p
     where p.id = actor_id;

    if actor_organization_id is null then
        raise exception 'The authenticated user has no provisioned profile'
            using errcode = '42501';
    end if;

    select p.organization_id
      into other_organization_id
      from public.profiles as p
     where p.id = other_user_id;

    if other_organization_id is null
       or other_organization_id <> actor_organization_id then
        raise exception 'The participant must belong to the same organization'
            using errcode = '42501';
    end if;

    insert into public.conversations (organization_id, created_by)
    values (actor_organization_id, actor_id)
    returning id into new_conversation_id;

    insert into public.conversation_participants (
        conversation_id,
        organization_id,
        user_id
    )
    values
        (new_conversation_id, actor_organization_id, actor_id),
        (new_conversation_id, actor_organization_id, other_user_id);

    return new_conversation_id;
end;
$$;

revoke all on function public.create_direct_conversation(uuid) from public, anon;
grant execute on function public.create_direct_conversation(uuid) to authenticated;

do $$
begin
    if exists (
        select 1
        from pg_publication
        where pubname = 'supabase_realtime'
    ) and not exists (
        select 1
        from pg_publication_tables
        where pubname = 'supabase_realtime'
          and schemaname = 'public'
          and tablename = 'messages'
    ) then
        execute 'alter publication supabase_realtime add table public.messages';
    end if;
end;
$$;
