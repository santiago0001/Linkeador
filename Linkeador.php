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
 
  <a href="#" class="nav-enlaceSelect">Registro de compras</a>
  <a href="UltimosRegistros.php"class="nav-enlace">Ultimos registros</a>
  <a href="Whatsapp.php"class="nav-enlace">WhatsappAdmin</a>
  <a href="TipoProducto.php"class="nav-enlace">Configuracion</a>

  <input  class="entrada" type="text"  id="idfecha" style="width : 150px; height: 40px" maxlength="45" readonly> 

   
</nav>

<h2><p id="idfecha" class="Fecha"> </p> </h2> 

<div class="TituloRegistroCompras"> 
<h2>REGISTRO DE COMPRAS </h2>
<h4> <center><p id="SaludoHorario" ></p></center></h4>
</div>
<!--  method="POST" name="formInsert" action="CargarDatos.php" -->
<!-- <form   method="POST" name="formInsert" action="CargarDatos.php"  > -->
<script src="FuncionesGenerales.js"></script>
<script src="Procesars.js"></script>
<script src="LimpiarDatosBrutos.js"></script>


<div class="FormBrutos">
  <!-- <label for="comment">Datos brutos:</label> -->
  <textarea  name="DatosBrutos" class="entrada" style="width : 800px" rows="4" id="idcomment"></textarea>
  <input class="oculto"  id="NOM" name="NombreCliente" value="" class="btn btn-primary" >
  <input class="oculto"  id="METODO" name="MetodoEntrega" value="" class="btn btn-primary" >
 <input class="oculto"  id="idTelefono" name="Telefono" value="" class="btn btn-primary" >
  <input class="oculto"  id="idTipo" name="Tipo" value="" class="btn btn-primary" > 



  <button  type="submit"  class="btn btn-primary" onclick="Procesar()">Procesar</button>
  <button  type="button"  class="btn btn-primary" onclick="LimpiarDatosBrutos()">Limpiar</button>


 
</div> 


 <!--</form> -->

<form class="nuevoRegVacio">
<div class"nuevoRegVacio">
  <!--<button  type="button"  class="btn btn-primary" onclick=""> Nuevo registro vacio</button> --> 
 </div>
 </form>
 <!-- LLAMADO A LOS ARCHICOS JAVASCRIPT --> 



<script> 

fecha();
SaludoHorario();
</script>



<br><br><br><br><br><br><br><br><br><br><br>

<div class="FormBrutos2">
<iframe class="entrada" src="TablaCarga.php" width="1300" height="300" ></iframe>

</div>


</body>

</html>