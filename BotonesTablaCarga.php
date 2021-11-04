<?php


$ID = $_POST['ID'];
$Estado = $_POST['Estado'];
$Metodo = $_POST['Metodo'];
/* $Nombre = $_POST['Nombre']; */
$Producto = $_POST['Producto'];
$Pago = $_POST['Pago'];
/*$Nombre = $_POST['Precio'];*/
$Tipo = $_POST['Tipo'];
$Cantidad = $_POST['Cantidad'];
/* $Nombre = $_POST['Datos']; */

require 'conexion.php';
$insetar;
if ($_POST['action']=="Update")
{



 $insetar = "UPDATE `cargadatos` SET `Estado` = '$Estado',`Metodo` = '$Metodo',`Producto` = '$Producto',`Pago` = '$Pago',`Tipo` = '$Tipo',`Cantidad` = '$Cantidad' WHERE `cargadatos`.`idcarga` = '$ID';";


}
else {
    $insetar = "UPDATE `cargadatos` SET `Eliminado` = '1' WHERE `cargadatos`.`idcarga` = '$ID';";


}

$query = mysqli_query($conexion,$insetar);

?>

<script>
    window.location.replace('TablaCarga.php'); 

</script>
