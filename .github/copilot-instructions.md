# Instruções do projeto

Este repositório é usado em uma oficina de **Desenvolvimento Guiado por Especificação (SDD)**. Quem está conduzindo é um estudante, que trabalha em fases: requisitos → design → tarefas → implementação.

## Fonte da verdade

- As especificações ficam em `specs/`: `requirements.md` (o quê), `design.md` (como) e `tasks.md` (passos).
- Antes de escrever código, leia as specs. Não implemente nada que não esteja nelas.
- Se um pedido contradiz a spec, avise e proponha atualizar a spec **antes** de mudar o código.
- `IDEIA.md` é só o ponto de partida. Depois que `specs/requirements.md` existir, ele prevalece.

## Stack (fixa)

- HTML, CSS e JavaScript puro com ES modules (`<script type="module">`), usando Canvas 2D para o jogo.
- Proibido: frameworks, npm/`package.json`, etapa de build, bibliotecas externas e CDNs.
- Os gráficos usam formas do canvas e emojis (`ctx.fillText`). Não use arquivos de imagem nem de áudio.
- O jogo precisa funcionar no GitHub Pages, que serve o site em um subcaminho. Por isso, use sempre **caminhos relativos** (`src/main.js`, nunca `/src/main.js`).

## Estrutura

- `index.html` e `style.css` ficam na raiz, o código fica em `src/` e o ponto de entrada é `src/main.js`.
- Toda constante ajustável (velocidades, tamanhos, cores, tempos, probabilidades) fica em `src/config.js`, exportada em um único objeto `CONFIG`. Não pode haver números mágicos no resto do código.
- Cada arquivo tem uma responsabilidade e, idealmente, menos de 150 linhas.

## Código

- Identificadores em inglês (`camelCase` para funções e variáveis, `PascalCase` para classes). Comentários e textos exibidos ao jogador em português do Brasil.
- Prefira código simples e legível a otimizações: o público são estudantes.
- No loop do jogo, use `requestAnimationFrame` com *delta time* em segundos.
- Inicialize todo estado antes de usá-lo em cálculos; por exemplo, todas as teclas do controle começam em `false`. Um `undefined` numa conta vira `NaN`, e o canvas deixa de desenhar o que estiver numa coordenada `NaN`, sem mostrar erro no Console.

## Ambiente

- O aluno já roda um servidor na porta 8080 (`npx --yes http-server -c-1 -p 8080` no Codespace, ou `python -m http.server 8080` na própria máquina). Não inicie outro servidor e não instale pacotes.
- Não altere `README.md`, `IDEIA.md`, `.github/` nem `.devcontainer/`, a menos que o aluno peça explicitamente.

## Comunicação

- Responda em português do Brasil, de forma curta e direta.
- Ao terminar uma alteração, diga quais arquivos mudaram e como verificar o resultado no navegador.
