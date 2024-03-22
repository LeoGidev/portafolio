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
  <link rel="icon" href="img/icono.png" type="image/x-icon">
  <link rel="shortcut icon" href="img/icono.png" type="image/x-icon">
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
        <h4> Tetris </h4>
    </div>
  </div>
    
   
  <div class="contenedor">
    <div class="score conatiner">
        <table>
            <tr>
                <td>Puntaje:</td>
                <td><span class="valor" id="scoring">000</span></td>
            </tr>
            <tr>
                <td>Nivel:</td>
                <td><span class="valor" id="nivel">Manco</span></td>
            </tr>
        </table>
    </div>
    
    <canvas id="tetris" width="240" height="400"></canvas>
    
    <div id="controls">
        <button class="direccion" id="move-left">◄</button>
        <button class="direccion" id="rotate">Giro</button>
        <button class="direccion" id="move-right">►</button>
        
    </div>
</div>


<div id="Felicidades" class="modal">
  <div class="modal-contenido">
    <span class="cerrar" onclick="cerrarAlerta()">&times;</span>
    <div class="mensaje"> <h2> ¡¡Felicidades!!</h2><p>Acabas de llegar al puntaje máximo 😃</p>
    <p>Ya vete a trabajar 🙄</p></div>
    <div id="animacionPapelillos" class="papelillos"></div>
  </div>
</div>

    
    <div class="contenido3 container">
    <a href="https://github.com/LeoGidev/reloj" target="_blank"><img src="../../img/GitHub-logo.webp"></a>
    </div>


        <script src="script.js"></script>
</body>