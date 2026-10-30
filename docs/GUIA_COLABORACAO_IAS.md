# Guia de colaboração com IAs — TeamTalk

**Versão:** 1.1 (reorganização de papéis; proposta para revisão)  
**Público:** os integrantes do TeamTalk e seus assistentes de IA (ChatGPT, Claude, Gemini, Cursor ou outros, conforme os recursos disponíveis).  
**Repositório:** https://github.com/Luscas-07/TeamTalk  
**Escopo:** desenvolvimento exclusivamente online, com GitHub, Supabase e Vercel.  
**Documentos vinculados:** [AGENTS.md](../AGENTS.md), [Equipe e responsabilidades](EQUIPE_E_RESPONSABILIDADES.md) e [Planejamento das sprints](PLANEJAMENTO_SPRINTS.md).

> **Importante:** o fato de uma IA receber este guia **não significa** que ela pode abrir links ou modificar o GitHub. O integrante precisa conectar/autenticar sua ferramenta e autorizar as operações necessárias. Se ela não tiver acesso a uma ação, deve informar a limitação, sem fingir execução. Algumas ferramentas não leem `AGENTS.md` automaticamente; forneça este link explicitamente no primeiro prompt.

## 1. Preparação obrigatória de cada integrante

1. Entrar na própria ferramenta de IA e conectar a **própria conta do GitHub**. Verificar que o repositório `Luscas-07/TeamTalk` está autorizado para leitura e escrita, dentro das possibilidades da ferramenta.
2. Solicitar à IA: "Leia `AGENTS.md`, `docs/GUIA_COLABORACAO_IAS.md`, `docs/EQUIPE_E_RESPONSABILIDADES.md`, `docs/PLANEJAMENTO_SPRINTS.md` e a minha Issue atribuída. Use a branch `docs/sprint-0-requisitos` para ler os documentos enquanto não forem integrados à `main`."
3. Fazer **teste controlado**: ler a própria Issue e verificar permissões. Antes de escrever, revisar se outro integrante já está trabalhando na mesma tarefa.
4. Somente quando autorizado, criar uma **branch própria** a partir da base de código vigente. Não utilizar branch `docs/sprint-0-requisitos` para implementar frontend/backend; ela é destinada à documentação.
5. Entregar alterações como commits/PRs, vinculando à Issue. Atribuir ao líder `Luscas-07` a revisão de integração; preferir revisão complementar de um colega.
6. Se a IA só puder sugerir código ou documentação, registrar essa condição e fornecer o conteúdo para submissão controlada via GitHub online. **Não recorrer a desenvolvimento local.**
7. Para tarefas Supabase/Vercel, possuir autorização específica no serviço. O acesso de escrita ao GitHub **não concede** acesso a banco, variáveis secretas ou deploys.

## 2. Acordo de colaboração para todas as IAs

- **A Issue é o contrato de trabalho:** trabalhar primeiro nos critérios de aceitação, sem inventar requisitos extras.
- **Um responsável principal por Issue:** colaboradores ajudam por comentários, revisão ou commits coordenados, evitando edições simultâneas sem acordo.
- **Separação clara de artefatos:** Requisitos/UML, UX/UI, Frontend e Backend possuem responsáveis próprios. **QA/DevOps é transversal:** o responsável por cada implementação executa e registra testes, outro integrante revisa, e o Tech Lead coordena CI/integração.
- **Nunca publicar diretamente na `main`:** criar branch `tipo/issue-N-descricao` e PR para revisão humana. Nunca executar merge ou deploy de produção sem autorização explícita do Tech Lead.
- **Não alterar ambientes de produção nem contratar recursos pagos.** Infraestrutura cloud apenas.
- **Segurança:** não compartilhar segredos, tokens, credenciais, service role keys ou dados reais. Tabelas expostas do Supabase exigem RLS e testes de isolamento por organização e por participante.
- **Rastreabilidade acadêmica:** Issues, PRs, commits, diagramas, testes, prints e quadro Kanban precisam conter evidências reais, sem simular o trabalho.
- **GitHub Projects:** a equipe deve configurar e atualizar o quadro; se a IA não possuir operação para gerenciá-lo, deve solicitar ao integrante fazê-lo pela interface online e então registrar o link real.
- **Mudanças de escopo:** o PO Breno prioriza e valida requisitos; alterações técnicas também exigem alinhamento com Tech Lead e Requisitos.
- **Padrão de review:** preferir um colega revisor além do autor, o Tech Lead na integração e o PO na validação funcional quando pertinente.

## 3. Papéis oficiais (atualizados em 28/10/2026)

