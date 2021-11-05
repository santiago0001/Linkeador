<!doctype html>

<html lang=“es”>

<head>
  <meta charset="utf-8">
  <title>LINKEADOR</title>
  <meta name="description" content=“LINKEADOR”>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

      <link rel="stylesheet" href="Estilos.css">



</head>

<body class="body">


<nav>

  <a href="Linkeador.php" class="nav-enlaceSelect">Registro de compras</a>
  <a href="UltimosRegistros.php"class="nav-enlace">Ultimos registros</a>
  <a href="Whatsapp.php"class="nav-enlace">WhatsappAdmin</a>

  <!-- <a href="#" class="nav-enlace">Mensajes</a>
  <a href="#"class="nav-enlace" >Tutoriales</a> -->


    <input  class="input" type="text"  id="idfecha" style="width : 150px; height: 40px" maxlength="45"  >


</nav>



<script src="JS/ExtraerDatosBrutos.js"></script>
<script src="JS/saludos.js"></script>

<script src="JS/FuncionesMaster.js"></script>
<script src="JS/copiMensaje.js"></script>




<?php
require 'conexion.php';
date_default_timezone_set('America/Argentina/Buenos_Aires');

$DatoBruto = $_POST['DatosBrutos'];
$Nombre = $_POST['NombreCliente'];
$Metodo = $_POST['MetodoEntrega'];
$fechaAhora = date("Y-m-d H:i:s");

$Tipo = $_POST['Tipo'];
$Telefono = $_POST['Telefono'];

if (strpos( $Nombre , "'" ) )
{
  $Nombre= str_replace("'","",$Nombre);
}



$insetar = "INSERT INTO user VALUES (NULL, '$fechaAhora', '$Nombre', '$Telefono', '$Metodo')";

$query = mysqli_query($conexion,$insetar);

if ($query)
{

}

else
{
    echo "INCORRECTO";
}

if (strpos($Nombre, '-- ') !== false) {
  $NOM = explode("-- ", $Nombre);
}
else {
  $NOM [0]= "  ";
  $NOM [1]= $Nombre;
}


$insetar = "INSERT INTO msjwsp VALUES (NULL, '$NOM[1]', '$Telefono', '$Tipo', '0','0')";

$query = mysqli_query($conexion,$insetar);



?><form method="POST" name="formInsert" action="InsertarCargaDatos.php"  >

  <textarea class="oculto"  name="DatosBrutos" class="oculto" style="width : 350px" rows="7" id="DatosBrutos"><?php echo $DatoBruto;  ?></textarea>
  <p id="DatosACargar"></p>
<p id="idMas"></p>
<input class="oculto"  id="NOM" name="NombreCliente" value="<?php echo $Nombre;  ?>" class="btn btn-primary" >
<input class="oculto"  id="METODO" name="MetodoEntrega" value="<?php echo "$Metodo";  ?>" class="btn btn-primary" >
<input class="oculto"  id="idTelefono" name="Telefono" value="<?php echo $Telefono;  ?>" class="btn btn-primary" >
<!-- <input class="oculto"  id="idTipo" name="Tipo" value="<?php echo "$Tipo";  ?>" class="btn btn-primary" >
 -->


<input class="oculto" value="0" name="Contador" id="ContadorLineas">






<script>
 

  //CARGO LA FECHA DEL DIA
fecha ();

  //OCULTAR BOTON DE DATOS BRUTOS , PUSE UN BOTON PORQUE INPUT ME SACABA LOS ESPACIOS
document.getElementById("DatosBrutos").style.visibility = "hidden";

// VUELCO LOS DATOS EN EL BUTTON DATOS BRUTOS
var datos= document.getElementById('DatosBrutos').value
function telefono2 (datos)
{    
    if (datos.indexOf("Tel.: ")>0) 
{
  
  var aux,aux2 ;
  var telefono;

  aux = datos.split("Tel.: "); 

  if (datos.indexOf("Datos para su factura")>0) 
  {
    aux2= aux[1].split("Datos para su factura");
    telefono = aux2 [0];
  }
  else if (datos.indexOf("Factura")>0) 
  {
    aux2= aux[1].split("Fact");
    telefono = aux2 [0];
  }
  
  console.log(telefono)


  
if (telefono[0]==='0') {
  var tel = telefono.replace(/0/, "");
}
else {
  tel=telefono;
}
}

else
{
tel="";

}

return tel;
}


