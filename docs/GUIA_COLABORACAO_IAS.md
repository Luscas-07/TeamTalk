# Guia de colaboração com IAs — TeamTalk

**Versão:** 1.0 (proposta para revisão)  
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
- **Separação clara de artefatos:** especificação e UML são responsabilidade de Requisitos, design de UX/UI, componentes de Frontend, schema/RLS de Backend, testes e CI de QA/DevOps.
- **Nunca publicar diretamente na `main`:** criar branch `tipo/issue-N-descricao` e PR para revisão humana. Nunca executar merge ou deploy de produção sem autorização explícita do Tech Lead.
- **Não alterar ambientes de produção nem contratar recursos pagos.** Infraestrutura cloud apenas.
- **Segurança:** não compartilhar segredos, tokens, credenciais, service role keys ou dados reais. Tabelas expostas do Supabase exigem RLS e testes de isolamento por organização e por participante.
- **Rastreabilidade acadêmica:** Issues, PRs, commits, diagramas, testes, prints e quadro Kanban precisam conter evidências reais, sem simular o trabalho.
- **GitHub Projects:** a equipe deve configurar e atualizar o quadro; se a IA não possuir operação para gerenciá-lo, deve solicitar ao integrante fazê-lo pela interface online e então registrar o link real.
- **Mudanças de escopo:** somente depois de alinhamento com líder técnico e responsável pelos requisitos; PO formal ainda não atribuído.
- **Padrão de review:** preferir um colega revisor além do autor, e o líder técnico na integração.

## 3. Quem é responsável por qual entrega?

