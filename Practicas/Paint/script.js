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
   
  xi = event.clientX - 15;
  yi = event.clientY - 100;
  var mousePositions = document.getElementById('mousePositions');
  mousePositions.innerHTML = 'X coords: ' + xi + ', Y coords: ' + yi;
  
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var ctx2 = canvas.getContext("2d");

  if (drawingTool === "linea" && event.type === "mousedown") {
    console.log(oldtool);
    if (oldtool != "linea" ){
       
        ctx.beginPath();//Si antes usamos otra herramienta o cambiamos de color se comienza una nueva linea, si no, se continúa
    }
    
    ctx2.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
    ctx2.strokeStyle = arcColor; // Establecer el color del trazo
    ctx2.stroke();
    oldtool = "linea";

  } else if (drawingTool === "lapiz" && event.type === "mousedown") {
    if (oldtool != "lapiz"){
       ctx.beginPath();///Si antes usamos otra herramienta o cambiamos de color se comienza una nueva linea, si no, se continúa
   }
    ctx.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
    ctx.strokeStyle = arcColor; // Establecer el color del trazo
    ctx.stroke();
    oldtool = "lapiz";
  } else if (drawingTool === "lapiz" && event.type === "mousemove" && event.buttons === 1) {
    if (oldtool != "lapiz"){
       
    ctx.beginPath();///Si antes usamos otra herramienta o cambiamos de color se comienza una nueva linea, si no, se continúa
    }
    ctx.arc(xi, yi, 1, 0.5, (Math.PI / 180) * 360, true);
    ctx.strokeStyle = arcColor; // Establecer el color del trazo
    ctx.stroke();
    oldtool="lapiz";
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