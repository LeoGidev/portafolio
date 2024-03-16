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
    <h4> Calculadora </h4>
    </div>
  </div>
  <div class=" col-12 container contenido calculator">
    <input type="text" class="screen" id="screen" readonly>
    <div class="buttons">
      <button onclick="clearScreen()">C</button>
      <button onclick="appendToScreen('(')"> ( </button>
      <button onclick="appendToScreen(')')"> ) </button>
      <button onclick="appendToScreen('/')"> / </button>
      <button onclick="appendToScreen('7')">7</button>
      <button onclick="appendToScreen('8')">8</button>
      <button onclick="appendToScreen('9')">9</button>
      <button onclick="appendToScreen('*')"> * </button>
      <button onclick="appendToScreen('4')">4</button>
      <button onclick="appendToScreen('5')">5</button>
      <button onclick="appendToScreen('6')">6</button>
      <button onclick="appendToScreen('-')"> - </button>
      <button onclick="appendToScreen('1')">1</button>
      <button onclick="appendToScreen('2')">2</button>
      <button onclick="appendToScreen('3')">3</button>
      <button onclick="appendToScreen('+')"> + </button>
      <button onclick="appendToScreen('0')">0</button>
      <button onclick="calculate()">=</button>
    </div>
  </div>
    
    <div class="contenido container">
    <a href="https://github.com/LeoGidev/CalculadoraWeb" target="_blank"><img src="../../img/GitHub-logo.webp"></a>
    </div>

</div>
        <script src="script.js"></script>
</body>