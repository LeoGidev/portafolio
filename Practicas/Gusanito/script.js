document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');

  const boxSize = 20;
  const gridSize = canvas.width / boxSize;
  let snake = [{ x: 10, y: 10 }];
  let food = generateFood();

  let dx = 1;
  let dy = 0;
  let score = 0;
  let lastDirection = 'right';

  let gameSpeed = 500;
  let gameInterval;

  function generateFood() {
    return {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    };
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
      gameOver();
      return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score++;
      food = generateFood();
    } else {
      snake.pop();
    }

    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x * boxSize, food.y * boxSize, boxSize, boxSize);

    ctx.fillStyle = '#000';
    snake.forEach(segment => {
      ctx.fillRect(segment.x * boxSize, segment.y * boxSize, boxSize, boxSize);
    });

    ctx.fillStyle = '#000';
    ctx.fillText(`Score: ${score}`, 10, 20);
  }

  function startGame() {
    gameInterval = setInterval(() => {
      draw();
    }, gameSpeed);
  }

  function stopGame() {
    clearInterval(gameInterval);
  }

  function gameOver() {
    stopGame();
    alert(`Game Over! Tu puntaje es: ${score}`);
    document.location.reload();
  }

  function handleSwipe(direction) {
    switch (direction) {
      case 'up':
        if (lastDirection !== 'down') {
          dx = 0;
          dy = -1;
          lastDirection = 'up';
        }
        break;
      case 'down':
        if (lastDirection !== 'up') {
          dx = 0;
          dy = 1;
          lastDirection = 'down';
        }
        break;
      case 'left':
        if (lastDirection !== 'right') {
          dx = -1;
          dy = 0;
          lastDirection = 'left';
        }
        break;
      case 'right':
        if (lastDirection !== 'left') {
          dx = 1;
          dy = 0;
          lastDirection = 'right';
        }
        break;
    }
  }

  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(event) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        handleSwipe('left');
      } else {
        handleSwipe('right');
      }
    } else {
      if (yDiff > 0) {
        handleSwipe('up');
      } else {
        handleSwipe('down');
      }
    }

    xDown = null;
    yDown = null;
  }

  let xDown = null;
  let yDown = null;

  canvas.addEventListener('touchstart', handleTouchStart, false);
  canvas.addEventListener('touchmove', handleTouchMove, false);

  document.addEventListener('keydown', event => {
    const keyPressed = event.key;

    if (keyPressed === 'ArrowUp' && lastDirection !== 'down') {
      dx = 0;
      dy = -1;
      lastDirection = 'up';
    } else if (keyPressed === 'ArrowDown' && lastDirection !== 'up') {
      dx = 0;
      dy = 1;
      lastDirection = 'down';
    } else if (keyPressed === 'ArrowLeft' && lastDirection !== 'right') {
      dx = -1;
      dy = 0;
      lastDirection = 'left';
    } else if (keyPressed === 'ArrowRight' && lastDirection !== 'left') {
      dx = 1;
      dy = 0;
      lastDirection = 'right';
    }
  });

  startGame();
});

