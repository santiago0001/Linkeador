


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
      
      //document.getElementById('SaludoHorario').innerHTML =mensaje;
      return mensaje;
      }


      
      


      