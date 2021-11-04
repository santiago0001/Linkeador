<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>LINKEADOR</title>
    <meta name="description" content=“LINKEADOR”>  
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  
        <link rel="stylesheet" href="Estilos.css">

    <title>Document</title>
</head>
<body style="background-color:#000000;">
    

<center><h2>Carga de sistema</h2> </center>


    <?php 
    $inc = include("conexion.php");
    
     ?>
    
    
<center>       <table   border="1" style="background-color:#00FF00">
            <tr>
                     <th></th> 
                    <th>Est</th> 
    
                    <th>Ubicacion</th> 
                    <th>Nombre</th> 
                  <th>Producto</th>
                  <th>Pago</th>
                  <th>Precio</th>
                  <th>Item</th>
                  <th></th>
                  <th>Datos</th>
    
    
    
    
            </tr>
    
            <?php 
            $sql="SELECT * FROM `cargadatos` WHERE Eliminado='0' ORDER BY idCarga  ASC";
            $result=mysqli_query($conexion,$sql);
            $cont=1;
            while($mostrar=mysqli_fetch_array($result)){
               
             ?>
    
            <tr>
       
    <form method="POST" name="formInsert" action="BotonesTablaCarga.php">
        <td><input class="oculto" style="width : 30px;" name="ID" id ="ID<?php echo $cont;  ?>" value ="<?php echo $mostrar['idcarga'] ?>" readonly>
        <input class="oculto" name="cont" value ="<?php echo $cont ?>" >
         </td>
        <td><input class="entrada" type="number" name="Estado" style="width : 40px;" id ="Estado<?php echo $cont;  ?>" value ="<?php echo $mostrar['Estado'] ?>" > </td>
        <td><input class="entrada" style="width : 120px;" name="Metodo" id ="metodo<?php echo $cont;  ?>" value ="<?php echo $mostrar['Metodo'] ?>" > </td>
        <td><input class="entrada" style="width : 200px;" name="Nombre" id ="nombre<?php echo $cont;  ?>" value ="<?php echo $mostrar['Nombre'] ?>" readonly> </td>
        <td><input class="entrada" style="width : 200px;" name="Producto" id ="producto<?php echo $cont;  ?>" value ="<?php echo $mostrar['Producto'] ?>" > </td>
        <td><input class="entrada" style="width: 60px;" name="Pago" id="pago<?php echo $cont; ?>" value="<?php echo $mostrar['Pago'] ?>"></td>
        <td><input class="entrada" style="width: 70px;" name="Precio" id="precio<?php echo $cont; ?>" value="<?php echo $mostrar['Precio'] ?>"readonly></td>
        <td><input class="entrada" style="width: 80px;" name="Tipo" id="tipo<?php echo $cont; ?>" value="<?php echo $mostrar['Tipo'] ?>"></td>
        <td><input class="entrada" style="width: 50px;" name="Cantidad" id="cantidad<?php echo $cont; ?>" value="<?php echo $mostrar['Cantidad'] ?>"></td>
        <td><input class="entrada" style="width: 200px;" name="Datos" id="datos<?php echo $cont; ?>" value="<?php echo $mostrar['DatosEnvio'] ?>"readonly></td>
        <td><input class="entrada" type="submit" name="action" value="Update" /></td>
        <td><input class="entrada" type="submit" name="action" value="Delete" /></td>
    
        </form>
                
    
            </tr>
        <?php 
      $cont++;   
    }
         ?>  
        </table>
        </center> 
    <center>
      <button id="btnCopy">Copy</button>       

      </center> <br><br>
      <button id="btnDeleteAll">Delete all</button>

      <script type= "text/javascript">
       

       var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes; //agrega cero si el menor de 10

    var fecha= dia+"/"+mes+"/"+ano;


       var inputFalso = document.createElement('textarea');
            inputFalso.setAttribute("rows","10");
            inputFalso.setAttribute("cols","600")
        
        btnCopy.onclick = function()
        {
          inputFalso.innerHTML="";
          const contador = <?php echo $cont;  ?> ;

        for (var i=1;i<contador;i++) {
        const estado = document.getElementById('Estado'+i).value;
        const metodo = document.getElementById('metodo'+i).value;
        const nombre = document.getElementById('nombre'+i).value;
        const producto = document.getElementById('producto'+i).value;
        const pago = document.getElementById('pago'+i).value;
        const precio = document.getElementById('precio'+i).value;
        const tipo = document.getElementById('tipo'+i).value;
        const cantidad = document.getElementById('cantidad'+i).value;
        const datos = document.getElementById('datos'+i).value;
        const espacio = '\t';
        const salto = '\r';

            
            inputFalso.innerHTML+=`${fecha} ${espacio}${estado} ${espacio} ${metodo} ${espacio} ${nombre} ${espacio} ${producto} ${espacio} ${pago} ${espacio} ${precio}${espacio}${espacio} ${tipo} ${espacio} ${cantidad} ${espacio} ${datos} ${salto}`
          }
            document.body.appendChild(inputFalso);
            inputFalso.select();
         document.execCommand("Copy");
        
        
            document.body.removeChild(inputFalso);
        }


        btnDeleteAll.onclick = function()
        {
          
        }

      </script>
   
    
   
    


</body>
</html>