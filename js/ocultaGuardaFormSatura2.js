$(document).ready(function(){
    function ocultaForm(){
      document.getElementById('ocultoFormulario').style.display='none';
      document.getElementById('ocultoFormulario2').style.display='flex';
    }
    //$(document).on('submit', 'formSaturaSub', function() {
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
        return false;
   });

});
