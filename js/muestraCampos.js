    var asiento = 0;

  function muestraCampos(){
    asiento += 1;
    if (asiento==1){
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
    if (asiento==7){
      document.getElementById('asiento7').style.display='block';
      return
    }
    if (asiento==8){
      document.getElementById('asiento8').style.display='block';
      return
    }
    if (asiento==9){
      document.getElementById('asiento9').style.display='block';
      return
    }
    if (asiento==10){
      document.getElementById('asiento10').style.display='block';
      return
    }
    if (asiento==11){
      document.getElementById('asiento11').style.display='block';
      return
    }
    if (asiento==12){
      document.getElementById('asiento12').style.display='block';
      return
    }
    if (asiento==13){
      document.getElementById('asiento13').style.display='block';
      return
    }
    if (asiento==14){
      document.getElementById('asiento14').style.display='block';
      return
    }
    if (asiento==15){
      document.getElementById('asiento15').style.display='block';
      return
    }
    if (asiento==16){
      document.getElementById('asiento16').style.display='block';
      return
    }
    if (asiento==17){
      document.getElementById('asiento17').style.display='block';
      return
    }
    if (asiento==18){
      document.getElementById('asiento18').style.display='block';
      return
    }
    if (asiento==19){
      document.getElementById('asiento19').style.display='block';
      return
    }
    if (asiento==20){
      document.getElementById('asiento20').style.display='block';
      return
    }
  }

$(document).ready(function(){
	$("#flecha1").on("click",function(){
    $('#LateralSup').removeClass('col-lg-2');
    $('#LateralSup').addClass('col-lg-6');

    $('#Contenido').removeClass('col-lg-10');
    $('#Contenido').addClass('col-lg-6');

    $('#flecha1').hide();
    $('#flecha2').show();

	});

  $("#flecha2").on("click",function(){
    $('#LateralSup').removeClass('col-lg-6');
    $('#LateralSup').addClass('col-lg-2');

    $('#Contenido').removeClass('col-lg-6');
    $('#Contenido').addClass('col-lg-10');

    $('#flecha2').hide();
    $('#flecha1').show();

	});

  $("#flecha3").on("click",function(){
    $('#LateralSup2').removeClass('col-lg-2');
    $('#LateralSup2').addClass('col-lg-6');

    $('#Contenido2').removeClass('col-lg-10');
    $('#Contenido2').addClass('col-lg-6');

    $('#flecha3').hide();
    $('#flecha4').show();

  });

  $("#flecha4").on("click",function(){
    $('#LateralSup2').removeClass('col-lg-6');
    $('#LateralSup2').addClass('col-lg-2');

    $('#Contenido2').removeClass('col-lg-6');
    $('#Contenido2').addClass('col-lg-10');

    $('#flecha4').hide();
    $('#flecha3').show();

  });

  $("#flecha5").on("click",function(){
    $('#LateralSup3').removeClass('col-lg-2');
    $('#LateralSup3').addClass('col-lg-6');

    $('#Contenido3').removeClass('col-lg-10');
    $('#Contenido3').addClass('col-lg-6');

    $('#flecha5').hide();
    $('#flecha6').show();

  });

  $("#flecha6").on("click",function(){
    $('#LateralSup3').removeClass('col-lg-6');
    $('#LateralSup3').addClass('col-lg-2');

    $('#Contenido3').removeClass('col-lg-6');
    $('#Contenido3').addClass('col-lg-10');

    $('#flecha6').hide();
    $('#flecha5').show();

  });
});
