

$(document).ready(function(){
	$("#buttonLugar").click(function(){
		console.log("Botón pulsado");
			$.getJSON("../data.json", function(datos){
				console.log["pps"]
				 console.log(datos[0]['Nhecho']);
				 console.log(datos);
		 });
	});
});
