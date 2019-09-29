    var asiento = 0;

  function muestraCampos(){
    asiento += 1;
    if (asiento==1){
            console.log(asiento);
      document.getElementById('asiento1').style.display='block';
      return
    }
    if (asiento==2){
      document.getElementById('asiento2').style.display='block';
      return
    }
    if (asiento==3){
      document.getElementById('asiento3').style.display='block';
      return
    }
    if (asiento==4){
      document.getElementById('asiento4').style.display='block';
      return
    }
    if (asiento==5){
      document.getElementById('asiento5').style.display='block';
      return
    }
    if (asiento==6){
      document.getElementById('asiento6').style.display='block';
      return
    }
  }
