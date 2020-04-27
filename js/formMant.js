var data2 = [];
var seleccionado = [];
var titulMan;


$.getJSON('../datos/data.json', function(data) {
	$.each(data, function(key,value) {
		$("#titleMan").append("<option value="+key+">"+value['titulo']+"</option>");
		data2 = data;
		//console.log("data2");
		//console.log(data2);
	}); // close each()
}); // close getJSON()

$(document).ready(function(){
	$("#cargaDatos").click(function () {
	//Evitamos que recargue la página
	//console.log("en cargaDatos");

	//Obtenemos la posición del título en el array
	var titulMan = document.getElementById("titleMan").value;
	//console.log(data2);
	//console.log (titulMan);
	//console.log(data2[titulMan]);
	//console.log(data2[titulMan]["hecho0"]);
	var entradaTxt = document.createTextNode("Entrada Nº "+ titulMan+"; ");
	document.getElementById("numEntrada").appendChild(entradaTxt);
	document.getElementById("titleManMod").value = data2[titulMan]["titulo"];
	document.getElementById("regFechaMan").value = data2[titulMan]["RegFecha"];
	document.getElementById("hecho0").value = data2[titulMan]["hecho0"];
	document.getElementById("comando0").value = data2[titulMan]["comando0"];
	document.getElementById("hecho1").value = data2[titulMan]["hecho1"];
	document.getElementById("comando1").value = data2[titulMan]["comando1"];
	document.getElementById("hecho2").value = data2[titulMan]["hecho2"];
	document.getElementById("comando2").value = data2[titulMan]["comando2"];
	document.getElementById("hecho3").value = data2[titulMan]["hecho3"];
	document.getElementById("comando3").value = data2[titulMan]["comando3"];
	document.getElementById("hecho4").value = data2[titulMan]["hecho4"];
	document.getElementById("comando4").value = data2[titulMan]["comando4"];
	document.getElementById("hecho5").value = data2[titulMan]["hecho5"];
	document.getElementById("comando5").value = data2[titulMan]["comando5"];
	document.getElementById("hecho6").value = data2[titulMan]["hecho6"];
	document.getElementById("comando6").value = data2[titulMan]["comando6"];
	document.getElementById("hecho7").value = data2[titulMan]["hecho7"];
	document.getElementById("comando7").value = data2[titulMan]["comando7"];
	document.getElementById("hecho8").value = data2[titulMan]["hecho8"];
	document.getElementById("comando8").value = data2[titulMan]["comando8"];
	document.getElementById("hecho9").value = data2[titulMan]["hecho9"];
	document.getElementById("comando9").value = data2[titulMan]["comando9"];
	document.getElementById("hecho10").value = data2[titulMan]["hecho10"];
	document.getElementById("comando10").value = data2[titulMan]["comando10"];
	document.getElementById("hecho11").value = data2[titulMan]["hecho11"];
	document.getElementById("comando11").value = data2[titulMan]["comando11"];
	document.getElementById("hecho12").value = data2[titulMan]["hecho12"];
	document.getElementById("comando12").value = data2[titulMan]["comando12"];
	document.getElementById("hecho13").value = data2[titulMan]["hecho13"];
	document.getElementById("comando13").value = data2[titulMan]["comando13"];
	document.getElementById("hecho14").value = data2[titulMan]["hecho14"];
	document.getElementById("comando14").value = data2[titulMan]["comando14"];
	document.getElementById("hecho15").value = data2[titulMan]["hecho15"];
	document.getElementById("comando15").value = data2[titulMan]["comando15"];
	document.getElementById("hecho16").value = data2[titulMan]["hecho16"];
	document.getElementById("comando16").value = data2[titulMan]["comando16"];
	document.getElementById("hecho17").value = data2[titulMan]["hecho17"];
	document.getElementById("comando17").value = data2[titulMan]["comando17"];
	document.getElementById("hecho18").value = data2[titulMan]["hecho18"];
	document.getElementById("comando18").value = data2[titulMan]["comando18"];
	document.getElementById("hecho19").value = data2[titulMan]["hecho19"];
	document.getElementById("comando19").value = data2[titulMan]["comando19"];
	//Metemos también el índice del array para enviarlo por ajax
	document.getElementById("nEntrada").value = titulMan;
	});

	$("#guardarModifica").click(function (event) {
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
					url  : '../php/grabaManteni.php',
					data:  data,
					success:function(data) {
						//console.log(data);
						alert('Datos guardados');
			}
		});
			//Acciones a realizar una vez guardado ocultaForm()
			return false;
 	});

	$("#eliminaMant").click(function (event) {
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
					url  : '../php/eliminaManteni.php',
					data:  data,
					success:function(data) {
						//console.log(data);
						alert('Datos guardados');
						location.reload();
			}
		});
			//Acciones a realizar una vez guardado ocultaForm()
			return false;
 });
});
