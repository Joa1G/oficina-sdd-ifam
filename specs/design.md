# Design: Chuva de Bugs

## Visão geral
O jogo será uma página simples com um canvas central e um estado mínimo de três telas: início, jogando e fim. A lógica principal ficará em um módulo de jogo, enquanto o teclado e o armazenamento local ficam separados para facilitar manutenção e permitir testes simples. O fluxo será baseado em um loop de animação com delta time em segundos, usando o Canvas 2D para desenhar o dev, os itens e os textos. A dificuldade cresce de forma contínua e o recorde fica salvo no navegador por meio de localStorage.

## Decisões técnicas
| Decisão | Escolha | Por quê |
|---|---|---|
| Entrada | Teclado apenas | Mantém o comportamento esperado pelos requisitos e reduz ambiguidades em controles. |
| Persistência | `localStorage` | Garante recorde local sem backend e funciona em GitHub Pages. |
| Estrutura | 6 arquivos com responsabilidades bem separadas | Mantém o projeto simples e compatível com a meta de 15 minutos. |
| Renderização | Canvas 2D com emojis | Funciona com HTML/JS puros e atende ao estilo do projeto. |
| Estado | Máquina de estados simples | Permite iniciar, jogar e terminar sem criar lógica complexa. |

## Arquitetura
```mermaid
flowchart LR
    A["index.html"] --> B["src/main.js"]
    B --> C["src/game.js"]
    B --> D["src/input.js"]
    B --> E["src/storage.js"]
    B --> F["src/config.js"]
    C --> G["Canvas 2D"]
    D --> C
    E --> C
    F --> C
```

## Estrutura de arquivos
```text
.
├── index.html                 # Página principal que monta a tela e o canvas.
├── style.css                 # Layout da página, centralização e visual do jogo.
├── src/
│   ├── config.js             # Constantes do jogo e valores de ajuste fino.
│   ├── input.js              # Leitura do teclado e sinalização de ações válidas.
│   ├── game.js               # Estado do jogo, loop, geração de itens e colisões.
│   ├── storage.js            # Leitura e gravação do recorde em localStorage.
│   └── main.js               # Inicialização do jogo e encadeamento dos módulos.
└── specs/
    ├── requirements.md       # Requisitos do sistema.
    └── design.md             # Decisões técnicas e arquitetura deste projeto.
```

## Componentes
### `index.html`: Estrutura da página
- **Responsabilidade:** Montar a área do jogo, o canvas e a marcação do nome do jogo.
- **Estado:** Sem estado de jogo; somente a estrutura visual da página.
- **Funções principais:** `initGame()`: chama a inicialização do módulo principal; `renderHud()`: opcional em HTML, se houver textos na página.
- **Atende:** 1.1, 1.3, 5.3

### `style.css`: Estilo visual
- **Responsabilidade:** Centralizar o canvas, definir fundo escuro e posicionar textos de HUD.
- **Estado:** Propriedades visuais estáticas, sem variáveis de jogo.
- **Funções principais:** `body {}`: define a página; `.game-shell {}`: responsividade da área do jogo.
- **Atende:** 1.1, 1.3, 5.3

### `src/config.js`: Configuração central
- **Responsabilidade:** Guardar as constantes ajustáveis do jogo em um único objeto `CONFIG`.
- **Estado:** Apenas valores fixos e exportados.
- **Funções principais:** `createConfig()`: retorna o objeto de configuração; `export const CONFIG = { ... }`: centraliza os parâmetros.
- **Atende:** 2.3, 3.1, 4.1, 4.2, 5.1

### `src/input.js`: Leitura do teclado
- **Responsabilidade:** Mapear teclas de movimento e Espaço para o estado do jogo.
- **Estado:** `keys.left`, `keys.right`, `keys.space` e sinalização de eventos de teclado.
- **Funções principais:** `setupInput()`: registra listeners; `isLeftPressed()`: consulta movimento; `isStartPressed()`: consulta acionamento de início ou reinício.
- **Atende:** 1.2, 2.1, 2.2, 2.4, 5.4

### `src/game.js`: Lógica principal do jogo
- **Responsabilidade:** Controlar estados, gerar itens, mover o personagem, processar colisões, atualizar pontuação e vidas e desenhar tudo.
- **Estado:** `state`, `player`, `items`, `score`, `lives`, `record`, `difficultyTimer`.
- **Funções principais:** `createGame()`: define o estado inicial; `update(dt)`: avançar a simulação; `draw()`: renderizar; `spawnItem()`: criar café ou bug; `handleCollisions()`: resolver coleta e dano; `endGame()`: transição para tela final.
- **Atende:** 1.2, 1.3, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3, 5.4, 6.1, 6.3, 6.4

