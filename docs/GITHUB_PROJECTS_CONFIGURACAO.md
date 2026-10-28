# GitHub Projects — Configuração do quadro TeamTalk (Avaliação A3)

**Responsável:** @Luscas-07 — Tech Lead / Organização  
**Issue de acompanhamento:** [#3 — GitHub Projects e Kanban](https://github.com/Luscas-07/TeamTalk/issues/3)  
**Backlog a importar:** [#1–#17](https://github.com/Luscas-07/TeamTalk/issues) — 9 tarefas da Sprint 0, 4 da Sprint 1 e 4 da Sprint 2.  
**Situação:** procedimento documentado; **quadro ainda não criado/verificado por esta integração**. O conector atual gerencia repositório e Issues, mas não possui ações específicas de criação/gestão do Projects.

## 1. Criar o projeto na interface online GitHub

1. Entre em [Projects do perfil Luscas-07](https://github.com/users/Luscas-07/projects) com a conta proprietária.
2. Escolha **New project** e o modelo **Board** (ou crie em branco e mude o layout para Board).
3. Título sugerido: **TeamTalk — A3 | Sprints 0, 1 e 2**.
4. Defina o repositório padrão como `Luscas-07/TeamTalk`, quando a opção estiver disponível.
5. Em [TeamTalk → Projects](https://github.com/Luscas-07/TeamTalk/projects), use **Link a project** para vinculá-lo ao repositório, se o link ainda não aparecer.
6. Confirme que os colaboradores têm visibilidade do projeto e permissão necessária para atualizar tarefas; **acesso de escrita ao repositório não garante automaticamente o mesmo no Projects**.
7. Escolha a visibilidade do projeto conforme as exigências da avaliação e a necessidade de privacidade. Não publique credenciais ou dados reais.

**Não crie projetos duplicados**: primeiro confira se um quadro TeamTalk já existe.

## 2. Campos recomendados

| Campo | Tipo | Valores iniciais / objetivo |
| --- | --- | --- |
| **Status** | Single select (ou campo padrão Status) | Backlog; Pronto; Em andamento; Em revisão; Em teste; Concluído |
| **Sprint** | Single select | Sprint 0; Sprint 1; Sprint 2 |
| **Prioridade** | Single select | P0 (essencial/bloqueador); P1 (importante, pode ser sequenciado) |
| **Assignee** | Campo padrão do GitHub | Conta real do responsável principal |
| **Issue** | Item do projeto | Link para cada uma das 17 Issues do repositório |

Use **Sprint como Single select** até a equipe confirmar as datas das sprints. Um campo **Iteration** pode substituir o campo Sprint se forem aprovados ciclos com datas específicas.

## 3. Configurar visões

- **Kanban geral:** Board, agrupado pelo campo **Status**, com seis colunas.
- **Sprint 0:** visão de Table ou Board filtrada por **Sprint 0**.
- **Sprint 1:** visão filtrada por **Sprint 1**.
- **Sprint 2:** visão filtrada por **Sprint 2**.
- **Por responsável:** Table com campo Assignee; útil para comprovar a distribuição real da equipe.
- **Backlog priorizado:** Table, agrupada ou ordenada pelo campo Prioridade.

Salve cada visão depois de ajustar filtros e layout; alterações não salvas podem não ficar visíveis aos colegas.

## 4. Adicionar as 17 Issues existentes

**Opção rápida — pelo repositório:**

1. Acesse [TeamTalk → Issues](https://github.com/Luscas-07/TeamTalk/issues).
2. Selecione as **Issues #1 a #17** (podem ser marcadas em lote).
3. No menu de ações da seleção, clique **Projects** e escolha **TeamTalk — A3 | Sprints 0, 1 e 2**.
4. Abra o projeto e confira que foram adicionadas **17 Issues** (não apenas 17 drafts).
5. Preencha os campos Sprint, Prioridade e Status conforme [PLANEJAMENTO_SPRINTS.md](PLANEJAMENTO_SPRINTS.md), começando todas as tarefas em **Backlog**.
6. Revise os assignees; eles já constam das Issues no GitHub.

**Alternativa:** no Project em Table, utilize **Add item from repository**, selecione TeamTalk e inclua as Issues #1–#17.

**Importante:** o fluxo **Auto-add** apenas automatiza entradas futuras; não garante importação retroativa das 17 Issues existentes. Se habilitado, confirme filtros e limites do plano, sem contratar serviços extras.

## 5. Matriz de conferência do quadro

| Sprint | Issues esperadas | Quantidade |
| --- | --- | --- |
| Sprint 0 | #1, #2, #3, #4, #5, #6, #7, #8, #9 | 9 |
| Sprint 1 | #10, #11, #12, #13 | 4 |
| Sprint 2 | #14, #15, #16, #17 | 4 |
| **Total** | **#1–#17** | **17** |

Responsáveis já definidos:
- @Luscas-07 — #2, #3, #8
- @arthurfonsecadocarmo — #1, #4
- @braga-felipee — #6, #12, #16
- @alvessarthur — #7, #10, #11, #14, #15
- @BrennoOliveiraS — #5, #9, #13, #17

A sexta pessoa permanece sem tarefas até receber o convite e uma definição de responsabilidade; o PO ainda depende de decisão da equipe.

## 6. Evidências e critério para concluir a Issue #3

- [ ] Projeto existente e vinculado ao repositório TeamTalk; link real inserido na Issue #3.
- [ ] 17 Issues identificadas e adicionadas (9 / 4 / 4).
- [ ] Status, Sprint, Prioridade e Assignee visíveis e corretos.
- [ ] Visão Kanban com as seis colunas configurada.
- [ ] Responsáveis conseguem atualizar suas tarefas.
- [ ] Captura de tela / URL do Kanban anexadas à Issue como evidência para o professor.
- [ ] Pelo menos uma movimentação real de tarefa de Backlog → Em andamento demonstrada (somente quando iniciada).
- [ ] Revisão do Tech Lead registrada.

**Não marque a Issue #3 como concluída** até esses critérios estarem comprovados.

## 7. Links de referência do GitHub

- [Guia de início rápido do Projects](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)
- [Adicionar Issues ao projeto](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)
- [Entendendo os campos](https://docs.github.com/en/issues/planning-and-tracking-with-projects/understanding-fields)
- [Vincular projeto ao repositório](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-repository)
- [Organizar visualização Kanban](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-the-board-layout)

> Execução em nuvem exclusivamente. Nenhuma ação local, migração no Supabase, deploy Vercel ou recurso pago é necessária para configurar este quadro.
