<!DOCTYPE html>
<html>
    <head>
        <title>Reboot Device</title>
        
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://kit.fontawesome.com/314f7a8189.js" crossorigin="anonymous"></script>
        
        <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Blinker:wght@300;400&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="styles.css">
      <link rel="icon" href="../../img/ico.ico" type="image/x-icon">
  <link rel="shortcut icon" href="../../img/ico.ico" type="image/x-icon">



    </head>
    

<body onload="ValoresAjax()">
   <header>
      <!-- Barra de navegación -->
      <?php
include '../recursos/barra.php';       
?>
</header>

   <div class="container portada">
      
      <h1 >Device Reboot</h1> 
      <img id="logo" src="../../img/logo.webp"/>
      
   </div>


        
<div class="row justify-content-center ">
       
   <div class="col-12 col-md-3 mb-3">
      <div class="card">
         <div  class="card-header items">Device A</div>
         <div class="card-body corp"> 
            <a onclick="RebootA();move();" id="BotA" class="Boton">REBOOT</a>
            <div hidden="hidden" id="myProgress">
               <div id="myBar"></div>
               <div id="label"></div>
            </div>
         </div>
         <div class="card-footer"><p id="respuestaA"><a href="#">Descripción</a></p></div>
      </div>
   </div>
   <div class="col-12 col-md-3 mb-3">
      <div class="card">
         <div  class="card-header items">Device B</div>
         <div class="card-body corp"> 
            <a onclick="RebootB();moveB()" id="BotB" class="Boton">REBOOT</a>
            <div hidden="hidden" id="myProgressB">
               <div id="myBarB"></div>
               <div id="labelB"></div>
            </div>
         </div>
         <div class="card-footer"><p id="respuestaB"><a href="#">Descripción</a></p></div>
      </div>
   </div>
   <div class="col-12 col-md-3 mb-3">
      <div class="card">
         <div  class="card-header items">Device C</div>
         <div class="card-body corp"> 
            <a onclick="RebootC();moveC()" id="BotC" class="Boton">REBOOT</a>
            <div hidden="hidden" id="myProgressC">
               <div id="myBarC"></div>
               <div id="labelC"></div>
            </div>
         </div>
         <div class="card-footer"><p id="respuestaC"><a href="#">Descripción</a></p></div>
      </div>
   </div>
   <div class="col-12 col-md-3 mb-3">
      <div class="card">
         <div  class="card-header items">Device D</div>
         <div class="card-body corp"> 
            <a onclick="RebootD();moveD()" id="BotD" class="Boton">REBOOT</a>
            <div hidden="hidden" id="myProgressD">
               <div id="myBarD"></div>
               <div id="labelD"></div>
            </div>
         </div>
         <div class="card-footer"><p id="respuestaD"><a href="#">Descripción</a></p></div>
      </div>
   </div> 
</div>
<div class="container mt-3">
   <p>Este demo exhibe el funcionamiento del sistema original de reinicio remoto de dispositivos. Dicho sistema tenía como servidor un Arduino Mega y
       un Shield para la conectividad Ethernet. 
      La simplicidad del diseño se debe a las limitaciones inherentes al dispositivo Arduino mencionado anteriormente. Para realizar pruebas, se ha
       establecido el número 123 como clave.
   </p>
   </div>

    
<footer class="foot"> Realizado por Departamento de Electronica 2018</footer>
  <script src="script.js">
   
  </script>
  </body>
</html>