| Integrante | Username | Issues da Sprint 0 | Sprint 1 | Sprint 2 |
| --- | --- | --- | --- | --- |
| Líder técnico + UX/UI | `Luscas-07` | [#2](https://github.com/Luscas-07/TeamTalk/issues/2), [#3](https://github.com/Luscas-07/TeamTalk/issues/3), [#8](https://github.com/Luscas-07/TeamTalk/issues/8) | Revisão e integração | Revisão e integração |
| Analista de requisitos | `arthurfonsecadocarmo` | [#1](https://github.com/Luscas-07/TeamTalk/issues/1), [#4](https://github.com/Luscas-07/TeamTalk/issues/4) | Validação de regras de negócio | Validação de requisitos |
| Frontend | `braga-felipee` | [#6](https://github.com/Luscas-07/TeamTalk/issues/6) | [#12](https://github.com/Luscas-07/TeamTalk/issues/12) | [#16](https://github.com/Luscas-07/TeamTalk/issues/16) |
| Backend/BaaS | `alvessarthur` | [#7](https://github.com/Luscas-07/TeamTalk/issues/7) | [#10](https://github.com/Luscas-07/TeamTalk/issues/10), [#11](https://github.com/Luscas-07/TeamTalk/issues/11) | [#14](https://github.com/Luscas-07/TeamTalk/issues/14), [#15](https://github.com/Luscas-07/TeamTalk/issues/15) |
| QA/DevOps | `BrennoOliveiraS` | [#5](https://github.com/Luscas-07/TeamTalk/issues/5), [#9](https://github.com/Luscas-07/TeamTalk/issues/9) | [#13](https://github.com/Luscas-07/TeamTalk/issues/13) | [#17](https://github.com/Luscas-07/TeamTalk/issues/17) |

**Sexto integrante:** ainda não convidado/identificado; suas responsabilidades serão definidas posteriormente. Ninguém deve criar atribuições em nome de uma conta hipotética.

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

### Arthur Fonseca — Requisitos (`arthurfonsecadocarmo`)

**Começar por:** [Issue #1](https://github.com/Luscas-07/TeamTalk/issues/1), depois [#4](https://github.com/Luscas-07/TeamTalk/issues/4).

```text
Atue como Analista de Requisitos do TeamTalk. Leia as Issues #1 e #4.
Documente objetivo, perfis de usuário, requisitos funcionais e não funcionais
numerados, regras de negócio, escopo do MVP e critérios de aceite.
Produza UML de casos de uso em formato textual versionável e a representação
necessária para o PDF de entrega; diferencie requisitos aprovados de propostas.
Concentre Sprint 1 em acesso e Sprint 2 em mensagens individuais.
Não assuma automaticamente o papel de PO; essa decisão aguarda a equipe.
Trabalhe em branch docs/issue-1-requisitos (ou equivalente não existente)
e abra PR com links das evidências para revisão.
```

### Felipe — Frontend (`braga-felipee`)

**Começar por:** [Issue #6](https://github.com/Luscas-07/TeamTalk/issues/6), depois [#12](https://github.com/Luscas-07/TeamTalk/issues/12) e [#16](https://github.com/Luscas-07/TeamTalk/issues/16).

```text
Atue como Desenvolvedor Frontend do TeamTalk usando Next.js e TypeScript,
com UX mobile-first e componentes reutilizáveis.
Leia as Issues #6, #12 e #16 e valide dependências com o líder UX/UI.
Na Sprint 0 prepare a estrutura da aplicação em branch própria no GitHub;
na Sprint 1 implemente login, home e colegas; na Sprint 2, chat e histórico.
Não invente APIs prontas, dados reais ou conexões Supabase não implementadas.
Use estados de loading/erro/vazio, acessibilidade e layout para smartphone.
Não alterar main nem publicar em produção. Abrir PR e registrar validações.
```

### Arthur dos Santos — Backend (`alvessarthur`)

**Começar por:** [Issue #7](https://github.com/Luscas-07/TeamTalk/issues/7), depois [#10](https://github.com/Luscas-07/TeamTalk/issues/10), [#11](https://github.com/Luscas-07/TeamTalk/issues/11), [#14](https://github.com/Luscas-07/TeamTalk/issues/14) e [#15](https://github.com/Luscas-07/TeamTalk/issues/15).

```text
Atue como Desenvolvedor Backend/BaaS do TeamTalk.
Leia Issues #7, #10, #11, #14 e #15 e a especificação de requisitos.
Na Sprint 0 modele PostgreSQL, Supabase Auth, Realtime e matriz de permissões;
entregue diagramas e proposta de migrações versionadas, sem aplicá-las ainda.
Planeje RLS para isolamento entre organizações e participantes de conversas.
Não use dados de usuário editáveis como base de autorização.
NUNCA exponha service_role, secret keys ou credenciais no código.
Não modifique banco de produção sem aprovação explícita do Tech Lead.
Descreva testes positivos e negativos de acesso e abra PR para revisão.
```

### Breno — QA e DevOps (`BrennoOliveiraS`)

**Começar por:** [Issue #5](https://github.com/Luscas-07/TeamTalk/issues/5), depois [#9](https://github.com/Luscas-07/TeamTalk/issues/9), [#13](https://github.com/Luscas-07/TeamTalk/issues/13) e [#17](https://github.com/Luscas-07/TeamTalk/issues/17).

```text
Atue como QA/DevOps do TeamTalk. Leia Issues #5, #9, #13 e #17.
Na Sprint 0 defina fluxo PR/revisão, plano de CI do GitHub Actions,
checklist de avaliação A3 e plano de testes.
Quando existir a base Next.js, planeje/implemente verificações de lint,
tipagem, build e testes em PRs. Trabalhe com Preview Vercel autorizado;
não altere domínio ou ambiente de produção.
Valide PWA e mobile na Sprint 1 e fluxo de dois usuários com histórico
e isolamento de dados na Sprint 2.
Registre resultados e evidências reais, não declare testes que não rodaram.
```

### Líder técnico e UX/UI (`Luscas-07`)

**Começar por:** [Issue #3](https://github.com/Luscas-07/TeamTalk/issues/3) e [#8](https://github.com/Luscas-07/TeamTalk/issues/8), apoiando [#2](https://github.com/Luscas-07/TeamTalk/issues/2).

```text
Atue como meu assistente de Tech Lead e UX/UI no TeamTalk.
Use Issues #2, #3 e #8. Coordene o backlog com critérios de aceitação
e entregas demonstráveis; não afirme criação do GitHub Projects sem confirmação.
Proponha protótipos e fluxo mobile-first para login, colegas e chat.
Revise PRs, integração, arquitetura e riscos de acesso, sem dar merge
nem implantar em produção sem minha aprovação expressa.
Cobrar evidências das Sprints 0, 1 e 2 e preservar colaboração da equipe.
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
5. O responsável por QA registra testes; produção Vercel e banco Supabase exigem autorização específica.
6. A Issue e o GitHub Projects só são marcados como concluídos quando as evidências correspondem ao estado real.

## 8. Regras para evitar retrabalho e proteger a nota A3

- Exigir entregas identificáveis por pessoa e não apenas resultados genéricos gerados por IA.
- Manter requisitos numerados, UML no repositório, CI documentada, quadro ágil e demonstração funcional como evidências.
- Não criar features fora do MVP sem ajustar priorização e aprovação.
- A sexta pessoa será integrada após o convite GitHub e uma nova atribuição validada.
- Uma IA pode auxiliar qualquer papel **sem retirar a responsabilidade humana** pelo resultado e revisão.

**Observação de escopo:** este guia descreve a forma de trabalho proposta. Não significa que aplicativos, CI, Kanban, testes ou ambientes já tenham sido implementados. Verificar sempre o estado atual dos serviços.
