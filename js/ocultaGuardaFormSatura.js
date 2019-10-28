$(document).ready(function(){
    function ocultaForm(){
      document.getElementById('ocultoFormulario').style.display='none';
    }
    //$(document).on('submit', 'formSaturaSub', function() {
    $("#formSaturaSub").click(function (event) {

      //Evitamos que recargue la página
      event.preventDefault();
        //Obtenemos datos formulario.
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
