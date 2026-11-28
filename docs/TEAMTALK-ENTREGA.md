# TeamTalk — Entrega técnica do backend e autenticação

**Data:** 28/11/2026 | **Responsável:** Backend/Banco | **Revisão:** Tech Lead (Lucas)  
**Repositório:** [Luscas-07/TeamTalk](https://github.com/Luscas-07/TeamTalk)  
**Status:** entrega parcial para revisão; publicação em produção ainda não aprovada.

## 1. Escopo e implementação

- Issue #7: arquitetura definida e encerrada, conforme histórico da equipe.
- [Issue #10](https://github.com/Luscas-07/TeamTalk/issues/10): autenticação em andamento. Integração Supabase Auth/Next.js realizada com Felipe na branch `feat/issue-12-mobile-interface` (commit observado `395b0ca`). Confirmar versão atual antes da integração.
- Migração `supabase/migrations/20261121000000_initial_backend.sql`: aplicação em produção reportada como bem-sucedida pelo terminal (`Finished supabase db push`). O arquivo foi inspecionado para esta documentação.
- Frontend: cliente Supabase em `src/lib/supabase.ts`, login por e-mail/senha, estado de sessão e logout. A proteção observada em `page.tsx` é client-side; não equivale a autorização no servidor. Chat ainda não validado com dados reais.
- Cadastro público desativado no Supabase; criação administrativa de contas e login testados. A configuração do painel não é automaticamente versionada pela migração SQL.

## 2. Modelo de dados e segurança

| Tabela | Finalidade |
|---|---|
| organizations | Organizações |
| departments | Departamentos vinculados à organização |
| profiles | Perfis vinculados a `auth.users`; organização obrigatória, departamento opcional |
| conversations | Conversas vinculadas à organização e ao criador |
| conversation_participants | Participantes de cada conversa |
| messages | Mensagens de participantes, texto não vazio até 4.000 caracteres |

A migração define chaves estrangeiras compostas para consistência entre organizações, índices de consulta, RLS nas seis tabelas, sete políticas (seis de leitura e uma de inserção de mensagens), revogação de privilégios de `anon` e concessões restritas a `authenticated`. As funções privadas verificam organização e participação. A RPC `create_direct_conversation(uuid)` exige sessão, perfis provisionados e mesma organização; cria uma conversa com dois participantes. A inclusão de `messages` na publicação `supabase_realtime` é condicional à existência da publicação. Não há comprovação de funcionamento do Realtime no frontend.

## 3. Evidências de testes manuais

| Teste | Resultado observado |
|---|---|
| Login válido e inválido | Acesso permitido / credenciais incorretas rejeitadas |
| Recarregar página autenticada | Sessão mantida |
| Logout | Retorno ao login |
| Janela anônima | Interface interna não exibida |
| Criação administrativa após desativar cadastro público | Nova conta criada e login realizado |
| POST `/auth/v1/signup` com chave pública | HTTP 422, `signup_disabled` |
| GET `/rest/v1/profiles` sem sessão | HTTP 401 |
| GET das outras cinco tabelas sem sessão | HTTP 401 em todas |
| Inspeção de organizations, departments, profiles | 0 registros nas três tabelas |

Os testes foram manuais, não uma suíte automatizada. HTTP 401 demonstra rejeição das solicitações testadas, mas não comprova isolamento RLS entre usuários autenticados. Houve erro 404 por URL do Codespaces incorreta, corrigido antes do teste válido. Houve também carregamento prolongado no frontend, resolvido ao reabrir a sessão de navegação; causa não diagnosticada.

## 4. Enviar código ao GitHub (PowerShell)

A pasta local observada contém `supabase/` e `main.py`, não necessariamente um clone completo do frontend. Para evitar sobrescrever trabalho de colegas, usar um clone separado e uma branch baseada na main atual. Se a migração já existir no repositório, comparar conteúdo e não sobrescrever sem revisão.

```powershell
cd "$HOME"
git clone https://github.com/Luscas-07/TeamTalk.git TeamTalk-entrega
cd TeamTalk-entrega
git switch -c feat/issue-10-backend-auth
```

Copiar pelo Explorer apenas a migração para `supabase/migrations/` dentro do clone e este documento para `docs/TEAMTALK-ENTREGA.md`. Revisar `supabase/config.toml` e outros arquivos de configuração antes de incluir, caso sejam necessários. Não incluir `main.py` sem confirmar sua finalidade, nem copiar toda a pasta local indiscriminadamente. O código de autenticação de Felipe deve ser integrado por PR próprio ou conforme decisão do Tech Lead; não duplicar commits.

```powershell
git status --short
git add supabase/migrations/20261121000000_initial_backend.sql docs/TEAMTALK-ENTREGA.md
git diff --cached --stat
git diff --cached
git commit -m "feat: versiona backend inicial e documenta autenticacao"
git push -u origin feat/issue-10-backend-auth
```

Antes do commit, conferir ausência de credenciais, arquivos `.env*` reais, dumps, tokens e `supabase/.temp/`. Manter apenas exemplos sem valores reais. Revisar também histórico do Git; `.gitignore` não remove segredos já versionados. Se houver exposição, revogar/rotacionar a credencial e tratar o histórico com o Tech Lead.

Abrir Pull Request no GitHub com base `main`, solicitar Lucas como reviewer e referenciar `Refs #10` e `Refs #11` (não usar `Closes` enquanto houver pendências). Não fazer merge direto nem force push.

## 5. Checklist de revisão do código

- [ ] Conferir PR da migração e PR do frontend, dependências e conflitos.
- [ ] Revisar `Login.tsx`, `page.tsx`, `src/lib/supabase.ts`, tratamento de erros e estado de carregamento.
- [ ] Implementar/verificar autorização no servidor para rotas e operações sensíveis; validar sessão, logout e expiração/revogação.
- [ ] Revisar grants, RLS, RPC `SECURITY DEFINER`, proprietário, `search_path`, autorização e exposição da função pública; testar duplicação de conversas e integridade dos dados.
- [ ] Definir provisionamento de perfis e organizações (Issue #11); testar com duas organizações e participantes/não participantes em ambiente de teste.
- [ ] Testar inserção de mensagem autorizada e rejeição de remetente forjado; testar Realtime e isolamento.
- [ ] Auditar credenciais, dependências e lockfile. Foram reportadas duas vulnerabilidades restantes após npm audit fix; verificar estado atual e compatibilidade das correções. Não executar atualização major forçada sem revisão.
- [ ] Adicionar testes automatizados de autenticação e autorização; executar build, lint e testes disponíveis.
- [ ] Confirmar migrações aplicadas e consistentes em cada ambiente. Não executar novamente o SQL inicial diretamente em produção.

## 6. Preparação do deploy na Vercel

Responsável sugerido: Lucas, com apoio de Felipe (frontend) e Backend/Banco. O último check observado da Vercel falhou; a causa não foi confirmada, pois os logs não estavam disponíveis. Variáveis ausentes são hipótese, não diagnóstico.

1. Abrir o projeto TeamTalk na Vercel e acessar Deployments > deployment com falha > Build Logs. Registrar a primeira mensagem de erro relevante sem expor segredos.
2. Confirmar repositório conectado, branch de produção `main`, diretório raiz que contém `package.json`, preset Next.js e versão Node suportada pelo projeto/Vercel. Não assumir que a versão local do Node deve ser usada em produção.
3. Em Settings > Environment Variables, configurar as variáveis abaixo nos ambientes corretos (Preview e Production), preferindo Supabase separado para Preview. Usar os valores oficiais do projeto correspondente.

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<publishable-key>
```

Não usar `service_role` ou `sb_secret_` em variáveis `NEXT_PUBLIC_`. Não versionar `.env.local`. Se houver convite por e-mail ou callback, configurar Site URL e Redirect URLs autorizadas no Supabase para os domínios reais, sem liberar redirecionamentos indiscriminados.

4. Em clone limpo da branch integrada, com variáveis locais configuradas, executar `npm ci`, `npm run build`, `npm audit` e os scripts de lint/testes definidos no `package.json`. Corrigir erros antes de publicar.
5. Confirmar o histórico de migrações no ambiente alvo (`supabase migration list --linked`, após vincular ao projeto correto). Aplicar apenas migrações pendentes, com aprovação e plano de recuperação. A migração inicial já foi reportada como aplicada no ambiente atual.
6. Gerar Preview Deployment do PR, verificar login válido/inválido, logout, refresh, acesso sem sessão, expiração, bloqueio de cadastro e autorização de dados. Não utilizar dados reais em testes sem autorização.
7. Após aprovação do PR e checks verdes, integrar à main e acompanhar o Production Deployment. Validar domínio, logs e fluxos críticos. Se falhar, interromper a publicação e avaliar rollback da aplicação; rollback do frontend não reverte migrações do banco.

## 7. Pendências e critérios de aceite

- Issue #10 permanece In Progress: proteção de rotas/servidor, expiração de sessão, auditoria e testes automatizados ainda pendentes.
- Issue #11: organizações, departamentos e perfis ainda vazios; definir dados e provisionamento com equipe.
- Conversas, mensagens e Realtime: estrutura SQL disponível, integração e testes funcionais ainda não comprovados.
- Vercel: diagnóstico do build e deploy bem-sucedido pendentes. Não declarar produção pronta antes dos checks e da revisão.
- Limpar contas de teste apenas com autorização e após encerrar sessões; preservar evidências sem dados pessoais.

## 8. Texto sugerido para o Pull Request

**Título:** Backend inicial, autenticação e documentação de deploy

**Descrição:** Versiona a migração inicial do Supabase e documenta a integração de autenticação, os testes manuais e as etapas de revisão/deploy. Cadastro público rejeitado com HTTP 422 (`signup_disabled`); consultas anônimas às seis tabelas rejeitadas com HTTP 401. Solicito revisão da segurança, integração com a branch de frontend e diagnóstico do build na Vercel. Ainda há pendências de sessão, provisionamento, RLS autenticada e testes automatizados. Refs #10, #11.

## Referências operacionais

- [Supabase — RLS](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase — migrações](https://supabase.com/docs/guides/deployment/database-migrations)
- [Vercel — variáveis de ambiente](https://vercel.com/docs/environment-variables)
- [GitHub — Pull Requests](https://docs.github.com/en/pull-requests)

**Limites desta entrega:** migração SQL inspecionada diretamente; demais evidências baseadas nos testes e telas compartilhados durante o trabalho. Não houve nova inspeção integral do repositório remoto, execução de build, auditoria completa, acesso aos logs da Vercel ou publicação por este documento. Os nomes da branch e do arquivo de documentação são sugestões.
