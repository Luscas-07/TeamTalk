# 6. Diagramas UML

Voltar ao [controle do documento](00-controle-do-documento.md). Requisitos relacionados em [Requisitos funcionais](03-requisitos-funcionais.md) e regras em [Regras de negócio e restrições](05-regras-de-negocio-e-restricoes.md).

## 6.1 Tipos de diagrama e ferramenta

Os tipos foram escolhidos por Arthur Fonseca: **casos de uso, classes, atividades e implantação**. Nenhum outro tipo foi produzido.

- **Formato e ferramenta:** PlantUML (versão 1.2026.10), com o código-fonte editável em cada seção abaixo e em arquivos `.puml`.
- **Imagens renderizadas:** arquivos PNG em [diagramas](diagramas/). O GitHub não renderiza PlantUML por conta própria, por isso as imagens ficam versionadas junto com o código.
- **Como regenerar:** `java -jar plantuml.jar -charset UTF-8 -tpng -SDpi=140 -o .. docs/diagramas/src/<arquivo>.puml`.
- **Estado dos diagramas:** os diagramas correspondem ao escopo desta versão (0.6). Itens ainda em aberto aparecem com `PD-xx` dentro das figuras.

| Diagrama | Arquivo da imagem | Arquivo-fonte |
| --- | --- | --- |
| UML-01 Diagrama de casos de uso | [uml-01-casos-de-uso.png](diagramas/uml-01-casos-de-uso.png) | [uml-01-casos-de-uso.puml](diagramas/src/uml-01-casos-de-uso.puml) |
| UML-02 Diagrama de classes | [uml-02-classes.png](diagramas/uml-02-classes.png) | [uml-02-classes.puml](diagramas/src/uml-02-classes.puml) |
| UML-03 Atividades: cadastro de usuário e primeiro acesso | [uml-03-atividades-cadastro-primeiro-acesso.png](diagramas/uml-03-atividades-cadastro-primeiro-acesso.png) | [uml-03-atividades-cadastro-primeiro-acesso.puml](diagramas/src/uml-03-atividades-cadastro-primeiro-acesso.puml) |
| UML-04 Atividades: envio de mensagem | [uml-04-atividades-envio-mensagem.png](diagramas/uml-04-atividades-envio-mensagem.png) | [uml-04-atividades-envio-mensagem.puml](diagramas/src/uml-04-atividades-envio-mensagem.puml) |
| UML-05 Atividades: apagar mensagem e consulta pela auditoria | [uml-05-atividades-apagar-e-auditar.png](diagramas/uml-05-atividades-apagar-e-auditar.png) | [uml-05-atividades-apagar-e-auditar.puml](diagramas/src/uml-05-atividades-apagar-e-auditar.puml) |
| UML-06 Diagrama de implantação | [uml-06-implantacao.png](diagramas/uml-06-implantacao.png) | [uml-06-implantacao.puml](diagramas/src/uml-06-implantacao.puml) |

## 6.2 UML-01 Diagrama de casos de uso

- **Finalidade:** Mostrar quem faz o quê no TeamTalk e como as permissões do Convidado limitam as ações. O Administrador também troca mensagens.
- **Elementos principais:** Atores Administrador, Colaborador e Convidado. Casos de uso UC-01 a UC-12, com extensão de UC-02 sobre UC-01 e de UC-08 sobre UC-07.
- **Requisitos relacionados:** RF-001 a RF-018 (RF-006 retirado), RN-001 a RN-009.

![UML-01 Diagrama de casos de uso](diagramas/uml-01-casos-de-uso.png)

<details>
<summary>Código-fonte (PlantUML)</summary>

