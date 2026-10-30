import { CONFIG } from './config.js';
import { createGame, drawGame, startGame, updateGame } from './game.js';
import { initInput } from './input.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const game = createGame();

const input = initInput(() => {
  if (game.phase !== 'jogando') {
    startGame(game);
  }
});

game.input = input;

function gameLoop(timestamp) {
  const dt = Math.min((timestamp - game.lastTime) / 1000 || 0, CONFIG.maxFrameDelta);
  game.lastTime = timestamp;

  updateGame(game, dt);
  drawGame(ctx, game, canvas);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
drawGame(ctx, game, canvas);
