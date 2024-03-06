<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://kit.fontawesome.com/314f7a8189.js" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Blinker:wght@300;400&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet">
  <script>
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
  </script>
</head>

<body>
  <body>
    <header>
            <!-- Barra de navegación -->
            <?php
include '../recursos/barra.php';       
?>
    </header>
    <div class="container-fluid" style="margin: 100px auto;
    ;">
      <div class="row">
        <div class="col-12 col-lg-9 col-xl-9">
          <div onmousedown="draw(event)" onmousemove="draw(event)" onmouseup="stopDrawing()">
            <canvas id="myCanvas" width="800" height="500" style="border:1px solid #d3d3d3;">
              Tu navegador no soporta canvas.
            </canvas>
          </div>
        </div>
        <div class="col-12 col-md-3 list-group">
          <button class="form-control" onclick="setDrawingTool('linea')">Linea</button>
          <button class="form-control" onclick="setDrawingTool('lapiz')">Lapiz</button>
          <input class="form-control form-control-color" type="color" id="colorPicker" onchange="setArcColor(this.value)">
          <button class="form-control" onclick="clearCanvas()">Limpiar pizarra</button>
          <div id="mousePositions"></div>
        </div>
      </div>
    </div>
  
</body>

</html>