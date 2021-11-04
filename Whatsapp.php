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

<!--BARRA DE NAVEGACION    -->
<nav>
 
  <a href="Linkeador.php" class="nav-enlace">Registro de compras</a>
  <a href="UltimosRegistros.php"class="nav-enlace">Ultimos registros</a>
  <a href="Whatsapp.php" class="nav-enlaceSelect">WhatsappAdmin</a>
  <a href="TipoProducto.php"class="nav-enlace">Configuracion</a>

  <input  class="entrada" type="text"  id="idfecha" style="width : 150px; height: 40px" maxlength="45"  > 

   
</nav>

<style>
table, th, td {
  border: 3px solid black;
  
}

th, td {
  padding: 3px;
}
</style>

<script src="JS/FuncionesWhatsapp.js"></script>

<table>
<tr>
<td>



<?php 
$inc = include("conexion.php");

 ?>






<h2>Mensajes de Whatsapp</h2>

<small>
	<table border="1" style="background-color:#00FF00">
		<tr>
			<td>ID</td>
			<td>Cliente</td>
			<td>Telefono</td>
			<td>Tipo</td>

		</tr>

		<?php 
		$sql="SELECT * from msjwsp WHERE Eliminado ='0' AND `NullNum`='0' Order by idCliente ASC";
        $result=mysqli_query($conexion,$sql);
        $cont=1;
		while($mostrar=mysqli_fetch_array($result)){
            
		 ?>

		<tr>
        <td><input style="width : 30px;" id ="ID<?php echo $cont;  ?>" value ="<?php echo $mostrar['idCliente'] ?>" readonly> </td>
			<td><input id ="Nom<?php echo $cont;  ?>" value ="<?php echo $mostrar['Ciente'] ?>" readonly> </td>
			<td> <input style="width : 80px;" value="<?php echo $mostrar['WSP'] ?>" name="" id="idTel<?php echo $cont;  ?>"></td>
            <td><input style="width : 90px;" id ="Tip<?php echo $cont;  ?>" value ="<?php echo $mostrar['Tipo'] ?>"></td>
            <td><button onclick="MensajeNum(this)"  value="<?php echo $cont;  ?>" >Video</button> 
            <button onclick="Saludarboton(this)"  value="<?php echo $cont;  ?>" >Saludar</button> 
            <button  onclick="Eliminar(this)"  value="<?php echo $cont;  ?>" ><img src="Iconos/delete.png"></button> 
            <button onclick="Pendiente(this)"  value="<?php echo $cont;  ?>" ><img src="Iconos/pendiente.png"></button> 

        </td>

            

		</tr>
	<?php 
$cont++;    
}
	 ?>
	</table>
</small>


  </td>
  <td>
    --------
  </td>
  <td>


  <?php 
$inc = include("conexion.php");

 ?>






<h2>Pendiente de Whatsapp</h2>

<small><small>
	<table border="1" style="background-color:#00FF00">
		<tr>
    <td>ID</td>
			<td>Cliente</td>
			<td>Telefono</td>
			<td>Tipo</td>

		</tr>

		<?php 
		$sql="SELECT * from msjwsp WHERE Eliminado ='0' AND `NullNum`='1' Order by idCliente ASC";
        $result=mysqli_query($conexion,$sql);
  
		while($mostrar=mysqli_fetch_array($result)){
            
		 ?>

		<tr>
        <td><input style="width : 30px;" id ="ID<?php echo $cont;  ?>" value ="<?php echo $mostrar['idCliente'] ?>" readonly> </td>
			<td><input id ="Nom<?php echo $cont;  ?>" value ="<?php echo $mostrar['Ciente'] ?>" readonly> </td>
			<td> <input style="width : 80px;" value="<?php echo $mostrar['WSP'] ?>" name="" id="idTel<?php echo $contt;  ?>"></td>
            <td><input style="width : 90px;" id ="Tip<?php echo $cont;  ?>" value ="<?php echo $mostrar['Tipo'] ?>"></td>
            <td><button onclick="MensajeNum(this)"  value="<?php echo $cont;  ?>" >Video</button> 
            <button onclick="Saludarboton(this)"  value="<?php echo $cont;  ?>" >Saludar</button> 
            <button onclick="Eliminar(this)"  value="<?php echo $cont;  ?>" ><img src="Iconos/delete.png"></button> 

        </td>

            

		</tr>
	<?php 
$cont++;    
}
	 ?>
	</table>
</small></small>



  </td>

</tr>
  </table>














<script src="FuncionesGenerales.js"></script>

<script> 

fecha();
</script>





</body>

</html>