```plantuml
@startuml uml-01-casos-de-uso
title UML-01 - Diagrama de casos de uso (TeamTalk - setor estratégico da Shopee)
left to right direction
skinparam shadowing false
skinparam defaultFontName DejaVu Sans
skinparam packageStyle rectangle
skinparam usecase {
  BackgroundColor #FFFFFF
  BorderColor #1F3A5F
}

actor "Administrador" as ADM
actor "Colaborador" as COL
actor "Convidado\n(consultor ou\nparceiro externo)" as CNV

rectangle "TeamTalk" {
  usecase "UC-01\nAutenticar-se" as UC01
  usecase "UC-02\nAceitar termos de uso\n(aviso de auditoria)" as UC02
  usecase "UC-03\nGerenciar contas\n(cadastrar e definir senha)" as UC03
  usecase "UC-04\nConceder permissões\nao Convidado" as UC04
  usecase "UC-05\nCriar e gerenciar\ngrupos" as UC05
  usecase "UC-06\nCriar e gerenciar\ncanais" as UC06
  usecase "UC-07\nTrocar mensagens\n(1:1, grupo e canal)" as UC07
  usecase "UC-08\nEnviar anexo" as UC08
  usecase "UC-09\nApagar mensagem\nprópria" as UC09
  usecase "UC-10\nConsultar histórico" as UC10
  usecase "UC-11\nReceber notificações\n(no app e push)" as UC11
  usecase "UC-12\nConsultar mensagens\nauditadas" as UC12
}

ADM --> UC01
ADM --> UC03
ADM --> UC04
ADM --> UC05
ADM --> UC06
ADM --> UC12
ADM --> UC07
ADM --> UC09
ADM --> UC10
ADM --> UC11

COL --> UC01
COL --> UC07
COL --> UC09
COL --> UC10
COL --> UC11

CNV --> UC01
CNV --> UC07
CNV --> UC09
CNV --> UC10
CNV --> UC11

UC02 .> UC01 : <<extend>>\n(no primeiro acesso)
UC08 .> UC07 : <<extend>>

note bottom of CNV
  O Convidado só executa UC-07, UC-08 e UC-10
  dentro das permissões concedidas em UC-04.
end note

note bottom of ADM
  O Administrador também troca mensagens
  (UC-07 a UC-11), além das funções
  administrativas (PD-01 decidida).
end note
@enduml
```

</details>

## 6.3 UML-02 Diagrama de classes

- **Finalidade:** Representar o modelo conceitual de domínio: usuários, permissões, conversas, mensagens, anexos, auditoria e notificações. Não é o modelo físico do banco.
- **Elementos principais:** Usuario, PermissaoConvidado, Conversa (ConversaDireta, Grupo, Canal), Participante, Mensagem, Anexo, RegistroAuditoria, Notificacao e enumerações Perfil, TipoPermissao, EventoAuditoria e CanalNotificacao.
- **Requisitos relacionados:** RF-001, RF-003, RF-007 a RF-018, RN-001 a RN-009.

![UML-02 Diagrama de classes](diagramas/uml-02-classes.png)

<details>
<summary>Código-fonte (PlantUML)</summary>

```plantuml
@startuml uml-02-classes
title UML-02 - Diagrama de classes (modelo conceitual de domínio)
skinparam shadowing false
skinparam defaultFontName DejaVu Sans
skinparam classAttributeIconSize 0
skinparam classBackgroundColor #FFFFFF
skinparam classBorderColor #1F3A5F
hide empty members
skinparam nodesep 30
skinparam ranksep 45

class Usuario {
  id
  nome
  email
  senhaHash
  perfil : Perfil
  termosAceitosEm : DateTime
}

class PermissaoConvidado {
  tipo : TipoPermissao
  concedidaEm : DateTime
}

abstract class Conversa {
  id
  criadaEm : DateTime
}

class ConversaDireta
class Grupo {
  nome
}
class Canal {
  nome
}

class Participante {
  entrouEm : DateTime
}

class Mensagem {
  id
  texto
  enviadaEm : DateTime
  apagada : boolean
  apagadaEm : DateTime
}

class Anexo {
  id
  nomeArquivo
  tipo
  tamanhoBytes
  referenciaArmazenamento
}

class RegistroAuditoria {
  id
  evento : EventoAuditoria
  registradoEm : DateTime
}

class Notificacao {
  id
  canal : CanalNotificacao
  geradaEm : DateTime
  lida : boolean
}

Usuario "1" -down- "0..*" Participante
Participante "2..*" -right-* "1" Conversa
Conversa <|-down- ConversaDireta
Conversa <|-down- Grupo
Conversa <|-down- Canal
Conversa "1" *-right- "0..*" Mensagem
Usuario "1" -right- "0..*" Mensagem : autor
Mensagem "1" *-down- "0..*" Anexo
Mensagem "1" -down- "1..*" RegistroAuditoria
Usuario "1" -down- "0..*" PermissaoConvidado : recebe >
PermissaoConvidado "0..*" -right- "0..1" Conversa : escopo
PermissaoConvidado "0..*" -up- "1" Usuario : concedida por\n(Administrador) >
Notificacao "0..*" -left- "1" Usuario : destinatário
Notificacao "0..*" -down- "1" Mensagem : refere-se a

note as ENUMS
  <b>Enumerações</b>
  Perfil: ADMINISTRADOR, COLABORADOR, CONVIDADO
  TipoPermissao: PARTICIPAR_CANAL_GRUPO, ENVIAR_ANEXO,
    INICIAR_CONVERSA_1A1, VER_HISTORICO_ANTERIOR
  EventoAuditoria: ENVIADA, APAGADA
  CanalNotificacao: NO_APP, PUSH
end note
Anexo -[hidden]down- ENUMS

note right of Grupo
  Grupos e canais só são criados
  pelo Administrador (RN-006).
end note

note bottom of Usuario
  Contas só são criadas pelo Administrador (RN-001).
  Senha só é definida pelo Administrador (RN-002).
end note

note bottom of RegistroAuditoria
  Mensagens apagadas permanecem aqui (RN-009).
  Só o Administrador consulta (RN-007).
end note
@enduml
```

