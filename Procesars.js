

function Procesar() {
var datos =document.getElementById('idcomment').value;
var nombre= NombreUsuario (datos);
var Metodo= metodo (datos);
 var Tel =telefono (datos);
 var TipoProd = Tipo(datos);
 
document.getElementById('NOM').value= nombre;
document.getElementById('METODO').value= Metodo;
 document.getElementById('idTelefono').value= Tel;
document.getElementById('idTipo').value= TipoProd; 



}


function NombreUsuario (datos)
{

  var recibeaux;
  var recibeaux2;
  var recibe;

  if (datos.indexOf("Recibe:")>0)
  {
    recibeaux= datos.split("Recibe:")
    recibeaux2 = recibeaux[1].split("-")

    recibe = `R:${recibeaux2[0]} -- `
    console.log(recibe);
  }
  else {
    recibe= " "
  }


  var aux2,aux3 ;
  var usuario;
  var imprimir="Imprimir datos";
let aux;
  if (datos.indexOf(imprimir)>0)
  {
    const sa = /\nImprimir datos\n/gi;
 
    aux= datos.replace(sa,"");
    
  }
  else {
    aux = datos.split("hs. |\n");
    
  }


   

  var ningun= "Ningún mensaje por aquí.";
  var ningun1= "Tu comprador te escribió.";
  var ningun2= "No tenés mensajes nuevos.";
  var ningun3= "No tienes mensajes";

  var str = aux[1];
  var n ;
  

  
if (str.indexOf(ningun)>0) aux2= aux[1].split(ningun);
if (str.indexOf(ningun1)>0) aux2= aux[1].split(ningun1);
if (str.indexOf(ningun2)>0) aux2= aux[1].split(ningun2);
if (str.indexOf(ningun3)>0) aux2= aux[1].split(ningun3);


aux3=aux2[0].split("\n");


if (aux3[0].length>10)
{
  console.log(recibe +"-- "+ aux3[0]);
return recibe + aux3[0];
}

else
{
  console.log(recibe + aux3[1]);

return recibe + aux3[1];
}


}


function metodo (datosDeEnvio){

  var flex="Envío rápido a domicilio";
  var ezm="Envío normal a domicilio";
  var ezm2 ="Envío estándar a domicilio"
  var ezm3 ="Envío express a domicilio";
  var ezm4 ="Despacha el paquete ";
  var ezm5 = "Llevá el paquete al punto de despacho";
  var ezm6 = "Llevando el paquete a un punto de despacho";
  var Acordar = "Acordás la entrega";
  var PendinteEnvio= "Envío Pendiente";
  var colecta= "Tenés que darle el paquete a la colecta";

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

 else if (datosDeEnvio.indexOf(colecta)>0)
 {
     return "IF"
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

function prueba()
{
  Bruto= document.getElementById('idcomment').value;
 
}


function Tipo (Bruto)
{
 

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
   "Membrana Aislante Termico Pintura Chapa 10 L Rockryl ®"];

  //TERMOMURO
  var termo1 =["Pintura Antihumedad Por Condensacion Rockryl Termomuro 20 L",
  "Revestimiento Plastico Rockryl termomuro 20 L Llana Saldos",
  "Pintura Aislante Termico Rockryl Techo Frio 20 L Balde",
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

  //MEMBRANA
for (i=0;i<membrana.length;i++)
{
  
  if (Bruto.indexOf(membrana[i])>0) 
  
  {
    return "Membrana"
  }

}


//TECHOFRIO
for (i=0;i<techofrio1.length;i++)
{
  
  if (Bruto.indexOf(techofrio1[i])>0) 
  
  {
    return "Techofrio"
  }

}

//TERMOMURO
for (i=0;i<termo1.length;i++)
{
  
  if (Bruto.indexOf(termo1[i])>0) 
  
  {
   return "Termomuro a rodillo"
  }

}

//Latex exterior
for (i=0;i<latexext1.length;i++)
{
  
  if (Bruto.indexOf(latexext1[i])>0) 
  
  {
return "Latex Exterior"
  }

}

//Latex interior
for (i=0;i<latexInterior1.length;i++)
{
  
  if (Bruto.indexOf(latexInterior1[i])>0) 
  
  {
   
return "Latex Interior"
  }

}

//REVESTIMIENTO COMUN
for (i=0;i<revComun1.length;i++)
{
  
  if (Bruto.indexOf(revComun1[i])>0) 
  
  {
return "a rodillo"
  }

}

//REVESTIMIENTO LLANA COMUN
for (i=0;i<revComLLana1.length;i++)
{
  
  if (Bruto.indexOf(revComLLana1[i])>0) 
  
  {
    return "Llana text"
  }

}

//BASES
for (i=0;i<base.length;i++)
{
  
  if (Bruto.indexOf(base[i])>0) 
  
  {
return "Latex Exterior"
  }

}

for (i=0;i<H2STOP1.length;i++)
{
  
  if (Bruto.indexOf(H2STOP1[i])>0) 
  
  {
return "H2stop"
  }

}
for (i=0;i<AH1.length;i++)
{
  
  if (Bruto.indexOf(AH1[i])>0) 
  
  {
return "AH"
  }

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