### `src/storage.js`: Persistência local
- **Responsabilidade:** Salvar e recuperar o recorde em `localStorage`.
- **Estado:** Chave do armazenamento e valor atual do recorde.
- **Funções principais:** `loadRecord()`: lê a pontuação guardada; `saveRecord(value)`: grava o novo recorde; `updateRecordIfNeeded(score)`: compara e persiste quando necessário.
- **Atende:** 6.1, 6.2, 6.3, 6.4

### `src/main.js`: Inicialização e orquestração
- **Responsabilidade:** Conectar os módulos, iniciar o loop principal e decidir a tela atual conforme o estado do jogo.
- **Estado:** Instância do jogo, estado global e referências aos módulos.
- **Funções principais:** `init()`: configura input, storage e canvas; `loop(time)`: chama `update` e `draw`; `setState(nextState)`: alterna entre início, jogando e fim.
- **Atende:** 1.1, 1.2, 1.3, 5.2, 5.4, 6.2

## Configuração central (`CONFIG` em `src/config.js`)
| Constante | Valor inicial | Para que serve | Atende |
|---|---:|---|---|
| `canvasWidth` | 640 | Largura da área de jogo | 2.3 |
| `canvasHeight` | 480 | Altura da área de jogo | 2.3, 3.4 |
| `playerSpeed` | 320 | Velocidade horizontal do dev | 2.1, 2.2 |
| `startLives` | 3 | Quantidade inicial de vidas | 5.1 |
| `coffeePoints` | 1 | Pontos ganhos por café | 3.2 |
| `bugDamage` | 1 | Dano causado por bug | 3.3, 5.2 |
| `spawnIntervalMin` | 0.7 | Intervalo mínimo entre itens | 4.1 |
| `spawnIntervalMax` | 1.7 | Intervalo máximo inicial entre itens | 4.1 |
| `baseFallSpeed` | 140 | Velocidade inicial de queda | 4.2 |
| `difficultyRamp` | 0.15 | Aceleração da dificuldade por segundo | 4.3 |
| `recordStorageKey` | "bugRainRecord" | Nome da chave em localStorage | 6.1, 6.2 |

## Fluxo
```mermaid
stateDiagram-v2
    [*] --> Inicio
    Inicio --> Jogando: Espaço
    Jogando --> Fim: vidas == 0
    Fim --> Jogando: Espaço
    Fim --> Inicio: recarregar página
```

Passo a passo do loop principal:
1. A página carrega e a tela inicial é mostrada. O módulo `main.js` cria o estado do jogo e ativa a leitura de teclado.
2. Quando a tecla Espaço é pressionada, `input.js` sinaliza um início de partida e `game.js` muda de `Inicio` para `Jogando`.
3. No estado de jogo, `game.js` gera itens aleatórios no topo da tela, move o dev conforme as setas/A-D e faz a queda dos cafés e bugs em tempo real.
4. O sistema verifica colisões com o dev, aplica pontos ou dano e remove objetivos que atingem o chão sem efeito.
5. A dificuldade aumenta com o tempo por meio do aumento de frequência e velocidade de queda, usando `CONFIG` para controlar a taxa.
6. Quando o jogador perde a última vida, a partida entra em `Fim`, exibe a pontuação final e o recorde salvo e aguarda outra tecla Espaço para reiniciar.

## Propriedades de corretude
- Para qualquer quadro, o dev fica dentro dos limites horizontais da área de jogo. (Valida: 2.3)
- Para qualquer item gerado, ele cai apenas do topo e não desaparece sem regra definida. (Valida: 3.1, 3.4)
- Para qualquer colisão entre café e dev, o sistema soma exatamente 1 ponto e remove o item. (Valida: 3.2)
- Para qualquer colisão entre bug e dev, o sistema reduz exatamente 1 vida e remove o item. (Valida: 3.3)
- Para qualquer pontuação maior que o recorde salvo, o recorde local é atualizado e persistido. (Valida: 6.1, 6.2)
- Para qualquer estado de jogo, a dificuldade nunca volta para trás enquanto a partida continua ativa. (Valida: 4.3)

## Casos limite
- O jogador pressiona teclas de movimento antes da partida começar: o sistema ignora movimento e mantém o estado em início.
- O jogador pressiona Espaço repetidamente na tela inicial: o jogo só deve iniciar uma vez por pressão válida de início.
- O recorde não existe no navegador: `storage.js` deve usar valor inicial 0 e aceitar a primeira pontuação.
- O jogador perde a última vida: `game.js` deve encerrar a partida sem continuar a geração de itens.
- O item cai parcialmente fora da área: a regra de remoção por chão deve prevalecer antes de qualquer outro cálculo.
