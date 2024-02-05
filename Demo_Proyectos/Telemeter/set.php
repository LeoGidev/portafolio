<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $octeto1 = $_POST['ip'];
    $octeto2 = $_POST['gw'];


    // Devolver una respuesta con los valores recibidos
    $response = array(
        'ip' => $octeto1,
        'gw' => $octeto2,
       
    );

    // Devolver la respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Devolver una respuesta para método no permitido
    echo 'Método no permitido';
}
?>
