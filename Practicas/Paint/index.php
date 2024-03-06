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
<link rel="stylesheet" href="styles.css">
  
</head>

<body>
  <body>
    <header>
            <!-- Barra de navegación -->
            <?php
include '../recursos/barra.php';       
?>
    </header>
    <div class="container-fluid" style="margin: 100px auto;">
      <div class="row">
        <div class="col-12 col-lg-9 col-xl-9">
          <div class="lienzo" onmousedown="draw(event)" onmousemove="draw(event)" onmouseup="stopDrawing()">
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
          <div class="visor" id="mousePositions"></div>
        </div>
      </div>
    </div>

    <script src='script.js'>
  
  </script>
  
</body>

</html>