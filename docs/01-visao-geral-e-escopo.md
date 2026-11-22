# 1. Visão geral e escopo

Voltar ao [controle do documento](00-controle-do-documento.md).

## 1.1 Contexto do problema

Empresas que usam aplicativos de comunicação corporativa de terceiros dependem de plataformas cujo dono não é a própria empresa. O problema central que o TeamTalk busca resolver é a **desconfiança da empresa em relação a terceiros donos desses aplicativos** (*informado*). A Shopee, em particular, não confia na veracidade das big techs (*informado*).

O TeamTalk é uma aplicação que **pertence à equipe de desenvolvimento**, que a opera e a mantém. A Shopee é a **cliente** (*informado*). O uso é pensado para o **setor estratégico** da Shopee, e não para a empresa inteira (*informado*).

A Shopee é a cliente **para o projeto**, mas a equipe **não tem contato com ela** (*decidido*, `[PD-15]`). O trabalho é, na prática, um caso de estudo. Estrutura do setor, políticas internas e domínio de e-mail são hipóteses.

## 1.2 Propósito do documento

Especificar, de forma verificável, o que o TeamTalk deve fazer para o setor estratégico da Shopee. O documento orienta a arquitetura, o desenvolvimento, os testes e a validação com o PO e o líder técnico.

## 1.3 Escopo do produto

O TeamTalk é um sistema de comunicação corporativa com **versão mobile e versão para computador, com layouts diferentes** (*informado*). Está no escopo:

| Item | Origem |
| --- | --- |
| Perfis Administrador, Colaborador e Convidado. O Administrador também troca mensagens (1:1, grupos e canais) | Informado e decidido (PD-01) |
| Contas criadas somente pelo Administrador; senhas definidas e alteradas somente por ele. O primeiro Administrador é criado pela equipe de desenvolvimento | Informado e decidido (delegado, PD-02) |
| Termos e condições de uso com aviso sobre a auditoria de mensagens, apresentados no primeiro acesso | Informado e decidido (PD-04) |
| Conversas 1:1, grupos e canais | Informado |
| Envio de anexos de até 15 MB | Informado e decidido (PD-09) |
| Notificações dentro e fora do app (push, com aviso genérico) | Informado e decidido (delegado, PD-08) |
| Apagar a própria mensagem (some para os demais e permanece na auditoria) | Informado |
| Auditoria integral das mensagens, consultada somente pelo Administrador | Informado |
| Criação de grupos e canais somente pelo Administrador | Informado |
| Permissões do Convidado concedidas pelo Administrador | Informado |
| Interface em português e inglês, com idioma escolhido pelo usuário | Informado e decidido (PD-12) |
| Mobile em Android e iOS. Navegadores e versões definidos em RNF-010 | Informado e decidido (delegado, PD-11) |
| Entrega em uma única sprint inicial com as funções primordiais (prioridade Must) e as demais funções em sprints seguintes | Decidido (PD-13), com interpretação a confirmar |

## 1.4 Limites do escopo (fora do escopo)

| Item | Situação |
| --- | --- |
| Edição de mensagens | Fora do escopo desta versão (*informado*). |
| Chamadas de áudio e vídeo | Fora do escopo (*decidido*, `[PD-17]`). |
| Uso por outras áreas da Shopee além do setor estratégico | Fora do escopo (*informado*). |
| Outros clientes além da Shopee, isolamento entre empresas e cadastro de empresas | Fora do escopo (*decidido*, `[PD-14]`). O RNF14 e as PD-04 e PD-13 do v0.4 deixam de valer. |
| Gestão de contas: editar dados e desativar contas | Fora do escopo (*decidido*, `[PD-16]`). Ver o risco R-08. |
| Itens do v0.4 não rediscutidos: presença, foto de perfil, departamentos, menções e busca | Fora do escopo (*decidido*, `[PD-17]`). |

## 1.5 Público-alvo e stakeholders

| Parte interessada | Papel no projeto |
| --- | --- |
| Shopee, setor estratégico | Cliente. Reúne diretoria e C-level, planejamento estratégico e inteligência de mercado (*informado*). A estimativa é de **dezenas de usuários** (*informado*). |
| Administrador | Gerencia contas, senhas, permissões, grupos, canais e auditoria. O primeiro Administrador é criado pela equipe de desenvolvimento. Quem exerce o papel na Shopee é hipótese (`[PD-02]`). |
| Colaborador | Usuário do setor estratégico que se comunica no dia a dia. |
| Convidado | Consultor ou parceiro externo, com acesso limitado às permissões concedidas pelo Administrador. |
| Breno Oliveira | Product Owner. Prioridades, escopo e aceite. |
| Lucas (`@Luscas-07`) | Líder técnico. Arquitetura e integração. |
| Felipe, Arthur dos Santos, Rafael | Frontend, Backend e Banco, UX/UI. |
| Arthur Fonseca e Julia | Requisitos e UML. |

