# Ideia: Chuva de Bugs

> Este é o ponto de partida da especificação. Está escrito como você explicaria o projeto para um colega, sem pensar em código.
> Quer personalizar? Mude o tema **antes** de rodar `/1-requisitos` (troque ☕/🐛 por 🍕/🥦 ou ⭐/☄️, por exemplo), mas mantenha a mecânica simples.

## Em uma frase

Um jogo de navegador em que um dev coleta cafés e desvia dos bugs que caem do céu.

## Como funciona

- O jogador controla o **dev** 🧑‍💻, que fica na parte de baixo da tela e anda só para a esquerda e para a direita (setas ← → ou teclas A/D).
- Do topo caem dois tipos de item, em posições aleatórias:
  - ☕ **café**: ao pegar, o jogador ganha 1 ponto;
  - 🐛 **bug**: ao encostar, o jogador perde 1 vida.
- O jogador começa com 3 vidas. Itens que chegam ao chão somem sem efeito.
- Com o tempo, os itens caem mais rápido e com mais frequência.
- O jogo tem três telas:
  - **início**: nome do jogo e "pressione Espaço para começar";
  - **jogando**: pontos e vidas no topo;
  - **fim de jogo**: pontuação, recorde e "pressione Espaço para jogar de novo".
- O recorde fica salvo no navegador, mesmo depois de fechar a página.

## Visual

Fundo escuro, como um editor de código. O personagem e os itens são desenhados com emojis. A área do jogo tem tamanho fixo e fica centralizada na página.

```text
 ☕ 12                       ❤️❤️❤️
 ───────────────────────────────────
          🐛
                     ☕
     ☕                        🐛
                🐛


               🧑‍💻
 ───────────────────────────────────
```

## Fora do escopo

Som, música, multiplayer, login, ranking online e níveis/fases.
