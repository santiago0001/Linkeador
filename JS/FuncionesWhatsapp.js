function MensajeNum(boton){

cont= boton.value;
numero= document.getElementById('idTel'+cont).value;
nombre = CortarNombre(document.getElementById('Nom'+cont).value);
Buenas = SaludoHorario2();
Tipo = document.getElementById('Tip'+cont).value;

TipoDeMensaje(Tipo,numero,nombre,Buenas);
    console.log(boton.value);


    console.log(`El numero es: ${numero} El nombre es: ${nombre} y el tipo de producto es:${Tipo}`);

}

function TipoDeMensaje (str,numero,nombre,Buenas)
{ 
    var techofrio = "Techofrio";
    var aRodillo = "rodillo";
    var AH="AH"
    var h2stop="H2stop"

// FOR A RODILLO
  
  if (str.indexOf(aRodillo)>0||str.indexOf(AH)>0||str.indexOf(h2stop)>0) 
  
  {
      console.log(aRodillo);
    
    Buenas=SaludoHorario();
     
     var link = `https://api.whatsapp.com/send/?phone=54${numero}.&text=
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20%20
     %20%20%20%20%20%20%20%20%20${Buenas}%20${nombre}!%20Te%20paso%20el%20video%20de%20la%20aplicacion%20de%20Revestimiento%20a%20rodillo%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20El%20rodillo%20tenes%20que%20empastarlo,%20tiene%20que%20tener%20mucha%20carga%20y%20vas
     %20dejando%20la%20pasta%20en%20la%20pared,%20como%20si%20fuera%20un%20revoque.%20Las%20pasadas%20cortitas%20y%20cargadas,%20como%20si%20estuvieras
     %20revocando.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20*2%20manos%20se%20aplican*%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20%20%20%20%20%20%20%20%20%20%20%20Podes%20agregar%20agua%20para%20ajustar%20viscosidad,%20maximo
     %202lt%20en%2020lt%20material.%20Vas%20viendo%20la%20viscosidad %20%20%20%20%20%20%20%20%20%20%20 https://www.youtube.com/watch?v=jh8gwo9jboQ`

                window.open(link,"Diseño Web", "width=1, height=1")
      }



else if (str.indexOf(techofrio>0))
{

    Buenas=SaludoHorario();
    
     var link = `https://api.whatsapp.com/send/?phone=54${numero}.&text=${Buenas}%20${nombre}!%20Te%20paso%20el%20video%20de%20la%20aplicacion%20de%20Techofrio%20https://www.youtube.com/watch?v=dXyvpR-XkGY&feature=youtu.be&app_absent=0`
    
                //document.getElementById('idNumber12').value = link;
                window.open(link,"Diseño Web", "width=1, height=1")
}



}





function Saludarboton (boton)
{
    cont= boton.value;
    numero= document.getElementById('idTel'+cont).value;
    nombre = CortarNombre(document.getElementById('Nom'+cont).value);
    Buenas = SaludoHorario2();

    var link = `https://api.whatsapp.com/send/?phone=54${numero}.&text=${Buenas}%20${nombre}!&app_absent=0`;
  
              //document.getElementById('idNumber12').value = link;
              window.open(link,"Diseño Web", "width=1, height=1")
              
    console.log(`El numero es: ${numero} El nombre es: ${nombre}`);
}


function CortarNombre (nombre) {
    var nom;
    
    nom=nombre.split("|");
    
   

    return nom[0];
    }

function Saludar(num,nombre)
{

   var remp= / /g;
   num= num.replace(remp, "");
   var remp2= /-/g;
    num = num.replace(remp2, "");

    NombreClient = nombre;
    Buenas=SaludoHorario();

   var link = `https://api.whatsapp.com/send/?phone=54${num}.&text=${Buenas}%20${NombreClient}!&app_absent=0`;
  
              //document.getElementById('idNumber12').value = link;
              window.open(link,"Diseño Web", "width=1, height=1")

    console.log(boton.value);

}

// SALUDO SEGUN HORARIO
function SaludoHorario2 () {
    const hora = new Date().getHours();
    
    if (hora>19 || hora <4) {mensaje= "Buenas noches";}
    else if (hora>12){ mensaje= "Buenas tardes";}
    else {mensaje= "Buenos dias";}
    return mensaje;
    }

function Eliminar (boton)
{
    var Numero= boton.value;

    var id= document.getElementById('ID'+Numero).value;

    console.log(`Eliminas el cliente con el id: ${id}`);

    window.location.replace(`EliminarDeListaWSP.php?eliminar=${id}`);

}

function Pendiente (boton)
{
    var Numero= boton.value;

    var id= document.getElementById('ID'+Numero).value;

    console.log(`Pasas a pendientes: ${id}`);

    window.location.replace(`PendientesDeLista.php?eliminar=${id}`);

}