$(document).ready(function(){
    function ocultaForm(){
      document.getElementById('ocultoFormulario').style.display='none';
      document.getElementById('ocultoFormulario2').style.display='flex';
    }
    //$(document).on('submit', 'formSaturaSub', function() {
    $("#formSaturaSub").click(function (event) {
      //if ($("#pregunta1").val() == ""){
        //Evitamos que recargue la página
        event.preventDefault();
        //Obtenemos datos formulario.
        $('input').each(function(index, item){
          var $input = $(item);
          $input.closest('div').removeClass('has-error');
          if ($input.val().trim() == '') {
            $input.closest('div').addClass('has-error');
          }
        });

        var data = $("form").serializeArray();
          //AJAX.
          $.ajax({
              type : 'POST',
              url  : '../php/grabaSatura.php',
              data:  data,
              success:function(data) {
          }
          });
                ocultaForm()
      //} else {
        //alert($('#pregunta1').val());
      //}
      return false;
   });
});

/*
$(document).ready(function(){
         $('#btnguardar').click(function(){
            if($('#idInput1').val() !=""){
               var datos=$('#frmajax').serialize();
               $.ajax({
                  type:"POST",
                  url:"scripts/reg_vehiculo.php",
                  data:datos,
                  success:function(r){
                     if(r==1){
                        alert("Fallo al agregar");
                     }else{
                        alert("Vehiculo agregado con éxito!!");
                        document.getElementById("frmajax").reset();
                     }
                  }
               });
            } else {
               alert('campos vacíos');
            }
            return false;
         });
      });*/
