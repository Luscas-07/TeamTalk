# 0. Controle do documento

## 0.1 Identificação

| Campo | Valor |
| --- | --- |
| Título do projeto | TeamTalk: sistema de comunicação corporativa para o setor estratégico da Shopee |
| Título do documento | Documento de Requisitos de Software |
| Identificador | TT-REQ-001 |
| Versão | 0.6 (rascunho) |
| Data | 21/11/2026 |
| Status | Rascunho aguardando validação do PO e do líder técnico. As pendências decididas e as ainda abertas estão em [Glossário e questões em aberto](08-glossario-e-questoes-em-aberto.md). |
| Responsáveis | Arthur Fonseca (Requisitos e UML), com Julia (Requisitos e UML, conforme a divisão de funções do repositório) |
| Product Owner | Breno Oliveira |
| Líder técnico | Lucas (`@Luscas-07`) |
| Repositório | `Luscas-07/TeamTalk` (https://github.com/Luscas-07/TeamTalk) |
| Contexto | Projeto acadêmico A3 de Engenharia de Software, UNIFACS. Metodologia ágil, Scrum. |
| Elaboração | Texto produzido com apoio de um assistente de IA, a partir das informações e decisões passadas por Arthur Fonseca nesta sessão e dos documentos do repositório. As decisões que Arthur delegou ao assistente estão marcadas como *decidido (delegado)* e precisam de validação humana. Requer revisão humana antes de integração via Pull Request. |

## 0.2 Fontes consultadas

| Fonte | Uso |
| --- | --- |
| Informações e decisões passadas por Arthur Fonseca nesta sessão | Fonte principal das decisões deste documento (cliente, setor, perfis, regras, funcionalidades, diagramas e respostas às pendências). |
| `docs/REQUIREMENTS.md` v0.4, branch `docs/issue-1-requisitos` | Rascunho anterior da equipe. Algumas decisões dele mudam com o escopo da Shopee. A lista de divergências está em [Glossário e questões em aberto](08-glossario-e-questoes-em-aberto.md). |
| `AGENTS.md` e documentos de `docs/`, branch `docs/sprint-0-requisitos` | Papéis, convenções de trabalho, stack aprovada e MVP proposto. |
| `README.md` da `main` | Descrição geral do projeto. |

Não há dados oficiais da Shopee e a equipe não tem contato com ela. Tudo o que é específico da empresa é tratado como **hipótese** (ver `[PD-15]`).

## 0.3 Histórico de alterações

| Versão | Data | Autor | Descrição |
| --- | --- | --- | --- |
| 0.1 | Não registrada | Arthur Fonseca | Rascunho inicial (conforme o histórico do v0.4). |
| 0.2 | Não registrada | Não registrado no v0.4 | Contradições resolvidas, acréscimo de RF17 a RF20, glossário, prioridade, critérios de aceitação e pendências (conforme o histórico do v0.4). |
| 0.3 | 01/11/2026 | Não registrado no v0.4 | Alinhamento ao MVP do `AGENTS.md` (conforme o histórico do v0.4). |
| 0.4 | 06/11/2026 | Responsáveis pelos requisitos (conforme o cabeçalho do v0.4) | Conferência com o planejamento de sprints e rastreabilidade com a Issue #1 (conforme o v0.4). |
| 0.5 | 13/11/2026 | Arthur Fonseca, com apoio de IA | Reestruturação para o cliente Shopee (setor estratégico). Novos perfis e regras de acesso, auditoria integral, layouts mobile e desktop, notificações push, idiomas, rastreabilidade e diagramas UML (casos de uso, classes, atividades e implantação). Este documento **não substitui** o `docs/REQUIREMENTS.md` v0.4 enquanto o PO e o líder técnico não validarem as divergências. |
| 0.6 | 21/11/2026 | Arthur Fonseca, com apoio de IA | Incorporadas as decisões de Arthur sobre as pendências do v0.5: o Administrador também conversa; termos no primeiro acesso; retenção indefinida aceita; registro de acessos à auditoria; anexos de até 15 MB; idioma por preferência do usuário; sprint inicial única com as funções primordiais; isolamento entre empresas descartado; gestão de contas (editar e desativar) fora do escopo; itens do v0.4 não rediscutidos fora do escopo; Shopee como caso de estudo sem contato. Decisões delegadas ao assistente: primeiro Administrador, entrega da senha inicial, Vercel e Supabase, push, metas de desempenho, navegadores e acessibilidade, política de senha. Divergências com o v0.4 passam a valer como decisões desta versão. |

## 0.4 Aprovação e validação

| Papel | Nome | Situação | Data | Observações |
| --- | --- | --- | --- | --- |
| Product Owner | Breno Oliveira | Pendente | | Validar prioridades e escopo. |
| Líder técnico | Lucas (`@Luscas-07`) | Pendente | | Validar viabilidade, stack e divergências com o MVP do `AGENTS.md`. |
| Requisitos e UML | Arthur Fonseca | Pendente | | Revisão final do texto. |
| Requisitos e UML | Julia | Pendente | | Revisão final do texto. |

## 0.5 Como ler este documento

- Os arquivos são numerados e se referenciam por links relativos. O PDF reúne todos eles.
- Cada item informa sua **origem**: *informado* (dito por Arthur nesta sessão), *decidido* (decisão de Arthur sobre uma pendência), *decidido (delegado)* (decisão que Arthur pediu ao assistente tomar, a validar), *herdado* (veio do v0.4 e não foi rediscutido), *proposta* (recomendação ainda não validada) ou *hipótese* (premissa sem confirmação).
- Prioridades seguem MoSCoW (Must, Should, Could, Won't) e são **propostas** a validar pelo PO.
- Valores numéricos têm origem declarada. Os que não vêm de dados da Shopee (que não existem) são metas de teste, ajustáveis.

## 0.6 Índice dos arquivos

| Arquivo | Conteúdo |
| --- | --- |
| [00-controle-do-documento.md](00-controle-do-documento.md) | Este arquivo. |
| [01-visao-geral-e-escopo.md](01-visao-geral-e-escopo.md) | Contexto, escopo, premissas, restrições, dependências e riscos. |
| [02-objetivos.md](02-objetivos.md) | Objetivo geral e objetivos específicos. |
| [03-requisitos-funcionais.md](03-requisitos-funcionais.md) | Requisitos funcionais RF-001 a RF-018 (RF-006 retirado). |
| [04-requisitos-nao-funcionais.md](04-requisitos-nao-funcionais.md) | Requisitos não funcionais RNF-001 a RNF-014. |
| [05-regras-de-negocio-e-restricoes.md](05-regras-de-negocio-e-restricoes.md) | Regras de negócio RN-001 a RN-016 e restrições RS-001 a RS-004. |
| [06-diagramas-uml.md](06-diagramas-uml.md) | Diagramas de casos de uso, classes, atividades e implantação, com código-fonte. |
| [07-rastreabilidade-e-criterios-de-aceitacao.md](07-rastreabilidade-e-criterios-de-aceitacao.md) | Critérios de aceitação e matriz de rastreabilidade. |
| [08-glossario-e-questoes-em-aberto.md](08-glossario-e-questoes-em-aberto.md) | Glossário, pendências (decididas e em aberto) e decisões em relação ao v0.4. |
