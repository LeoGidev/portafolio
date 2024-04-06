const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const CELL_SIZE = 100;
const board = ["", "", "", "", "", "", "", "", ""]; // Representación del tablero
let currentPlayer = "X"; // Agregar una variable para rastrear el jugador actual

// Dibuja el tablero vacío
function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    for (let i = 1; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, i * CELL_SIZE);
        ctx.lineTo(canvas.width, i * CELL_SIZE);
        ctx.stroke();
    }
}

// Dibuja una "X" en la celda especificada
function drawX(row, col) {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(col * CELL_SIZE + 20, row * CELL_SIZE + 20);
    ctx.lineTo((col + 1) * CELL_SIZE - 20, (row + 1) * CELL_SIZE - 20);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(col * CELL_SIZE + 20, (row + 1) * CELL_SIZE - 20);
    ctx.lineTo((col + 1) * CELL_SIZE - 20, row * CELL_SIZE + 20);
    ctx.stroke();
}

// Dibuja un "O" en la celda especificada
function drawO(row, col) {
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.arc(col * CELL_SIZE + CELL_SIZE / 2, row * CELL_SIZE + CELL_SIZE / 2, 30, 0, Math.PI * 2);
    ctx.stroke();
}

// Actualiza el tablero y dibuja el símbolo correspondiente en la celda
function updateBoard(row, col, player) {
    const index = row * 3 + col;
    board[index] = player === "X" ? "X" : "O";

    if (player === "X") {
        drawX(row, col);
    } else {
        drawO(row, col);
    }
}

// Determina si hay un ganador o si el juego está empatado
function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    if (board.every(cell => cell !== "")) {
        return "Empate";
    }

    return null;
}

// Manejador de clic en el tablero
function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const col = Math.floor(mouseX / CELL_SIZE);
    const row = Math.floor(mouseY / CELL_SIZE);

    if (board[row * 3 + col] === "") {
        const winner = checkWinner();
        if (!winner) {
            updateBoard(row, col, currentPlayer);
            const winnerAfterMove = checkWinner();
            if (winnerAfterMove) {
                alert(winnerAfterMove === "Empate" ? "¡Empate!" : `¡${winnerAfterMove} ha ganado!`);
            }
            // Cambiar el jugador activo después de cada movimiento
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

canvas.addEventListener("click", handleClick);
drawBoard();
