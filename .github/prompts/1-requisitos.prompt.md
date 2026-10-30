---
name: 1-requisitos
description: "Fase 1 do SDD: transforma a IDEIA.md em specs/requirements.md"
argument-hint: "(opcional) detalhes extras sobre a ideia"
agent: agent
---

Você está na **fase 1 de 3 da especificação: Requisitos**. O objetivo é descrever **o que** o sistema deve fazer, e nada sobre **como** fazer.

- **Entrada:** [IDEIA.md](../../IDEIA.md) e qualquer detalhe extra que o aluno tenha escrito depois do comando.
- **Saída:** o arquivo `specs/requirements.md`. Crie o arquivo; se ele já existir, reescreva mantendo as decisões que o aluno já tomou.

## Regras

- Siga as [regras de escrita de specs](../instructions/specs.instructions.md).
- **Não crie nem altere nenhum arquivo de código.**
- Seja enxuto: de 5 a 7 requisitos, com 2 a 5 critérios de aceitação cada. O projeto inteiro precisa ser construído em cerca de 15 minutos.
- Tudo o que a ideia marca como fora do escopo vai para a seção "Fora do escopo".
- Quando a ideia for ambígua, escolha a opção mais simples e registre a escolha em "Suposições".

## Estrutura do arquivo

Use exatamente esta estrutura:

```markdown
# Requisitos: <nome do projeto>

## Introdução
<2 ou 3 frases: o que é, para quem é e qual é a graça>

## Glossário
- **<Termo>**: <definição curta>

## Requisitos

### Requisito 1: <título curto>
**História de usuário:** Como <papel>, quero <ação>, para que <benefício>.

**Critérios de aceitação**
- **1.1** QUANDO <evento>, O SISTEMA DEVE <comportamento observável>.
- **1.2** ...

## Fora do escopo
- ...

## Suposições
- ...
```

## Ao terminar

Responda no chat em no máximo 8 linhas:

1. a lista dos requisitos criados (só os títulos);
2. **até 3 pontos que o aluno deveria revisar**, como ambiguidades ou decisões que você assumiu;
3. este lembrete: "Revise o arquivo, refine pelo chat se quiser e faça commit antes de rodar `/2-design`."
