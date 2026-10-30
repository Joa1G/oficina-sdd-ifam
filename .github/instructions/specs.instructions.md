---
applyTo: "specs/**"
description: "Regras de escrita para os arquivos de especificação em specs/"
---

# Como escrever specs neste projeto

- Escreva em português do Brasil, com frases curtas.
- **Não escreva código nas specs.** Nomes de arquivos, funções e constantes podem aparecer. Em `design.md`, trechos curtos de assinatura ou do formato do `CONFIG` também podem.
- Numere tudo para permitir rastreabilidade:
  - requisitos: `Requisito N`;
  - critérios de aceitação: `N.M`;
  - tarefas: `N`.
- Os critérios de aceitação seguem o padrão EARS, com as palavras-chave em maiúsculas:
  - `O SISTEMA DEVE <comportamento>`, para o que vale sempre;
  - `QUANDO <evento>, O SISTEMA DEVE <comportamento>`;
  - `ENQUANTO <estado>, O SISTEMA DEVE <comportamento>`;
  - `SE <situação indesejada>, ENTÃO O SISTEMA DEVE <comportamento>`.
- Cada critério precisa ser **verificável jogando**. Evite "rápido", "bonito" e "intuitivo"; descreva comportamentos observáveis.
- Números que fazem parte da regra do jogo (3 vidas, +1 ponto) podem aparecer nos requisitos. Valores de ajuste fino (px/s, tamanhos, cores, intervalos) ficam na tabela do `CONFIG` em `design.md`.
- Em diagramas Mermaid, use IDs de nó simples (sem acentos nem espaços) e coloque o texto entre aspas: `A["Tela inicial"]`.
