<!doctype html>

<html lang=“es”>

<head>
  <meta charset="utf-8">
  <title>LINKEADOR</title>
  <meta name="description" content=“LINKEADOR”>  
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

      <link rel="stylesheet" href="http://localhost/Linkeador/Linkeador/Estilos.css">

</head>

<body  >




<?php
require 'conexion.php';
date_default_timezone_set('America/Argentina/Buenos_Aires');

$NombreCliente = $_POST['NombreCliente'];
$Metodo = $_POST['MetodoEntrega']; 
$Telfono = $_POST['Telefono'];
$DatosDeEnvio = $_POST['DatosDeEnvio'];



$Producto = $_POST['Producto'];
$Color = $_POST['Color'];
$Tipo = $_POST['Tipo'];
$Litros = $_POST['Litros'];
$Textura = $_POST['Textura'];
$Cantidad = $_POST['Cantidad'];
$Precio = $_POST['Precio'];

//Si pago
if (isset($_POST['Pago'])) {
    $Pago = "true";
}
else {
    $Pago ="false";
   
}



echo $NombreCliente."<br />";
echo $Telfono."<br />";
echo $Metodo."<br />";
echo $DatosDeEnvio."<br />";
echo $Producto."<br />";
echo $Color."<br />";
echo $Tipo."<br />";
echo $Litros."<br />";
echo $Textura."<br />";
echo $Cantidad."<br />";
echo $Precio."<br />";
echo $Pago."<br />";



$fechaAhora = date("Y-m-d H:i:s");




header("Location: http://localhost/Linkeador/Linkeador/UltimosRegistros.php");



?>







<h1>Cargando datos...</h1>




</body>

</html>