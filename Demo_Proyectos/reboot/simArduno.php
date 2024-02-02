<?php

$estado=$_POST["Ac"];
$clave=$_POST['psw'];

if($clave == '123'){
    if($estado == 'RebootA' ){
        echo 'Reboot exitoso';
    }
}


?>