| Papel | Integrante | GitHub | Issues principais |
| --- | --- | --- | --- |
| Tech Lead | Líder do projeto | `Luscas-07` | #2, #3 e #5 (coordenação de CI) |
| Product Owner | Breno Oliveira | `BrennoOliveiraS` | #19 e aceite/priorização das demais |
| Requisitos e UML | Arthur Fonseca | `arthurfonsecadocarmo` | #1, #4 e #9 |
| Requisitos e UML | Julia | **Username pendente** | #1, #4 e #9, junto a Arthur Fonseca |
| UI/UX | Rafael | **Username pendente** | #8 (sem assignee técnico) |
| Frontend | Felipe | `braga-felipee` | #6, #12 e #16 |
| Backend/Banco | Arthur dos Santos | `alvessarthur` | #7, #10, #11, #14 e #15 |
| QA/DevOps distribuído | Toda a equipe conforme as funcionalidades | #13 e #17 com Felipe e Arthur dos Santos; revisão e aceite pelos demais |

**Importante:** Julia e Rafael já têm papéis definidos como pessoas, mas não foi informado o username GitHub de nenhum dos dois. **Não tentar inferir usuário.** O PO não assume automaticamente QA/DevOps e o Tech Lead coordena CI/integração; QA/DevOps é distribuído pelos responsáveis de cada feature. A equipe possui sete integrantes.

## 4. Prompt inicial universal — copie e personalize

```text
Você será meu assistente de desenvolvimento no projeto acadêmico TeamTalk.
Meu GitHub é: <MEU_USERNAME>.
Repositório: https://github.com/Luscas-07/TeamTalk
Meu papel na equipe: <MEU_PAPEL>.
Issue principal de agora: #<NUMERO>.

Antes de agir:
1. Confirme se sua integração consegue LER e ESCREVER nesse repositório. Não presuma acesso.
2. Leia AGENTS.md, docs/GUIA_COLABORACAO_IAS.md,
   docs/EQUIPE_E_RESPONSABILIDADES.md e docs/PLANEJAMENTO_SPRINTS.md
   na branch docs/sprint-0-requisitos se ainda não estiverem na main.
3. Leia a Issue designada e os critérios de aceitação; veja dependências e PRs ativos.
4. Proponha um plano curto, identifique dúvidas e faça somente ações seguras.
5. Crie sua PR em branch própria; não escreva diretamente na main.
6. Não utilize instalações locais, não altere produção, não crie recursos pagos
   e não exponha senhas/tokens/secret keys.
7. Ao terminar, informe o que realmente fez, o que testou, links de branch,
   commits e PR, e o que precisa da revisão do Tech Lead.
Se sua ferramenta não permitir executar uma ação, deixe isso explícito.
```

## 5. Instruções especializadas por integrante (complementar ao prompt universal)

### Tech Lead — `Luscas-07`

**Começar por:** #2, #3 e #5.

```text
Atue como meu assistente de Tech Lead do TeamTalk. Minha função é coordenar
arquitetura, revisão, integração e GitHub Projects, além do fluxo de PR/CI.
Leia Issues #2, #3 e #5 e o AGENTS.md. Verifique dependências reais.
O PO é Breno, então prioridades e aceite do produto dependem dele.
Rafael assumiu UI/UX: protótipos e decisões visuais são responsabilidade dele.
Não fazer merge na main nem alterar produção sem aprovação explícita.
Trabalhe 100% online e mantenha links das evidências em Issues e PRs.
```

### Breno — Product Owner `BrennoOliveiraS`

