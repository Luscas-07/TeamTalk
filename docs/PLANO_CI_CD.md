# TeamTalk — Plano de CI/CD e qualidade (Sprint 0)

**Issue:** [#5 — Branches, PRs e CI](https://github.com/Luscas-07/TeamTalk/issues/5)  
**Responsável pela coordenação:** @Luscas-07 — Tech Lead  
**Modelo de QA:** responsabilidade compartilhada por funcionalidade  
**Estado:** **planejado e documentado; workflow ainda NÃO criado nem executado**. Este documento não deve ser usado como evidência de build/teste concluído.

## 1. Critérios acadêmicos e objetivo

O projeto A3 necessita de evidências de repositório, gestão no GitHub Projects, documentação versionada, CI/CD e funcionamento das Sprints 1 e 2. Para evitar trabalho não verificável, será necessário registrar links de Pull Requests, execuções reais de GitHub Actions e Previews Vercel quando existirem.

### Restrições acordadas

- Desenvolvimento, commits, configurações e testes via **GitHub Online, Supabase Online e Vercel Online**; sem instalações ou processos locais.
- `main` protegida pelo [ruleset TeamTalk](https://github.com/Luscas-07/TeamTalk/rules/26204907): PR, 1 aprovação, squash, sem deleção/force push.
- **Não fazer alterações de produção, aplicar migrações no Supabase, alterar segredos nem criar recursos pagos sem aprovação expressa.**
- CI não deve depender de valores secretos de produção; testar tarefas que não precisam de chaves reais antes de ativar integrações sensíveis.

## 2. Pipeline proposto quando o app Next.js existir

**Gatilho:** abrir ou atualizar Pull Request para `main`. A lista concreta de `paths` e de jobs será definida conforme os arquivos da aplicação.

| Etapa | Verificação | Condição para ativação | Resultado/artefato |
| --- | --- | --- | --- |
| Preparação | Checkout do código e instalação de dependências com lockfile | `package.json` e lockfile versionados (#6) | Instalação reproduzível |
| Qualidade estática | Lint conforme script real do projeto | Script de lint existente no `package.json` | Log do GitHub Actions |
| TypeScript | `tsc --noEmit` via script de typecheck definido | `tsconfig.json` e pacote TypeScript disponíveis | Falhas de tipo detectáveis |
| Testes automatizados | Testes unitários/integrados sem serviços de produção | Runner escolhido, testes criados e mocks / ambiente seguro | Relatório e resultado de testes |
| Build | Build da versão real do Next.js | Next.js configurado + ambiente Preview adequado | Resultado de compilação |
| Segurança | Verificação de segredo exposto e revisão das alterações sensíveis | Política de segredos definida | Bloqueio/registro antes do merge |
| Preview | Preview Vercel quando integrado e seguro | Configuração Vercel Preview revisada, sem migrações destrutivas | URL verificável para revisão |

**Não presumir comandos.** Exemplo de scripts que o Frontend poderá criar no `package.json` após validação da versão do Next.js:

```json
{
  "scripts": {
    "lint": "eslint .",
    "typecheck": "tsc --noEmit",
    "build": "next build"
  }
}
```

Esses comandos são **propostas**, não tarefas já implementadas; o comando real de testes depende da ferramenta selecionada. Se a aplicação tiver diretório específico (ex.: `web/`), o workflow precisará considerar `working-directory` e os caminhos do lockfile.

## 3. Ativação controlada do GitHub Actions

1. Aguardar o Frontend entregar a base da [Issue #6](https://github.com/Luscas-07/TeamTalk/issues/6) com scripts e lockfile, em PR próprio.
2. Criar `.github/workflows/ci.yml` **na branch do PR de CI**, com triggers limitados e permissões mínimas: `contents: read`.
3. Evitar `pull_request_target` para execução de código de PR não confiável.
4. Não executar migrações ou operações administrativas do Supabase no workflow de PR. O uso de `service_role` em código frontend ou logs é proibido.
5. Executar workflow na nuvem por pelo menos um PR e comprovar sucesso/falha real em GitHub Actions.
6. Adicionar no ruleset **Require status checks to pass** somente após observar o nome exato de um check estável. Nunca exigir check inexistente que bloquearia todos os PRs.
7. Documentar como foram feitas as revisões, quais riscos foram encontrados e como as falhas foram corrigidas.

## 4. Supabase: esquema, Auth e RLS

- O Backend cria e submete migrações em PRs, mas **não as aplica automaticamente em produção**.
- Revisar tabelas expostas com RLS e políticas por organização (tenant), usuário e participante de conversa.
- Registrar testes positivos/negativos (organização A não lê B; terceiro usuário não acessa mensagens).
- Nunca depender de metadados de usuário editáveis como fonte de autorização.
- Documentar risco, rollback e ambiente-alvo antes de qualquer operação efetiva.
- Não incluir chaves privadas ou dados reais de usuários nos testes.

## 5. Vercel: Preview versus Production

- A integração GitHub → Vercel pode criar Previews dos PRs e publicar automaticamente a branch `main` quando integrada. Verificar o comportamento real nas configurações do projeto.
- **Não fazer merge apenas porque o PR recebeu aprovação.** Conferir também o impacto no ambiente de produção.
- Evitar chaves de banco com permissões elevadas no frontend; usar apenas variáveis públicas permitidas do cliente e server-side secrets quando houver validação adequada.
- Registrar URL do Preview e eventual log de build, sem afirmar que Vercel Preview equivale a validação de segurança ou aprovação do PO.

## 6. Definição de pronto para testes compartilhados

A tarefa de QA não desaparece do backlog: [#13](https://github.com/Luscas-07/TeamTalk/issues/13) (Sprint 1) e [#17](https://github.com/Luscas-07/TeamTalk/issues/17) (Sprint 2) são responsáveis pela consolidação das evidências e estão atribuídas a Felipe + Arthur dos Santos.

A cada mudança:
- **Autor**: testa, documenta entradas, resultados e limitações.
- **Revisor diferente do autor**: valida alterações e realiza teste cruzado quando aplicável.
- **Requisitos/UML**: Arthur Fonseca + Julia verificam rastreabilidade aos RFs/RNFs e casos de uso.
- **UX/UI**: Rafael valida fluxos e usabilidade em dispositivos mobile.
- **Tech Lead**: verifica integração, segurança da `main`, CI e impactos de deploy.
- **PO Breno**: avalia se o comportamento demonstra os critérios de aceitação.

## 7. Checklist de implantação da CI

- [x] Ruleset de `main` ativo e confirmado por API.
- [x] Fluxo de contribuição documentado (`CONTRIBUTING.md`).
- [x] Modelo de PR documentado (`.github/pull_request_template.md`).
- [x] Plano de CI/CD escrito (este documento).
- [ ] Aplicação Next.js/TypeScript e lockfile versionados na branch aprovada (#6).
- [ ] Workflow GitHub Actions criado e revisado.
- [ ] Execução do GitHub Actions com resultado real registrada.
- [ ] Preview Vercel verificado sem alteração de produção.
- [ ] Status check obrigatório configurado após confirmação do nome do job.
- [ ] Evidências da avaliação A3 anexadas à Issue #5 e ao GitHub Projects.

**Status da Issue #5:** em desenvolvimento/revisão até workflow validado. Um documento de planejamento não equivale à CI pronta.
