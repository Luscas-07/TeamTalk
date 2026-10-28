# Roteiro de apresentação — TeamTalk e evidências por integrante

**Objetivo:** demonstrar ao professor o processo real de colaboração do grupo, o planejamento no GitHub Projects, a documentação técnica e os resultados funcionais de cada sprint. **Este documento é um roteiro de apresentação, não uma declaração de funcionalidades concluídas.**

## Estrutura sugerida da apresentação (10–15 minutos, ajustar ao tempo do professor)

| Ordem | Apresentador | Mostrar na tela | Fala / demonstração |
| --- | --- | --- | --- |
| 1 | Líder técnico `Luscas-07` | Repositório, [Issue #2](https://github.com/Luscas-07/TeamTalk/issues/2), GitHub Projects (quando existir) | Apresentar o problema, o MVP, responsabilidades, Kanban e divisão por sprints |
| 2 | Arthur Fonseca `arthurfonsecadocarmo` | [#1](https://github.com/Luscas-07/TeamTalk/issues/1), [#4](https://github.com/Luscas-07/TeamTalk/issues/4), PDF e UML (quando entregues) | Explicar levantamento de RF/RNF, regras de negócio e critérios de aceite |
| 3 | Líder técnico / UX-UI `Luscas-07` | [#8](https://github.com/Luscas-07/TeamTalk/issues/8), protótipos (quando existirem) | Mostrar fluxo mobile, protótipos, decisões de UX e colaboração com frontend |
| 4 | Felipe `braga-felipee` | [#6](https://github.com/Luscas-07/TeamTalk/issues/6), [#12](https://github.com/Luscas-07/TeamTalk/issues/12), [#16](https://github.com/Luscas-07/TeamTalk/issues/16), PRs | Explicar telas Next.js/TypeScript, componentes e desafios de responsividade, com demo real |
| 5 | Arthur dos Santos `alvessarthur` | [#7](https://github.com/Luscas-07/TeamTalk/issues/7), [#10](https://github.com/Luscas-07/TeamTalk/issues/10), [#11](https://github.com/Luscas-07/TeamTalk/issues/11), [#14](https://github.com/Luscas-07/TeamTalk/issues/14), [#15](https://github.com/Luscas-07/TeamTalk/issues/15) | Explicar autenticação, modelo de dados, RLS, mensagens em tempo real; somente mostrar funcionalidade testada |
| 6 | Breno `BrennoOliveiraS` | [#5](https://github.com/Luscas-07/TeamTalk/issues/5), [#9](https://github.com/Luscas-07/TeamTalk/issues/9), [#13](https://github.com/Luscas-07/TeamTalk/issues/13), [#17](https://github.com/Luscas-07/TeamTalk/issues/17) e evidências de CI | Mostrar testes realmente executados, automações, PWA e implantação autorizada |
| 7 | Todos | GitHub Projects + app Vercel (quando utilizável) | Demonstrar história de trabalho completa: Issue → branch → PR → revisão → teste → tarefa concluída |

**Sexto integrante:** quando for confirmado, inserir seu nome, atribuições e momento de fala sem alterar artificialmente o histórico de autoria.

## O que cada integrante precisa registrar ao longo do projeto?

1. **Issue atribuída:** descrição, critérios de aceite, bloqueios e progresso real.
2. **Branch e commits:** alterações rastreáveis pelo GitHub; commits de autoria não devem ser atribuídos a quem não fez o trabalho.
3. **Pull Request:** link, resumo, revisão de outro colega, resultado de testes e integração autorizada.
4. **GitHub Projects:** atualizar status ao começar, entrar em revisão e concluir; não mover tarefas apenas para enfeitar o quadro.
5. **Evidências:** capturas do fluxo, screenshots de CI, diagramas, PDF e testes vinculados à Issue ou PR.
6. **Reflexão individual:** cada pessoa relata uma decisão técnica, um problema real, como o resolveu e o que aprendeu trabalhando com IA e com os colegas.

## Roteiro do operador do GitHub durante a apresentação

- [ ] Abrir o [repositório TeamTalk](https://github.com/Luscas-07/TeamTalk).
- [ ] Abrir o link do **GitHub Projects real** (inserir aqui quando criado).
- [ ] Mostrar as colunas de status e visualizar **Sprint 0, 1 e 2**.
- [ ] Filtrar pelo campo **Assignee**, mostrando uma entrega real de cada integrante.
- [ ] Abrir uma Issue concluída, seu PR e a revisão de um colega.
- [ ] Mostrar documentação RF/RNF, UML e protótipos efetivamente versionados.
- [ ] Demonstrar login e chat no celular/viewport mobile **apenas quando implementados**.
- [ ] Mostrar evidências de CI, PWA, Supabase e testes de segurança **sem expor segredos**.
- [ ] Encerrar com dificuldades, colaboração entre IAs e próximos passos.

## Perguntas que o professor pode fazer

**Quem tomou as decisões?** O responsável humano da Issue, com revisão do líder; as IAs auxiliaram a execução.

**O que cada pessoa fez?** Apontar Issue, commits, PR, revisão e demonstração verificável; não apenas afirmar participação.

**O que foi testado?** Mostrar logs e resultados reais, identificando o que ainda não foi testado.

**Por que GitHub Projects?** Para mostrar planejamento por sprint, responsáveis, andamento, impedimentos e evidências de gestão ágil.

**Como evitamos que as IAs conflitem?** Branches separadas, Issues atribuídas, PRs, revisores e proteção da `main` quando configurada.

**Como protegemos dados corporativos?** Supabase Auth + RLS por tenant e participante; explicar e demonstrar testes de isolamento quando existirem.

## Preparação final da apresentação

- [ ] Project Kanban criado, vinculado ao repositório, com **17 Issues reais**.
- [ ] Nome do responsável e status verdadeiros em cada Issue.
- [ ] Requisitos, UML, aplicação e testes realizados.
- [ ] Pelo menos uma entrega com rastreabilidade completa de Issue a PR/merge e evidências.
- [ ] Cada apresentador ensaiou sua parte, comprovando sua contribuição individual.
- [ ] Links testados, internet disponível e alternativa de captura/registro caso algum serviço fique fora.
- [ ] Ajustar roteiro quando o sexto integrante entrar.

**Nota:** atualmente o material serve como preparação. Não use itens ainda pendentes para reivindicar entregas concluídas.
