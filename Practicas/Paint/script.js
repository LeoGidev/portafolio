var xi;
var yi;
var lastX; // Nueva variable para almacenar la posición anterior en X
var lastY; // Nueva variable para almacenar la posición anterior en Y

var drawingTool = ""; // Variable para almacenar la herramienta seleccionada
var arcColor = "black"; // Color inicial del arco

var oldtool = "";
var lineThickness = 1; // Grosor inicial de la línea

function setLineThickness(thickness) {
  lineThickness = thickness;
}

function setDrawingTool(tool) {
  drawingTool = tool;
}

function setArcColor(color) {
  arcColor = color;
  oldtool = "cambioColor"; // Se le da un valor al oldtool para que cada vez que cambie de color se haga una línea nueva
}

function draw(event) {
  var canvas = document.getElementById("myCanvas");
  var rect = canvas.getBoundingClientRect();

  xi = event.clientX - rect.left;
  yi = event.clientY - rect.top;

  // Escala las coordenadas si el tamaño del canvas ha cambiado
  xi = xi * (canvas.width / rect.width);
  yi = yi * (canvas.height / rect.height);

  var mousePositions = document.getElementById('mousePositions');
  mousePositions.innerHTML = 'X coords: ' + xi + ', Y coords: ' + yi;

  var ctx = canvas.getContext("2d");

  if (drawingTool === "linea" && lastX !== undefined && lastY !== undefined) {
    if (event.type === "mousemove" && event.buttons === 1) {
      // Dibuja una línea al siguiente punto al mover el mouse con el botón presionado
      ctx.beginPath();
      ctx.moveTo(lastX, lastY); // Establece el punto inicial del trazo
      ctx.lineTo(xi, yi); // Dibuja la línea hasta el punto actual del mouse
      ctx.lineWidth = lineThickness;
      ctx.strokeStyle = arcColor;
      ctx.stroke();
      lastX = xi;
      lastY = yi;
    }
  } else if (drawingTool === "lapiz" && event.type === "mousedown") {
    if (oldtool != "lapiz") {
      ctx.beginPath();
    }

    ctx.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
    ctx.lineWidth = 1;
    ctx.strokeStyle = arcColor;
    ctx.stroke();
    oldtool = "lapiz";

  } else if (drawingTool === "lapiz" && event.type === "mousemove" && event.buttons === 1) {
    if (oldtool != "lapiz") {
      ctx.beginPath();
    }

    ctx.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
    ctx.strokeStyle = arcColor;
    ctx.stroke();
    oldtool = "lapiz";
  }

  lastX = xi; // Actualiza la posición anterior en X
  lastY = yi; // Actualiza la posición anterior en Y
}

function clearCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas completo
  oldtool = "pizarralimpia";
}

function stopDrawing() {
  if (oldtool === "lapiz") {
    oldtool = "stop";
  }

  // Lo que sucede al soltar el botón del mouse
}
