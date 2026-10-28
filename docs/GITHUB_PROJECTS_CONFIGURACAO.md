# GitHub Projects — Gestão do Kanban TeamTalk (Avaliação A3)

**Tech Lead/Responsável pelo quadro:** @Luscas-07  
**Product Owner:** @BrennoOliveiraS (Breno)  
**Issue de acompanhamento:** [#3](https://github.com/Luscas-07/TeamTalk/issues/3)  
**Backlog:** [#1–#17 e #19](https://github.com/Luscas-07/TeamTalk/issues) — **18 Issues** (10 Sprint 0, 4 Sprint 1 e 4 Sprint 2). O número **#18 é um Pull Request**, não uma Issue de tarefa.

## 1. Estado do quadro — informação confirmada pela equipe

O proprietário do repositório **criou um GitHub Project** com nome `TeamTalk — A3 | Sprints 0, 1 e 2`, em modelo Board. Uma captura de tela enviada pelo líder mostrou:
- 17 Issues iniciais importadas do repositório TeamTalk;
- três status iniciais `Todo (17)`, `In Progress (0)`, `Done (0)`;
- responsáveis em cards, conforme atribuição daquela data;
- projeto com cadeado (visibilidade privada).

**Não foi fornecido o URL completo do projeto** nem comprovada a configuração dos campos adicionais ou dos acessos para colaboradores. A [Issue #19 (PO)](https://github.com/Luscas-07/TeamTalk/issues/19) foi criada depois da captura; **não foi confirmada sua inclusão no Project**, então não considere o total 18 visível até verificá-lo.

**Não criar outro Project.** Utilizar o quadro que já existe.

## 2. Conferir e completar as configurações pela interface web GitHub

1. Abra [seus Projects](https://github.com/users/Luscas-07/projects) e selecione `TeamTalk — A3 | Sprints 0, 1 e 2`.
2. Copie o URL real (formato `https://github.com/users/Luscas-07/projects/NUMERO`) e adicione à [Issue #3](https://github.com/Luscas-07/TeamTalk/issues/3).
3. Confira que o quadro está vinculado ao repositório na seção [TeamTalk → Projects](https://github.com/Luscas-07/TeamTalk/projects); caso necessário, use `Link a project`.
4. Verifique se [Issue #19 — PO](https://github.com/Luscas-07/TeamTalk/issues/19) foi inserida automaticamente. Caso não, adicione como item do projeto (não crie uma nova Issue).
5. Atualize os assignees, quando as contas Julia/Rafael forem confirmadas. No momento, #8 (Rafael), #13 e #17 (QA pendente) estão sem assignee.
6. Na área de permissões do Project, conceda acesso aos integrantes autorizados. **Permissão Write no repositório não garante Write no Project.** Confirme também o acesso de Julia e Rafael após seus convites.
7. Não altere visibilidade para pública sem considerar as necessidades acadêmicas e de privacidade.

## 3. Campos recomendados

| Campo | Tipo sugerido | Valores |
| --- | --- | --- |
| **Status** | Campo padrão / Single select | Backlog; Pronto; Em andamento; Em revisão; Em teste; Concluído |
| **Sprint** | Single select | Sprint 0; Sprint 1; Sprint 2 |
| **Prioridade** | Single select | P0; P1 |
| **Assignee** | Campo padrão | Contas GitHub confirmadas |
| **Issue** | Item real do GitHub Project | Vínculo à Issue de origem |

Se preferir conservar temporariamente as três colunas `Todo`, `In Progress` e `Done`, não há necessidade de renomeá-las antes da revisão da equipe. O importante é **status verdadeiro, sprint, prioridade e responsáveis verificáveis**. Mais tarde, adicione estados de revisão e testes para evidenciar o fluxo.

Sem datas de sprint definidas, usar `Sprint` como Single select; se a equipe aprovar datas e ciclos, avaliar o campo `Iteration`.

## 4. Visões para trabalho e apresentação

- **Kanban geral:** Board, agrupado por Status.
- **Sprint 0, 1, 2:** três visões filtradas pelo campo Sprint.
- **Por integrante:** Table com Assignee para mostrar as responsabilidades.
- **Priorização pelo PO:** Table ordenada por Prioridade e Sprint.
- **Evidências:** em cada Issue/PR, comentários e links de commits, testes, diagramas e entregas, não registros fictícios.

## 5. Checklist do conteúdo

| Sprint | Issues | Quantidade |
| --- | --- | --- |
| Sprint 0 | #1 a #9, #19 | 10 |
| Sprint 1 | #10 a #13 | 4 |
| Sprint 2 | #14 a #17 | 4 |
| **Total** | **#1–#17 e #19** | **18** |

**Atribuições conforme última divisão:**
- **Tech Lead** @Luscas-07: #2, #3, #5 (CI sob coordenação).
- **PO Breno** @BrennoOliveiraS: #19 (priorização/aceite transversal).
- **Requisitos/UML** @arthurfonsecadocarmo + Julia (GitHub pendente): #1, #4, #9.
- **UI/UX Rafael** (GitHub pendente): #8.
- **Frontend Felipe** @braga-felipee: #6, #12, #16.
- **Backend Arthur dos Santos** @alvessarthur: #7, #10, #11, #14, #15.
- **QA/DevOps a definir**: #13, #17 sem assignee.

## 6. Critérios de conclusão da Issue #3

- [x] Quadro GitHub Projects real criado pelo proprietário (evidência em captura de tela).
- [x] As 17 Issues iniciais importadas e visíveis em `Todo`.
- [ ] URL real do projeto e vínculo visível no repositório.
- [ ] Issue #19 de PO adicionada/verificada (total esperado: 18).
- [ ] Campos Sprint/Prioridade definidos e preenchidos nas 18 Issues.
- [ ] Visões por sprint/responsável prontas e acessíveis ao grupo.
- [ ] Acesso de escrita ao Project para os integrantes, incluindo Julia/Rafael quando convidados.
- [ ] Registros de progresso real, revisão e evidências acadêmicas.
- [ ] Validação final de PO e Tech Lead.

**Não concluir a Issue #3 antes de verificar as pendências.** A integração GitHub usada nesta conversa continua sem operações específicas de GitHub Projects; o líder deverá concluir os ajustes pela interface web, 100% online.

## 7. Referências

- [GitHub Projects — Guia rápido](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)
- [Adicionar itens ao projeto](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)
- [Entendendo campos](https://docs.github.com/en/issues/planning-and-tracking-with-projects/understanding-fields)
- [Vincular projeto ao repositório](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-repository)
