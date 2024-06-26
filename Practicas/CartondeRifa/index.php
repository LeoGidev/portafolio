
  <html lang="en">
    <head>
    <title>Crea talonarios de rifas</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://kit.fontawesome.com/314f7a8189.js" crossorigin="anonymous"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@300;400&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet">
    
    
    <link rel="icon" href="../../img/ico.ico" type="image/x-icon">
  <link rel="shortcut icon" href="../../img/ico.ico" type="image/x-icon">
      
      <link rel="stylesheet" href="style.css">
    
      
      </head>

<body>
  <header>
        <!-- Barra de navegación -->
        <?php
include '../recursos/barra.php';       
?>
  </header>

  <div class="container-fluid">
    <div class="container-fluid" id="portada">
      <div class="col-12">
        <h1>Generador  de Carton de Rifa</h1>
      </div>
    </div>
    <div class="row" id="carton">
      <div class="col-12 col-xl-6">
        <!-- Contenedor del canvas -->
        
          <canvas id="miCanvas" width="450" height="900" style="border:1px solid #000;" name="tablero"></canvas>
       
      </div>
      <div class="col-12 col-xl-6 mt-3">
        <ul>
          <li>
          <label for="colorFondo">Color del fondo:</label>
          <input class=" form-control form-control-color" type="color" id="colorFondo" value="#ffffff" onchange="cambiarColorFondo()"></li>
        <li>
          <label for="colorLineas">Color de las líneas:</label>
          <input class=" form-control form-control-color" type="color" id="colorLineas" value="#00ff00" onchange="cambiarColorLineas()"></li>
    
          <li>
            <label for="colorNumeros">Color de Letras:</label>
            <input class=" form-control form-control-color" type="color" id="colorNumeros" value="#000000" onchange="cambiarColorNumeros()"></li>

          <li><label for="titulo">Título:</label>
            <input class="form-control" type="text" id="titulo" placeholder="Ingrese el título" maxlength="20" oninput="cambiarTitulo()"></li>

          <li><label for="descripcion">Descripción:</label>
          <input class="form-control" type="text" id="descripcion" placeholder="Ingrese la descripción (máx. 40 caracteres)" maxlength="40" row="5" oninput="cambiarDescripcion()"></li>

          <li><label for="valor">Valor:</label>
            <input class="form-control" type="number" id="valor" placeholder="valor (máx. 10 caracteres)" maxlength="10" oninput="cambiarValor()"></li>
            
          <li><label for="valor">Imagen:</label>
             <input class="form-control" type="file" id="imagenFondoInput" accept="image/*" onchange="dibujarCuadricula()"></li>
  
          <!-- Botón para descargar la imagen -->
          <li><button class="btn btn-primary m-3" onclick="descargarImagen()">Descargar Imagen</button></li>
          

      </div>
    </div>
  </div>
  
  <script src="script.js"></script>
  
  </body>
  </html>
