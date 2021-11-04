

//PASAS LOS DATOS BRUTOS DE ML Y TE DEVUELVE EL NOMBRE
function NombreUsuario (datos)
{
  var aux,aux2,aux3 ;
  var usuario;
  var imprimir="Imprimir datos";

  if (datos.indexOf(imprimir)>0)
  {
    const regex = /imprimir/gi;
 
    aux= datos.replace(regex,"");
    console.log("estoy remplazando el imprimir");
  }


  aux = datos.split("hs. |\n"); 

  var ningun= "Ningún mensaje por aquí.";
  var ningun1= "Tu comprador te escribió.";
  var ningun2= "No tenés mensajes nuevos.";

  var str = aux[1];
  var n ;
  

  
if (str.indexOf(ningun)>0) aux2= aux[1].split(ningun);
if (str.indexOf(ningun1)>0) aux2= aux[1].split(ningun1);
if (str.indexOf(ningun2)>0) aux2= aux[1].split(ningun2);

aux3=aux2[0].split("\n");


if (aux3[0].length>10)
{
return aux3[0];
}

else
{
return aux3[1];
}


}


//SACAR EL NUMERO DE TELEFONO DE LOS DATOS BRUTOS
function telefono (datos)
{    
    if (datos.indexOf("Tel.: ")>0) 
{
  
  var aux,aux2 ;
  var telefono;

  aux = datos.split("Tel.: "); 
  aux2= aux[1].split("Datos para su factura");
  telefono = aux2 [0];
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
alert("NO TIENE TELEFONO CARGADO, pedirle telefono");

}

return tel;
}

function Procesar (str)
{
 // producto ();


  var flex="Envío rápido a domicilio";
  var ezm="Envío normal a domicilio";
  var ezm2 ="Envío estándar a domicilio"
  var ezm3 ="Envío express a domicilio";
  var ezm4 ="Despacha el paquete ";
  var ezm5 = "Llevá el paquete al punto de despacho";
  var ezm6 = "Llevando el paquete a un punto de despacho";

  if (str.indexOf(flex)>0)
  {
    metodoFlex(str);
    DatosDeEnvio ();
  }

  //if (str.indexOf(ezm)>0||str.indexOf(ezm2)>0||str.indexOf(ezm3)>0||str.indexOf(ezm4)>0||str.indexOf(ezm5)>0||str.indexOf(ezm6)>0)
  //{
//metodoEZM();
//LimpiarDireccion();
  //}

 

//  Precio ();
 // CantidadComprada ();

}


//EN CASO DE QUE SEA FLEX
function metodo (datosDeEnvio){

    var flex="Envío rápido a domicilio";
    var Acordar = "Acordás la entrega";
    var PendinteEnvio= "Envío Pendiente";

    if (datosDeEnvio.indexOf(flex)>0)
  {
    var aux;
    var barrio;
  
    datosDeEnvio = datosDeEnvio.split("CP");
    aux= datosDeEnvio [1].split("-");
    barrio = aux [1].split(",");
  
   // var usuario = NombreUsuario (document.getElementById('idcomment').value); 
  
      return "Flex"+barrio [0];

  }
   else if (datosDeEnvio.indexOf(Acordar)>0)
   {
       return "Acordar entrega"
   }
   else if (datosDeEnvio.indexOf(PendinteEnvio)>0)
   {
    var aux;
    var barrio;
  
    datosDeEnvio = datosDeEnvio.split("CP");
    aux= datosDeEnvio [1].split("-");
    barrio = aux [1].split(",");
  
   // var usuario = NombreUsuario (document.getElementById('idcomment').value); 
  
      return barrio [0];
   }
   else {
       return "ezm"
   }
     
  
  }


// EXTRAE DATOS DE ENVIO DE LOS DATOS BRUTOS
  function DatosDeEnvio (Datos) {
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
    
    aux2 = aux[1].split("Datos para su factura");
    
    aux3= aux2[0].split("\n");
  
    
    for (var i=0; i<aux3.length;i++)
    {
      aux4+= aux3[i]+" - "
  
    }
    dire = aux4.split("undefined");
  
   return dire[1];
  
   console.log (aux4);
  
  }
  









