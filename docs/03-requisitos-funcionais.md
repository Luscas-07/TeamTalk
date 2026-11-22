# 3. Requisitos funcionais

Voltar ao [controle do documento](00-controle-do-documento.md). Critérios de aceitação completos, com fluxos alternativos e tratamento de erros, em [Rastreabilidade e critérios de aceitação](07-rastreabilidade-e-criterios-de-aceitacao.md).

**Convenções.** Prioridade MoSCoW **proposta**, a validar pelo PO. A coluna *Origem* usa: informado, decidido (decisão de Arthur sobre uma pendência), decidido (delegado) (decisão que Arthur pediu ao assistente tomar, a validar), herdado (do v0.4) e proposta. As regras de negócio estão em [Regras de negócio e restrições](05-regras-de-negocio-e-restricoes.md).

## 3.1 Contas e acesso

| ID | Descrição | Ator | Prioridade | Regras | Origem | Critérios |
| --- | --- | --- | --- | --- | --- | --- |
| RF-001 | O sistema deve permitir que o Administrador cadastre um Colaborador, um Convidado ou outro Administrador e defina sua senha inicial. O primeiro Administrador não é cadastrado pela interface (RN-013). | Administrador | Must | RN-001, RN-002 | Informado. Outro Administrador e primeiro Administrador: decidido (delegado, PD-02) | CA-001 |
| RF-002 | O sistema deve autenticar o usuário por e-mail e senha e permitir o encerramento da sessão. O identificador de login é o e-mail (PD-18). | Administrador, Colaborador, Convidado | Must | RN-001 | Informado e decidido (delegado, PD-18) | CA-002 |
| RF-003 | O sistema deve permitir que o Administrador altere a senha de um Colaborador ou de um Convidado. | Administrador | Must | RN-002 | Informado | CA-003 |
| RF-004 | O sistema não deve oferecer, ao Colaborador e ao Convidado, autocadastro nem redefinição ou alteração da própria senha. | Colaborador, Convidado | Must | RN-001, RN-002 | Informado | CA-004 |
| RF-005 | O sistema deve apresentar os termos e condições de uso, com o aviso de que as mensagens são auditadas, ao Colaborador e ao Convidado, e registrar o aceite. A apresentação ocorre no primeiro acesso e exige aceite explícito (PD-04). | Colaborador, Convidado | Must | RN-003 | Informado e decidido (PD-04) | CA-005 |
| RF-006 | **Retirado.** A gestão de contas (editar dados e ativar ou desativar) está fora do escopo (`[PD-16]`). O identificador não será reutilizado. | | | | Decidido (PD-16) | |
| RF-007 | O sistema deve permitir que o Administrador conceda e revogue, para cada Convidado, as permissões de: participar de canais e grupos específicos, enviar anexos, iniciar conversas 1:1 e ver o histórico anterior à sua entrada. | Administrador | Must | RN-004, RN-005 | Informado | CA-007 |

## 3.2 Comunicação

| ID | Descrição | Ator | Prioridade | Regras | Origem | Critérios |
| --- | --- | --- | --- | --- | --- | --- |
| RF-008 | O sistema deve permitir a troca de mensagens de texto em tempo real em conversas 1:1. O Convidado só inicia conversa 1:1 se tiver essa permissão. | Administrador, Colaborador, Convidado | Must | RN-004, RN-005 | Informado e decidido (PD-01) | CA-008 |
| RF-009 | O sistema deve exibir o histórico de mensagens ao abrir uma conversa. O Convidado só vê o histórico anterior à sua entrada se tiver essa permissão. | Administrador, Colaborador, Convidado | Must | RN-005 | Informado (histórico em conversas: herdado) | CA-009 |
| RF-010 | O sistema deve permitir que o Administrador crie grupos e gerencie seus participantes. | Administrador | Should | RN-006 | Informado | CA-010 |
| RF-011 | O sistema deve permitir que o Administrador crie canais e gerencie seus participantes. | Administrador | Should | RN-006 | Informado | CA-011 |
| RF-012 | O sistema deve permitir a troca de mensagens de texto em tempo real em grupos e canais, entre seus participantes. O Convidado só participa dos grupos e canais para os quais tiver permissão. | Administrador, Colaborador, Convidado | Should | RN-004, RN-005 | Informado | CA-012 |
| RF-013 | O sistema deve permitir o envio e o recebimento de anexos em conversas. O Convidado só envia anexos se tiver essa permissão. O tamanho máximo é de 15 MB por arquivo (PD-09). Os tipos permitidos e o local de armazenamento ainda estão em aberto. | Administrador, Colaborador, Convidado | Should | RN-005, RN-008 | Informado e decidido (PD-09, tamanho) | CA-013 |
| RF-014 | O sistema deve permitir que o usuário apague uma mensagem própria. A mensagem deixa de ser exibida aos demais participantes e permanece na auditoria. | Administrador, Colaborador, Convidado | Should | RN-008, RN-009 | Informado | CA-014 |
| RF-015 | O sistema deve notificar o usuário, dentro do app, sobre novas mensagens das conversas de que participa. | Administrador, Colaborador, Convidado | Should | | Informado | CA-015 |
| RF-016 | O sistema deve notificar o usuário, por push, sobre novas mensagens quando o app estiver fechado, no celular e no computador. O aviso é genérico, sem o texto da mensagem (PD-08). Sem permissão de notificações no dispositivo, o usuário continua vendo os avisos dentro do app. | Administrador, Colaborador, Convidado | Should | | Informado e decidido (delegado, PD-08) | CA-016 |

## 3.3 Auditoria

| ID | Descrição | Ator | Prioridade | Regras | Origem | Critérios |
| --- | --- | --- | --- | --- | --- | --- |
| RF-017 | O sistema deve registrar para auditoria todas as mensagens de conversas 1:1, grupos e canais, incluindo os anexos e as mensagens apagadas pelo usuário. | Sistema | Must | RN-008, RN-009, RN-011 | Informado | CA-017 |
| RF-018 | O sistema deve permitir que somente o Administrador consulte as mensagens auditadas. | Administrador | Must | RN-007 | Informado | CA-018 |

## 3.4 Sprint inicial e demais funções

O PO e o líder técnico ainda precisam confirmar esta divisão (`[PD-13]`). Arthur decidiu que o escopo cabe no prazo, em **uma única sprint inicial com as funções primordiais**, como o acesso somente do setor estratégico. Este documento interpreta "funções primordiais" como os requisitos **Must**.

| Entrega | Requisitos funcionais | Observação |
| --- | --- | --- |
| Sprint inicial | RF-001, RF-002, RF-003, RF-004, RF-005, RF-007, RF-008, RF-009, RF-017, RF-018 | Acesso controlado pelo Administrador, conversas 1:1 com histórico e auditoria. |
| Sprints seguintes, se houver tempo | RF-010 a RF-016 | Grupos, canais, mensagens em grupo e canal, anexos, apagar mensagem e notificações. |

- **Must** reúne o que sustenta o problema central (controle de acesso e auditoria) e a comunicação mínima 1:1.
- **Should** reúne o que Arthur incluiu no escopo, mas que o MVP do `AGENTS.md` deixava fora das Sprints 1 e 2.
- RF-006 foi retirado e a edição de mensagens está fora do escopo (ver [Visão geral e escopo](01-visao-geral-e-escopo.md)).
- Nenhum requisito é **Could** ou **Won't** nesta versão.
