# Roteiro de apresentação — TeamTalk e evidências por integrante

**Objetivo:** demonstrar ao professor o processo real de colaboração do grupo, o planejamento no GitHub Projects, a documentação técnica e os resultados funcionais de cada sprint. **Este documento é um roteiro de apresentação, não uma declaração de funcionalidades concluídas.**

## Estrutura sugerida da apresentação (ajustar ao tempo definido pelo professor)

| Ordem | Apresentador | Mostrar na tela | Explicação e demonstração |
| --- | --- | --- | --- |
| 1 | Tech Lead `Luscas-07` | Repositório, [#2](https://github.com/Luscas-07/TeamTalk/issues/2), [#3](https://github.com/Luscas-07/TeamTalk/issues/3) e GitHub Projects | Arquitetura, organização dos times, gestão das branches/PRs e integração |
| 2 | PO Breno `BrennoOliveiraS` | [#19](https://github.com/Luscas-07/TeamTalk/issues/19), prioridades e critérios de aceite | O que é o MVP, por que as funcionalidades foram priorizadas e como foram validadas |
| 3 | Arthur Fonseca `arthurfonsecadocarmo` **e Julia** (GitHub a confirmar) | [#1](https://github.com/Luscas-07/TeamTalk/issues/1), [#4](https://github.com/Luscas-07/TeamTalk/issues/4), [#9](https://github.com/Luscas-07/TeamTalk/issues/9), requisitos e UML | Levantamento, perfis, RF/RNF, regras de negócio, diagramas e documentação PDF |
| 4 | Rafael — UI/UX (GitHub a confirmar) | [#8](https://github.com/Luscas-07/TeamTalk/issues/8), protótipos e fluxos (quando entregues) | Experiência de uso em celulares, identidade visual, decisões de navegação e acessibilidade |
| 5 | Felipe `braga-felipee` | [#6](https://github.com/Luscas-07/TeamTalk/issues/6), [#12](https://github.com/Luscas-07/TeamTalk/issues/12), [#16](https://github.com/Luscas-07/TeamTalk/issues/16) e PRs | Next.js, componentes, responsividade e telas realmente implementadas |
| 6 | Arthur dos Santos `alvessarthur` | [#7](https://github.com/Luscas-07/TeamTalk/issues/7), [#10](https://github.com/Luscas-07/TeamTalk/issues/10), [#11](https://github.com/Luscas-07/TeamTalk/issues/11), [#14](https://github.com/Luscas-07/TeamTalk/issues/14), [#15](https://github.com/Luscas-07/TeamTalk/issues/15) | Banco, Auth, RLS, Realtime e testes reais de isolamento |
| 7 | Responsável técnico por QA/testes **a definir** + equipe | [#5](https://github.com/Luscas-07/TeamTalk/issues/5), [#13](https://github.com/Luscas-07/TeamTalk/issues/13), [#17](https://github.com/Luscas-07/TeamTalk/issues/17), CI e evidências | Testes, PWA, qualidade, Pull Requests e demonstração das Sprints 1 e 2 |
| 8 | Todos | Quadro Kanban e app publicado (somente quando funcional e testado) | Cada integrante relata sua contribuição, um desafio real e o que aprendeu usando IA e trabalhando em equipe |

**Equipe:** sete integrantes. Julia e Rafael já participam das responsabilidades humanas, mas seus usernames GitHub ainda não foram informados. **QA/DevOps não está formalmente atribuído**; decidir o responsável e o apresentador dessa parte antes da apresentação.

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

- [x] Quadro Kanban criado com **17 Issues iniciais** (captura enviada pelo líder).
- [ ] Confirmar inclusão de #19 (PO) no Project, totalizando **18 Issues** e atualizar visões por integrante.
- [ ] Nome do responsável e status verdadeiros em cada Issue.
- [ ] Requisitos, UML, aplicação e testes realizados.
- [ ] Pelo menos uma entrega com rastreabilidade completa de Issue a PR/merge e evidências.
- [ ] Cada apresentador ensaiou sua parte, comprovando sua contribuição individual.
- [ ] Links testados, internet disponível e alternativa de captura/registro caso algum serviço fique fora.
- [ ] Confirmar usernames GitHub de Julia e Rafael e vincular suas evidências reais.
- [ ] Definir QA/DevOps e quem apresentará os testes.

**Nota:** atualmente o material serve como preparação. Não use itens ainda pendentes para reivindicar entregas concluídas.