</details>

## 6.4 UML-03 Atividades: cadastro de usuário e primeiro acesso

- **Finalidade:** Descrever o caminho do cadastro pelo Administrador até o primeiro acesso, com aceite dos termos.
- **Elementos principais:** Raias Administrador, Colaborador ou Convidado e Sistema. Decisões sobre credenciais, aceite prévio e aceite dos termos.
- **Requisitos relacionados:** RF-001, RF-002, RF-004, RF-005, RN-001 a RN-003, RN-014.

![UML-03 Atividades: cadastro de usuário e primeiro acesso](diagramas/uml-03-atividades-cadastro-primeiro-acesso.png)

<details>
<summary>Código-fonte (PlantUML)</summary>

```plantuml
@startuml uml-03-atividades-cadastro-primeiro-acesso
title UML-03 - Atividades: cadastro de usuário e primeiro acesso
skinparam shadowing false
skinparam defaultFontName DejaVu Sans
skinparam ActivityBackgroundColor #FFFFFF
skinparam ActivityBorderColor #1F3A5F

|Administrador|
start
:Cadastrar usuário\n(nome, e-mail e perfil);
:Definir a senha inicial;
:Entregar as credenciais ao usuário\nfora do TeamTalk (RN-014);

|Colaborador ou Convidado|
:Informar e-mail e senha;

|Sistema|
if (Credenciais válidas?) then (não)
  :Exibir mensagem genérica de erro;
  stop
else (sim)
endif
if (Termos de uso já aceitos?) then (não)
  :Exibir os termos com o aviso\nde auditoria de mensagens;
  |Colaborador ou Convidado|
  if (Aceita os termos?) then (não)
    |Sistema|
    :Negar o acesso;
    stop
  else (sim)
    |Sistema|
    :Registrar o aceite;
  endif
else (sim)
endif
:Liberar o acesso conforme\no perfil e as permissões;
stop
@enduml
```

</details>

## 6.5 UML-04 Atividades: envio de mensagem

- **Finalidade:** Descrever o envio de uma mensagem, com checagem de permissão do Convidado, auditoria, entrega em tempo real e notificação.
- **Elementos principais:** Raias Usuário e Sistema. Decisões de autorização e permissão, atividades paralelas de entrega e notificação.
- **Requisitos relacionados:** RF-008, RF-012, RF-013, RF-015, RF-016, RF-017, RN-004, RN-005, RN-008.

![UML-04 Atividades: envio de mensagem](diagramas/uml-04-atividades-envio-mensagem.png)

<details>
<summary>Código-fonte (PlantUML)</summary>

```plantuml
@startuml uml-04-atividades-envio-mensagem
title UML-04 - Atividades: envio de mensagem com auditoria e notificação
skinparam shadowing false
skinparam defaultFontName DejaVu Sans
skinparam ActivityBackgroundColor #FFFFFF
skinparam ActivityBorderColor #1F3A5F

|Usuário|
start
:Escrever a mensagem\n(texto e/ou anexo);
:Enviar;

|Sistema|
if (Autenticado e participante da conversa?) then (não)
  :Recusar o envio e informar o motivo;
  stop
else (sim)
endif
if (Perfil Convidado?) then (sim)
  if (Ação permitida pelo Administrador\n(1:1, anexo, canal ou grupo)?) then (não)
    :Recusar o envio e informar\nque falta permissão;
    stop
  else (sim)
  endif
else (não)
endif
:Persistir a mensagem;
:Registrar a mensagem na auditoria;
fork
  :Entregar em tempo real\naos participantes online;
fork again
  :Gerar notificação no app e push\n(aviso genérico) para os participantes;
end fork

|Usuário|
:Ver a mensagem na conversa;
stop
@enduml
```

