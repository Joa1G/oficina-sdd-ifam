# Requisitos: Chuva de Bugs

## Introdução
Este projeto é um jogo de navegador em que o jogador controla um dev que coleta cafés e evita bugs caindo do céu. A proposta é simples, rápida e viciante, com objetivo de marcar pontos, sobreviver e manter o recorde salvo no navegador.

## Glossário
- **Dev**: personagem controlado pelo jogador na parte inferior da tela.
- **Café**: item valioso que adiciona 1 ponto ao jogador ao ser coletado.
- **Bug**: item que causa dano ao jogador ao encostar nele.
- **Recorde local**: maior pontuação salva no navegador do jogador, sem uso de servidor.
- **Tela de fim de jogo**: estado final em que a partida termina e é exibida a pontuação e o recorde.

## Requisitos

### Requisito 1: Iniciar uma partida
**História de usuário:** Como jogador, quero iniciar uma partida com o teclado, para começar a jogar imediatamente.

**Critérios de aceitação**
- **1.1** QUANDO a página for carregada, O SISTEMA DEVE exibir uma tela de início com o nome do jogo e a instrução para pressionar Espaço.
- **1.2** QUANDO o jogador pressionar a tecla Espaço na tela de início, O SISTEMA DEVE iniciar a partida e mostrar a tela de jogo.
- **1.3** QUANDO a partida estiver em andamento, O SISTEMA DEVE ocultar a tela de início e exibir informações visíveis do jogo, como pontuação e vidas.

### Requisito 2: Controlar o dev
**História de usuário:** Como jogador, quero mover o dev para a esquerda e para a direita com o teclado, para desviar dos itens e alcançar os cafés.

**Critérios de aceitação**
- **2.1** QUANDO o jogador pressionar as teclas A/D ou as setas esquerda/direita, O SISTEMA DEVE mover o dev na direção correspondente.
- **2.2** QUANDO o jogador mantiver a tecla de movimento pressionada, O SISTEMA DEVE continuar o movimento enquanto a tecla permanecer ativa.
- **2.3** QUANDO o dev atingir os limites laterais da área de jogo, O SISTEMA DEVE impedir que ele saia da tela.
- **2.4** QUANDO o jogador tentar controlar o dev por outro tipo de entrada, O SISTEMA DEVE ignorar esse comando e manter o controle por teclado como entrada válida.

### Requisito 3: Gerenciar itens que caem
**História de usuário:** Como jogador, quero coletar cafés e evitar bugs, para ganhar pontos e preservar minhas vidas.

**Critérios de aceitação**
- **3.1** QUANDO a partida começar, O SISTEMA DEVE gerar café e bug em posições aleatórias na parte superior da área de jogo.
- **3.2** QUANDO um café alcançar o dev, O SISTEMA DEVE somar 1 ponto ao jogador e remover o café da tela.
- **3.3** QUANDO um bug alcançar o dev, O SISTEMA DEVE reduzir em 1 a quantidade de vidas do jogador e remover o bug da tela.
- **3.4** QUANDO um item alcançar o chão sem contato com o dev, O SISTEMA DEVE removê-lo da tela sem alterar a pontuação ou as vidas do jogador.

### Requisito 4: Aumentar a dificuldade ao longo do tempo
**História de usuário:** Como jogador, quero que o jogo fique progressivamente mais difícil, para manter o desafio e a sensação de jogo.

**Critérios de aceitação**
- **4.1** QUANDO a partida estiver em andamento, O SISTEMA DEVE aumentar a frequência com que os itens aparecem ao longo do tempo.
- **4.2** QUANDO a partida estiver em andamento, O SISTEMA DEVE aumentar a velocidade de queda dos itens ao longo do tempo.
- **4.3** ENQUANTO a partida continuar ativa, O SISTEMA DEVE manter o nível de dificuldade crescente sem reiniciar a contagem.

### Requisito 5: Gerenciar vidas e fim de partida
**História de usuário:** Como jogador, quero saber quando perdi e reiniciar, para continuar jogando sem perder meu progresso no navegador.

**Critérios de aceitação**
- **5.1** QUANDO a partida iniciar, O SISTEMA DEVE atribuir ao jogador 3 vidas.
- **5.2** QUANDO a vida do jogador chegar a zero, O SISTEMA DEVE encerrar a partida e mostrar a tela de fim de jogo.
- **5.3** QUANDO a tela de fim de jogo for exibida, O SISTEMA DEVE mostrar a pontuação atual e o recorde alcançado.
- **5.4** QUANDO o jogador pressionar Espaço na tela de fim de jogo, O SISTEMA DEVE reiniciar a partida do zero.

### Requisito 6: Persistir o recorde
**História de usuário:** Como jogador, quero que o melhor resultado fique salvo no navegador, para acompanhar meu desempenho mesmo depois de fechar a página.

**Critérios de aceitação**
- **6.1** QUANDO a pontuação atual ultrapassar o recorde salvo, O SISTEMA DEVE atualizar o valor do recorde local.
- **6.2** QUANDO a página for recarregada ou fechada e reaberta, O SISTEMA DEVE manter o recorde salvo no navegador.
- **6.3** QUANDO a partida for reiniciada, O SISTEMA DEVE manter o recorde anterior e comparar a nova pontuação com ele.
- **6.4** QUANDO a pontuação não ultrapassar o recorde, O SISTEMA DEVE manter o recorde local sem alteração.

## Fora do escopo
- Som, música e efeitos de áudio.
- Multiplayer ou modo cooperativo.
- Login, contas e ranking online.
- Níveis, fases ou mecânicas extras de progresso.
- Modos com personagens diferentes ou itens especiais.

## Suposições
- A partida será feita em uma única área de jogo centralizada na página, sem telas extras além de início, jogo e fim.
- O jogo usa apenas um nível de dificuldade contínua, sem avanço por fases.
- O recorde será guardado localmente no navegador, sem servidor ou backend.
- A mecânica do jogo será mantida em uma única sequência de partida, sem fases extras ou progressão por estágios.
