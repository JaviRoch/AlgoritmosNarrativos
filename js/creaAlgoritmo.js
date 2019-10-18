//Cuando esté cargado todo el html
$(document).ready(function(){
	$("#buttonLugar").click(function(){
			//Extraemos los datos del archivo
			$.getJSON("../datos/data.json", function(datos){
				console.log("Datos ");
				console.log(datos);

				//Extraemos los campos con el tipo Lugar
				var lugaresExtra=[];
				var lugares = datos.filter(datos => datos.hecho0 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando0"]);
				}
				var lugares = datos.filter(datos => datos.hecho1 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando1"]);
				}
				var lugares = datos.filter(datos => datos.hecho2 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando2"]);
				}
				var lugares = datos.filter(datos => datos.hecho3 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando3"]);
				}
				var lugares = datos.filter(datos => datos.hecho4 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando4"]);
				}
				var lugares = datos.filter(datos => datos.hecho5 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando5"]);
				}
				var lugares = datos.filter(datos => datos.hecho6 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando6"]);
				}
				var lugares = datos.filter(datos => datos.hecho7 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando7"]);
				}
				var lugares = datos.filter(datos => datos.hecho8 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando8"]);
				}
				var lugares = datos.filter(datos => datos.hecho9 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando9"]);
				}
				var lugares = datos.filter(datos => datos.hecho10 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando10"]);
				}
				var lugares = datos.filter(datos => datos.hecho11 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando11"]);
				}
				var lugares = datos.filter(datos => datos.hecho12 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando12"]);
				}
				var lugares = datos.filter(datos => datos.hecho13 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando13"]);
				}
				var lugares = datos.filter(datos => datos.hecho14 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando14"]);
				}
				var lugares = datos.filter(datos => datos.hecho15 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando15"]);
				}
				var lugares = datos.filter(datos => datos.hecho16 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando16"]);
				}
				var lugares = datos.filter(datos => datos.hecho17 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando17"]);
				}
				var lugares = datos.filter(datos => datos.hecho18 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando18"]);
				}
				var lugares = datos.filter(datos => datos.hecho19 == "Lugar");
				for (var i = 0; i < lugares.length; i++) {
					lugaresExtra.push(lugares[i]["comando19"]);
				}

					console.log("Lugares Extra");
					console.log(lugaresExtra);

		 });
	});
	
	$("#buttonCaracteristica").click(function(){
			//Extraemos los datos del archivo
			$.getJSON("../datos/data.json", function(datos){
				console.log("Datos ");
				console.log(datos);

				//Extraemos los campos con el tipo Caracteristica
				var caracteristicasExtra=[];
				var caracteristicas = datos.filter(datos => datos.hecho0 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando0"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho1 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando1"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho2 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando2"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho3 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando3"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho4 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando4"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho5 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando5"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho6 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando6"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho7 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando7"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho8 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando8"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho9 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando9"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho10 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando10"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho11 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando11"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho12 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando12"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho13 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando13"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho14 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando14"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho15 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando15"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho16 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando16"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho17 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando17"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho18 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando18"]);
				}
				var caracteristicas = datos.filter(datos => datos.hecho19 == "Caracteristica");
				for (var i = 0; i < caracteristicas.length; i++) {
					caracteristicasExtra.push(caracteristicas[i]["comando19"]);
				}

				console.log("Característica Extra");
				console.log(caracteristicasExtra);
			});
	});

	$("#buttonPersona").click(function(){
			//Extraemos los datos del archivo
			$.getJSON("../datos/data.json", function(datos){
				console.log("Datos ");
				console.log(datos);

				//Extraemos los campos con el tipo Persona
				var personaExtra=[];
				var persona = datos.filter(datos => datos.hecho0 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando0"]);
				}
				var persona = datos.filter(datos => datos.hecho1 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando1"]);
				}
				var persona = datos.filter(datos => datos.hecho2 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando2"]);
				}
				var persona = datos.filter(datos => datos.hecho3 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando3"]);
				}
				var persona = datos.filter(datos => datos.hecho4 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando4"]);
				}
				var persona = datos.filter(datos => datos.hecho5 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando5"]);
				}
				var persona = datos.filter(datos => datos.hecho6 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando6"]);
				}
				var persona = datos.filter(datos => datos.hecho7 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando7"]);
				}
				var persona = datos.filter(datos => datos.hecho8 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando8"]);
				}
				var persona = datos.filter(datos => datos.hecho9 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando9"]);
				}
				var persona = datos.filter(datos => datos.hecho10 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando10"]);
				}
				var persona = datos.filter(datos => datos.hecho11 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando11"]);
				}
				var persona = datos.filter(datos => datos.hecho12 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando12"]);
				}
				var persona = datos.filter(datos => datos.hecho13 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando13"]);
				}
				var persona = datos.filter(datos => datos.hecho14 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando14"]);
				}
				var persona = datos.filter(datos => datos.hecho15 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando15"]);
				}
				var persona = datos.filter(datos => datos.hecho16 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando16"]);
				}
				var persona = datos.filter(datos => datos.hecho17 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando17"]);
				}
				var persona = datos.filter(datos => datos.hecho18 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando18"]);
				}
				var persona = datos.filter(datos => datos.hecho19 == "Persona");
				for (var i = 0; i < persona.length; i++) {
					personaExtra.push(persona[i]["comando19"]);
				}

				console.log("Persona Extra");
				console.log(personaExtra);
			});
	});

	$("#buttonObjeto").click(function(){
			//Extraemos los datos del archivo
			$.getJSON("../datos/data.json", function(datos){
				console.log("Datos ");
				console.log(datos);

				//Extraemos los campos con el tipo objeto
				var objetoExtra=[];
				var objeto = datos.filter(datos => datos.hecho0 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando0"]);
				}
				var objeto = datos.filter(datos => datos.hecho1 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando1"]);
				}
				var objeto = datos.filter(datos => datos.hecho2 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando2"]);
				}
				var objeto = datos.filter(datos => datos.hecho3 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando3"]);
				}
				var objeto = datos.filter(datos => datos.hecho4 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando4"]);
				}
				var objeto = datos.filter(datos => datos.hecho5 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando5"]);
				}
				var objeto = datos.filter(datos => datos.hecho6 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando6"]);
				}
				var objeto = datos.filter(datos => datos.hecho7 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando7"]);
				}
				var objeto = datos.filter(datos => datos.hecho8 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando8"]);
				}
				var objeto = datos.filter(datos => datos.hecho9 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando9"]);
				}
				var objeto = datos.filter(datos => datos.hecho10 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando10"]);
				}
				var objeto = datos.filter(datos => datos.hecho11 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando11"]);
				}
				var objeto = datos.filter(datos => datos.hecho12 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando12"]);
				}
				var objeto = datos.filter(datos => datos.hecho13 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando13"]);
				}
				var objeto = datos.filter(datos => datos.hecho14 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando14"]);
				}
				var objeto = datos.filter(datos => datos.hecho15 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando15"]);
				}
				var objeto = datos.filter(datos => datos.hecho16 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando16"]);
				}
				var objeto = datos.filter(datos => datos.hecho17 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando17"]);
				}
				var objeto = datos.filter(datos => datos.hecho18 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando18"]);
				}
				var objeto = datos.filter(datos => datos.hecho19 == "Objeto");
				for (var i = 0; i < objeto.length; i++) {
					objetoExtra.push(objeto[i]["comando19"]);
				}

				console.log("objeto Extra");
				console.log(objetoExtra);
			});
	});

	$("#buttonAccion").click(function(){
			//Extraemos los datos del archivo
			$.getJSON("../datos/data.json", function(datos){
				console.log("Datos ");
				console.log(datos);

				//Extraemos los campos con el tipo accion
				var accionExtra=[];
				var accion = datos.filter(datos => datos.hecho0 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando0"]);
				}
				var accion = datos.filter(datos => datos.hecho1 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando1"]);
				}
				var accion = datos.filter(datos => datos.hecho2 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando2"]);
				}
				var accion = datos.filter(datos => datos.hecho3 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando3"]);
				}
				var accion = datos.filter(datos => datos.hecho4 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando4"]);
				}
				var accion = datos.filter(datos => datos.hecho5 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando5"]);
				}
				var accion = datos.filter(datos => datos.hecho6 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando6"]);
				}
				var accion = datos.filter(datos => datos.hecho7 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando7"]);
				}
				var accion = datos.filter(datos => datos.hecho8 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando8"]);
				}
				var accion = datos.filter(datos => datos.hecho9 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando9"]);
				}
				var accion = datos.filter(datos => datos.hecho10 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando10"]);
				}
				var accion = datos.filter(datos => datos.hecho11 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando11"]);
				}
				var accion = datos.filter(datos => datos.hecho12 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando12"]);
				}
				var accion = datos.filter(datos => datos.hecho13 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando13"]);
				}
				var accion = datos.filter(datos => datos.hecho14 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando14"]);
				}
				var accion = datos.filter(datos => datos.hecho15 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando15"]);
				}
				var accion = datos.filter(datos => datos.hecho16 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando16"]);
				}
				var accion = datos.filter(datos => datos.hecho17 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando17"]);
				}
				var accion = datos.filter(datos => datos.hecho18 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando18"]);
				}
				var accion = datos.filter(datos => datos.hecho19 == "Accion");
				for (var i = 0; i < accion.length; i++) {
					accionExtra.push(accion[i]["comando19"]);
				}

				console.log("accion Extra");
				console.log(accionExtra);
			});
	});
});
