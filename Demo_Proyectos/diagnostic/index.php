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


  <link rel="icon" href="img/icono.png" type="image/x-icon">
  <link rel="shortcut icon" href="img/icono.png" type="image/x-icon">
  
  <link rel="stylesheet" href="style.css">

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
<nav class="navbar navbar-expand-sm navbar-dark fixed-top transparent">
  <a class="navbar-brand" href="#">Leo Developer</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#Sobremi">Sobre mí</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#proyectos">Proyectos</a>
      </li>
    </ul>
  </div>
</nav>
</header>
<div class="conatiner">
  <div class="jumbotron ">
    <div class="container-fluid">
      <h3>Herramienta ping</h3><p>Por favor ingrese la ip para realizar la prueba.</p>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 ">
      <form onKeypress="if(event.keyCode == 13) event.returnValue = false;">
        <input type="text" name="q" placeholder="ip" >
	      <input type="button" class="btn btn-primary" value="Probar" onclick="showUser(q.value)">
      </form>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-xs-12 ">
      <div  id="txtHint">

      </div>
      <div id='spi' class='spinner-border text-primary' hidden='hidden' >

      </div>
    </div>
  </div>
</div>	
</body>