<?php
// Simulación de valores aleatorios
$button1 = rand(170, 240);
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
?>
