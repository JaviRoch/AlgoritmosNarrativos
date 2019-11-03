$(document).ready(function(){
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
        }
        });
        //Acciones a realizar una vez guardado ocultaForm()
        return false;
   });

});
