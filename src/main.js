import { CONFIG } from './config.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const state = {
  phase: 'inicio',
  score: 0,
  lives: CONFIG.startLives,
  lastTime: 0,
  keys: {
    left: false,
    right: false,
    space: false
  },
  items: [],
  spawnTimer: 0
};

const player = {
  x: (CONFIG.canvasWidth - CONFIG.playerWidth) / 2,
  y: CONFIG.canvasHeight - CONFIG.playerHeight - 18,
  width: CONFIG.playerWidth,
  height: CONFIG.playerHeight,
  speed: CONFIG.playerSpeed
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function spawnItem() {
  const type = Math.random() < 0.5 ? 'coffee' : 'bug';
  const size = 30;
  const item = {
    type,
    x: randomBetween(18, CONFIG.canvasWidth - size - 18),
    y: -size,
    size,
    speed: randomBetween(110, 170)
  };

  state.items.push(item);
  state.spawnTimer = randomBetween(CONFIG.spawnIntervalMin, CONFIG.spawnIntervalMax);
}

function handleKeyChange(event, isPressed) {
  const key = event.key.toLowerCase();

  if (isPressed && (key === ' ' || event.code === 'Space') && event.repeat) {
    return;
  }

  if (key === 'arrowleft' || key === 'a') {
    state.keys.left = isPressed;
  }

  if (key === 'arrowright' || key === 'd') {
    state.keys.right = isPressed;
  }

  if (key === ' ' || event.code === 'Space') {
    state.keys.space = isPressed;
    if (isPressed && state.phase !== 'jogando') {
      startGame();
    }
  }
}

function startGame() {
  state.phase = 'jogando';
  state.score = 0;
  state.lives = CONFIG.startLives;
  state.items = [];
  state.spawnTimer = 0.4;
  player.x = (CONFIG.canvasWidth - player.width) / 2;
}

function update(dt) {
  if (state.phase !== 'jogando') {
    return;
  }

  const direction = Number(state.keys.right) - Number(state.keys.left);
  player.x += direction * player.speed * dt;
  player.x = clamp(player.x, 0, CONFIG.canvasWidth - player.width);

  state.spawnTimer -= dt;
  if (state.spawnTimer <= 0) {
    spawnItem();
  }

  state.items.forEach((item) => {
    item.y += item.speed * dt;
  });

  state.items = state.items.filter((item) => item.y < CONFIG.canvasHeight + item.size);
}

function drawBackground() {
  ctx.fillStyle = '#0d1324';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = '#2a3858';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(24, 48);
  ctx.lineTo(canvas.width - 24, 48);
  ctx.moveTo(24, canvas.height - 20);
  ctx.lineTo(canvas.width - 24, canvas.height - 20);
  ctx.stroke();
}

function drawPlayer() {
  ctx.font = '36px sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('🧑‍💻', player.x, player.y + player.height / 2);
}

function drawItems() {
  state.items.forEach((item) => {
    const icon = item.type === 'coffee' ? '☕' : '🐛';
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(icon, item.x + item.size / 2, item.y + item.size / 2);
  });
}

function drawHud() {
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#e7ecff';
  ctx.fillText(`Pontos: ${state.score}`, 24, 28);
  ctx.fillText(`Vidas: ${'❤️'.repeat(Math.max(state.lives, 0))}`, 24, 56);
}

function drawStartScreen() {
  ctx.font = 'bold 42px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#e7ecff';
  ctx.fillText('Chuva de Bugs', canvas.width / 2, canvas.height / 2 - 30);

  ctx.font = '24px Arial';
  ctx.fillStyle = '#7dd3fc';
  ctx.fillText('Pressione Espaço para começar', canvas.width / 2, canvas.height / 2 + 30);
}

function draw() {
  drawBackground();

  if (state.phase === 'inicio') {
    drawStartScreen();
    return;
  }

  drawHud();
  drawItems();
  drawPlayer();
}

function gameLoop(timestamp) {
  const dt = Math.min((timestamp - state.lastTime) / 1000 || 0, 0.033);
  state.lastTime = timestamp;

  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', (event) => handleKeyChange(event, true));
window.addEventListener('keyup', (event) => handleKeyChange(event, false));

requestAnimationFrame(gameLoop);
draw();
