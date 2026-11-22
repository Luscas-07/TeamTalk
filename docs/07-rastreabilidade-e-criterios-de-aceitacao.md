# 7. Rastreabilidade e critérios de aceitação

Voltar ao [controle do documento](00-controle-do-documento.md). Requisitos em [Requisitos funcionais](03-requisitos-funcionais.md) e [Requisitos não funcionais](04-requisitos-nao-funcionais.md). Diagramas em [Diagramas UML](06-diagramas-uml.md).

## 7.1 Critérios de aceitação dos requisitos funcionais

Formato **Dado / Quando / Então**. Cada critério traz o fluxo principal, os fluxos alternativos e o tratamento de erros. Itens ainda em aberto apontam a pendência correspondente. Os critérios são rascunho e precisam da validação do PO.

### CA-001 (RF-001) Cadastro de usuário

- **Principal:** dado um Administrador autenticado, quando ele cadastra um usuário (Colaborador, Convidado ou outro Administrador) com nome, e-mail e perfil válidos e define uma senha de pelo menos 12 caracteres, então a conta fica criada e o usuário consegue autenticar com a senha definida.
- **Erro:** com e-mail já cadastrado, dados obrigatórios ausentes ou senha com menos de 12 caracteres, o cadastro é recusado com mensagem que indica o motivo (RN-015).
- **Erro:** quando um usuário que não é Administrador tenta cadastrar, inclusive por requisição direta, o acesso é negado.

### CA-002 (RF-002) Autenticação e encerramento de sessão

- **Principal:** dado um usuário com conta ativa, quando informa e-mail e senha corretos, então acessa o sistema com os recursos do seu perfil.
- **Erro:** com credenciais inválidas, o sistema exibe mensagem genérica, sem indicar qual dado falhou.
- **Alternativo:** quando o usuário encerra a sessão, então as páginas protegidas passam a exigir novo login.

### CA-003 (RF-003) Alteração de senha pelo Administrador

- **Principal:** dado um Administrador autenticado, quando ele altera a senha de um Colaborador ou de um Convidado, então a nova senha vale no próximo login e a senha anterior deixa de valer.
- **Erro:** quando um usuário que não é Administrador tenta alterar a senha de alguém, inclusive por requisição direta, o acesso é negado.

### CA-004 (RF-004) Ausência de autocadastro e de redefinição pelo usuário

- **Principal:** dado um visitante ou um usuário Colaborador ou Convidado, quando ele abre a tela de acesso e a área do usuário, então não encontra opção de cadastro, de "esqueci minha senha" nem de alterar a própria senha.
- **Erro:** quando um Colaborador ou Convidado envia diretamente uma requisição de cadastro ou de alteração da própria senha, ela é negada.

### CA-005 (RF-005) Termos de uso com aviso de auditoria

- **Principal:** dado um Colaborador ou Convidado que ainda não aceitou os termos, quando ele acessa o sistema pela primeira vez, então vê os termos com o aviso de que as mensagens são auditadas.
- **Principal:** quando ele aceita, então o sistema registra o aceite com data e hora e libera o uso.
- **Erro:** quando ele não aceita, o uso não é liberado.
- **Alternativo:** quem já aceitou não vê os termos de novo.

### CA-006 (RF-006) Retirado

O RF-006 foi retirado (`[PD-16]`). Este identificador não será reutilizado.

### CA-007 (RF-007) Permissões do Convidado

- **Principal:** dado um Administrador e um Convidado, quando o Administrador concede uma permissão (participar de canais e grupos específicos, enviar anexos, iniciar conversas 1:1, ver o histórico anterior à entrada), então o Convidado consegue executar a ação correspondente.
- **Erro:** sem a permissão, a ação é negada com mensagem, inclusive por requisição direta.
- **Alternativo:** quando o Administrador revoga uma permissão, o Convidado deixa de executar a ação.
- **Alternativo:** sem a permissão de histórico anterior, o Convidado vê apenas as mensagens a partir da sua entrada.

### CA-008 (RF-008) Conversa 1:1

- **Principal:** dado dois usuários autorizados, quando o primeiro envia uma mensagem de texto, então o segundo a vê sem recarregar a página (meta de tempo em `[PD-10]`).
- **Erro:** com falha de envio, o usuário é informado e a mensagem não aparece como enviada.
- **Erro:** um Convidado sem a permissão de conversa 1:1 não consegue iniciar uma.
- **Alternativo:** o Administrador também envia e recebe mensagens, como os demais participantes (`[PD-01]`).

### CA-009 (RF-009) Histórico

- **Principal:** dado uma conversa com mensagens anteriores, quando o usuário a abre, então vê o histórico em ordem cronológica, sem as mensagens apagadas por seus autores.
- **Alternativo:** o Convidado vê o histórico anterior à sua entrada somente com a permissão correspondente.