## 1.6 Premissas

| ID | Premissa | Origem |
| --- | --- | --- |
| A-01 | A equipe de desenvolvimento é dona e operadora do sistema. A Shopee é a cliente. | Informado |
| A-02 | A Shopee é a cliente do projeto, sem contato com a equipe. Informações específicas dela são hipóteses. | Decidido (PD-15) |
| A-03 | As duas versões (mobile e computador) compartilham o mesmo sistema web, com layouts distintos. A decisão anterior de PWA se mantém. | Hipótese, a validar com o líder técnico |
| A-04 | A escala esperada é de dezenas de usuários. | Informado |
| A-05 | Os requisitos específicos da Shopee prevalecem sobre o caso genérico do v0.4. | Informado, a validar com o PO |

## 1.7 Restrições

As restrições do projeto estão em [Regras de negócio e restrições](05-regras-de-negocio-e-restricoes.md): stack e hospedagem (RS-001), PWA (RS-002), prazo e equipe (RS-003) e processo do repositório (RS-004).

## 1.8 Dependências

| ID | Dependência | Impacto |
| --- | --- | --- |
| D-01 | Vercel e Supabase (PostgreSQL, Auth, Realtime, RLS) | Hospedagem e dados. Ver R-01. |
| D-02 | Serviço de push do navegador ou do sistema operacional | Notificações fora do app. Ver R-02. |
| D-03 | Armazenamento de arquivos para anexos | Local de armazenamento e tipos permitidos ainda em aberto (`[PD-09]`). |
| D-04 | Decisão do PO e do líder técnico sobre as divergências com o v0.4 | Libera a integração deste documento. |

## 1.9 Riscos relevantes

| ID | Risco | Efeito | Ação proposta |
| --- | --- | --- | --- |
| R-01 | A hospedagem em Vercel e Supabase, que são terceiros, tensiona com a desconfiança da Shopee em relação a terceiros. | Pode enfraquecer o argumento central do produto. | Decidido (delegado, `[PD-07]`): manter a stack, documentar os limites e as mitigações. Validar com o líder técnico e o PO. |
| R-02 | Notificações push com o app fechado costumam passar por serviços de terceiros. | Mesma tensão do R-01. O conteúdo da mensagem pode vazar. | Decidido (delegado, `[PD-08]`): aviso genérico, sem conteúdo (RNF-007). |
| R-03 | O Administrador concentra poder: cria contas, define senhas e lê todas as mensagens auditadas. Além do registro de acessos (RNF-004), nada controla o próprio Administrador. | Abuso ou erro com alto impacto, em um produto cuja promessa é confiança. | Decidido (`[PD-06]`): registrar os acessos à auditoria (RNF-004). Risco reduzido, não eliminado. |
| R-04 | A retenção é indefinida, sem prazo. | Custo de armazenamento e questões de privacidade e de LGPD. | Aceito por Arthur (`[PD-05]`). Validação jurídica e de LGPD não feita, pois não há contato com a Shopee. |
| R-05 | O escopo (grupos, canais, anexos, push, dois layouts) vai além do MVP proposto no `AGENTS.md` e pode não caber no prazo de dezembro. | Entrega incompleta. | Decidido (`[PD-13]`): sprint inicial com as funções primordiais e as demais depois. Alterações de escopo exigem validação do líder técnico, conforme o `AGENTS.md`. |
| R-06 | O Administrador define as senhas e as entrega ao usuário. | Exposição da senha inicial. | Decidido (delegado, `[PD-03]`): entrega fora do TeamTalk e senha nunca exibida depois de salva (RN-014, RNF-001). |
| R-07 | Os dados da Shopee são hipóteses. | Requisitos podem não refletir a realidade da empresa. | Aceito (`[PD-15]`): a Shopee é caso de estudo. Registrar as hipóteses como tais. |
| R-08 | Sem edição nem desativação de contas, uma conta cadastrada por engano ou de quem deixou o setor (por exemplo, um consultor) continua existindo. | Acesso indevido remanescente. | Para o Convidado, revogar todas as permissões (RF-007) o deixa sem acesso a conversas. Para o Colaborador e o Administrador, a correção é manual pela equipe, no banco (`[PD-19]`). |
