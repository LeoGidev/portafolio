<DOCTYPE HTML>
    <html lang="en">
<head>
<title>Leo Gimenez</title>
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
<link rel="icon" href="../../img/ico.ico" type="image/x-icon">
  <link rel="shortcut icon" href="../../img/ico.ico" type="image/x-icon">
  </head>

<body>
    <header>
        <!-- Barra de navegación -->
        <?php
include '../recursos/barra.php';       
?>
</header>
<div class='container'>
  <div class='row justify-content-center'>
    <div class="col-12 contenido2">
    <h4> Crea Cuadrículas </h4>
    </div>
  </div>
    <div class='col-12 controles container'>
          <ul>
            <li>
              <label for="colorLineas">Color de las líneas:</label>
              <input class="form-control form-control-color" type="color" id="colorLineas" value="#00ff00" onchange="cambiarColorLineas()">
            </li>
            <li class='m-3'>
            <label for="setcant">Cantidad de líneas:</label>
              <input type="range" id="setcant" min="3" max="20" value="5" onchange="cambiarCantLineas()">
            <span id="cantLineas">5</span>
            </li>
            <li class='m-3'>
            <label for="setgro">Grosor:</label>
              <input type="range" id="setgro" min="1" max="20" value="1" onchange="Grosor()">
            <span id="grosorLineas">1</span>
            </li>
            <li class='m-3'>
            <label for="tra">Transparencia:</label>
              <input type="range" id="tra" min="0" max="1" value="1" step="0.01" onchange="transparent()">
            <span id="transpLineas">1</span>
            </li>
            <li>
              <label for="valor">Imagen:</label>
              <input class="form-control" type="file" id="imagenFondoInput" accept="image/*" onchange="cargarImagenDeFondo()">
            </li>
            
            <li>
              <button class="btn btn-primary m-3" onclick="descargarImagen()">Descargar Imagen</button>
            </li>
            
            

          </ul>
          
    </div>
    <div class="container contenido">
       <!-- Contenedor del canvas -->
       <canvas id="miCanvas" width="300" height="400" style="border:1px solid #000;" name="tablero"></canvas> 
    </div>
    
    <div class="contenido container">
    <a href="https://github.com/LeoGidev/Cuadriculador" target="_blank"><img src="../../img/GitHub-logo.webp"></a>
    </div>

</div>
        <script src="script.js"></script>
</body>