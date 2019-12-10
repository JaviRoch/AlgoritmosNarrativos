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

      //Función para eliminar los tiempos puestos por "No quiero pensar" pero no rellenados
      for (var i = 1; i < 60; i = i+3) {
        console.log("i" + i)
        var comand = i+2;
        console.log()
        if (data[comand].value == "") {
          data[i].value = "";
        }
      }

      console.log("data");
      console.log(data);

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
        console.log("Datos guardados");
        return false;
   });

});