### CA-010 (RF-010) Grupos

- **Principal:** dado um Administrador, quando ele cria um grupo com nome e participantes, então os participantes passam a ver o grupo.
- **Erro:** quando um Colaborador ou Convidado tenta criar um grupo, inclusive por requisição direta, a operação é negada.

### CA-011 (RF-011) Canais

- **Principal:** dado um Administrador, quando ele cria um canal com nome e participantes, então os participantes passam a ver o canal.
- **Erro:** quando um Colaborador ou Convidado tenta criar um canal, inclusive por requisição direta, a operação é negada.

### CA-012 (RF-012) Mensagens em grupos e canais

- **Principal:** dado um grupo ou canal, quando um participante envia uma mensagem de texto, então os demais participantes a veem em tempo real.
- **Erro:** quem não participa não vê nem envia mensagens. Um Convidado sem permissão para aquele grupo ou canal não o acessa.

### CA-013 (RF-013) Anexos

- **Principal:** dado um usuário autorizado, quando ele envia um anexo em uma conversa, então os destinatários conseguem recebê-lo.
- **Erro:** um Convidado sem a permissão de enviar anexos tem o envio negado.
- **Erro:** um arquivo acima de 15 MB é recusado com aviso. Os tipos permitidos ainda estão em aberto (`[PD-09]`).

### CA-014 (RF-014) Apagar mensagem

- **Principal:** dado um usuário, quando ele apaga uma mensagem própria, então ela deixa de ser exibida aos demais participantes e permanece na auditoria, visível ao Administrador como apagada.
- **Erro:** quando o usuário tenta apagar a mensagem de outra pessoa, a operação é negada.

### CA-015 (RF-015) Notificação no app

- **Principal:** dado um usuário com o app aberto, quando chega uma nova mensagem em uma conversa de que participa, então ele recebe um aviso dentro do app.
- **Erro:** ele não recebe avisos de conversas de que não participa.

### CA-016 (RF-016) Notificação push

- **Principal:** dado um usuário com o app fechado, quando chega uma nova mensagem em uma conversa de que participa, então ele recebe uma notificação push no celular e no computador.
- **Alternativo:** a notificação exibe apenas um aviso genérico, sem o texto da mensagem e sem o nome do remetente ou da conversa (RNF-007).
- **Erro:** sem permissão de notificações no dispositivo, o usuário não recebe push, mas continua vendo os avisos dentro do app.

### CA-017 (RF-017) Registro integral para auditoria

- **Principal:** dado qualquer mensagem enviada em conversa 1:1, grupo ou canal, inclusive com anexo, quando ela é enviada, então existe um registro de auditoria correspondente.
- **Alternativo:** a mensagem apagada pelo autor permanece no registro de auditoria, junto com seus anexos.
- **Erro:** um Colaborador ou Convidado não consegue alterar nem excluir registros de auditoria, direta ou indiretamente (RNF-005).

### CA-018 (RF-018) Consulta de auditoria

- **Principal:** dado um Administrador, quando ele consulta as mensagens auditadas, então vê as mensagens de conversas 1:1, grupos e canais, incluindo as apagadas, e a consulta fica registrada (RNF-004).
- **Erro:** quando um Colaborador ou Convidado tenta consultar, inclusive por requisição direta, o acesso é negado.

## 7.2 Verificação dos requisitos não funcionais

Os requisitos não funcionais trazem a forma de verificação na própria tabela, em [Requisitos não funcionais](04-requisitos-nao-funcionais.md). A matriz abaixo aponta para ela.

## 7.3 Matriz de rastreabilidade: objetivos e requisitos funcionais

| Requisito | Objetivos | Regras de negócio | Critérios | Casos de uso | Demais diagramas |
| --- | --- | --- | --- | --- | --- |
| RF-001 | OBJ-02 | RN-001, RN-002 | CA-001 | UC-03 | UML-02, UML-03 |
| RF-002 | OBJ-02 | RN-001 | CA-002 | UC-01 | UML-03 |
| RF-003 | OBJ-02 | RN-002 | CA-003 | UC-03 | UML-02 |
| RF-004 | OBJ-02 | RN-001, RN-002 | CA-004 | UC-03 | UML-03 |
| RF-005 | OBJ-04 | RN-003 | CA-005 | UC-02 | UML-03 |
| RF-006 | Retirado | Nenhuma | CA-006 | Nenhum | Nenhum |
| RF-007 | OBJ-03 | RN-004, RN-005 | CA-007 | UC-04 | UML-02, UML-04 |
| RF-008 | OBJ-01 | RN-004, RN-005 | CA-008 | UC-07 | UML-04 |
| RF-009 | OBJ-01 | RN-005 | CA-009 | UC-10 | UML-02 |
| RF-010 | OBJ-01, OBJ-02 | RN-006 | CA-010 | UC-05 | UML-02 |
| RF-011 | OBJ-01, OBJ-02 | RN-006 | CA-011 | UC-06 | UML-02 |
| RF-012 | OBJ-01, OBJ-03 | RN-004, RN-005 | CA-012 | UC-07 | UML-04 |
| RF-013 | OBJ-01, OBJ-03 | RN-005, RN-008 | CA-013 | UC-08 | UML-04 |
| RF-014 | OBJ-04 | RN-008, RN-009 | CA-014 | UC-09 | UML-05 |
| RF-015 | OBJ-06 | Nenhuma | CA-015 | UC-11 | UML-04 |
| RF-016 | OBJ-06 | Nenhuma | CA-016 | UC-11 | UML-04, UML-06 |
| RF-017 | OBJ-04 | RN-008, RN-009, RN-011 | CA-017 | UC-07, UC-09 | UML-02, UML-04, UML-05 |
| RF-018 | OBJ-04 | RN-007 | CA-018 | UC-12 | UML-05 |

