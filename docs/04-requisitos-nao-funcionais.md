# 4. Requisitos não funcionais

Voltar ao [controle do documento](00-controle-do-documento.md). Requisitos funcionais em [Requisitos funcionais](03-requisitos-funcionais.md).

**Convenções.** *Origem*: informado, decidido (decisão de Arthur), decidido (delegado) (decisão que Arthur pediu ao assistente tomar, a validar), herdado (do v0.4) e proposta. Prioridade MoSCoW **proposta**. Não há dados da Shopee, então os valores numéricos são **metas de teste**, com origem declarada e ajustáveis. Estimativa de uso: **dezenas de usuários** (*informado*).

## 4.1 Segurança e privacidade

| ID | Categoria | Descrição | Justificativa | Verificação | Prioridade | Origem |
| --- | --- | --- | --- | --- | --- | --- |
| RNF-001 | Segurança | As senhas devem ser armazenadas somente como hash com algoritmo reconhecido. Nenhuma tela ou consulta deve exibir uma senha já definida, nem para o Administrador. | O Administrador define as senhas (RN-002). Sem esse requisito, ele poderia ler credenciais de outros usuários. | Inspeção do armazenamento e teste de que nenhuma consulta retorna a senha. | Must | Herdado (v0.4, RNF01), ampliado como proposta |
| RNF-002 | Segurança | A autorização deve ser aplicada no servidor ou no banco (no Supabase, por RLS), e nunca apenas na interface. Isso inclui: acesso à auditoria só pelo Administrador, limites do Convidado e isolamento entre conversas. | Evita burlar regras por requisição direta. Alinhado ao `AGENTS.md`. | Testes de acesso direto à API e ao banco com cada perfil. | Must | Herdado (v0.4, RNF03), alinhado ao `AGENTS.md` |
| RNF-003 | Segurança | A comunicação entre dispositivos e servidor deve usar HTTPS. | Exigência de PWA e proteção em trânsito. | Verificação do certificado e da ausência de HTTP. | Must | Herdado (v0.4, RNF13) |
| RNF-004 | Privacidade | O sistema deve registrar cada acesso do Administrador às mensagens auditadas (quem acessou, quando e o que consultou). | O Administrador lê tudo e nada controla o próprio Administrador (R-03). A promessa do produto é confiança. | Consulta do registro após acessos de teste. | Must | Decidido (PD-06) |
| RNF-005 | Integridade | Colaboradores e Convidados não devem conseguir alterar nem excluir definitivamente registros de auditoria, mensagens apagadas ou anexos auditados. | Garante a auditoria integral (RN-008, RN-009). | Tentativa de alteração e exclusão por Colaborador e Convidado, direta e pela interface. | Must | Informado (decorre da auditoria integral) |
| RNF-006 | Privacidade | As mensagens auditadas são guardadas por tempo indeterminado, sem prazo de retenção. A validação jurídica e de LGPD não foi feita, pois não há contato com a Shopee. | Retenção sem prazo e coleta de dados pessoais. Arthur aceitou a retenção indefinida (PD-05). | Revisão pelo PO. Sem verificação técnica. | Must | Decidido (PD-05) |
| RNF-007 | Privacidade | A notificação push deve exibir apenas um aviso genérico de nova mensagem, sem o texto e sem o nome do remetente ou da conversa. | Reduz o vazamento por serviços de push de terceiros (R-02). | Inspeção da notificação recebida em Android, iOS e desktop. | Must | Decidido (delegado, PD-08) |

## 4.2 Desempenho e confiabilidade

| ID | Categoria | Descrição | Justificativa | Verificação | Prioridade | Origem |
| --- | --- | --- | --- | --- | --- | --- |
| RNF-008 | Desempenho | Uma mensagem enviada deve aparecer para os participantes online em até 2 segundos, em conexão estável. Como alvo de teste, o sistema deve suportar 50 usuários simultâneos (dezenas, conforme informado). | Tempo real é a razão de ser de um app de mensagens. Os 2 segundos vêm do v0.4 e os 50 usuários são uma meta de teste, não um dado da Shopee. | Teste de envio e recebimento com 50 usuários simulados. | Must | Herdado (v0.4, RNF05) e decidido (delegado, PD-10) |
| RNF-012 | Desempenho | O histórico de uma conversa deve ser carregado em até 3 segundos após abri-la, em conexão estável. | Uso diário da conversa. Valor herdado do v0.4. | Medição em conversa com histórico de teste. | Should | Herdado (v0.4, RNF06) e decidido (delegado, PD-10) |
| RNF-013 | Confiabilidade | Não há meta formal de disponibilidade. O sistema deve usar o backup oferecido pelo plano do Supabase contratado e documentar como restaurá-lo. | É um projeto acadêmico, sem SLA e sem dados da Shopee. O backup depende do plano. | Verificar o plano contratado e testar uma restauração, se o plano permitir. | Should | Decidido (delegado, PD-10) |

## 4.3 Usabilidade, compatibilidade e localização

| ID | Categoria | Descrição | Justificativa | Verificação | Prioridade | Origem |
| --- | --- | --- | --- | --- | --- | --- |
| RNF-009 | Usabilidade | O sistema deve oferecer um layout para celular e outro, diferente, para computador, no mesmo sistema (A-03). | Há uma versão exclusiva para cada plataforma. | Inspeção em tela de celular e de computador, comparando os dois layouts. | Must | Informado |
| RNF-010 | Compatibilidade | **Mobile:** Android com o Chrome estável recente, e iOS 16.4 ou superior com o Safari, com o app instalado na tela inicial (PWA). **Desktop:** versões estáveis recentes do Chrome e do Edge, obrigatórias, e do Firefox e do Safari, em melhor esforço. A exigência de iOS 16.4 se deve ao push em web apps instalados e precisa ser confirmada em teste. | Cobre o que foi informado (Android e iOS) com o menor conjunto de navegadores que a equipe consegue testar. | Teste em um dispositivo Android, um iOS e nos navegadores listados. | Must | Informado (Android e iOS) e decidido (delegado, PD-11) |
| RNF-011 | Localização | A interface deve estar disponível em português e em inglês. O idioma é escolhido pelo usuário, como preferência. | Idiomas informados. A escolha por preferência foi decidida por Arthur (PD-12). | Verificar que todos os textos aparecem nos dois idiomas e que a escolha é mantida. | Should | Informado e decidido (PD-12) |
| RNF-014 | Acessibilidade | O contraste do texto deve atender ao nível AA da WCAG e os alvos de toque no mobile devem ter pelo menos 44 por 44 pixels. | Uso em celular por executivos e consultores. Valores herdados do v0.4. | Verificação de contraste e de tamanho de alvos nas telas principais. | Should | Herdado (v0.4, RNF09) e decidido (delegado, PD-11) |

## 4.4 Origem dos valores

Os valores numéricos deste capítulo (2 segundos, 3 segundos, 50 usuários simultâneos, 44 pixels, contraste AA, iOS 16.4) são **metas de teste** adotadas por decisão delegada (`[PD-10]`, `[PD-11]`) ou herdadas do v0.4. Nenhum vem de dados da Shopee, que não existem. Podem ser ajustados pelo PO e pelo líder técnico.
