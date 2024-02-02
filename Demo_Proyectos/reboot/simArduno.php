<?php

$estado=$_POST["Ac"];
$clave=$_POST['psw'];

if($clave == '123'){
   
        echo 'Reboot exitoso';
    
}
else{
    echo 'Reboot no realizado';
}


?>