function objetoAjax(){
    console.log("En función objeto Ajax");
		var xmlhttp = false;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {

			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false; }
		}

		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		  xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
  }

function enviarDatos(){
console.log("En función Enviar Datos");
      //Recogemos los valores introducimos en los campos de texto
  		pregunta1 = document.formSatura.pregunta1.value;
  		pregunta2 = document.formSatura.pregunta2.value;

  		//instanciamos el objetoAjax
  		ajax = objetoAjax();

  		//Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
  		ajax.open("POST", "grabaSatura.php", true);

  		//cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
  		ajax.onreadystatechange = function() {

               //Cuando se completa la petición, mostrará los resultados
  			if (ajax.readyState == 4){

  				//El método responseText() contiene el texto de nuestro 'consultar.php'. Por ejemplo, cualquier texto que mostremos por un 'echo'
  				console.log(ajax.responseText);
  			     }
  		}

  		//Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
  		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  		//enviamos las variables a 'grabaSatura.php'
  		ajax.send("&pregunta1="+pregunta1+"&pregunta2="+pregunta2)

  }


function ocultaForm(){
  console.log("En función oculta Formulario");
  document.getElementById('ocultoFormulario').style.display='none';
}
