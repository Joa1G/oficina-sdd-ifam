---
name: 2-design
description: "Fase 2 do SDD: gera specs/design.md a partir dos requisitos"
argument-hint: "(opcional) preferências técnicas"
agent: agent
---

Você está na **fase 2 de 3 da especificação: Design**. O objetivo é decidir **como** os requisitos serão atendidos, antes de escrever qualquer código.

- **Entrada:** [specs/requirements.md](../../specs/requirements.md) e as [instruções do projeto](../copilot-instructions.md). A stack é fixa.
- **Saída:** o arquivo `specs/design.md`.

## Regras

- Siga as [regras de escrita de specs](../instructions/specs.instructions.md).
- **Não crie nem altere arquivos de código.** Dentro do design, trechos curtos (assinaturas, formato do `CONFIG`) são permitidos.
- Use no máximo 6 arquivos de código. Simples é melhor que elegante.
- Cada componente indica quais critérios atende (ex.: `Atende: 1.1, 2.3`), e todo critério precisa ser atendido por algum componente.

## Estrutura do arquivo

```markdown
# Design: <nome do projeto>

## Visão geral
<3 a 5 frases>

## Decisões técnicas
| Decisão | Escolha | Por quê |
|---|---|---|

## Arquitetura
<diagrama Mermaid `flowchart` mostrando os módulos e quem usa quem>

## Estrutura de arquivos
<árvore de arquivos, com 1 linha de descrição para cada um>

## Componentes
### `<arquivo>`: <nome>
- **Responsabilidade:** ...
- **Estado:** ...
- **Funções principais:** `nome(parametros)`: o que faz
- **Atende:** 1.1, 1.2

## Configuração central (`CONFIG` em `src/config.js`)
| Constante | Valor inicial | Para que serve | Atende |
|---|---|---|---|

## Fluxo
<se houver estados (ex.: início → jogando → fim de jogo), um diagrama Mermaid `stateDiagram-v2`; depois, o passo a passo do que acontece em um quadro do loop principal>

## Propriedades de corretude
<de 4 a 6 regras que precisam valer SEMPRE, no formato "Para qualquer <situação>, <propriedade>. (Valida: N.M)">
<exemplo: "Para qualquer quadro, o jogador fica dentro dos limites da tela. (Valida: 2.3)">

## Casos limite
- ...
```

## Ao terminar

Responda no chat em no máximo 8 linhas:

1. um resumo da arquitetura;
2. os critérios que ficaram sem componente, se houver algum;
3. este lembrete: "Revise, refine pelo chat se quiser e faça commit antes de rodar `/3-tarefas`."
