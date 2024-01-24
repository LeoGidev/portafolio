<?php
$q = $_GET['q'];





$port = 80; // Puedes ajustar el puerto según tus necesidades

// Intenta abrir una conexión de socket
$fp = @fsockopen($q, $port, $errno, $errstr, 5);

// Verifica si la conexión fue exitosa
if ($fp) {
   echo "<ul class='list-group list-group-horizontal'><li class='list-group-item list-group-item-success'> Conexion exitosa entre el servidor y ";
	echo $q;
	echo "</li><li class='list-group-item list-group-item-success'>Diagnóstico: OK</li></ul>";
    fclose($fp);
} else {
    echo "<ul class='list-group list-group-horizontal'><li class='list-group-item list-group-item-danger'> Error en la conexion entre el servidor y ";
	echo $q;
	echo " </li><li class='list-group-item list-group-item-danger'>Diagnostico: Down</li></ul>";
    echo "Error al realizar el ping: $errstr ($errno)";
}



    //echo $q2;
	//$comando = "ping ".$q." -n 2 ";
    //$output = shell_exec($comando);
    //echo $output;
    //exec($comando, $output, $return_var);

    // Imprime la salida del comando
//echo "Salida del ping:\n";
//foreach ($output as $line) {
  //  echo $line . "\n";
//}

// Verifica el código de retorno del comando
//if ($return_var === 0) {
  //  echo "Ping exitoso";
//} else {
  //  echo "Error al realizar el ping";
//}
	
	
	//if (strpos($output, "recibidos = 0")|| strpos($output, "vuelva a intentarlo.")||strpos($output, "TTL expirado")||strpos($output, "Host de destino inaccesible") ) {
    //echo "<ul class='list-group list-group-horizontal'><li class='list-group-item list-group-item-danger'>";
	//echo $q;
	//echo " Down</li></ul>";
//} else {
    //echo "<ul class='list-group list-group-horizontal'><li class='list-group-item list-group-item-success'>";
	//echo $q;
	//echo " OK</li></ul>";
//}

?>