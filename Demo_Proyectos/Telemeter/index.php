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
    
    
    <link rel="icon" href="../../img/ico.ico" type="image/x-icon">
  <link rel="shortcut icon" href="../../img/ico.ico" type="image/x-icon">
      
      <link rel="stylesheet" href="styles.css">
    
      
      </head>
    
      <body onload="GetArduinoInputs()">
        <header>
            <!-- Barra de navegación -->
<?php
include '../recursos/barra.php';       
?>
 
    <div class="conatiner-fluid contenido">
   
      <div class="container mb-3" style="text-align:center;">
      
        <div class="row justify-content-center">
          <div class="col-12 title">
            <h1> Telemeter</h1>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-12 col-md-4 set">
            <h3>Seteo de Red</h3>
            <form id="txt_form" name="frmText">
              IP: <input class="form-control" type="text" placeholder="IP:" name="ip" maxlength="20" pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" required>
              GW:<input class="form-control" type="text" placeholder="GW:" name="gw"  maxlength="20" pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}" required>
            </form>
            <button class="btn btn-primary" value="Set" onclick="SendText()">Set </button>
          </div>
        

        <div class="col-12 col-md-4 set"><h3>Datos</h3>
        
          <h4>Valores de RED</h4>
          IP: <p id="ip">192.168.1.20</p>
          GW: <p id="gw">192.168.1.1</p>
          
          <h4>Telemetría</h4>
          <ul class="list-group bg-transparent border-0">
          <li class="list-group-item bg-transparent border-0">Tensión de linea: <span id="TenL">...</span>V <span class="btn-success" id="EstadoLinea">OK</span</li>
          <li class="list-group-item bg-transparent border-0"> Corriente de linea: <span id="CorrL">...</span>A</li>
          <li class="list-group-item bg-transparent border-0"> Tensión de baterias: <span id="TenB">...</span>V</li>
          <li class="list-group-item bg-transparent border-0">Corriente de Baterías: <span id="CorrB">...</span>A</li>
          <li class="list-group-item bg-transparent border-0">Temperatura interna: <span id="TempA">...</span>°C</li>
          <li class="list-group-item bg-transparent border-0">Temperatura externa: <span id="TempB">...</span>°C</li>
          </ul>
        </div>
        
          <div class="col-12 col-md-4 set" >
            <h4>Mensajes</h4>
            <p id="mensaje">Nada por aquí</p>
          </div>
      </div>
      
        
    </div>
      
    <footer class="foot justify-content-center"> Realizado por Departamento de Electronica 2018</footer>
      
      </body>
      <script src="scripts.js"></script>
      </html>
    