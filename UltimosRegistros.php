<!doctype html>

<html lang=“es”>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

<link rel="stylesheet" href="Estilos.css">
</head>
<script src="FuncionesGenerales.js"> </script>
<nav>
 
  <a href="Linkeador.php" class="nav-enlace">Registro de compras</a>
  <a href="UltimosRegistros.php"class="nav-enlaceSelect">Ultimos registros</a>
  <a href="Whatsapp.php"class="nav-enlace">WhatsappAdmin</a>
  <a href="TipoProducto.php"class="nav-enlace">Configuracion</a>

  <!-- <a href="#" class="nav-enlace">Mensajes</a>
  <a href="#"class="nav-enlace" >Tutoriales</a> --> 


    <input  class="entrada" type="text"  id="idfecha" style="width : 150px; height: 40px" maxlength="45"  > 
    
</nav>

<body  class="body">
<br><br>


<?php 
$inc = include("conexion.php");
if ($inc) {
	$consulta = "SELECT * from user WHERE Metodo LIKE '%Flex%' ORDER BY idCarga  DESC LIMIT 1";
	$resultado = mysqli_query($conexion,$consulta);
	if ($resultado) {
		while ($row = $resultado->fetch_array()) {

	    $nombre = $row['Nombre'];
	    $fechareg = $row['Hora'];
        ?>

<style>
table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 10px;
}
</style>
        
        <div>
            <table  style="background-color:#00FF00">
            <thead>
                <tr>

                <th><H1>ULTIMO FLEX CARGADO</H1></th> 
              
              <th><H1>FECHA</H1></th>
                </tr>
                <tr>
                <th>   <h3><?php echo $nombre; ?></h3></th> 
                <th>  <?php echo $fechareg ?> </th>
                </tr>

        </thead>
            </table>
            
        	

        </div> 
	    <?php
	    }
	}
}
?>


<?php 
$inc = include("conexion.php");
if ($inc) {
	$consulta = "SELECT * from user where Metodo='ezm' OR Metodo='IF' ORDER BY idCarga DESC LIMIT 1";
	$resultado = mysqli_query($conexion,$consulta);
	if ($resultado) {
		while ($row = $resultado->fetch_array()) {

	    $nombre = $row['Nombre'];
      $fechareg = $row['Hora'];
      

        
        ?>

<style>
table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 10px;
}
</style>
        <br><br><br>
        <div>
            <table  style="background-color:#00FF00">
            <thead>
                <tr>

                <th><H1>ULTIMO EZM CARGADO</H1></th> 
              
              <th><H1>FECHA</H1></th>
                </tr>
                <tr>
                <th>   <h3><?php echo $nombre; ?></h3></th> 
                <th>  <?php echo $fechareg ?> </th>
                </tr>

        </thead>
            </table>
            
        	

        </div> 
	    <?php
	    }
	}
}
?>
<script>fecha();</script>

<?php       $consulta = "DELETE FROM user WHERE idCarga not in ( SELECT idCarga FROM user WHERE idCarga > ((SELECT MAX(idCarga)FROM user )-50) )";
	$resultado = mysqli_query($conexion,$consulta);?>
