 conferir as telas inicial, de jogo e final em uma janela desktop e em uma janela estreita; verificar os dados do HUD, a legibilidade das instruções e a ausência de rolagem horizontal ou sobreposição com o dev e os itens.
# Plano de implementação: Chuva de Bugs

> Como usar: rode `/4-implementar N` para cada tarefa, teste no navegador e faça commit.

- [x] 1. Estruturar a tela e o loop do jogo
  - Criar a página principal, o canvas e o estilo base; configurar o estado inicial e o loop com `requestAnimationFrame`; exibir a tela inicial e o HUD básico.
  - **Arquivos:** `index.html`, `style.css`, `src/config.js`, `src/main.js`
  - **Como verificar:** abrir a página no navegador → a tela deve mostrar o nome do jogo, a instrução para pressionar Espaço e o canvas centralizado.
  - _Requisitos: 1.1, 1.3, 5.3_

- [x] 2. Implementar entrada, movimento e geração de itens
  - Configurar leitura do teclado para A/D e setas; mover o dev dentro da área; gerar cafés e bugs em posições aleatórias; iniciar a partida com Espaço.
  - **Arquivos:** `src/input.js`, `src/game.js`, `src/main.js`
  - **Como verificar:** pressionar Espaço na tela inicial e mover o dev com teclado → o jogo deve começar e o personagem deve andar sem sair dos limites da tela, enquanto itens começam a cair.
  - _Requisitos: 1.2, 2.1, 2.2, 2.3, 2.4, 3.1_

- [x] 3. Finalizar pontuação, vidas e dificuldade
  - Aplicar coleta de cafés, dano de bugs, remoção de itens no chão, contagem de pontos e vidas, aumento de dificuldade ao longo do tempo e fim de partida quando a vida chega a zero.
  - **Arquivos:** `src/game.js`, `src/config.js`
  - **Como verificar:** coletar um café → a pontuação deve subir 1; tocar em um bug → a vida deve cair 1; deixar um item cair → ele deve desaparecer sem efeito; manter a partida ativa por alguns segundos → a queda e a frequência dos itens devem ficar mais rápidas.
  - _Requisitos: 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 5.1, 5.2_

- [x] 4. Concluir recorde local e revisão final
  - Salvar o recorde em `localStorage`, exibir pontuação e recorde na tela final, reiniciar a partida com Espaço e conferir todos os critérios do jogo em uma rodada completa.
  - **Arquivos:** `src/storage.js`, `src/game.js`, `src/main.js`, `style.css`
  - **Como verificar:** jogar até perder, observar a tela final → a pontuação e o recorde devem aparecer; recarregar a página → o recorde anterior deve continuar salvo; pressionar Espaço novamente → a partida deve reiniciar do zero, sem perder o recorde salvo.
  - _Requisitos: 5.3, 5.4, 6.1, 6.2, 6.3, 6.4_

- [x] 5. Aumentar a frequência inicial e suavizar a dificuldade
  - Ajustar os intervalos de geração para haver mais itens desde o início e reduzir a taxa de crescimento da dificuldade ao longo da partida.
  - **Arquivos:** `src/config.js`, `src/game.js`
  - **Como verificar:** iniciar uma partida e observar que os itens aparecem com maior frequência que antes; continuar jogando e confirmar que a velocidade de queda e a frequência aumentam gradualmente, sem uma aceleração abrupta.
  - _Requisitos: 4.1, 4.2, 4.3, 7.1_

- [ ] 6. Alterar a velocidade do dev conforme os cafés
  - [x] 6. Alterar a velocidade do dev conforme os cafés
  - Aumentar a velocidade do personagem ao coletar cafés e reduzi-la para cada café perdido, mantendo-a entre os limites configurados.
  - **Arquivos:** `src/config.js`, `src/game.js`
  - **Como verificar:** coletar cafés e comparar o movimento do dev; deixar cafés caírem e observar a redução; repetir até os limites e confirmar que a velocidade não os ultrapassa.
  - _Requisitos: 7.2, 7.3, 7.4_

- [ ] 7. Aprimorar o HUD e o layout responsivo
  - Reorganizar a hierarquia visual das telas e do HUD para mostrar os dados da partida sem cobrir a área de ação e adaptar o layout a janelas estreitas.
  - **Arquivos:** `index.html`, `style.css`, `src/game.js`
  - **Arquivos:** `index.html`, `style.css`, `src/config.js`, `src/game.js`
  - **Como verificar:** conferir as telas inicial, de jogo e final em uma janela desktop e em uma janela estreita; verificar os dados do HUD, a legibilidade e a ausência de rolagem horizontal ou sobreposição com o dev e os itens.
  - _Requisitos: 8.1, 8.2, 8.3_

## Correções
- [x] Bug: Espaço repetido reiniciava o jogo por auto-repeat do teclado | Causa: o tratamento de input aceitou eventos repetidos e disparava o início da partida mais de uma vez | _Requisitos: 1.2_
- [x] Bug: itens passavam direto pelo personagem | Causa: o jogo não calculava colisão entre o retângulo do dev e o retângulo dos itens, então a remoção só acontecia quando saíam da tela | _Requisitos: 3.2, 3.3_
- [x] Bug: itens não estavam caindo | Causa: a velocidade dos itens podia ficar inválida ou nula em alguns ciclos, e o ganho de queda foi calculado sem validar a velocidade antes de mover cada item | _Requisitos: 3.1, 4.2_

