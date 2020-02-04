$(document).ready(function(){
    function ocultaForm(){
      document.getElementById('ocultoFormulario').style.display='none';
      document.getElementById('ocultoFormulario2').style.display='flex';
    }

    $("#formSaturaSub").click(function (event) {

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
        //Preparamos los datos para la trasnferencia
        var data = $("form").serializeArray();
        //Comprobamos que los campos numéricos han sido rellenados
        if (data[0]["value"] && data[1]["value"] && data[6]["value"] && data[7]["value"] && data[8]["value"] && data[9]["value"] && data[11]["value"] && data[15]["value"] && data[16]["value"] && data[17]["value"] && data[19]["value"] != ""){

          //AJAX envío de los datos a php
          $.ajax({
              type : 'POST',
              url  : '../php/grabaSatura.php',
              data:  data,
              success:function(data) {
                //Ocultamos el formulario y mostramos la sección de creación del algoritmo
                ocultaForm()
          }
          });
        } else {
          //Alerta si hay campos vacíos
          alert('Campos númericos vacíos');
        }
      return false;
   });
});
