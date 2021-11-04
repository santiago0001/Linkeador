function descripcion(button){

    num=button.value;
    var cant = document.getElementById(`idcant${num}`).value;
    var tipo = document.getElementById(`sel1${num}`).value;
    var text = document.getElementById(`sel2${num}`).value;
    var col = document.getElementById(`sel3${num}`).value;


    if (document.getElementById(`selTam${num}`).value=="10")
    {
      if (cant>1){
        cant=cant+"x 10lt";
      }else {
        cant="10lt";
      }
      
    }

    else if (document.getElementById(`selTam${num}`).value=="4")
    {
      document.getElementById(`selTam${num}`).valuo97e="0,25";
      cant="4lt ";
    }
    
   else if (cant<2){cant=" ";}

    document.getElementById(`idprod${num}`).value =cant+" "+tipo +" "+ text +" "+ col;  


  }

