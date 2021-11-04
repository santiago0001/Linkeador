
//SALUDAR 
function numeroSaludo (Nom) {
    var num = document.getElementById("idTel").value;
  //var mensaje='HOLA';
  //consol.log (num);
   var remp= / /g;
   num= num.replace(remp, "");
   var remp2= /-/g;
    num = num.replace(remp2, "");
//console.log(document.getElementById("IDNOMBRE").value);

    NombreClient =CortarNombre(Nom);
    Buenas=SaludoHorario();

   var link = `https://api.whatsapp.com/send/?phone=54${num}.&text=${Buenas}%20${NombreClient}!&app_absent=0`;
  
              //document.getElementById('idNumber12').value = link;
              window.open(link,"Diseño Web", "width=1, height=1")
  }





  
//CORTAR EL NOMBRE DE MERCADO LIBRE PARA PONERLO EN EL MENSAJE

function CortarNombre (nombre) {
    var nom;
    
    nom=nombre.split("|");
    
   

    return nom[0];
    }
    
    
    
    // SALUDO SEGUN HORARIO
    function SaludoHorario () {
    const hora = new Date().getHours();
    
    if (hora>19 || hora <4) {mensaje= "Buenas noches";}
    else if (hora>12){ mensaje= "Buenas tardes";}
    else {mensaje= "Buenos dias";}
    return mensaje;
    }
    
    
    
    
    //TECHOFRIO
    function numeroTechofrio (Nom) {
    var num = document.getElementById("idTel").value;
    //var mensaje='HOLA';
    //consol.log (num);
    NombreClient =CortarNombre(Nom);

    Buenas=SaludoHorario();
    
     var link = `https://api.whatsapp.com/send/?phone=54${num}.&text=${Buenas}%20${NombreClient}!%20Te%20paso%20el%20video%20de%20la%20aplicacion%20de%20Techofrio%20https://www.youtube.com/watch?v=dXyvpR-XkGY&feature=youtu.be&app_absent=0`
    
                //document.getElementById('idNumber12').value = link;
                window.open(link,"Diseño Web", "width=1, height=1")
    }
    
    
    
    
    //TERMOMURO 1
    function numeroTermomuro (Nom) {
    var num = document.getElementById("idTel").value;
    //var mensaje='HOLA';
    //consol.log (num);
    NombreClient =CortarNombre(Nom);

    Buenas=SaludoHorario();
     
     var link = `https://api.whatsapp.com/send/?phone=54${num}.&text=
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20%20
     %20%20%20%20%20%20%20%20%20${Buenas}%20${NombreClient}!%20Te%20paso%20el%20video%20de%20la%20aplicacion%20de%20Revestimiento%20a%20rodillo%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20El%20rodillo%20tenes%20que%20empastarlo,%20tiene%20que%20tener%20mucha%20carga%20y%20vas
     %20dejando%20la%20pasta%20en%20la%20pared,%20como%20si%20fuera%20un%20revoque.%20Las%20pasadas%20cortitas%20y%20cargadas,%20como%20si%20estuvieras
     %20revocando.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20*2%20manos%20se%20aplican*%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20
     %20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20-%20%20%20%20%20%20%20%20%20%20%20%20Podes%20agregar%20agua%20para%20ajustar%20viscosidad,%20maximo
     %202lt%20en%2020lt%20material.%20Vas%20viendo%20la%20viscosidad %20%20%20%20%20%20%20%20%20%20%20 https://www.youtube.com/watch?v=jh8gwo9jboQ`
    
                //document.getElementById('idNumber12').value = link;
                window.open(link,"Diseño Web", "width=1, height=1")
    
    }
    

  
function DatosCarga(){
   document.idDat.submit()
}
