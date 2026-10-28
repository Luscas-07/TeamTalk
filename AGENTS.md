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

## 4. Responsáveis — divisão oficial de 28/10/2026

| Função | Conta/Integrante | Issues principais |
| --- | --- | --- |
| Tech Lead / Líder técnico | [@Luscas-07](https://github.com/Luscas-07) | #2, #3, #5 (coordenação de CI) |
| Product Owner (PO) | Breno [@BrennoOliveiraS](https://github.com/BrennoOliveiraS) | #19; prioridades, escopo, aceite nas demais |
| Frontend | Felipe [@braga-felipee](https://github.com/braga-felipee) | #6, #12, #16 |
| Backend / Banco | Arthur dos Santos [@alvessarthur](https://github.com/alvessarthur) | #7, #10, #11, #14, #15 |
| Requisitos e UML | Arthur Fonseca [@arthurfonsecadocarmo](https://github.com/arthurfonsecadocarmo) **e Julia (username pendente)** | #1, #4, #9 |
| UX/UI | Rafael (**username pendente**) | #8 |
| QA/DevOps compartilhado | Equipe inteira, por funcionalidade | #13 e #17: @braga-felipee + @alvessarthur; #5: coordenação do Tech Lead |

**Equipe:** sete pessoas. Não atribuir Julia ou Rafael no GitHub por nome presumido. A equipe aprovou QA/DevOps compartilhado por funcionalidade: PO não substitui testes técnicos, e todos colaboram com responsabilidades rastreáveis. O GitHub Projects foi criado pelo líder com 17 Issues; a inclusão posterior da Issue #19 precisa ser verificada.

## 4.1 Política aprovada de QA/DevOps distribuídos

**Não há função exclusiva de QA/DevOps**. Sempre que uma funcionalidade for adicionada:
1. O **autor da funcionalidade** implementa e executa os testes adequados (funcionais, unitários/integrados, segurança ou acessibilidade conforme o caso), registrando o que foi realmente executado na Issue/PR.
2. **Outro integrante** realiza revisão e, quando possível, teste cruzado; o autor não aprova sozinho o próprio PR.
3. **Frontend Felipe** valida UI, navegação mobile e PWA. **Backend Arthur dos Santos** valida Auth, banco, RLS e Realtime. As Issues #13 e #17 foram atribuídas a ambos para execução técnica compartilhada.
4. **Arthur Fonseca e Julia** revisam regras/casos de uso, **Rafael** revisa usabilidade/acessibilidade, **Tech Lead** coordena integração/CI e **Breno PO** valida os critérios de aceite.
5. O responsável pela alteração de workflows ou configuração cloud deve registrar testes, exigir revisão e obter **autorização específica antes de qualquer operação em produção**.
6. QA/DevOps não é uma etapa dispensável: testes e evidências são critérios obrigatórios de conclusão da funcionalidade.

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
