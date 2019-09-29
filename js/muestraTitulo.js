// Transferencia des datos desde la base de datos JSON
$("#botonNoQuiero").click(
);

var xmlhttp = new XMLHttpRequest();
var url = "/data.json";
// Función al finalizar operación. Status a 200 ok, status a 404 fail
xmlhttp.onreadystatechange = function () {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		// Guardamos los datos en una variable
		datos = xmlhttp.responseText;
		// Parseamos los datos de JSON a array
		parseo(datos);
}
}

// Comunicación con el archivo JSON
xmlhttp.open("GET", url, true);
xmlhttp.send();

// Parseamos los datos desde JSON y guardamos el último libro en una variable
function parseo (dat) {
  var algoritmo = JSON.parse(dat);
}
//
function muestraTitulo(algoritmo){
}
