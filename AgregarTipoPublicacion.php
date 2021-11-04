<!doctype html>

<html lang=“es”>

<head>
  <meta charset="utf-8">
  <title>LINKEADOR</title>
  <meta name="description" content=“LINKEADOR”>  
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <link rel="stylesheet" href="Estilos.css">

</head>

<body  class="body">
<?php
require 'conexion.php';
$Tip = $_GET["Tipo"];
$Publi = $_GET["Publi"];

echo $Tip;
echo $Publi;


$insetar = "INSERT INTO `tipoprod` VALUES (NULL,'$Tip','$Publi')";

$query = mysqli_query($conexion,$insetar);

?>


<script>
    window.location.replace('TipoProducto.php'); 
</script> 



</body>

</html>

