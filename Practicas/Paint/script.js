var xi;
var yi;
var startX;
var startY;
var drawingLine = false;
var drawingCurve = false; // Nuevo, para rastrear si se está dibujando una curva
var controlPoint1; // Nuevo, para almacenar el primer punto de control
var controlPoint2; // Nuevo, para almacenar el segundo punto de control

var drawingTool = "";
var arcColor = "black";
var oldtool = "";
var lineThickness = 1;

function setLineThickness(thickness) {
  lineThickness = thickness;
}

function setDrawingTool(tool) {
  drawingTool = tool;
}

function setArcColor(color) {
  arcColor = color;
  oldtool = "cambioColor";
}

function draw(event) {
  var canvas = document.getElementById("myCanvas");
  var rect = canvas.getBoundingClientRect();

  xi = event.clientX - rect.left;
  yi = event.clientY - rect.top;

  xi = xi * (canvas.width / rect.width);
  yi = yi * (canvas.height / rect.height);

  var mousePositions = document.getElementById('mousePositions');
  mousePositions.innerHTML = 'X coords: ' + xi + ', Y coords: ' + yi;

  var ctx2 = canvas.getContext("2d");

  if (drawingTool === "linea") {
    if (event.type === "mousedown") {
      if (!drawingLine) {
        startX = xi;
        startY = yi;
        drawingLine = true;
      } else {
        ctx2.beginPath();
        ctx2.moveTo(startX, startY);
        ctx2.lineTo(xi, yi);
        ctx2.lineWidth = lineThickness;
        ctx2.strokeStyle = arcColor;
        ctx2.stroke();
        startX = xi;
        startY = yi;
      }
    }
  } else if (drawingTool === "lapiz" && event.type === "mousedown") {
    if (oldtool != "lapiz") {
      ctx2.beginPath();
    }

    ctx2.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = arcColor;
    ctx2.stroke();
    oldtool = "lapiz";
  } else if (drawingTool === "lapiz" && event.type === "mousemove" && event.buttons === 1) {
    if (oldtool != "lapiz") {
      ctx2.beginPath();
    }

    ctx2.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
    ctx2.strokeStyle = arcColor;
    ctx2.stroke();
    oldtool = "lapiz";
  } else if (drawingTool === "curva") {
    if (event.type === "mousedown") {
      if (!drawingCurve) {
        controlPoint1 = { x: xi, y: yi };
        drawingCurve = true;
      } else if (!controlPoint2) {
        controlPoint2 = { x: xi, y: yi };
        // Dibuja la curva al tercer clic
        ctx2.beginPath();
        ctx2.moveTo(startX, startY);
        ctx2.bezierCurveTo(
          controlPoint1.x, controlPoint1.y,
          controlPoint2.x, controlPoint2.y,
          xi, yi
        );
        ctx2.lineWidth = lineThickness;
        ctx2.strokeStyle = arcColor;
        ctx2.stroke();
        // Reinicia las variables para la siguiente curva
        controlPoint1 = null;
        controlPoint2 = null;
        drawingCurve = false;
      }
    }
  }
}

function clearCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  oldtool = "pizarralimpia";
}

function stopDrawing() {
  if (oldtool === "lapiz") {
    oldtool = "stop";
  }
}




