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
<nav class="navbar navbar-expand-lg fixed-top transparent">
  <a class="navbar-brand" href="#">Leo Developer</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#seccion1">Sobre mí</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#seccion2">Proyectos</a>
      </li>
    </ul>
  </div>
</nav>
        <div class='container-fluid' style="height: 200px; background-image: url('img/portada.png');">
        <h1>Hola</h1>
        </div>
        
    </header>
    <script>
  // Cambio de color de la barra de navegación al hacer scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > $('.container-fluid').height()) {
      $('.navbar').removeClass('transparent').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed').addClass('transparent');
    }
  });
</script>
</body>