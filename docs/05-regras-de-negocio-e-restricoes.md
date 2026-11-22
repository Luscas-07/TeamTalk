# 5. Regras de negócio e restrições

Voltar ao [controle do documento](00-controle-do-documento.md). Requisitos que aplicam estas regras em [Requisitos funcionais](03-requisitos-funcionais.md) e em [Requisitos não funcionais](04-requisitos-nao-funcionais.md).

## 5.1 Regras de negócio

| ID | Regra | Relacionados | Origem |
| --- | --- | --- | --- |
| RN-001 | Contas só podem ser criadas pelo Administrador (Colaborador, Convidado ou outro Administrador). O Colaborador e o Convidado não se cadastram sozinhos. | RF-001, RF-002, RF-004 | Informado |
| RN-002 | Senhas de Colaboradores e Convidados só podem ser definidas e alteradas pelo Administrador. Eles não redefinem nem alteram a própria senha. A senha do Administrador segue a RN-013. | RF-001, RF-003, RF-004, RNF-001 | Informado |
| RN-003 | O Colaborador e o Convidado são informados, pelos termos e condições de uso, de que as mensagens são auditadas. Os termos aparecem no primeiro acesso e exigem aceite explícito. | RF-005 | Informado e decidido (PD-04) |
| RN-004 | O Convidado é um consultor ou parceiro externo. Seu acesso fica restrito às permissões concedidas pelo Administrador. | RF-007, RF-008, RF-012 | Informado |
| RN-005 | As permissões que o Administrador pode conceder ao Convidado são: participar de canais e grupos específicos, enviar anexos, iniciar conversas 1:1 e ver o histórico anterior à sua entrada. | RF-007, RF-008, RF-009, RF-012, RF-013 | Informado |
| RN-006 | Somente o Administrador cria grupos e canais. Colaboradores e Convidados não criam. | RF-010, RF-011 | Informado |
| RN-007 | Somente o Administrador acessa as mensagens auditadas. | RF-018, RNF-002 | Informado |
| RN-008 | A auditoria abrange conversas 1:1, grupos, canais, anexos e mensagens apagadas pelo usuário. | RF-013, RF-014, RF-017 | Informado |
| RN-009 | A mensagem apagada pelo usuário deixa de ser exibida aos demais participantes e permanece na auditoria. | RF-014, RF-017 | Informado |
| RN-010 | Não há edição de mensagens nesta versão. | Fora do escopo | Informado |
| RN-011 | As mensagens auditadas são guardadas por tempo indeterminado, sem prazo de retenção. | RF-017, RNF-006 | Informado e decidido (PD-05) |
| RN-012 | O uso entregue neste projeto é o do setor estratégico da Shopee: diretoria e C-level, planejamento estratégico e inteligência de mercado. | Escopo | Informado |
| RN-013 | O primeiro Administrador é criado pela equipe de desenvolvimento diretamente no banco, fora da interface. A senha de um Administrador só é redefinida pela equipe, por procedimento manual. A Shopee, que é a cliente, indicaria quem exerce o papel (hipótese, sem contato). | RF-001, RN-001, RN-002 | Decidido (delegado, PD-02) |
| RN-014 | O Administrador entrega a senha inicial ao usuário por um canal fora do TeamTalk, nunca por conversa do sistema. O sistema nunca exibe uma senha já salva. | RF-001, RF-003, RNF-001 | Decidido (delegado, PD-03) |
| RN-015 | O identificador de login é o e-mail, único por conta. A senha tem no mínimo 12 caracteres, sem exigência de composição. | RF-001, RF-002, RF-003 | Decidido (delegado, PD-18) |
| RN-016 | A gestão de contas está fora do escopo: contas não são editadas nem desativadas pela interface. | Fora do escopo, R-08 | Decidido (PD-16) |

As regras RN-001 e RN-002 valem para Colaborador e Convidado, **não** para o Administrador. O primeiro Administrador e a senha dele seguem a RN-013.

## 5.2 Restrições

| ID | Restrição | Origem |
| --- | --- | --- |
| RS-001 | Stack e hospedagem definidas pelo grupo: Next.js, TypeScript, Supabase (PostgreSQL, Auth, Realtime, RLS), Vercel e GitHub. | Informado |
| RS-002 | Produto web instalável como PWA. | Herdado (decisão com o líder técnico) |
| RS-003 | Prazo da A3 em dezembro de 2026 (data exata não informada). Equipe de sete pessoas. Uma única sprint inicial entrega as funções primordiais (`[PD-13]`). | Informado e decidido |
| RS-004 | Processo do repositório: não desenvolver na `main`, uma branch por Issue, mudanças por Pull Request com revisão humana, e alterações de escopo validadas pelo líder técnico e pelos responsáveis pelos requisitos (`AGENTS.md`). | Documento do repositório |

## 5.3 Observação

RS-001 e RS-002 foram decididos pelo grupo antes do cliente Shopee. Mantê-los é uma decisão delegada (`[PD-07]`), com os limites e as mitigações descritos em R-01 e em [Glossário e questões em aberto](08-glossario-e-questoes-em-aberto.md).
