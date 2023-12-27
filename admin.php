<?php
   if (isset($_SESSION['loggedin'])) {  
    }
    else {
        echo "<div class='alert alert-danger mt-4' role='alert'>
        <h4>Debes iniciar sesion</h4>
        <p><a href='index.html'>Logeate para continuar</a></p></div>";
        exit;
    }
    // controla si la sesion expira
    $now = time();           
    if ($now > $_SESSION['expire']) {
        session_destroy();
        header("Location: index.html");
        exit;
        }
		
    if (isset($_SESSION['message']) && $_SESSION['message'])
    {
      printf('<b>%s</b>', $_SESSION['message']);
      unset($_SESSION['message']);
    }
	
  ?>