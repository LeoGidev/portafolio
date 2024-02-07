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
  
  

  <script>
function mostrar(){document.getElementById('spi').hidden =false;}
function ocultar(){document.getElementById('spi').hidden =true;}


function showUser(str) { setInterval(mostrar(),3000);
    if (str == "") {setInterval(ocultar(),3000);
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
			
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
				
				setInterval(ocultar(),3000);
				
            }
        };
        xmlhttp.open("GET","ping.php?q="+str,true);
		
        xmlhttp.send();
    }
}
</script>

  
  </head>

<body>
    <header>
        <!-- Barra de navegación -->
        <?php
include '../recursos/barra.php';       
?>
</header>
<div class="container-fluid mt-3 contenido" >
  <div class="jumbotron ">
    
      <h3>Herramienta de Diagnóstico:</h3><p>Por favor ingrese el nombre del dominio, por ejemplo "www.google.com" para realizar la prueba.</p>
    
  </div>
</div>
<div class="container">

  <div class="row justify-content-center m-3">
    <div>
      <form onkeypress="if(event.keyCode == 13) event.returnValue = false;">
        <input type="text" name="q" placeholder="Dominio del tipo www." >
	      <input type="button" class="btn btn-primary" value="Probar" onclick="showUser(q.value)">
      </form>
    </div>
  </div>
  <div class="row justify-content-center">
    <div>
      <div  id="txtHint">

      </div>
      <div id='spi' class='spinner-border text-primary' hidden='hidden' >

      </div>
    </div>
  </div>
  <?php

  $ip = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];
  echo '<div class="row justify-content-center border mt-3"> <div><h6>Su ip pública: </h6>'.$ip.'</div></div>';
  ?>
</div>	
<div class="container">
<div class="row justify-content-center mt-3"><p class="m-3">Este es un DEMO del sistema de diagnóstico para equipos de Red, debido a las 
    restricciones del hosting compartido, no es posible disponer de todas las funcionalidades que este sistema cuenta si es instalado en 
un servidor propio.</p>

</div>
</div>
</body>