## 7.4 Matriz de rastreabilidade: requisitos não funcionais

| Requisito | Objetivos | Regras e riscos | Verificação | Diagramas |
| --- | --- | --- | --- | --- |
| RNF-001 | OBJ-02 | RN-002, R-06 | Ver RNF-001 | UML-02 |
| RNF-002 | OBJ-02, OBJ-03, OBJ-04 | RN-004, RN-007 | Ver RNF-002 | UML-06 |
| RNF-003 | OBJ-07 | RS-002 | Ver RNF-003 | UML-06 |
| RNF-004 | OBJ-04, OBJ-07 | RN-007, R-03 | Ver RNF-004 | UML-05 |
| RNF-005 | OBJ-04 | RN-008, RN-009 | Ver RNF-005 | UML-02 |
| RNF-006 | OBJ-04 | RN-011, R-04 | Ver RNF-006 | UML-02 |
| RNF-007 | OBJ-06, OBJ-07 | R-02 | Ver RNF-007 | UML-06 |
| RNF-008 | OBJ-01 | RS-003 | Ver RNF-008 | UML-04 |
| RNF-009 | OBJ-05 | A-03 | Ver RNF-009 | UML-06 |
| RNF-010 | OBJ-05 | RS-002 | Ver RNF-010 | UML-06 |
| RNF-011 | OBJ-05 | Nenhuma | Ver RNF-011 | Nenhum |
| RNF-012 | OBJ-01 | RS-003 | Ver RNF-012 | UML-04 |
| RNF-013 | OBJ-07 | R-01 | Ver RNF-013 | UML-06 |
| RNF-014 | OBJ-05 | Nenhuma | Ver RNF-014 | Nenhum |

## 7.5 Matriz de rastreabilidade: objetivos

| Objetivo | Requisitos funcionais | Requisitos não funcionais | Diagramas |
| --- | --- | --- | --- |
| OBJ-01 | RF-008 a RF-013 | RNF-008, RNF-012 | UML-01, UML-02, UML-04 |
| OBJ-02 | RF-001 a RF-004, RF-010, RF-011 | RNF-001, RNF-002 | UML-01, UML-02, UML-03 |
| OBJ-03 | RF-007, RF-012, RF-013 | RNF-002 | UML-01, UML-02, UML-04 |
| OBJ-04 | RF-005, RF-014, RF-017, RF-018 | RNF-002, RNF-004, RNF-005, RNF-006 | UML-01, UML-02, UML-05 |
| OBJ-05 | Nenhum | RNF-009, RNF-010, RNF-011, RNF-014 | UML-06 |
| OBJ-06 | RF-015, RF-016 | RNF-007 | UML-04, UML-06 |
| OBJ-07 | Nenhum | RNF-003, RNF-004, RNF-007, RNF-013 | UML-06 |

## 7.6 Casos de uso e requisitos

| Caso de uso | Requisitos funcionais |
| --- | --- |
| UC-01 Autenticar-se | RF-002 |
| UC-02 Aceitar termos de uso | RF-005 |
| UC-03 Gerenciar contas | RF-001, RF-003, RF-004 |
| UC-04 Conceder permissões ao Convidado | RF-007 |
| UC-05 Criar e gerenciar grupos | RF-010 |
| UC-06 Criar e gerenciar canais | RF-011 |
| UC-07 Trocar mensagens | RF-008, RF-012, RF-017 |
| UC-08 Enviar anexo | RF-013 |
| UC-09 Apagar mensagem própria | RF-014, RF-017 |
| UC-10 Consultar histórico | RF-009 |
| UC-11 Receber notificações | RF-015, RF-016 |
| UC-12 Consultar mensagens auditadas | RF-018 |
