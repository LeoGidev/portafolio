<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $octeto1 = $_POST['octeto1'];
    $octeto2 = $_POST['octeto2'];
    $octeto3 = $_POST['octeto3'];
    $octeto4 = $_POST['octeto4'];
    $gw1 = $_POST['gw1'];

    // Devolver una respuesta con los valores recibidos
    $response = array(
        'octeto1' => $octeto1,
        'octeto2' => $octeto2,
        'octeto3' => $octeto3,
        'octeto4' => $octeto4,
        'gw1' => $gw1
    );

    // Devolver la respuesta en formato JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Devolver una respuesta para método no permitido
    echo 'Método no permitido';
}
?>
