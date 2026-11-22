# 8. Glossário e questões em aberto

Voltar ao [controle do documento](00-controle-do-documento.md).

## 8.1 Glossário

| Termo | Definição |
| --- | --- |
| A3 | Avaliação acadêmica de Engenharia de Software em que o projeto é entregue. |
| Administrador | Perfil que cria contas, define senhas, concede permissões ao Convidado, cria grupos e canais e consulta a auditoria. |
| Anexo | Arquivo enviado junto com uma mensagem. |
| Auditoria | Registro integral das mensagens do sistema, incluindo as apagadas pelos usuários. Só o Administrador consulta. |
| Big tech | Grande empresa de tecnologia dona de plataformas de comunicação. A Shopee não confia nelas (informado). |
| Canal | Espaço de comunicação criado pelo Administrador, por assunto ou área. |
| Colaborador | Usuário comum do setor estratégico. |
| Convidado | Consultor ou parceiro externo, com acesso limitado às permissões concedidas pelo Administrador. |
| Conversa 1:1 | Troca de mensagens entre dois usuários. |
| Grupo | Conversa entre vários usuários, criada pelo Administrador. |
| LGPD | Lei Geral de Proteção de Dados Pessoais. Citada como ponto a validar, sem análise jurídica neste documento. |
| MoSCoW | Método de priorização: Must, Should, Could e Won't. |
| MVP | Produto mínimo viável. O MVP proposto no `AGENTS.md` é menor que o escopo deste documento. |
| Notificação push | Aviso exibido pelo dispositivo quando o app está fechado. |
| PD | Pendência de decisão. |
| PO | Product Owner. |
| Decidido (delegado) | Decisão que Arthur pediu ao assistente tomar e explicar. Precisa de validação humana. |
| PWA | Aplicação web instalável no dispositivo. |
| RLS | *Row Level Security*, controle de acesso por linha no banco (Supabase/PostgreSQL). |
| RF, RNF, RN, RS | Requisito funcional, requisito não funcional, regra de negócio e restrição. |
| Setor estratégico | Diretoria e C-level, planejamento estratégico e inteligência de mercado da Shopee (informado). |
| Sprint inicial | Primeira sprint de entrega, com as funções primordiais (requisitos Must). Decidida em `[PD-13]`, com a lista exata a confirmar. |
| Supabase | Serviço de banco de dados, autenticação e tempo real usado na stack. |
| Vercel | Serviço de hospedagem do front-end usado na stack. |

## 8.2 Pendências: situação e decisões

**Situação:** *Decidido* (decisão de Arthur), *Decidido (delegado)* (Arthur pediu ao assistente decidir e explicar, a validar pelo líder técnico e pelo PO) ou *Parcial* (parte decidida e parte em aberto). A justificativa das decisões delegadas está na seção 8.3.

