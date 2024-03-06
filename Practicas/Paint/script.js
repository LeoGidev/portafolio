var xi;
var yi;
var startX; // Nuevo, para almacenar la posición de inicio en X
var startY; // Nuevo, para almacenar la posición de inicio en Y
var drawingLine = false; // Nuevo, para rastrear si se está dibujando una línea

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
  
    var ctx2 = canvas.getContext("2d");
  
    if (drawingTool === "linea") {
      if (event.type === "mousedown") {
        if (!drawingLine) {
          // Establece el punto de inicio al primer clic
          startX = xi;
          startY = yi;
          drawingLine = true;
        } else {
          // Dibuja la línea desde el punto inicial hasta el nuevo punto al segundo clic
          ctx2.beginPath();
          ctx2.moveTo(startX, startY);
          ctx2.lineTo(xi, yi);
          ctx2.lineWidth = lineThickness;
          ctx2.strokeStyle = arcColor;
          ctx2.stroke();
          // Reinicia las coordenadas iniciales para la siguiente línea
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
    }
  }
  
  

function clearCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas solo al presionar el botón "Limpiar pizarra"
  oldtool = "pizarralimpia";
}

function stopDrawing() {
  if (oldtool === "lapiz") {
    oldtool = "stop";
  }

  // Lo que sucede al soltar el botón del mouse
}



