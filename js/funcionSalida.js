var seleccionados = [];
var data2 =[];

$.getJSON('../datos/data.json', function(data) {
	$.each(data, function(key,value) {
		$("#desplegable1").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable2").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable3").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable4").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable5").append("<option value="+key+">"+value['titulo']+"</option>");
		data2 = data;
	}); // close each()
}); // close getJSON()


$(document).ready(function(){
	$("#imprimirSalida").click(function (event) {
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
		//Cargamos los datos en datos
		seleccionados = $("form").serializeArray();
		//console.log(seleccionados);
		//console.log(seleccionados[0].value);
		console.log(data2[seleccionados[0].value]);

 });
});