| ID | Pergunta | Decisão | Situação | Afeta |
| --- | --- | --- | --- | --- |
| PD-01 | O Administrador também conversa? | Sim, também conversa (1:1, grupos e canais). | Decidido | RF-008, RF-009, RF-012, UML-01 |
| PD-02 | Como nasce o primeiro Administrador, como ele recupera a senha e quem exerce o papel? | A equipe de desenvolvimento cria o primeiro Administrador no banco, fora da interface. Pode haver mais de um Administrador, e só um Administrador cria outro. A senha de um Administrador só é redefinida pela equipe, manualmente. Quem exerce o papel na Shopee é hipótese. | Decidido (delegado) | RN-013, RF-001 |
| PD-03 | Por qual canal a senha inicial chega ao usuário? | Entrega fora do TeamTalk, feita pelo Administrador. O sistema nunca exibe uma senha salva. | Decidido (delegado) | RN-014, RF-001, UML-03 |
| PD-04 | Quando os termos aparecem e quem os redige? | Primeiro acesso, com aceite explícito. A redação do texto dos termos ainda não foi definida: sem contato com a Shopee, será um texto modelo escrito pelo grupo. | Parcial | RF-005, RN-003, CA-005 |
| PD-05 | A retenção indefinida é aceitável? | Sim. A validação jurídica e de LGPD não foi feita. | Decidido | RN-011, RNF-006, R-04 |
| PD-06 | O acesso do Administrador à auditoria deve ser registrado? | Sim. Cada acesso é registrado. | Decidido | RNF-004, R-03 |
| PD-07 | Como tratar Vercel e Supabase serem terceiros? | Manter a stack, documentar os limites e adotar as mitigações da seção 8.3. | Decidido (delegado) | R-01, RS-001, UML-06 |
| PD-08 | Como tratar o push (terceiros e conteúdo)? | Web Push do navegador, com aviso genérico sem conteúdo. Sem permissão de notificações, o usuário vê os avisos dentro do app. | Decidido (delegado) | RF-016, RNF-007, UML-06 |
| PD-09 | Tipos de anexo, tamanho máximo e armazenamento? | Tamanho máximo de 15 MB. Tipos permitidos e local de armazenamento ficam em aberto. | Parcial | RF-013, UML-06 |
| PD-10 | Metas de latência, disponibilidade e backup? | 2 s para entregar mensagem, 3 s para o histórico, 50 usuários simultâneos como meta de teste, sem SLA e com o backup do plano do Supabase. | Decidido (delegado) | RNF-008, RNF-012, RNF-013 |
| PD-11 | Navegadores, versões mínimas e acessibilidade? | Android com Chrome, iOS 16.4 ou superior com Safari, Chrome e Edge no desktop. Contraste AA e alvos de toque de 44 px. | Decidido (delegado) | RNF-010, RNF-014 |
| PD-12 | Como o usuário escolhe o idioma? | Por preferência do usuário. | Decidido | RNF-011 |
| PD-13 | O escopo cabe no prazo e como distribuir por sprint? | Cabe. Uma única sprint inicial com as funções primordiais. Este documento interpreta "funções primordiais" como os requisitos Must (seção 3.4 do arquivo 03). A lista exata precisa de confirmação do PO e do líder técnico. | Parcial | RF-001 a RF-018, R-05 |
| PD-14 | O isolamento entre empresas e o cadastro de empresas ainda fazem sentido? | Descartados. O cliente é único. | Decidido | v0.4 RNF14, v0.4 PD-04, v0.4 PD-13 |
| PD-15 | Há contato real com a Shopee? | A Shopee é a cliente para o projeto, mas a equipe não tem contato com ela. Os dados dela são hipóteses. | Decidido | A-02, R-07 |
| PD-16 | A gestão de contas (editar e desativar) entra no escopo? | Não. O RF-006 foi retirado. | Decidido | RF-006, RN-016, R-08 |
| PD-17 | Itens do v0.4 não rediscutidos e chamadas de áudio e vídeo ficam fora? | Sim, ficam fora: presença, foto de perfil, departamentos, menções, busca e chamadas. | Decidido | Escopo |
| PD-18 | Qual o identificador de login e a política de senha? | E-mail único como login. Senha com no mínimo 12 caracteres, sem exigência de composição. | Decidido (delegado) | RN-015, RF-002 |
| PD-19 | Como corrigir um cadastro errado ou retirar o acesso de um Colaborador ou Administrador, já que não há edição nem desativação? | Proposta: o Convidado perde o acesso ao ter as permissões revogadas. Para os demais, a equipe corrige manualmente no banco. Não decidido. | Em aberto | R-08, RN-016 |

## 8.3 Justificativa das decisões delegadas

Estas decisões foram tomadas pelo assistente a pedido de Arthur. Ainda precisam de validação do líder técnico e do PO.

**PD-02 (primeiro Administrador).** A aplicação pertence à equipe (A-01), não há autocadastro e não há e-mail de recuperação. Por isso o primeiro Administrador não pode nascer pela interface: a equipe o cria direto no banco, por um procedimento que não deixe a senha no repositório, em linha com a regra do `AGENTS.md` de não publicar credenciais. Permitir mais de um Administrador evita que a perda de uma senha bloqueie o sistema. A senha do Administrador é redefinida só pela equipe, de forma manual, o que mantém a regra de que ninguém redefine a própria senha. O custo é depender da disponibilidade da equipe, aceitável num caso de estudo.

**PD-03 (senha inicial).** Como o usuário não troca a própria senha, ela precisa chegar a ele de algum modo. A entrega é feita pelo Administrador fora do TeamTalk, porque um convite por e-mail exigiria um provedor de e-mail, outra dependência de terceiro (R-01). O sistema guarda só o hash e nunca exibe a senha depois de salva (RNF-001), então a entrega acontece uma única vez, no cadastro. Limite: a segurança da entrega depende de quem a faz, e o sistema não controla isso.

**PD-07 (Vercel e Supabase).** Trocar a stack agora contradiz a decisão do grupo e o prazo, então ela é mantida (RS-001). Isso **não elimina** a dependência de terceiros, apenas a documenta e a reduz: o texto das mensagens fica no banco do Supabase e a Vercel só hospeda o front-end (hipótese de arquitetura, a detalhar pelo líder técnico), a autorização é aplicada no banco (RNF-002), o tráfego usa HTTPS (RNF-003) e todo acesso do Administrador à auditoria é registrado (RNF-004). Como evolução, o Supabase pode ser auto-hospedado, o que daria à Shopee controle da infraestrutura. Isso não faz parte do escopo.

**PD-08 (push).** O push de um PWA usa os serviços do navegador e do sistema operacional, ou seja, terceiros, e isso não tem como ser evitado. A mitigação é enviar só um aviso genérico, sem texto e sem remetente (RNF-007). Se o usuário negar a permissão, ele continua vendo os avisos dentro do app. No iOS, o push exige o app instalado na tela inicial, a partir do iOS 16.4, o que precisa ser confirmado em teste.

