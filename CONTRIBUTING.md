# Como contribuir com o TeamTalk

**Projeto acadêmico A3 · UX 100% mobile · Desenvolvimento exclusivamente online**

> Este guia estabelece o fluxo técnico mínimo. O planejamento atual e os prompts das IAs constam em `AGENTS.md` e `docs/GUIA_COLABORACAO_IAS.md`, propostos no [PR #18](https://github.com/Luscas-07/TeamTalk/pull/18). Enquanto o PR #18 não for integrado, consulte os documentos na branch `docs/sprint-0-requisitos`. **Não considere documentos de uma branch ainda não integrada como código pronto em `main`.**

## 1. Ferramentas e acessos

- **GitHub Online:** repositório, Issues, branches, commits, Pull Requests, revisões e GitHub Projects.
- **Supabase Online:** autenticação, banco PostgreSQL, RLS e Realtime; somente usuários autorizados acessam o projeto.
- **Vercel Online:** builds e previews; alterações de produção são controladas pelo líder.
- **IA de cada integrante:** conectada à própria conta GitHub; conferir se possui leitura e escrita **antes de afirmar que executou operações**.
- **Proibido desenvolvimento local/on-premises:** não solicitar instalação de Node, npm, terminal local ou clonagem para a máquina do participante.
- **Não utilizar serviços adicionais, recursos pagos, segredos em commits ou chaves de serviço no frontend.**

## 2. Fluxo obrigatório: Issue → branch → PR → revisão

1. Abra a Issue atribuída e leia as dependências, a Sprint, os critérios de aceitação e o histórico de comentários.
2. Verifique se já existe PR ou branch para essa Issue. Combine antes de editar os mesmos arquivos que outro integrante.
3. Crie uma branch de trabalho a partir da **`main` atualizada**, salvo quando for necessário partir de uma PR-base explicitamente acordada pela equipe. Isso evita misturar alterações de diferentes Issues.
4. Use `feat/issue-N-descricao`, `fix/issue-N-descricao`, `docs/issue-N-descricao`, `chore/issue-N-descricao` ou `test/issue-N-descricao`.
5. Faça commits pequenos pelo editor web/integração autorizada e abra **Pull Request para `main`**, mencionando `Refs #N` no corpo. **Não utilizar `Closes #N` até termos comprovado que todos os critérios foram satisfeitos.**
6. Inclua resultado real dos testes, prints ou links de execução e riscos no PR. Se um teste não pôde ser executado, informe essa limitação.
7. Solicite revisão de pelo menos um **colega diferente do autor**. Para alterações de alto impacto (Auth, RLS, migrações, segredos e deploy), envolver o Tech Lead e o responsável da área.
8. Só faça merge com aprovação exigida pelas regras do repositório, com comentários resolvidos e depois de verificar impacto na Vercel. **A automação GitHub → Vercel pode publicar mudanças após o merge.**
9. Depois do merge e das verificações, atualize a Issue e o GitHub Projects com os resultados e evidências.

**Atenção:** o ruleset [TeamTalk - Protecao da main](https://github.com/Luscas-07/TeamTalk/rules/26204907) está ativo. Não tentar bypass, force push, apagar a branch principal ou remover revisões para desbloquear um PR.

## 3. Divisão atual e QA/DevOps compartilhado

| Função | Responsável | Critérios de participação |
| --- | --- | --- |
| Tech Lead | @Luscas-07 | Arquitetura, CI, integração, garantia de revisão cruzada |
| Product Owner | @BrennoOliveiraS | Prioridade, visão de negócio, aceite funcional |
| Frontend | @braga-felipee | Implementação e testes de componentes, telas, UX mobile e PWA |
| Backend/Banco | @alvessarthur | Supabase, Auth, PostgreSQL, Realtime e testes de RLS/isolamento |
| Requisitos/UML | @arthurfonsecadocarmo e Julia (conta a confirmar) | RF/RNF, critérios de aceite, documentação e diagramas |
| UX/UI | Rafael (conta a confirmar) | Protótipos, usabilidade, identidade visual e acessibilidade |

**Regra:** o autor testa o próprio trabalho e registra evidências; outro colega realiza revisão/testes cruzados; o PO valida o valor e aceite da entrega. Não existe uma pessoa exclusiva de QA/DevOps. Nenhum teste deve ser declarado executado quando não foi.

## 4. Checklist mínimo de Pull Request

- [ ] Issue e objetivo identificados.
- [ ] Alterações limitadas ao escopo combinado.
- [ ] Segredos/credenciais não incluídos em arquivos, comentários ou histórico.
- [ ] Responsividade e acessibilidade consideradas (se houver interface).
- [ ] Autorização/RLS verificadas (se houver acesso a dados).
- [ ] Testes realmente executados e resultados registrados; limitações explicitadas.
- [ ] Alteração validada por outro integrante e impactos de integração considerados.
- [ ] Mudanças de produção/migrações condicionadas à aprovação expressa do Tech Lead.

O PR usa o modelo em `.github/pull_request_template.md`.

## 5. Regras de revisão

- Revisar o código e os requisitos; não aprovar apenas por confiança na IA que gerou o conteúdo.
- Responder às observações do revisor e atualizar a branch conforme necessário.
- O ruleset invalida aprovações após novos commits; nova aprovação pode ser exigida.
- O autor não deve ser o único revisor. **Quando o Tech Lead for autor, outro colega revisa.**
- Evitar conflitos: tratar PR de documentação (#18) e PRs de infraestrutura/app como entregas separadas.
- Não fechar Issues ou mover para `Done` somente porque um commit foi criado.

## 6. Estratégia de CI/CD gradual

O repositório `main` ainda não contém a aplicação Next.js. **Não declarar a CI funcional sem workflow e execução comprovados.**

1. **Sprint 0:** definir fluxo de contribuição, modelo de PR e plano de validação (este documento e `docs/PLANO_CI_CD.md`).
2. **Após a Issue #6:** adicionar workflow GitHub Actions na branch apropriada, com instalação via lockfile e verificações para a versão Next.js/TypeScript realmente escolhida. Vincular ao PR da aplicação.
3. **Depois de runs reais:** exigir checks no ruleset **apenas para nomes de jobs existentes e estáveis**; do contrário, merges podem ficar bloqueados indefinidamente.
4. **Vercel:** testar Preview em PR com ambiente de preview validado; antes de integrar à `main`, confirmar que deploy de produção não será feito sem aprovação.
5. **Supabase:** mudanças de schema por migrações versionadas revisadas, com RLS, plano de rollback e testes de isolamento. Não aplicar migrações de produção automaticamente.

## 7. O que registrar ao final de cada sessão

```text
TeamTalk | Issue: #N | Papel: ...
Branch: ...
O que foi realmente criado/alterado: ...
Commit(s) e PR: ...
Testes executados e resultados: ...
Revisão solicitada a: ...
Dependências e bloqueios: ...
Impactos em GitHub/Supabase/Vercel: ...
Próximo passo: ...
```

**Links:** [Issues](https://github.com/Luscas-07/TeamTalk/issues) · [PRs](https://github.com/Luscas-07/TeamTalk/pulls) · [Issue #5 — CI/PR](https://github.com/Luscas-07/TeamTalk/issues/5).
