# AGENTS.md — Instruções para assistentes de IA do TeamTalk

> **Escopo:** todo o repositório TeamTalk. Este arquivo é a orientação comum para IAs que auxiliem qualquer integrante. Não substitui a Issue atribuída nem as decisões do responsável humano.
>
> **Antes de executar:** leia este arquivo, [Guia de colaboração das IAs](docs/GUIA_COLABORACAO_IAS.md), [Equipe e responsabilidades](docs/EQUIPE_E_RESPONSABILIDADES.md) e [Planejamento das sprints](docs/PLANEJAMENTO_SPRINTS.md), além da Issue específica. Se algum documento ainda não estiver na `main`, consulte a branch documental `docs/sprint-0-requisitos`.

## 1. Contexto do produto

- **Projeto:** TeamTalk, avaliação acadêmica A3 de Engenharia de Software.
- **Produto:** aplicativo web de comunicação corporativa semelhante ao WhatsApp, com **experiência 100% orientada a smartphones**; PWA.
- **MVP proposto:** login individual, colaboradores/departamentos, lista de colegas e conversas individuais com mensagens de texto em tempo real e histórico persistido.
- **Fora do compromisso das Sprints 1 e 2:** áudio/vídeo, chamadas, anexos, grupos complexos, notificações push e canais completos. Alterações de escopo exigem validação do líder e do responsável pelos requisitos.
- **Stack aprovada para o projeto:** GitHub (código, Issues, Projects e Actions), Supabase (PostgreSQL, Auth, Realtime, RLS), Vercel (frontend) e assistentes de IA. **Next.js e TypeScript** são decisões técnicas previstas; confirme a situação real do código antes de afirmar que algo já está implementado.
- **Requisito acadêmico:** demonstrar infraestrutura/CI-CD, requisitos e UML versionados, Kanban efetivo e entregas funcionais das Sprints 1 e 2.

## 2. Fontes de verdade e ordem de trabalho

1. Instruções atuais do responsável humano da tarefa e decisões aprovadas do projeto.
2. Issue atribuída, com critérios de aceitação e dependências.
3. Arquivos atuais do repositório (incluindo estes guias), Pull Requests e documentação revisada.
4. Quando houver conflito, **não invente decisões**: registre a divergência na Issue e peça validação.

**Não marque uma atividade como concluída sem evidência real.** Diferencie sempre plano, código criado, teste executado, Preview disponível e deploy de produção.

## 3. Regras obrigatórias de execução

1. **100% online:** usar somente serviços cloud autorizados: GitHub, Supabase e Vercel. Não solicitar instalação de Node, Git, VS Code, terminal local, banco local ou qualquer ação on-premises.
2. **A IA age com a conta do seu integrante:** permissões do repositório NÃO significam que a IA já está conectada. Verifique a conexão GitHub da própria IA e os acessos específicos antes de operar. O mesmo vale, separadamente, para Supabase e Vercel.
3. **Nunca desenvolver diretamente na `main`:** para cada Issue, criar uma branch própria (ex.: `docs/issue-4-casos-de-uso`, `feat/issue-12-login-ui`, `test/issue-17-e2e`). Preferir commits pequenos e abrir Pull Request para revisão. Não fazer merge automático nem promover para produção.
4. **Evitar conflitos entre IAs:** verificar PRs/branches ativos e coordenação dos arquivos antes de editar; não sobrescrever trabalhos alheios. Cada Issue tem responsável principal, mas pode haver colaboração.
5. **Segurança:** não publicar tokens, senhas, chaves secretas, dados pessoais reais ou credenciais em commits, screenshots, Issues ou prompts. Usar variáveis de ambiente adequadas; nunca expor `service_role`/secret keys no frontend.
6. **Banco Supabase:** mudanças de schema devem ser versionadas e revisadas antes da aplicação. Habilitar RLS nas tabelas expostas e provar isolamento entre empresas/organizações e entre participantes de conversas. Não presumir que `TO authenticated` resolve autorização por si só.
7. **Operações sensíveis:** não executar migrações em produção, apagar dados, alterar políticas críticas, configurar recursos pagos, fazer deploy de produção, alterar segredos ou gerenciar acessos sem autorização explícita do líder técnico.
8. **Testes e comunicação:** registrar na Issue o que foi implementado, o que foi efetivamente testado, os resultados, riscos, branch e link do PR. Solicitar revisão humana.
9. **GitHub Projects:** usar o quadro quando disponível. Não afirmar que a Issue foi adicionada ao quadro sem confirmar que essa operação realmente ocorreu. Se a integração não puder editar Projects, registrar bloqueio e pedir intervenção humana.
10. **Não representar implementação fictícia:** testes, commits, CI e deploys devem ser verificáveis por links/saídas reais. Não simular que uma IA executou ações que sua integração não permite.

## 4. Responsáveis e distribuição inicial

| Função | GitHub | Issues principais |
| --- | --- | --- |
| Líder técnico e UI/UX | [@Luscas-07](https://github.com/Luscas-07) | #2, #3, #8 |
| Requisitos e UML | [@arthurfonsecadocarmo](https://github.com/arthurfonsecadocarmo) | #1, #4 |
| Frontend | [@braga-felipee](https://github.com/braga-felipee) | #6, #12, #16 |
| Backend/BaaS | [@alvessarthur](https://github.com/alvessarthur) | #7, #10, #11, #14, #15 |
| QA e DevOps | [@BrennoOliveiraS](https://github.com/BrennoOliveiraS) | #5, #9, #13, #17 |

**Equipe:** há cinco contas identificadas até agora; a sexta pessoa aguarda convite. **Product Owner (PO):** papel ainda pendente de atribuição formal. Não atribuir tarefas à pessoa futura nem presumir quem será o PO.

## 5. Sprints e definição de pronto

- **Sprint 0 — preparação:** requisitos, UML, UX, arquitetura, GitHub Projects, CI e documentação.
- **Sprint 1 — acesso:** autenticação, perfis/departamentos, navegação mobile e PWA básico.
- **Sprint 2 — comunicação:** mensagens 1:1, persistência, Realtime, isolamento e teste ponta a ponta.

Uma Issue fica **Concluída** somente quando satisfaz os critérios de aceite, possui artefatos verificáveis, testes aplicáveis registrados e revisão humana. O **quadro Kanban** deve refletir o estado real.

## 6. Comunicação padronizada ao fim da execução

Informe sempre:
- Issue e responsável;
- resumo do que foi **realmente feito**;
- arquivos alterados, branch, commit(s) e PR (links);
- testes executados e resultados (ou por que não puderam ser executados);
- pendências, bloqueios e ação esperada do líder.

**Guia detalhado e prompts por papel:** [docs/GUIA_COLABORACAO_IAS.md](docs/GUIA_COLABORACAO_IAS.md).
