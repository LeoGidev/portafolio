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

  <link rel="icon" href="img/icono.png" type="image/x-icon">
  <link rel="shortcut icon" href="img/icono.png" type="image/x-icon">
  
  <link rel="stylesheet" href="style/style.css">

  
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
        <a class="nav-link" href="#seccion2">Proyectos</a>
      </li>
    </ul>
  </div>
</nav>

        <div class='container-fluid' style="height: 200px; background-image: url('img/portada.png');">
        <div id='cubridor'></div>
        
        </div>
        <div class='container-fluid' style="height: 60px; background-color: black;">
        
        </div>
        
    </header>
    <section>
    
      <div class="container-fluid">
        <div class="row">
          <div class= col-4 >
            <div class="card" id='perfil' style="width:400px">
              <img class="card-img-top" src="img/logo.jpg" alt="Card image">
              <div class="card-body">
                <h4 class="card-title">Leo Gimenez</h4>
                <p class="card-text">Programador</p>
                <ul class="nav nav-pills flex-column">
                  <li><a href="https://github.com/LeoGidev" >github.com/LeoGidevGitHub</a></li>
                  <li><a href="#" >leogimenez.dev@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        
          <div class="col-4 col-lg-8">   
            <div class='card' id='Sobremi'>
              <div class='card-body'>
                <h4 class='card-title'>Sobre mí<h4>
                <h6>Hola, soy Leo Gimenez 👋</h6>
                <p class='card-text'>Actualmente estoy dedicado y enfocado integramente en el desarrollo de aplicaciones con distintas tecnologías.
                Durante siete años trabajé para una empresa de internet, tiempo en el cual participé de diferentes proyectos tanto en programación 
                web como en desarrollos de tecnologías IoT y automatizaciones de tareas. He decidido dar el salto y dedicarme enteramente a este apasionante 
                campo laboral.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </setcion>
    <section id='Teconologías'>
    <h4>Teconologías<h4>
    <p>................................</p>
    <p>................................</p>
    <p>................................</p>
    <p>................................</p>
    </setcion>
    <section id='Proyectos'>
    <h4>Proyectos<h4>
    <p>................................</p>
    <p>................................</p>
    <p>................................</p>
    <p>................................</p>
    </setcion>

    <script>
  // Cambio de color de la barra de navegación al hacer scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.container-fluid').height()) {
      $('.navbar').removeClass('transparent').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed').addClass('transparent');
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.setAttribute('target', '_blank');
    });
});

</script>
</body>