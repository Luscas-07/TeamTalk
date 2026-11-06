# Requisitos do TeamTalk

| Campo | Valor |
| --- | --- |
| Versão | 0.4 (rascunho) |
| Data | 06/11/2026 |
| Responsáveis | Arthur Fonseca e Julia (requisitos e regras de negócio), conforme Issue #1 |
| PO (priorização e aceite) | Breno |
| Validação de escopo | Tech Lead (Lucas) e responsáveis pelos requisitos, conforme o AGENTS.md |
| Status | Aguardando validação. Itens marcados com [PD-xx] dependem de decisão registrada na seção 8. |
| Fontes consultadas | Issues #1, #4 e #9; README; AGENTS.md; GUIA_COLABORACAO_IAS.md; EQUIPE_E_RESPONSABILIDADES.md; PLANEJAMENTO_SPRINTS.md (lidos na branch `docs/sprint-0-requisitos`). |

## 1. Introdução

### 1.1 Propósito

Documentar os requisitos funcionais, não funcionais e as regras de negócio do TeamTalk, para orientar a arquitetura e o desenvolvimento.

### 1.2 Escopo

O TeamTalk é uma aplicação de comunicação corporativa 100% orientada a smartphones, hospedada na Vercel e instalável como PWA (registrar como ADR-001). O aplicativo de referência, Microsoft Teams ou WhatsApp, ainda precisa ser confirmado [PD-12].

O MVP, segundo o AGENTS.md, cobre: login individual, colaboradores e departamentos, lista de colegas e conversas individuais com mensagens de texto em tempo real e histórico persistido. Canais completos, grupos complexos, anexos, áudio e vídeo, chamadas e notificações push ficam fora das Sprints 1 e 2.

### 1.3 Convenções

- IDs estáveis: RF = requisito funcional, RNF = requisito não funcional, RN = regra de negócio, PD = pendência. Um ID apagado nunca é reutilizado.
- Prioridade (MoSCoW): Must (essencial ao MVP), Should (importante, entra se houver tempo), Could (desejável, fora do MVP atual), Won't (fora da v1).
- Valores entre colchetes, como [a validar], são propostas que o grupo precisa confirmar.
- Uma funcionalidade só é considerada concluída com critérios de aceite atendidos, testes aplicáveis registrados e revisão humana, conforme o AGENTS.md.
- Os IDs deste documento **não coincidem** com os IDs "iniciais" da Issue #1. A correspondência está na seção 11.

### 1.4 Glossário

| Termo | Definição |
| --- | --- |
| Empresa | Organização que usa o TeamTalk. |
| Departamento | Unidade organizacional da empresa (ex.: TI, RH). É um cadastro, não uma conversa. |
| Colaborador | Usuário comum com conta ativa. |
| Administrador | Usuário com permissões de gestão da empresa. |
| Conversa privada (1:1) | Troca de mensagens entre dois colaboradores. |
| Grupo | Conversa entre vários colaboradores criada por um colaborador, que se torna seu dono. Não é um departamento. Fora das Sprints 1 e 2. |
| Canal | Espaço oficial de comunicação por departamento ou assunto, criado pelo Administrador, público ou privado. Fora das Sprints 1 e 2. |
| Conta ativa / inativa | Conta inativa não consegue autenticar, mas mantém seu histórico (RN09). |

## 2. Perfis de usuário

| Perfil | Objetivo | Pode | Não pode | Escopo |
| --- | --- | --- | --- | --- |
| Administrador | Gerenciar a estrutura da empresa e o controle de acesso | Cadastrar, editar e desativar contas; gerenciar departamentos e a associação de colaboradores a eles; alterar permissões. Quando entrarem: criar, editar e excluir canais oficiais e adicionar colaboradores a canais privados | Ainda a definir se acessa conversas privadas de terceiros [PD-08]. Ainda a definir se também exerce as funções de Colaborador [PD-15] | MVP |
| Colaborador | Comunicar-se no dia a dia | Ver a lista de colegas; conversar 1:1 com qualquer colaborador ativo; editar o próprio perfil. Quando entrarem: criar grupos, entrar e sair de canais e enviar anexos | Executar funções administrativas | MVP |
| Convidado | Permitir que cliente ou prestador externo participe sem ver dados sensíveis da empresa | Participar apenas de grupos para os quais foi convidado | Ver a lista geral de colaboradores; ver canais públicos | Fora do MVP [PD-03] |