function fecha (){
    var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes; //agrega cero si el menor de 10

    document.getElementById('idfecha').value =dia+"/"+mes+"/"+ano;
}

    // SALUDO SEGUN HORARIO
    function SaludoHorario () {
      const hora = new Date().getHours();
      
      if (hora>19 || hora <4) {mensaje= "Buenas noches!";}
      else if (hora>12){ mensaje= "Buenas tardes!";}
      else {mensaje= "Buenos dias!";}
      
      document.getElementById('SaludoHorario').innerHTML =mensaje;
      return mensaje;
      }

function Agregar (){
    document.getElementById("ContadorLineas").value++;
    cont=document.getElementById("ContadorLineas").value;
    
console.log(cont);
    document.getElementById("idMas").innerHTML+= `<div class="Linea">
    Prod: <input name="Producto${cont}" id="idprod${cont}" style="width:250px;" value=" ">   Color: 
    
    
    <select id="sel3${cont}">
           <option> </option>
   
           <option>Blanco premium</option>
           <option>Arena o15t</option>
           <option>Arena Y7,5ml</option>
           <option>Mineral m15t</option>
           <option>Saturno N2,5ml</option>
           <option>Gris claro N5ml</option>
           <option>Mistico vc30i</option>
           <option>Crema siena s30i</option>
           <option>Flor c30i</option>
           <option>Nuez m60i</option>
           <option>Tostado m120i</option>
           <option>Montana m120iN5ml</option>
   
         </select>
   
   
   
    Tipo:
    <select name="Tipo${cont}" id="sel1${cont}">
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
   
   
         <label for="sel2">Text:</label>
   
         <select id="sel2${cont}">
             <option> </option>
             <option>Fino</option>
             <option>Medio</option>
             <option>Grueso</option>
   
         </select>
         <label for="selTam">LT:</label>
         <select name="Litros${cont}" id="selTam${cont}">
             <option> </option>
             <option>20</option>
             <option>10</option>
             <option>4</option>
       
         </select>
   
         Cant: <input name="Cantidad${cont}" type="number" id="idcant${cont}" style="width : 40px; height: 25px" > 
         Prec: <input name="Precio${cont}" type="text" id="idprec${cont}" style="width : 80px; height: 25px" > 
         Pago: <input name="Pago${cont}" type="checkbox"  id="idpago${cont}" ">
    
    
    <button  type="button" onclick="descripcion(this)"  value="${cont}" id="Aceptar${cont}" >Aceptar</button> 
    

     </div>
     `;

}

function Precio (Bruto)
{
  var datos= Bruto;
  var aux,aux1, num;

  aux=datos.split("$");
  
  aux1=aux[1].split("\n");
  num= aux1[0];

  var remp2= /[.]/g;
  num = num.replace(remp2, "");

  
  
  return num;
  
}

function CantidadComprada (datos)
{
  
  var aux,aux1,precio;

  aux=datos.split("$");
  aux1=aux[1].split("\n");
  precio=aux1[1].split(" u.");

 
  
  return precio[0];
  
}



function Color (datos)
{
var retorno;

  if (datos.indexOf("Color:")>0)
  {
    
  
var aux = datos.split("Color:");
var color = aux[1].split("\n");
  
retorno= color[0];
}

else {retorno= "COLOR?"
alert("HAY QUE PREGUNTARLE QUE COLOR QUIERE");

}

return retorno;
}

function UnRodillo (bruto)
{
  var rodillo=["Rodillo Lana 22", "Rodillo Revestimiento Pelo Corto Rodihaus 22"];
var retorno;
  for (i=0;i<rodillo.length;i++)
  {
    if (bruto.indexOf("Rodillo Lana 22")>0||bruto.indexOf("Rodillo Revestimiento Pelo Corto Rodihaus 22")>0) 
  
  {
    retorno= "+ UN RODILLO CON EL BALDE";
  }
else if (bruto.indexOf("Hongo Stop")>0)
{
  retorno= "HONGO STOP"
}

  else {
    retorno= "";
  }
  }


  return retorno;


}

function Tamaño (bruto) {
  
  var medio ="10 L";

    if (bruto.indexOf(medio)>0) 
  {
    document.getElementById('selTam').value=10;
return "10lt"
  }
  else {
    return "";
  }


  }








