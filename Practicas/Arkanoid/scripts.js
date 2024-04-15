document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("arkanoidCanvas");
    const ctx = canvas.getContext("2d");

    // Dimensiones de la pantalla
    let SCREEN_WIDTH, SCREEN_HEIGHT;

    // Velocidad de la pelota
    const BALL_SPEED = 1;

    // Dimensiones de la paleta
    const PADDLE_WIDTH = 100;
    const PADDLE_HEIGHT = 10;

    // Dimensiones de los bloques
    
    const BLOCK_ROWS = 4;
    const BLOCK_COLUMNS = 10;
    const BLOCK_WIDTH = (window.innerWidth - (window.innerWidth/4))/BLOCK_COLUMNS;//dimensionamos los bloques de acuerdo a la pantalla
    const BLOCK_HEIGHT = 30;

    // Colores
    const GRIS = "#252525";
    const RED = "#F00";
    const BLUE = "#00F";
    const Color = ["#FF00FF", "#0000FF", "#C8C800", "#05ff11", "#7a2b79"];  // Lista de colores

    // Variables del juego
    let paddle, ball, blocks, score, interval;

    // Función para inicializar el juego
    function initializeGame() {
        SCREEN_WIDTH = window.innerWidth - (window.innerWidth / 4);
        SCREEN_HEIGHT = window.innerHeight/2;
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;

        paddle = {
            x: (SCREEN_WIDTH - PADDLE_WIDTH) / 2,
            y: SCREEN_HEIGHT - PADDLE_HEIGHT - 10,
            width: PADDLE_WIDTH,
            height: PADDLE_HEIGHT
        };

        ball = {
            x: SCREEN_WIDTH / 2,
            y: SCREEN_HEIGHT / 2,
            dx: BALL_SPEED * (Math.random() < 0.5 ? -1 : 1),
            dy: BALL_SPEED * (Math.random() < 0.5 ? -1 : 1),
            size: 10
        };

        blocks = [];
        for (let row = 0; row < BLOCK_ROWS; row++) {
            for (let column = 0; column < BLOCK_COLUMNS; column++) {
                blocks.push({
                    x: BLOCK_WIDTH * column + 5,
                    y: BLOCK_HEIGHT * row + 50,
                    width: BLOCK_WIDTH,
                    height: BLOCK_HEIGHT,
                    color: Color[Math.floor(Math.random() * Color.length)]
                });
            }
        }

        score = 0;
    }

    // Funciones del juego

    function drawPaddle() {
        ctx.fillStyle = RED;
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    function drawBall() {
        ctx.fillStyle = GRIS;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawBlocks() {
        blocks.forEach(function(block) {
            ctx.fillStyle = block.color;
            ctx.fillRect(block.x, block.y, block.width, block.height);
        });
    }

    function drawScore() {
        ctx.fillStyle = GRIS;
        ctx.font = "24px Arial";
        ctx.fillText("Score: " + score, SCREEN_WIDTH - 150, 30);
    }

    function drawGameOver() {
        ctx.fillStyle = GRIS;
        ctx.font = "50px Arial";
        ctx.fillText("Game Over", SCREEN_WIDTH / 2 - 150, SCREEN_HEIGHT / 2 - 50);
        ctx.font = "24px Arial";
        ctx.fillText("Presione r para reiniciar", SCREEN_WIDTH / 2 - 120, SCREEN_HEIGHT / 2 + 50);
    }

  

    function collisionDetection() {
        blocks.forEach(function(block, index) {
            if (ball.x + ball.size > block.x &&
                ball.x - ball.size < block.x + block.width &&
                ball.y + ball.size > block.y &&
                ball.y - ball.size < block.y + block.height) {
                ball.dy = -ball.dy;
                blocks.splice(index, 1);
                score += 10;
                if (score >= 399) {
                    alert("¡Has ganado!");
                    document.location.reload();
                }
            }
        });
    }

    function update() {
        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.x - ball.size < 0 || ball.x + ball.size > SCREEN_WIDTH) {
            ball.dx = -ball.dx;
        }

        if (ball.y - ball.size < 0) {
            ball.dy = -ball.dy;
        }

        if (ball.y + ball.size > SCREEN_HEIGHT) {
            gameOver();
        }

        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width && ball.y + ball.size > paddle.y) {
            ball.dy = -ball.dy;
        }
        

        collisionDetection();
    }

    function gameOver() {
        clearInterval(interval);
        drawGameOver();
        document.addEventListener("keydown", function(event) {
            if (event.key === "r") {
                document.location.reload();
            }
        });
    }
   

    function draw() {
        ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        drawPaddle();
        drawBall();
        drawBlocks();
        drawScore();
        update();
    }

    // Llamamos a initializeGame() para configurar el juego inicialmente
    initializeGame();

    // Iniciar el juego
    interval = setInterval(draw, 10);

     //detectamos si alguien presiona reiniciar
    document.getElementById('restartButton').addEventListener('click', () => {
        document.location.reload();
    });

    // Manejar eventos de mouse y táctiles
    if ('ontouchstart' in window) {
        canvas.addEventListener("touchmove", function(event) {
            let touch = event.touches[0];
            let relativeX = touch.clientX - canvas.offsetLeft;
            if (relativeX > 0 && relativeX < SCREEN_WIDTH) {
                paddle.x = relativeX - paddle.width / 2;
            }
        });
    } else {
        canvas.addEventListener("mousemove", function(event) {
            let relativeX = event.clientX - canvas.offsetLeft;
            if (relativeX > 0 && relativeX < SCREEN_WIDTH) {
                paddle.x = relativeX - paddle.width / 2;
            }
        });
    }
});