## 3. Requisitos funcionais

### Módulo 1: Autenticação e perfil

| ID | Descrição | Perfil | Prioridade | Observações |
| --- | --- | --- | --- | --- |
| RF01 | O sistema deve permitir que o Administrador cadastre um colaborador informando nome, e-mail corporativo, departamento e cargo, e deve enviar um convite por e-mail para que o colaborador defina a própria senha. | Administrador | Must | [PD-01]. [PD-17]. RN01, RN02, RN03. Não há autocadastro público. |
| RF02 | O sistema deve permitir o acesso individual do colaborador mediante e-mail e senha. | Colaborador, Administrador | Must | RN09: conta inativa não autentica. |
| RF03 | O sistema deve oferecer fluxo de redefinição de senha por e-mail corporativo. | Colaborador, Administrador | Should | Depende de serviço de envio de e-mail [PD-17]. RN03. |
| RF04 | O sistema deve permitir que o colaborador visualize seus dados profissionais e altere sua foto e sua senha. | Colaborador, Administrador | Should | |
| RF18 | O sistema deve permitir que o usuário encerre sua sessão (logout). | Colaborador, Administrador | Must | |

### Módulo 2: Conversas

| ID | Descrição | Perfil | Prioridade | Observações |
| --- | --- | --- | --- | --- |
| RF21 | O sistema deve exibir a lista de colaboradores ativos da empresa e permitir iniciar uma conversa 1:1 a partir dela. | Colaborador | Must | Consta no MVP do AGENTS.md. A lista de colegas pertence à Sprint 1 (Issue #12); iniciar a conversa a partir dela pertence à Sprint 2. [PD-15] |
| RF05 | O sistema deve permitir que um colaborador envie e receba mensagens de texto em tempo real com qualquer outro colaborador ativo da mesma empresa. | Colaborador | Must | RNF05. [PD-15] |
| RF07 | O sistema deve exibir o histórico de mensagens persistido ao abrir uma conversa. | Colaborador | Must | RNF06. Hoje cobre conversas 1:1; passa a cobrir grupos e canais quando entrarem. [PD-15] |
| RF06 | O sistema deve permitir que um colaborador crie um grupo, defina seu nome e convide participantes. | Colaborador | Could | Fora das Sprints 1 e 2 ("grupos complexos"). RN07. "Temporário ou permanente" estava sem definição [PD-10]. |
| RF17 | O sistema deve permitir que o dono do grupo adicione e remova participantes. | Colaborador | Could | Cobre a RN07. |
| RF20 | O sistema deve permitir que o colaborador saia de um canal ou de um grupo. | Colaborador | Could | |

### Módulo 3: Canais corporativos

| ID | Descrição | Perfil | Prioridade | Observações |
| --- | --- | --- | --- | --- |
| RF08 | O sistema deve permitir que o Administrador crie canais públicos ou privados, por departamento ou assunto. | Administrador | Could | Fora das Sprints 1 e 2 ("canais completos") [PD-02], [PD-14]. RN04. |
| RF09 | O sistema deve permitir que o colaborador veja a lista de canais públicos e entre neles voluntariamente. Canais privados só aparecem para seus membros. | Colaborador | Could | Fora das Sprints 1 e 2. RN05. |

### Módulo 4: Arquivos e mídia

| ID | Descrição | Perfil | Prioridade | Observações |
| --- | --- | --- | --- | --- |
| RF10 | O sistema deve permitir enviar e receber arquivos (PDF, planilhas, imagens e áudios) em conversas. | Colaborador | Could | Fora das Sprints 1 e 2. Áudio entra como arquivo anexado. RNF07, RN08. |
| RF11 | O sistema deve permitir visualizar mídias no app e baixar arquivos anexados para o dispositivo. | Colaborador | Could | Fora das Sprints 1 e 2. O download depende do navegador. |

### Módulo 5: Notificações e presença

| ID | Descrição | Perfil | Prioridade | Observações |
| --- | --- | --- | --- | --- |
| RF12 | O sistema deve notificar o usuário, fora da tela do app, quando houver novas mensagens nas conversas de que participa. | Colaborador | Could | Fora das Sprints 1 e 2 (push). [PD-05]. Menções e comunicados estão no backlog. |
| RF13 | O sistema deve exibir o status de presença do usuário (online, ausente, ocupado). | Colaborador | Could | |

### Módulo 6: Gestão de usuários e permissões

| ID | Descrição | Perfil | Prioridade | Observações |
| --- | --- | --- | --- | --- |
| RF14 | O sistema deve restringir as funções administrativas ao perfil Administrador. | Administrador | Must | RNF03. |
| RF15 | O sistema deve permitir que o Administrador edite dados de colaboradores, altere permissões e desative contas. | Administrador | Should | RN09. A prioridade Should conflita com as RN06 e RN09, marcadas como parte do MVP [PD-16]. |
| RF16 | O sistema deve permitir que o Administrador edite as configurações e exclua canais oficiais. | Administrador | Could | Depende do RF08. RN04. |
| RF19 | O sistema deve permitir que o Administrador crie, renomeie e desative departamentos. | Administrador | Must | Origem: RF02 da Issue #1 e campo "departamento" do RF01. Versão simples, sem hierarquia. O cadastro de empresas não está coberto [PD-13]. |

## 4. Requisitos não funcionais

| ID | Categoria | Requisito | Prioridade | Observações |
| --- | --- | --- | --- | --- |
| RNF01 | Segurança | As senhas devem ser armazenadas somente como hash com algoritmo reconhecido (ex.: bcrypt, Argon2), nunca em texto puro. | Must | Verificar se o Supabase Auth já atende. |
| RNF02 | Segurança | A sessão deve ser baseada em token com tempo de expiração definido (ex.: JWT). | Must | Tempo de expiração [a definir]. |
| RNF03 | Segurança | A autorização das operações administrativas deve ser aplicada no servidor ou no banco (no Supabase, por RLS), e nunca apenas na interface. | Must | Alinhado ao AGENTS.md. |
| RNF04 | Privacidade | Dados sensíveis (hash de senha, tokens) nunca devem ser retornados em consultas. | Must | |
| RNF05 | Desempenho | Uma mensagem enviada deve aparecer para o destinatário em até 2 segundos, em conexão estável. | Must | Valor [a validar em teste]. |
| RNF06 | Desempenho | O histórico da conversa deve ser carregado em até 3 segundos após abri-la. | Should | Valor [a validar em teste]. |
| RNF07 | Desempenho | O tamanho máximo de cada arquivo anexado é de 15 MB. | Could | Valor [a validar]. A RN08 usa este valor. |
| RNF08 | Compatibilidade | O sistema deve funcionar como PWA no Chrome (Android) e no Safari (iOS), nas versões estáveis recentes. | Must | Versões mínimas [a definir]. |
| RNF09 | Usabilidade | A interface deve ser pensada para smartphones, utilizável a partir de 360 px de largura, com contraste de texto mínimo AA (WCAG) e alvos de toque de pelo menos 44 x 44 px. | Must | Valores [a validar]. |
| RNF10 | Usabilidade | O sistema deve exibir indicador de carregamento em ações demoradas (login, envio de arquivo). | Should | |
| RNF11 | Manutenibilidade | O código deve separar interface, regras de negócio e acesso a dados em módulos distintos. | Should | Padrão a definir em ARCHITECTURE.md [PD-09]. |
| RNF12 | Confiabilidade | O banco deve garantir integridade referencial, sem mensagens órfãs quando usuário ou conversa for desativado. | Must | |
| RNF13 | Portabilidade | O sistema deve atender aos critérios de instalação como PWA (ícone, abertura em tela cheia, HTTPS). | Must | Vem do RNF02 da Issue #1. |
| RNF14 | Segurança | Os dados de uma empresa não podem ser acessados por usuários de outra empresa. | Must | Vem do RNF04 da Issue #1. O AGENTS.md pede "provar isolamento entre empresas". Confirma ou não uma instalação para várias empresas [PD-04]. |
| RNF15 | Privacidade | Uma conversa privada só pode ser lida por seus participantes. | Must | Isolamento entre participantes (AGENTS.md). Interage com [PD-08]. |

## 5. Regras de negócio

| ID | Regra | Relacionados | No MVP atual? |
| --- | --- | --- | --- |
| RN01 | Contas de colaboradores só podem ser criadas com e-mail do domínio oficial da empresa (ex.: @empresa.com, ou o domínio acadêmico definido pelo grupo). E-mails públicos são recusados. O perfil Convidado, fora do MVP, será a exceção. Se houver várias empresas, cada uma precisa ter seu domínio cadastrado [PD-13]. | RF01, [PD-03], [PD-13] | Sim |
| RN02 | Não pode haver duas contas, ativas ou inativas, com o mesmo e-mail. | RF01 | Sim |
| RN03 | A senha deve ter no mínimo 8 caracteres, com ao menos uma letra maiúscula, um número e um caractere especial. | RF01, RF03, RF04 | Sim |
| RN04 | Apenas o Administrador pode criar, editar ou excluir canais oficiais. | RF08, RF14, RF16 | Não (canais) |
| RN05 | Canais públicos são visíveis a todos os colaboradores. Um canal privado só é visível e acessível a quem foi adicionado pelo Administrador. | RF08, RF09 | Não (canais) |
| RN06 | Ao desativar uma conta, as mensagens antigas são preservadas e o autor aparece como "Usuário desativado". | RF15, RN09, [PD-16] | Sim |
| RN07 | Qualquer colaborador pode criar um grupo e se torna seu dono, podendo adicionar e remover participantes. | RF06, RF17 | Não (grupos) |
| RN08 | Arquivos acima do limite definido no RNF07 são rejeitados, com mensagem de alerta ao usuário. | RF10, RNF07 | Não (anexos) |
| RN09 | A desativação de um usuário não apaga dados. O status passa a "inativo", o login é bloqueado e o histórico permanece. | RF02, RF15, [PD-16] | Sim |

## 6. Escopo do MVP (proposta alinhada ao AGENTS.md e ao PLANEJAMENTO_SPRINTS.md)

| Prioridade | Itens | Sprint (proposta, a confirmar) | Issues de referência |
| --- | --- | --- | --- |
| Must | RF01, RF02, RF14, RF18, RF19; RF21 (lista de colegas); RNF13; RNF14 (organizações e perfis) | Sprint 1 (acesso seguro e navegação mobile) | #10, #11, #12, #13 |
| Must | RF05, RF07; RF21 (iniciar conversa 1:1 a partir da lista); RNF14 (conversas e mensagens); RNF15 | Sprint 2 (mensagens 1:1 persistidas e em tempo real) | #14, #15, #16, #17 |
| Must (transversais) | RNF01 a RNF05, RNF08, RNF09, RNF12 | Ambas | |
| Should | RF03, RF04, RF15; RNF06, RNF10, RNF11 | Se houver tempo | |
| Could (fora das Sprints 1 e 2) | RF06, RF08, RF09, RF10, RF11, RF12, RF13, RF16, RF17, RF20; RNF07 | Sem sprint prevista [PD-14] | |
| Won't (v1) | Perfil Convidado, itens do backlog (seção 9) | | |

A distribuição por sprint e a associação às Issues são uma proposta, feita a partir das entregas descritas no PLANEJAMENTO_SPRINTS.md. Precisam ser confirmadas com o Tech Lead.

## 7. Critérios de aceitação (itens Must, em rascunho)

| ID | Critério (Dado / Quando / Então) |
| --- | --- |
| RF01 | Dado um Administrador autenticado, quando ele cadastra um colaborador com e-mail do domínio da empresa e dados válidos, então o colaborador recebe um convite por e-mail para definir a senha. Com e-mail fora do domínio ou já existente, o cadastro é recusado com mensagem (RN01, RN02). |
| RF02 | Dado um colaborador com conta ativa, quando informa e-mail e senha corretos, então acessa o sistema. Com credenciais inválidas, recebe mensagem genérica de erro. Com conta inativa, o acesso é negado (RN09). |
| RF05 | Dado dois colaboradores ativos da mesma empresa, quando o primeiro envia uma mensagem de texto, então o segundo a vê sem recarregar a página, em até 2 segundos em conexão estável (RNF05). |
| RF07 | Dado uma conversa com mensagens anteriores, quando o usuário a abre, então o histórico aparece em ordem cronológica. |
| RF14 | Dado um colaborador sem perfil de Administrador, quando tenta acessar uma função administrativa, inclusive por requisição direta, então o acesso é negado (RNF03). |
| RF18 | Dado um usuário autenticado, quando encerra a sessão, então páginas protegidas passam a exigir novo login. |
| RF19 | Dado um Administrador, quando cria, renomeia ou desativa um departamento, então a alteração fica disponível para os cadastros de colaboradores. |
| RF21 | Dado um colaborador autenticado, quando abre a lista de colegas, então vê os colaboradores ativos da sua empresa e consegue abrir uma conversa 1:1 com qualquer um deles. |
| RNF14 | Dado um usuário da empresa A, quando tenta ler usuários ou mensagens da empresa B, inclusive por requisição direta, então o acesso é negado. |
| RNF15 | Dado uma conversa 1:1 entre dois colaboradores, quando um terceiro tenta lê-la, inclusive por requisição direta, então o acesso é negado. |

## 8. Pendências e decisões em aberto

| ID | Pergunta | Proposta atual | Decide |
| --- | --- | --- | --- |
| PD-01 | Quem cria as contas? | Somente o Administrador, com convite por e-mail. Evita que alguém use o e-mail de outra pessoa. | PO |
| PD-02 | Quem cria canais, quando entrarem? | Somente o Administrador. | PO |
| PD-03 | O perfil Convidado entra no MVP? | Não, por conflito com a RN01 e por exigir fluxo de convite. | PO |
| PD-04 | Uma instalação para várias empresas ou uma por empresa? | Indício de instalação multiempresa: o RNF04 da Issue #1 pede isolamento entre dados de empresas, a Issue #11 trata de "organizações e perfis com RLS" e a regra 6 do AGENTS.md pede provar isolamento entre empresas. Confirmar. Impacta RNF14, o modelo de dados e o cadastro de empresas. | Tech Lead e PO |
| PD-05 | Notificações push são viáveis no PWA? | Fora das Sprints 1 e 2. Verificar as limitações do iOS antes de comprometer o RF12. | Grupo |
| PD-06 | Capacidade esperada (usuários simultâneos), disponibilidade, backup e tratamento de dados pessoais conforme a LGPD. | Não definidos. | Grupo e PO |
| PD-07 | Data exata de entrega em dezembro e horas disponíveis por pessoa. | Não informados com precisão. | Equipe |
| PD-08 | O Administrador pode ler conversas privadas de terceiros? | Não. Coerente com o RNF15. | PO |
| PD-09 | Padrão de arquitetura e papel do backend. | Supabase (PostgreSQL, Auth, Realtime, RLS) aprovado no AGENTS.md. Next.js e TypeScript previstos, ainda sem confirmação no código. Detalhar em ARCHITECTURE.md. | Tech Lead |
| PD-10 | O que significa grupo "temporário" no RF06? | Sem definição. | PO |
| PD-11 | Qual será o diferencial em relação a Slack, Teams e WhatsApp? | Nenhum definido (não é obrigatório). | Grupo |
| PD-12 | A referência é o Microsoft Teams (canais por departamento) ou o WhatsApp (conversas pessoais)? | O AGENTS.md diz "semelhante ao WhatsApp". Em conversa, a referência foi o Teams. Define a prioridade de canais. | PO |
| PD-13 | Como uma empresa passa a existir na plataforma (cadastro manual, tela própria)? | Sem definição. A Issue #1 previa "gerenciamento de empresas" (RF02 original), hoje sem requisito correspondente. A RN01 também depende de cada empresa ter um domínio de e-mail cadastrado. | Tech Lead e PO |
| PD-14 | Quando canais, grupos, anexos e push entram (após a Sprint 2)? | O PLANEJAMENTO_SPRINTS.md cobre apenas as Sprints 0, 1 e 2 e não prevê sprint para esses itens. Permanecem como Could até decisão. | Tech Lead e PO |
| PD-15 | O Administrador também exerce as funções de Colaborador (lista de colegas, conversas 1:1)? | Sim. Hoje RF05, RF07 e RF21 listam só o perfil Colaborador, o que impediria o Administrador de conversar. | PO |
| PD-16 | O RF15 (editar dados e desativar contas) é Should, mas as RN06 e RN09 e o RF02 tratam a desativação como parte do MVP. Qual prevalece? | Subir ao menos a parte "desativar conta" do RF15 para Must, ou marcar RN06 e RN09 como condicionais. Prioridade não alterada nesta versão. | PO e Tech Lead |
| PD-17 | Qual serviço envia os e-mails de convite (RF01, Must) e de redefinição de senha (RF03, Should)? | Verificar se o Supabase Auth atende. Se o convite é Must, o envio de e-mail é pré-requisito do MVP. | Tech Lead e Backend |
| PD-18 | O RNF05 da Issue #1 (código organizado e versionado no GitHub) não tem correspondente nesta versão. | Tratar como regra de processo do repositório (AGENTS.md) ou acrescentar um RNF. | Responsáveis pelos requisitos e Tech Lead |

## 9. Backlog pós-MVP (não faz parte da v1)

- Menções (@) e comunicados importantes em canais.
- Editar e apagar mensagens.
- Busca de mensagens.
- Perfil Convidado e seu fluxo de convite.
- Versão nativa ou publicação em lojas de aplicativos.
- Áudio e vídeo em tempo real e chamadas (fora do compromisso das Sprints 1 e 2).

## 10. Histórico de alterações

| Versão | Alteração |
| --- | --- |
| 0.1 | Rascunho inicial (Arthur). |
| 0.2 | Resolvidas contradições (Convidado × RN01; criação de canais; autor do cadastro; PWA; arquitetura). Removidas duplicações. Acrescentados RF17 a RF20, glossário, prioridade, critérios de aceitação e pendências. |
| 0.3 | Alinhado ao MVP do AGENTS.md: canais (RF08, RF09, RF16), grupos (RF06, RF17) e demais itens fora das Sprints 1 e 2 passaram a Could. Acrescentados RF21 (lista de colegas), RNF15 (privacidade entre participantes) e RNF14 promovido a Must. Coluna "No MVP atual?" nas regras de negócio. Proposta de distribuição por sprint. Pendências PD-12 a PD-14. PD-04 e PD-09 atualizadas. |
| 0.4 | Conferido com o PLANEJAMENTO_SPRINTS.md: RF21 dividido entre Sprint 1 (lista de colegas) e Sprint 2 (iniciar conversa); RNF14 começa na Sprint 1; coluna de Issues de referência na seção 6. PD-04 e PD-14 atualizadas; fontes e data do cabeçalho atualizadas. Nova seção 11 (rastreabilidade com a Issue #1). Novas pendências PD-15 a PD-18. **Nenhuma prioridade MoSCoW foi alterada.** |

## 11. Rastreabilidade com a Issue #1

Os requisitos "iniciais" da Issue #1 usam numeração própria. Esta tabela liga cada um deles aos IDs deste documento.

| Issue #1 | Descrição original | Neste documento |
| --- | --- | --- |
| RF01 | Autenticação de colaboradores | RF01, RF02, RF03, RF18 |
| RF02 | Empresas e departamentos | RF19 (departamentos). Empresas: sem requisito, ver [PD-13] |
| RF03 | Conversas individuais | RF21, RF05, RF07 |
| RF04 | Canais de comunicação | RF08, RF09, RF16 (movidos para Could) |
| RF05 | Mensagens em tempo real | RF05, RNF05 |
| RF06 | Usuários e permissões | RF14, RF15 |
| RNF01 | Interface responsiva | RNF09 |
| RNF02 | Suporte a PWA | RNF13, RNF08 |
| RNF03 | Autenticação segura | RNF01, RNF02, RNF03, RNF04 |
| RNF04 | Isolamento de dados entre empresas | RNF14 |
| RNF05 | Código organizado e versionado no GitHub | Sem correspondente, ver [PD-18] |

A mudança de prioridade do RF04 (canais) da Issue #1, de requisito inicial para Could, é uma alteração de escopo e depende de validação do Tech Lead e do PO.
