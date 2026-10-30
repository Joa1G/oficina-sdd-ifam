import { CONFIG } from './config.js';
import { loadRecord, updateRecordIfNeeded } from './storage.js';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function intersects(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}

function createPlayer() {
  return {
    x: (CONFIG.canvasWidth - CONFIG.playerWidth) / 2,
    y: CONFIG.canvasHeight - CONFIG.playerHeight - CONFIG.playerYOffset,
    width: CONFIG.playerWidth,
    height: CONFIG.playerHeight,
    speed: CONFIG.playerSpeed
  };
}

function spawnItem(game) {
  const type = Math.random() < 0.5 ? 'coffee' : 'bug';
  const item = {
    type,
    x: randomBetween(CONFIG.itemPadding, CONFIG.canvasWidth - CONFIG.itemSize - CONFIG.itemPadding),
    y: -CONFIG.itemSize,
    size: CONFIG.itemSize,
    speed: randomBetween(CONFIG.itemSpeedMin, CONFIG.itemSpeedMax) + game.elapsed * CONFIG.difficultySpeedBoost
  };

  game.items.push(item);
  game.spawnTimer = randomBetween(CONFIG.spawnIntervalMin, CONFIG.spawnIntervalMax);
}

export function createGame() {
  return {
    phase: 'inicio',
    score: 0,
    lives: CONFIG.startLives,
    record: loadRecord(),
    items: [],
    spawnTimer: CONFIG.itemSpawnStart,
    elapsed: 0,
    lastTime: 0,
    player: createPlayer(),
    input: {
      left: false,
      right: false,
      space: false
    }
  };
}

export function startGame(game) {
  game.phase = 'jogando';
  game.score = 0;
  game.lives = CONFIG.startLives;
  game.items = [];
  game.elapsed = 0;
  game.spawnTimer = CONFIG.itemSpawnStart;
  game.player = createPlayer();
}

export function updateGame(game, dt) {
  if (game.phase !== 'jogando') {
    return;
  }

  game.elapsed += dt;

  const direction = Number(game.input.right) - Number(game.input.left);
  game.player.x += direction * game.player.speed * dt;
  game.player.x = clamp(game.player.x, 0, CONFIG.canvasWidth - game.player.width);

  game.spawnTimer -= dt;
  if (game.spawnTimer <= 0) {
    spawnItem(game);
  }

  const difficultyFactor = 1 + game.elapsed * CONFIG.difficultyGrowth;

  game.items.forEach((item) => {
    item.y += item.speed * difficultyFactor * dt;
  });

  const playerRect = {
    x: game.player.x,
    y: game.player.y,
    width: game.player.width,
    height: game.player.height
  };

  game.items = game.items.filter((item) => {
    const itemRect = {
      x: item.x,
      y: item.y,
      width: item.size,
      height: item.size
    };

    if (intersects(playerRect, itemRect)) {
      if (item.type === 'coffee') {
        game.score += CONFIG.coffeePoints;
        game.record = updateRecordIfNeeded(game.score);
      } else {
        game.lives -= CONFIG.bugDamage;
      }

      if (game.lives <= 0) {
        game.phase = 'fim';
        game.record = updateRecordIfNeeded(game.score);
        return false;
      }

      return false;
    }

    if (item.y >= CONFIG.canvasHeight + item.size) {
      return false;
    }

    return true;
  });
}

function drawBackground(ctx, canvas) {
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

function drawPlayer(ctx, game) {
  ctx.font = '36px sans-serif';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('🧑‍💻', game.player.x, game.player.y + game.player.height / 2);
}

function drawItems(ctx, game) {
  game.items.forEach((item) => {
    const icon = item.type === 'coffee' ? '☕' : '🐛';
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(icon, item.x + item.size / 2, item.y + item.size / 2);
  });
}

function drawHud(ctx, game) {
  ctx.font = '24px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#e7ecff';
  ctx.fillText(`Pontos: ${game.score}`, 24, 28);
  ctx.fillText(`Recorde: ${game.record}`, 24, 56);
  ctx.fillText(`Vidas: ${'❤️'.repeat(Math.max(game.lives, 0))}`, 24, 84);
}

function drawStartScreen(ctx, canvas) {
  ctx.font = 'bold 42px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#e7ecff';
  ctx.fillText('Chuva de Bugs', canvas.width / 2, canvas.height / 2 - 30);

  ctx.font = '24px Arial';
  ctx.fillStyle = '#7dd3fc';
  ctx.fillText('Pressione Espaço para começar', canvas.width / 2, canvas.height / 2 + 30);
}

function drawEndScreen(ctx, canvas, game) {
  ctx.font = 'bold 42px Arial';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#e7ecff';
  ctx.fillText('Fim de jogo', canvas.width / 2, canvas.height / 2 - 60);

  ctx.font = '24px Arial';
  ctx.fillStyle = '#7dd3fc';
  ctx.fillText(`Pontuação: ${game.score}`, canvas.width / 2, canvas.height / 2 + 0);
  ctx.fillText(`Recorde: ${game.record}`, canvas.width / 2, canvas.height / 2 + 40);
  ctx.fillText('Pressione Espaço para jogar de novo', canvas.width / 2, canvas.height / 2 + 90);
}

export function drawGame(ctx, game, canvas) {
  drawBackground(ctx, canvas);

  if (game.phase === 'inicio') {
    drawStartScreen(ctx, canvas);
    return;
  }

  if (game.phase === 'fim') {
    drawEndScreen(ctx, canvas, game);
    return;
  }

  drawHud(ctx, game);
  drawItems(ctx, game);
  drawPlayer(ctx, game);
}