**Começar por:** [Issue #19](https://github.com/Luscas-07/TeamTalk/issues/19).

```text
Atue como meu assistente de Product Owner (PO) do TeamTalk.
Meu GitHub é BrennoOliveiraS. Leia a Issue #19, o backlog e AGENTS.md.
Ajude a priorizar RFs e RNFs do MVP, validar personas, visão do produto,
objetivos das Sprints 1 e 2 e critérios de aceitação de cada entrega.
Converse com Requisitos (Arthur Fonseca e Julia), Tech Lead e UX (Rafael).
Registre feedback nas Issues e decisões de escopo de forma rastreável.
Meu papel é PO, não QA/DevOps: não assuma testes técnicos nem deploy.
Não altere main/produção nem crie recursos pagos.
```

### Arthur Fonseca e Julia — Requisitos e UML

**Começar por:** [#1](https://github.com/Luscas-07/TeamTalk/issues/1), [#4](https://github.com/Luscas-07/TeamTalk/issues/4), [#9](https://github.com/Luscas-07/TeamTalk/issues/9).

```text
Atue como assistente da equipe de Requisitos/UML do TeamTalk.
Arthur Fonseca (GitHub arthurfonsecadocarmo) e Julia dividem esta função.
Leia Issues #1, #4 e #9, a especificação existente e o AGENTS.md.
Documente requisitos funcionais/não funcionais numerados, regras de
negócio, personas, escopo do MVP, critérios de aceite e casos de uso UML.
PO Breno valida prioridades e aceite; não substitua as decisões dele.
Julia ainda não tem username GitHub informado: não invente a conta dela.
Faça documentação versionada por branch e PR, sem mexer na main.
```

### Rafael — UI/UX Designer (username a confirmar)

**Começar por:** [Issue #8](https://github.com/Luscas-07/TeamTalk/issues/8).

```text
Atue como assistente de UI/UX Designer do TeamTalk, com foco 100% mobile.
Leia a Issue #8, requisitos aprovados, AGENTS.md e backlog.
Crie fluxos e protótipos para login, lista de colaboradores e chat 1:1;
defina identidade visual, componentes, responsividade, estados
de carregamento/erro/vazio e critérios básicos de acessibilidade.
Alinhe com Felipe (Frontend), Arthur Fonseca e Julia (Requisitos) e Breno (PO).
Não confunda protótipo com aplicativo implementado.
Meu username GitHub ainda precisa ser confirmado; não simule commits.
```

### Felipe — Frontend `braga-felipee`

**Começar por:** #6, #12 e #16.

```text
Atue como Desenvolvedor Frontend usando Next.js e TypeScript, em UX mobile-first.
Leia as Issues #6, #12 e #16 e AGENTS.md. O responsável visual é Rafael.
Alinhe os componentes e telas com protótipos aprovados, não invente telas.
Aproveite branch própria e PR. Não exponha credenciais nem altere produção.
```

### Arthur dos Santos — Backend/Banco `alvessarthur`

**Começar por:** #7, #10, #11, #14 e #15.

```text
Atue como desenvolvedor Backend/Banco do TeamTalk no Supabase.
Leia #7, #10, #11, #14 e #15, os requisitos e AGENTS.md.
Projete Auth, PostgreSQL, Realtime, políticas RLS e isolamento de tenants.
Não use service_role no frontend ou dados editáveis de usuário para autorização.
Versione migrações e só as aplique após aprovação técnica expressa.
Colabore com Frontend, PO e Requisitos.
```

### QA e DevOps — responsabilidade compartilhada (aprovado)

**Início:** #13 (Sprint 1), #17 (Sprint 2) e #5 (CI); cada feature também deve ter testes em sua própria Issue.

```text
Atue conforme a especialidade da pessoa responsável e o AGENTS.md.
QA/DevOps está distribuído entre todos conforme novas funcionalidades
forem implementadas. O autor da mudança executa testes relevantes
e registra resultados e evidências; outro integrante revisa/testa.
Felipe cuida de UI e PWA; Arthur dos Santos cuida de banco, Auth,
segurança, RLS e Realtime; Rafael valida UX e acessibilidade;
Arthur Fonseca e Julia conferem regras de negócio e casos de uso;
o Tech Lead coordena CI, integração e revisão cruzada;
Breno (PO) valida os critérios de aceitação sem substituir testes técnicos.
Não declarar testes não executados, não dar merge automático na main
e não aplicar migrações ou deploy de produção sem aprovação explícita.
```

## 6. Modelo de relatório diário/ao concluir

```text
[TeamTalk] Issue: #N — Título
Responsável: @usuario
Sprint/Prioridade: N / P0 ou P1
Status: Backlog | Pronto | Em andamento | Em revisão | Em teste | Concluído
Executado de fato:
- ...
Branch: ...
Commit(s): ...
Pull Request: ...
Testes executados/resultados: ...
Pendências, riscos e bloqueios: ...
Próximo responsável/revisor: ...
```

## 7. Política de revisão e integração

1. O autor da tarefa fornece PR vinculado à Issue e checklist de aceite.
2. Outro colega realiza revisão técnica ou funcional quando pertinente.
3. O líder técnico valida compatibilidade e riscos de integração.
4. Só após autorização humana é permitida a integração na `main`.
5. Os autores das funcionalidades registram testes e evidências; o revisor verifica sua cobertura, e o PO valida o aceite. Produção Vercel e banco Supabase exigem autorização específica.
6. A Issue e o GitHub Projects só são marcados como concluídos quando as evidências correspondem ao estado real.

## 8. Regras para evitar retrabalho e proteger a nota A3

- Exigir entregas identificáveis por pessoa e não apenas resultados genéricos gerados por IA.
- Manter requisitos numerados, UML no repositório, CI documentada, quadro ágil e demonstração funcional como evidências.
- Não criar features fora do MVP sem ajustar priorização e aprovação.
- A equipe já possui sete integrantes. Os usernames de Julia e Rafael devem ser informados antes de suas atribuições formais no GitHub.
- Uma IA pode auxiliar qualquer papel **sem retirar a responsabilidade humana** pelo resultado e revisão.

**Observação de escopo:** este guia descreve a forma de trabalho proposta. Não significa que aplicativos, CI, Kanban, testes ou ambientes já tenham sido implementados. Verificar sempre o estado atual dos serviços.
