function copiMensaje() {
   /* Get the text field */
   var copyText = document.getElementById("mens");

   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /*For mobile devices*/
 
   /* Copy the text inside the text field */
   document.execCommand("copy");
 
 alert("Ya tenes el mensaje copiado en el portapapeles para pedirle que te pase el whatsapp correcto. Haces ctr+V donde quieras pegar el mensaje");
 

}


function myFunction() {
   /* Get the text field */
   var copyText = document.getElementById("myInput");
 
   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /*For mobile devices*/
 
   /* Copy the text inside the text field */
   document.execCommand("copy");

/*    document.getElementById('idmetodo').value="";
    document.getElementById('nombre').value="";
   document.getElementById('producto').value="";
    document.getElementById('idmpago').value="";
    document.getElementById('idcant').value="";
    document.getElementById('idcomment').value="";
    document.getElementById('idprec').value="";
    document.getElementById('idEnvio').value=""; */

 
 
 }

 function Pagado(bool){

   if (bool){
      return "mpago";
   }
   else {return " "}

 }

function TipoItem (tipo,tam){
var retorno;

if (tipo=="a rodillo")
{
  retorno= "a rodillo"
}
else if (tipo=="Llana text")
{
  retorno= "texturado"
}
else if (tipo=="Techofrio")
{
  retorno= "cz"
}
else if (tipo=="Termomuro llana"||tipo=="Termomuro a rodillo")
{
  retorno= "eco"
}
else if (tipo=="H2stop")
{
  retorno= "h2stop"
}
else if (tipo=="Latex interior"||tipo=="Latex Exterior")
{
  retorno= `base ${tam}`
}
else if (tipo=="AH")
{
  retorno= `ah`
}
else if (tipo=="Membrana")
{
  retorno= `membrana`
}

return retorno;


}




 function Carga(){

var contLineas= document.getElementById("ContadorLineas").value;
var fech ,met,nom,prod,mpago,cant,dat,prec,tipo,tam;

for (i=0;i<=contLineas;i++){
   if (i!=0) {

    prod = document.getElementById('idprod'+i).value;
       mpago = Pagado(document.getElementById('idpago'+i).checked);
      cant = document.getElementById('idcant'+i).value *-1;
      prec = document.getElementById('idprec'+i).value;
       tam = document.getElementById('selTam'+i).value;

       tipo = TipoItem(document.getElementById('sel1').value,tam);
   }
   else {
    fech = document.getElementById('idfecha').value;
      met = document.getElementById('METODO').value;
    nom = document.getElementById('NOM').value;
      prod = document.getElementById('idprod').value;
      mpago = Pagado(document.getElementById('idpago').checked);
      cant = document.getElementById('idcant').value *-1;
      dat = document.getElementById('idDatos').value;
      prec = document.getElementById('idprec').value;
       tam = document.getElementById('selTam').value;

       tipo = TipoItem(document.getElementById('sel1').value,tam);
   }

   var cant2,aux;
   var medio ="10lt";
   const regex = /[.]/gi;

   if (tam==10)
   { console.log("ACAAAA");
      aux=cant/2;

      cant2=aux.toString().replace(/[.]/g , ","); 
      cant= cant*-1;
   }
   else {
      cant2= cant;
      cant=cant*-1;
   }
   

   //var tipo = TipoDeItem (document.getElementById('sel1').value);



   document.getElementById('myInput').value+=`${fech} \t\t ${met} \t ${nom} \t ${prod} \t ${mpago} \t =${prec}*${cant} \t\t ${tipo}  \t  ${cant2}\t ${dat}  \t  \r`;


}




   console.log(`La cantidad de lineas es: ${contLineas}`);
 }

function limpiarCargaDatos(){
document.getElementById('myInput').value=" ";

}

function AgregarTipoProd() {
var tipo = document.getElementById("Tipo").value;

window.location.replace(`AgregarTipoDeProducto.php?Tipo=${tipo}`); 

}

function AgregarPublicacion() {
  var tipo = document.getElementById("sel1").value;
  var publi = document.getElementById("NomPubli").value;
  
  window.location.replace(`AgregarTipoPublicacion.php?Tipo=${tipo}&Publi=${publi}`); 
  
  }
  
