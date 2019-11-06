console.log("en desplegaSalida");

$.getJSON('../datos/data.json', function(data) {
	$.each(data, function(key,value) {
		console.log(key);
		console.log(value["titulo"]);
		$("#desplegable1").append("<option value='key'>"+value['titulo']+"</option>");
		$("#desplegable2").append("<option value='key'>"+value['titulo']+"</option>");
		$("#desplegable3").append("<option value='key'>"+value['titulo']+"</option>");
		$("#desplegable4").append("<option value='key'>"+value['titulo']+"</option>");
		$("#desplegable5").append("<option value='key'>"+value['titulo']+"</option>");
	}); // close each()
}); // close getJSON()
