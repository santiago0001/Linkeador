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

<nav>
 
  <a href="Linkeador.php" class="nav-enlace">Registro de compras</a>
  <a href="UltimosRegistros.php"class="nav-enlace">Ultimos registros</a>
  <a href="Whatsapp.php"class="nav-enlace">WhatsappAdmin</a>
  <a href="TipoProducto.php" class="nav-enlaceSelect">Configuracion</a>

  <input  class="entrada" type="text"  id="idfecha" style="width : 150px; height: 40px" maxlength="45"  > 

   
</nav>

<script src="FuncionesGenerales.js"></script>
<script src="JS/copiMensaje.js"></script>
<script> 
fecha();
SaludoHorario();
</script>


<table>

        <tr> 
                    <th>Tipo de producto</th>
                    <th>Detalle</th>
        </tr>
</font>
        <tr>
                    <th>
                    <select id="sel1">
                    <?php require 'conexion.php';

      $sql = "SELECT id,Tipo FROM tipopubli";

  $query = $conexion -> query ($sql);

  while($valores = mysqli_fetch_array($query)){
     echo "<option value='".$valores['Tipo']."'>".$valores['Tipo']."</option>";
  }

?>

                    </select>
                    </th>
                    <th><input class="entrada" id="NomPubli" type="text"></th>
                    <th><button onclick="AgregarPublicacion()">Agregar</button></th>
        </tr>


</table>




<a href="TipoProducto.php"> <---- Volver </a> <br>


</body>

</html>

