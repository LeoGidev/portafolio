var xi;
var yi;
var drawingTool = ""; // Variable para almacenar la herramienta seleccionada
var arcColor = "black"; // Color inicial del arco

var oldtool = "";

function setDrawingTool(tool) {
  drawingTool = tool;
}
function setArcColor(color) {
  arcColor = color;
  oldtool="cambioColor";//se le da un valor al oldtool para que cada vez que camie de color se haga una linea nueva
}

function draw(event) {
    var canvas = document.getElementById("myCanvas");
    var rect = canvas.getBoundingClientRect();
    
    xi = event.clientX - rect.left;
    yi = event.clientY - rect.top;
    
    var mousePositions = document.getElementById('mousePositions');
    mousePositions.innerHTML = 'X coords: ' + xi + ', Y coords: ' + yi;
  
    var ctx = canvas.getContext("2d");
    var ctx2 = canvas.getContext("2d");
  
    if (drawingTool === "linea" && event.type === "mousedown") {
      if (oldtool != "linea") {
        ctx.beginPath();
      }
  
      ctx2.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
      ctx2.strokeStyle = arcColor;
      ctx2.stroke();
      oldtool = "linea";
  
    } else if (drawingTool === "lapiz" && event.type === "mousedown") {
      if (oldtool != "lapiz") {
        ctx.beginPath();
      }
  
      ctx.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
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
  }
  

function clearCanvas() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas completo
  oldtool="pizarralimpia";
}

function stopDrawing() {
    if(oldtool === "lapiz"){
    oldtool="stop";
    }

  // Lo que sucede al soltar el botón del mouse
}