function producto (Bruto)
{


  var producto;
  var color=Color(Bruto);
  var extra= UnRodillo(Bruto);
  var Tam= Tamaño(Bruto);
  var cant="";
  
  if (document.getElementById('idcant').value>1)
  {
    cant=document.getElementById('idcant').value+"x";
  }

  // MEMBRANAS
  var membrana = ["Membrana Liquida 20 Lts Techos Rodillo Lana 22cm",
  "Membrana Liquida Fibrada 20 Lts Impermeable Rockryl®",
  "Membrana En Pasta Rockryl® 20 Lts Impermeable",
  "Membrana En Pasta Fibrada Premium Rockryl® 20 Lts"];


  //TECHOFRIO
  var techofrio1 = ["Membrana Aislante Termico Pintura Chapa 20 L Rockryl",
  "Membrana Liquida Aislante Termica 20 Lt Rockryl® - Envios",
  "Pintura Chapa Aislante Termico Rockryl 20 Lt Sustentable",
  "Pintura Chapa Aislante Termico Techo Fresco 10 Lt Rockryl®",
  "Pintura Chapa Aislante Termico Techo Fresco 10 Lt Rockryl",
  "Pintura Aislante Termico Rockryl Techo Frio 20 L Balde",
   "Membrana Aislante Termico Pintura Chapa 10 L Rockryl ®"];

  //TERMOMURO
  var termo1 =["Pintura Antihumedad Por Condensacion Rockryl Termomuro 20 L",
  "Revestimiento Plastico Rockryl termomuro 20 L Llana Saldos",
  "Pintura Aislante Termica Texturada A Rodillo Rockryl 20 Lts",
 "Revestimiento Plástico Texturado Aislante Termico Rockryl 20",
  "Rodillo Revestimiento Plastico Texturado Rockryl® Aislante",
  "Revestimiento Texturado Atermico Rockryl Termomuro 20 L",
  "Revestimiento Texturado Para Rodillo Rockryl 20 Lt",
  "Rodillo Revestimiento Plastico Texturado Rockryl Aislante 20",
  "Revestimiento Texturado Atermico Rockyl 20 Lts ",
   "Pintura Antihumedad Por Condensacion Rockryl® Termomuro",
   "Pintura Antihumedad Por Condensacion Rockryl Termomuro 10 L"];


  //LATEX EXTERIOR
  var latexext1 =["Pintura Exterior Latex Profesional Color Medio 20 L Rockryl®",
  "Pintura Latex Exterior Color Medio 20 Litros Rockryl®",
  "Pintura Latex Exterior Color Intenso 20 Litros Rockryl®",
  "Pintura Latex Exterior Color Medio 10 Litros Rockryl®", "Exterior"];


  //Latex interior
  var latexInterior1=["Pintura Latex Interior Con Color 10 Litros Rockryl®",
  "Pintura Latex Interior Con Color 20 Litros Rockryl",
  "Pintura Latex Interior Color 20 Litros Rockryl®",
  "Pintura Latex Interior Con Color Fuerte 10 Litros Rockryl®"];


  //REVESTIMIENTO COMUN
  var revComun1 = ["Revestimiento Texturado 20 Lt Rockryl® Impermeable Rodilo",
  "Revestimiento Texturado 20 Lt Rockryl® Colores Cartilla",
  "Revestimiento Plastico Rodillo Texturado Rockryl® Aislante",
  "Rockryl Revestimiento Plastico Texturado",
  "Membrana Liquida Texturada Paredes Rockryl 20 Lts",
  "Revestimiento Texturado Plastico Rockryl Hcca 20 L Rodillo",
  "Membrana Liquida Texturada Paredes Rockryl Hcca 20 Lts ",
  "Revestimiento Texturado Rodillo Rockryl® 10 L Color Concert", 
  "Membrana Liquida Texturada Paredes Rockryl 20 Lts Grises"];

  //REVESTIMIENTO COMUN LLANA 
  var revComLLana1 = ["Revestimiento Texturado 20 Lt Rockryl® Impermeable Con Llana",
  "Revestimiento Texturado 20 Lt Rockryl® Impermeable Colores",
  "Revestimiento Plástico Aislante Termico 10 Lt Rockryl®",
  "Revestimiento Texturado Rock® 20 Lt Neutro - Chau Agua"];


  //BASES
  var base = ["Base Para Revestimiento","Base Revestimiento "];

  //H2STOP
  var H2STOP1 =["Rockryl Revestimiento Plastico Texturado",
  "Pintura Anticondensante Chapa Rockryl H2stop 20 Lt", "H2stop"];

  //AH
  var AH1 =["Pintura Antihumedad Interior Rockryl 20 Lts - No Placa",
  "Pintura Antihumedad Interior Rockryl 20 L Humedad Cimientos",
  "Pintura Antihumedad Rockryl® 10 Lt - Directo Sobre Humedad","Cimientos"];

  var pedido= ""+Tam +" " +producto +" " +color +" " + extra+"";

  //MEMBRANA
for (i=0;i<membrana.length;i++)
{
  
  if (Bruto.indexOf(membrana[i])>0) 
  
  {
    producto+="Membrana";
    document.getElementById('idprod').value = `${cant} ${Tam} Membrana ${color} ${extra}`;

    document.getElementById('sel1').value = "Membrana"
  }

}


//TECHOFRIO
for (i=0;i<techofrio1.length;i++)
{
  
  if (Bruto.indexOf(techofrio1[i])>0) 
  
  {
    producto+="Techofrio";
    document.getElementById('idprod').value = `${cant} ${Tam} Techofrio ${color} ${extra}`;

    document.getElementById('sel1').value = "Techofrio"
  }

}

//TERMOMURO
for (i=0;i<termo1.length;i++)
{
  
  if (Bruto.indexOf(termo1[i])>0) 
  
  {
    producto+="Termomuro";
    document.getElementById('idprod').value = `${cant} ${Tam} Termomuro ${color} ${extra}`;

    document.getElementById('sel1').value = "Termomuro a rodillo"
  }

}

//Latex exterior
for (i=0;i<latexext1.length;i++)
{
  
  if (Bruto.indexOf(latexext1[i])>0) 
  
  {
    producto+="Latex exterior";
    document.getElementById('idprod').value = `${cant} ${Tam} Latex exterior ${color} ${extra}`;

    document.getElementById('sel1').value = "Latex Exterior"
  }

}

//Latex interior
for (i=0;i<latexInterior1.length;i++)
{
  
  if (Bruto.indexOf(latexInterior1[i])>0) 
  
  {
    producto+="Latex Interior";
    document.getElementById('idprod').value = `${cant} ${Tam} Latex Interior ${color} ${extra}`;

    document.getElementById('sel1').value = "Latex Interior"
  }

}

//REVESTIMIENTO COMUN
for (i=0;i<revComun1.length;i++)
{
  
  if (Bruto.indexOf(revComun1[i])>0) 
  
  {
    producto+="a rodillo";
    document.getElementById('idprod').value = `${cant} ${Tam} a rodillo ${color} ${extra}`;

    document.getElementById('sel1').value = "a rodillo"
  }

}

//REVESTIMIENTO LLANA COMUN
for (i=0;i<revComLLana1.length;i++)
{
  
  if (Bruto.indexOf(revComLLana1[i])>0) 
  
  {
    producto+="a rodillo";
    document.getElementById('idprod').value = `${cant} ${Tam} a llana ${color} ${extra}`;

    document.getElementById('sel1').value = "Llana text"
  }

}

//BASES
for (i=0;i<base.length;i++)
{
  
  if (Bruto.indexOf(base[i])>0) 
  
  {
    producto+="base";
    document.getElementById('idprod').value = `${cant} ${Tam} base ${color} ${extra}`;

    document.getElementById('sel1').value = "Latex Exterior"
  }

}

for (i=0;i<H2STOP1.length;i++)
{
  
  if (Bruto.indexOf(H2STOP1[i])>0) 
  
  {
    producto+="h2stop";
    document.getElementById('idprod').value = `${cant} ${Tam} H2stop ${color} ${extra}`;

    document.getElementById('sel1').value = "H2stop"
  }

}
for (i=0;i<AH1.length;i++)
{
  
  if (Bruto.indexOf(AH1[i])>0) 
  
  {
    producto+="AH";
    document.getElementById('idprod').value = `${cant} ${Tam} AH ${color} ${extra}`;

    document.getElementById('sel1').value = "AH"
  }

}



}
