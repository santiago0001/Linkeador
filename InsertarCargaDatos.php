<script src="JS/copiMensaje.js"></script>







<?php

function TipoItem ($tipo,$tam){
     $retorno;
    
    if ($tipo=="a rodillo")
    {
      $retorno= "a rodillo";
    }
    else if ($tipo=="Llana text")
    {
      $retorno= "texturado";
    }
    else if ($tipo=="Techofrio")
    {
      $retorno= "cz";
    }
    else if ($tipo=="Termomuro llana"||$tipo=="Termomuro a rodillo")
    {
      $retorno= "eco";
    }
    else if ($tipo=="H2stop")
    {
      $retorno= "h2stop";
    }
    else if ($tipo=="Latex interior"||$tipo=="Latex Exterior")
    {
      $retorno= "base $tam";
    }
    else if ($tipo=="AH")
    {
      $retorno= `ah`;
    }
    else if ($tipo=="Membrana")
    {
      $retorno= `membrana`;
    }
    
    return $retorno;
    
    
    }








function PagoFun($check) {
    if ($check){
        return "mpago";
     }
     else {return " ";}
}
$contador= $_POST['Contador'];

for ($i=0;$i<=$contador;$i++){

$Name = $_POST["NombreCliente"];
$Metodo = $_POST['MetodoIN'];
$DatosEnvio2= $_POST["DatosDeEnvio"];
$DatosEnvio = str_replace("'", " ", $DatosEnvio2);

$Producto = $_POST["Producto$i"];
$Pago = PagoFun($_POST["Pago$i"]);
$Cant = $_POST["Cantidad$i"];
$Precio= $_POST["Precio$i"];
$Tam = $_POST["Litros$i"];
$Tipo= TipoItem($_POST["Tipo$i"],$Tam);

$aux;
$cant2;


if ($Tam==10)
{ $cant2= $Cant*-1;
   $aux=$cant2/2;
   
   $cant2= str_replace ( "." , "," , $aux ) ;
   
}
else {
    $cant2= $Cant*-1;
    $Cant=$Cant;
}
?>


<?php
echo $Name."<br>"; 
echo $Metodo."<br>";
echo $Producto."<br>";
echo $Pago."<br>";
echo $Cant."<br>";
echo $Precio."<br>";
echo $Tipo."<br>";
echo $DatosEnvio."<br>";
echo $Tam."<br>";
echo $cant2."<br>";


require 'conexion.php';


 $insetar = "INSERT INTO `cargadatos` VALUES (NULL,'$Name','$Metodo','$DatosEnvio','$Producto','$Pago','=$Precio*$Cant','$Tipo','$cant2','','0')";

$query = mysqli_query($conexion,$insetar);

}

?>

<script>
    window.location.replace('Linkeador.php'); 

</script> 