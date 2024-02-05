<?php
// Simulación de valores aleatorios
$button1 = rand(180, 220);
$button2 = rand(0, 40);
$button3 = rand(10, 12);
$button4 = rand(0, 10);
$button5 = rand(30, 100);
$button6 = rand(0, 48);

// Construcción de la respuesta XML
$responseXML = '<?xml version="1.0" encoding="UTF-8"?>';
$responseXML .= '<data>';
$responseXML .= "<button1>{$button1}</button1>";
$responseXML .= "<button2>{$button2}</button2>";
$responseXML .= "<button3>{$button3}</button3>";
$responseXML .= "<button4>{$button4}</button4>";
$responseXML .= "<button5>{$button5}</button5>";
$responseXML .= "<button6>{$button6}</button6>";
$responseXML .= '</data>';

// Configuración de encabezados para indicar que es XML
header('Content-Type: text/xml');
echo $responseXML;



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