function DatosDeEnvio2 (Datos) {
    var flex="Envío rápido a domicilio\n";
    var pend ="Envío Pendiente"

    var aux,aux2,aux3, aux4,dire;
  
    if (Datos.indexOf(flex)>0)
    {  
    aux = Datos.split(flex);
    }
    else if (Datos.indexOf(pend)>0) {
        aux = Datos.split("Datos del envío\n");

    }
    else {return ""}
   
    
    if (datos.indexOf("Datos para su factura")>0) 
  {
    aux2 = aux[1].split("Datos para su factura");
  }
  else if (datos.indexOf("Factura")>0) 
  {
    aux2= aux[1].split("Fact");
    
  }

    
    
    aux3= aux2[0].split("\n");
  
    
    for (var i=0; i<aux3.length;i++)
    {
      aux4+= aux3[i]+" - "
  
    }
    dire = aux4.split("undefined");
  
   return dire[1];
  
   console.log (aux4);
  
  }
  


//SACO EL NOMBRE DE TODOS LOS DATOS
var NombreCliente= document.getElementById('NOM').value
var NombreCorto= CortarNombre(NombreCliente);
var Telefono =telefono2 (datos);
var DatosEnvio = DatosDeEnvio2 (datos);
var Metodo = document.getElementById('METODO').value
var Precio = Precio (datos);
var Cantidad = CantidadComprada(datos);
var contador = document.getElementById('ContadorLineas').value




document.getElementById("DatosACargar").innerHTML=` <div class="Datos">Nombre: ${NombreCliente} <button   id="IDNOMBRE" class="oculto" type="button"  value "${NombreCliente}"  > ${NombreCliente}</button> ---
 Telefono: <input name="Telefono" id="idTel" value="${Telefono}">


         <input  value="${NombreCorto} pasanos tu whatsapp que te enviamos video y recomendaciones de la aplicacion" type="text"  id="mens" style="width : 30px; heigth : 1px" >  <button  type="button" onclick="copiMensaje()">Si no tiene WSP</button>




 <br>
 Datos de envio:  <input name="MetodoIN" id="idmetodo" value="${Metodo}"> <input id="idDatos" name="DatosDeEnvio" style="width:500px;" value="${DatosEnvio}"> <br><br>
<div>
 <div class="Linea">
 Prod: <input name="Producto${contador}" id="idprod" value="" style="width:250px;" >   Color:


 <select name="Color" id="sel3">
        <option> </option>

        <option>Blanco premium</option>
        <option>Arena o15t</option>
        <option>Arena Y7,5ml</option>
        <option>Mineral m15t</option>
        <option>Saturno N2,5ml</option>
        <option>Gris claro N5ml</option>
        <option>Mistico vo30i</option>
        <option>Crema siena s30i</option>
        <option>Flor c30i</option>
        <option>Nuez m60i</option>
        <option>Tostado m120i</option>
        <option>Montana m120iN5ml</option>

      </select>



 Tipo:
 <select name="Tipo${contador}" id="sel1">

           <option> </option>
          <option>a rodillo</option>
          <option>Llana text</option>
          <option>Techofrio</option>
          <option>Termomuro llana </option>
          <option>Termomuro a rodillo </option>
          <option>H2stop</option>
          <option>Latex interior</option>
          <option>Latex Exterior</option>
          <option>AH</option>
          <option>Membrana</option>


          </select>


      <label  for="sel2">Text:</label>

      <select name="Textura" id="sel2">
          <option> </option>
          <option>Fino</option>
          <option>Medio</option>
          <option>Grueso</option>

      </select>
      <label  for="selTam">LT:</label>
  <select name="Litros${contador}" id="selTam">
      <option>20</option>
      <option>10</option>
      <option>4</option>

  </select>


      Cant: <input name="Cantidad${contador}" value="${Cantidad}" type="number" id="idcant" style="width : 40px; height: 25px" >
      Prec: <input name="Precio${contador}" value="${Precio}" type="text" id="idprec" style="width : 65px; height: 25px" >

      Pago: <input name="Pago${contador}" type="checkbox" checked="true" id="idpago" ">


 <button type="button" onclick="descripcion(this)" >Aceptar</button>

 </div>




 `;

 producto(datos);





</script>

<button type="button"  onclick="Agregar()">Añadir linea</button>
<button type="submit" onclick="Carga()" >Cargar datos</button>

<br><br><br>

</form>



<!-- The text field -->
<textarea class="oculto" id="myInput" name="w3review" rows="4" cols="150"></textarea>
<!-- The button used to copy the text -->
<button class="oculto"  type="button" onclick="myFunction()">Copy text</button>
<button class="oculto"  type="button" onclick="limpiarCargaDatos()">Limpiar</button>
<center>

<iframe src="TablaCarga.php" width="1300" height="800" frameborder="0"></iframe>
</center>
</body>

</html>