</details>

## 6.6 UML-05 Atividades: apagar mensagem e consulta pela auditoria

- **Finalidade:** Descrever o que ocorre quando um usuário apaga uma mensagem e como o Administrador a consulta depois, com o acesso registrado.
- **Elementos principais:** Raias Usuário (autor), Sistema e Administrador. Decisões de autoria e de perfil do solicitante.
- **Requisitos relacionados:** RF-014, RF-017, RF-018, RN-007 a RN-009, RNF-004.

![UML-05 Atividades: apagar mensagem e consulta pela auditoria](diagramas/uml-05-atividades-apagar-e-auditar.png)

<details>
<summary>Código-fonte (PlantUML)</summary>

```plantuml
@startuml uml-05-atividades-apagar-e-auditar
title UML-05 - Atividades: apagar mensagem própria e consulta pela auditoria
skinparam shadowing false
skinparam defaultFontName DejaVu Sans
skinparam ActivityBackgroundColor #FFFFFF
skinparam ActivityBorderColor #1F3A5F

|Usuário (autor)|
start
:Selecionar uma mensagem própria\ne pedir para apagá-la;

|Sistema|
if (Mensagem é do próprio usuário?) then (não)
  :Recusar a operação;
  stop
else (sim)
endif
:Marcar a mensagem como apagada;
:Deixar de exibir a mensagem\naos demais participantes;
:Manter a mensagem e os anexos\nno registro de auditoria;

|Administrador|
:Solicitar a consulta de mensagens auditadas;

|Sistema|
if (Solicitante é Administrador?) then (não)
  :Negar o acesso;
  stop
else (sim)
  :Registrar o acesso (RNF-004);
  :Exibir mensagens auditadas,\nincluindo as apagadas;
endif
stop
@enduml
```

</details>

## 6.7 UML-06 Diagrama de implantação

- **Finalidade:** Mostrar onde cada parte do sistema roda, na stack definida pelo grupo, e quais dependências de terceiros existem.
- **Elementos principais:** Dispositivo móvel (PWA), computador (aplicação web), Vercel (front-end Next.js), Supabase (PostgreSQL, Auth, Realtime, armazenamento de anexos) e serviços de push do navegador e do sistema. O armazenamento de anexos está em aberto (PD-09). A comunicação entre o front-end e o Supabase é hipótese de arquitetura.
- **Requisitos relacionados:** RS-001, RS-002, RNF-002, RNF-003, RNF-009, RNF-010, R-01, R-02.

![UML-06 Diagrama de implantação](diagramas/uml-06-implantacao.png)

<details>
<summary>Código-fonte (PlantUML)</summary>

```plantuml
@startuml uml-06-implantacao
title UML-06 - Diagrama de implantação (stack definida pelo grupo)
skinparam shadowing false
skinparam defaultFontName DejaVu Sans
skinparam nodeBackgroundColor #FFFFFF
skinparam nodeBorderColor #1F3A5F
skinparam cloudBackgroundColor #F4F7FB
skinparam cloudBorderColor #1F3A5F

node "Dispositivo móvel\n(Android ou iOS)" as MOB {
  artifact "PWA - layout mobile" as PWA
}

node "Computador\n(navegador desktop)" as DSK {
  artifact "Aplicação web - layout desktop" as WEB
}

cloud "Vercel" as VCL {
  node "Hospedagem do front-end" as VNODE {
    artifact "Aplicação Next.js / TypeScript" as APP
  }
}

cloud "Supabase" as SUP {
  database "PostgreSQL\n(usuários, mensagens,\nauditoria, RLS)" as DB
  component "Auth" as AUTH
  component "Realtime" as RT
  component "Armazenamento de anexos\n(a definir - PD-09)" as STO
}

cloud "Serviços de push do navegador\ne do sistema (terceiros - PD-08)" as PUSH

PWA --> APP : HTTPS
WEB --> APP : HTTPS
PWA ..> SUP : HTTPS / WSS\n(hipótese de arquitetura)
WEB ..> SUP : HTTPS / WSS\n(hipótese de arquitetura)
APP ..> PUSH : envia aviso genérico\n(sem conteúdo da mensagem)
PUSH ..> PWA : push
PUSH ..> WEB : push

AUTH -- DB
RT -- DB
STO -- DB

note bottom of SUP
  Vercel e Supabase são serviços de terceiros: ver R-01
  (tensão com a desconfiança da Shopee em relação a terceiros).
end note
@enduml
```

</details>