**PD-10 (metas).** Não há dados da Shopee. Usei os valores já propostos no v0.4 (2 s e 3 s) e adotei 50 usuários simultâneos como meta de teste, coerente com "dezenas". Não defini disponibilidade, porque um projeto acadêmico não tem SLA. O backup é o do plano do Supabase. São metas de teste e podem mudar.

**PD-11 (navegadores e acessibilidade).** A matriz é a menor possível que cobre Android e iOS e que sete estudantes conseguem testar. Chrome e Edge são obrigatórios no desktop. Firefox e Safari ficam em melhor esforço. Para acessibilidade, mantive os valores do v0.4 (contraste AA e alvos de toque de 44 px).

**PD-18 (login e senha).** O e-mail como login é o mais simples na stack aprovada, sem criar um identificador novo. A senha tem no mínimo 12 caracteres e nenhuma regra de composição. Como o usuário nunca troca a senha e não há segundo fator no escopo, o comprimento é a defesa principal. A orientação atual do NIST prefere comprimento a regras de composição, que aumentam o atrito sem ganho proporcional.

## 8.4 Decisões desta versão em relação ao rascunho v0.4 (`docs/REQUIREMENTS.md`)

O v0.4 foi escrito para um cliente genérico, com foco em smartphone. As posições abaixo, desta versão, **passam a valer como decisões**, conforme Arthur. O líder técnico e o PO ainda precisam validá-las antes de integrar este documento, pois alterações de escopo exigem essa validação (`AGENTS.md`).

| # | Tema | Posição do v0.4 | Decisão desta versão |
| --- | --- | --- | --- |
| 1 | Cliente | Empresas em geral. | Shopee, setor estratégico, como caso de estudo sem contato. |
| 2 | Perfil Convidado | Fora do MVP (PD-03 do v0.4). | No escopo, com permissões concedidas pelo Administrador. |
| 3 | Leitura de conversas pelo Administrador | Não (PD-08 e RNF15 do v0.4: conversa privada só pelos participantes). | O Administrador consulta todas as mensagens auditadas, com cada acesso registrado. O RNF15 do v0.4 deixa de valer. |
| 4 | Criação de contas e senhas | Convite por e-mail e o usuário define a própria senha (RF01). Redefinição por e-mail (RF03) e alteração da própria senha (RF04). | O Administrador cria a conta e define a senha. Colaborador e Convidado não redefinem nem alteram senha. RF03 e RF04 do v0.4 deixam de valer para esses perfis. |
| 5 | Criação de grupos | Qualquer colaborador cria (RN07). | Somente o Administrador (RN-006). |
| 6 | Canais, grupos, anexos e push | Could, fora das Sprints 1 e 2. | No escopo. Entram depois da sprint inicial, que tem as funções Must. |
| 7 | Edição e exclusão de mensagens | Backlog pós-MVP. | Apagar entra no escopo. Editar está fora. |
| 8 | Isolamento entre empresas e cadastro de empresas | RNF14 (Must). | Descartados (PD-14). |
| 9 | Plataformas | Apenas smartphone, a partir de 360 px (RNF09). | Layout mobile e layout desktop, diferentes, em Android e iOS (RNF-009, RNF-010). |
| 10 | Domínio de e-mail da empresa | RN01: só e-mail do domínio oficial. | Não se aplica. O login é o e-mail do usuário e o Convidado é externo. |
| 11 | Idiomas | Não tratado. | Português e inglês, por preferência do usuário. |
| 12 | Auditoria e retenção | Não tratados. | Auditoria integral e retenção indefinida. |
| 13 | Gestão de contas | RF15: editar e desativar, com as RN06 e RN09. | Fora do escopo (PD-16). RN06 e RN09 do v0.4 deixam de valer. |
| 14 | Itens do v0.4 (presença, foto, departamentos, menções, busca) | Parte do rascunho ou do backlog. | Fora do escopo (PD-17). |
| 15 | Administrador em conversas | PD-15 do v0.4 propunha que sim. | Sim (PD-01). |

Identificadores: este documento usa o formato RF-001, RNF-001 e RN-001. Eles **não coincidem** com RF01, RNF01 e RN01 do v0.4.

## 8.5 Próximos passos sugeridos

1. Revisar este documento com Arthur Fonseca e Julia.
2. Levar ao líder técnico e ao PO a divisão da sprint inicial (`[PD-13]`), as decisões delegadas (seção 8.3) e as pendências em aberto: texto dos termos (`[PD-04]`), tipos de anexo e armazenamento (`[PD-09]`) e a correção de contas (`[PD-19]`).
3. Só depois, abrir um Pull Request em branch própria, conforme o `AGENTS.md`.
