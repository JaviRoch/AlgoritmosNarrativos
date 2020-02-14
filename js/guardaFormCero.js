$(document).ready(function(){

  //Función para vaciar el formulario una vez guardados los datos
    function vaciaFormulario(){
      $('#titlePuntoCero').val("Title");
      //For para iterar las varibles por los campos del array de ejemplo
      for (var i = 0; i < 38; i+=2) {
        $("#campoCeroT"+i).val("-");
        var ip = i+1;
        $("#campoCeroC"+i).val(" ");
      }
    }

    $("#formCeroSub").click(function (event) {
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
            url  : '../php/grabaCero.php',
            data:  data,
            success:function(data) {

              alert('Datos guardados');
        }
      });
        //Acciones a realizar una vez guardado ocultaForm()
        vaciaFormulario();
        return false;
   });

});
