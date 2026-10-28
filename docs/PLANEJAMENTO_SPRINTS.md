# TeamTalk — Planejamento das Sprints 0, 1 e 2

> Backlog real do repositório (atualizado em 28/10/2026). **Não substitui o quadro GitHub Projects.** As tabelas indicam o responsável humano e esclarecem quando o `assignee` GitHub está pendente.

## Sprint 0 — Planejamento, documentação, UI/UX e infraestrutura

| Issue | Prioridade | Entrega | Responsável / situação |
| --- | --- | --- | --- |
| [#1](https://github.com/Luscas-07/TeamTalk/issues/1) | P0 | Requisitos funcionais e não funcionais | [@arthurfonsecadocarmo](https://github.com/arthurfonsecadocarmo) + Julia (GitHub pendente) |
| [#2](https://github.com/Luscas-07/TeamTalk/issues/2) | P0 | Organização da equipe | [@Luscas-07](https://github.com/Luscas-07) — Tech Lead |
| [#3](https://github.com/Luscas-07/TeamTalk/issues/3) | P0 | GitHub Projects e Kanban | [@Luscas-07](https://github.com/Luscas-07) — Tech Lead |
| [#4](https://github.com/Luscas-07/TeamTalk/issues/4) | P0 | UML e regras de negócio | [@arthurfonsecadocarmo](https://github.com/arthurfonsecadocarmo) + Julia (GitHub pendente) |
| [#5](https://github.com/Luscas-07/TeamTalk/issues/5) | P0 | Branches, PRs e coordenação técnica de CI | [@Luscas-07](https://github.com/Luscas-07) — Tech Lead |
| [#6](https://github.com/Luscas-07/TeamTalk/issues/6) | P0 | Estrutura Next.js e TypeScript | [@braga-felipee](https://github.com/braga-felipee) |
| [#7](https://github.com/Luscas-07/TeamTalk/issues/7) | P0 | Arquitetura de dados, Auth e RLS | [@alvessarthur](https://github.com/alvessarthur) |
| [#8](https://github.com/Luscas-07/TeamTalk/issues/8) | P0 | Protótipos mobile-first | Rafael (GitHub pendente; sem assignee) |
| [#9](https://github.com/Luscas-07/TeamTalk/issues/9) | P1 | PDF de requisitos e checklist de evidências A3 | [@arthurfonsecadocarmo](https://github.com/arthurfonsecadocarmo) + Julia (GitHub pendente) |
| [#19](https://github.com/Luscas-07/TeamTalk/issues/19) | P0 | Product Owner: visão, priorização e aceite do MVP | [@BrennoOliveiraS](https://github.com/BrennoOliveiraS) — PO |

## Sprint 1 — Acesso seguro e navegação mobile

| Issue | Prioridade | Entrega | Responsável / situação |
| --- | --- | --- | --- |
| [#10](https://github.com/Luscas-07/TeamTalk/issues/10) | P0 | Autenticação e sessões | [@alvessarthur](https://github.com/alvessarthur) |
| [#11](https://github.com/Luscas-07/TeamTalk/issues/11) | P0 | Organizações e perfis com RLS | [@alvessarthur](https://github.com/alvessarthur) |
| [#12](https://github.com/Luscas-07/TeamTalk/issues/12) | P0 | Interface mobile de login e colegas | [@braga-felipee](https://github.com/braga-felipee) |
| [#13](https://github.com/Luscas-07/TeamTalk/issues/13) | P1 | PWA, responsividade e testes | **Execução técnica:** [@braga-felipee](https://github.com/braga-felipee) + [@alvessarthur](https://github.com/alvessarthur); revisão compartilhada |

## Sprint 2 — Mensagens individuais persistidas e em tempo real

| Issue | Prioridade | Entrega | Responsável / situação |
| --- | --- | --- | --- |
| [#14](https://github.com/Luscas-07/TeamTalk/issues/14) | P0 | Conversas, participantes e mensagens com RLS | [@alvessarthur](https://github.com/alvessarthur) |
| [#15](https://github.com/Luscas-07/TeamTalk/issues/15) | P0 | Supabase Realtime | [@alvessarthur](https://github.com/alvessarthur) |
| [#16](https://github.com/Luscas-07/TeamTalk/issues/16) | P0 | Chat mobile e histórico | [@braga-felipee](https://github.com/braga-felipee) |
| [#17](https://github.com/Luscas-07/TeamTalk/issues/17) | P0 | Testes ponta a ponta e evidências | **Execução técnica:** [@braga-felipee](https://github.com/braga-felipee) + [@alvessarthur](https://github.com/alvessarthur); revisão compartilhada |

## Definição de responsabilidades e trabalho conjunto

- **PO Breno:** prioriza o valor, define critérios de aceitação e valida entregas; acompanha todas as sprints (#19).
- **Tech Lead:** revisa arquitetura e PRs, mantém organização do GitHub Projects; coordena a infraestrutura de CI (#5), **não sendo automaticamente responsável por QA**.
- **Arthur Fonseca e Julia:** trabalham juntos em requisitos e UML. O usuário GitHub de Julia ainda não foi confirmado, portanto os links técnicos seguem com Arthur Fonseca.
- **Rafael:** lidera o UX/UI (#8). A atribuição de #8 ficou vazia até confirmar seu GitHub.
- **Felipe e Arthur dos Santos:** seguem responsáveis por Frontend e Backend, respectivamente, colaborando com Requisitos/UX.
- **QA e DevOps compartilhados:** quem constrói a funcionalidade testa e documenta; #13 e #17 têm Felipe + Arthur dos Santos como assignees técnicos. Rafael revisa UX, Arthur Fonseca e Julia verificam cenários, Tech Lead coordena CI e Breno (PO) dá aceite baseado nas evidências.

## Qualidade e DevOps por funcionalidade

- [ ] Cada autor prepara testes adequados e registra execução, resultados, limitações e evidências na própria Issue/PR.
- [ ] Outro integrante faz revisão e, quando aplicável, teste cruzado.
- [ ] PO Breno avalia critérios de aceite depois da validação técnica, sem substituir testes.
- [ ] CI sob coordenação do Tech Lead, com contribuições dos desenvolvedores; produção e migrações somente com aprovação expressa.
- [ ] Issues #13 e #17 consolidam verificações das sprints; permanecerão abertas até serem executadas e evidenciadas.

## GitHub Projects — estado conhecido

- O líder **criou o quadro GitHub Projects** e enviou captura mostrando as 17 Issues iniciais importadas, no status `Todo`.
- A Issue **#19** foi criada depois dessa importação. **Sua presença no quadro ainda precisa ser verificada** (pode ser inserida manualmente na interface).
- Status, Sprint e Prioridade podem ser exibidos por campos e visões conforme [Guia de configuração do Projects](GITHUB_PROJECTS_CONFIGURACAO.md). A criação desses campos não foi confirmada.
- GitHub Projects e Issues são sistemas distintos; acesso a um não garante acesso ao outro.

## Pendências para gestão e apresentação

- [x] Sete integrantes registrados por nome, com Breno como PO e Rafael em UI/UX.
- [x] Backlog de **18 Issues**: 10 da Sprint 0, 4 da Sprint 1 e 4 da Sprint 2 (#1–#17 e #19; #18 é um Pull Request, não uma Issue de trabalho).
- [ ] Confirmar os usernames de Julia e Rafael e realizar suas atribuições GitHub.
- [x] Definir QA/DevOps compartilhado conforme evolução de cada funcionalidade e atribuir #13/#17 aos responsáveis técnicos Felipe + Arthur dos Santos.
- [ ] Confirmar inclusão da Issue #19 no quadro; adicionar a ela campo Sprint 0 e prioridade P0.
- [ ] Compartilhar o quadro com os sete integrantes e revisar critérios de aceite do PO.
- [ ] Revisar e integrar documentação em PR (sem alterar `main` automaticamente).

**Política:** todos podem ajudar uns aos outros; cada alteração deve ser rastreável com Issue, branch, PR e revisão. Não realizar trabalhos locais, mudanças em produção ou recursos pagos sem aprovação específica.
