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
		//Cargamos los datos en otra variable
		seleccionados = $("form").serializeArray();
		//console.log(seleccionados);
		//console.log(seleccionados[0].value);
		console.log(data2[seleccionados[0].value]);
		console.log(data2[seleccionados[0].value].titulo);
		if (data2[seleccionados[0].value].hecho0 == "Accion"){
			console.log(data2[seleccionados[0].value].hora0)
			console.log(data2[seleccionados[0].value].comando0)

		} else {
			console.log(data2[seleccionados[0].value].comando0)
		}
		//
		//Creación del PDF resultante
		//

		//Varible que define el interlineado
		var intLi = 6;
		//Variable que define la separación entre la hora y comando
		var sepHo = 31;
		//Variable que define el margen izquierdo
		var margIzqui = 15;
		//Variable qeu de fine la altura a la que comienza el texto
		var comText = 40;

		var doc = new jsPDF();

		/*doc.addFont('rathersemibold', 'rathersemibold', 'normal');
		doc.setFont('Comic Sans');
		*/
		doc.setFontSize(22);

		//Dividimos el texto para el espacio marcado y cambiamos de línea si es necesario
		var splitTitle = doc.splitTextToSize(data2[seleccionados[0].value].titulo, 180);
		//Definimos posición izquierda/altura y texto
		doc.text(margIzqui, 20, splitTitle);

		doc.setFontSize(8);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando0, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText, data2[seleccionados[0].value].hora0);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText - 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando1, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*1), data2[seleccionados[0].value].hora1);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*1)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando2, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*2), data2[seleccionados[0].value].hora2);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*2)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando3, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*3), data2[seleccionados[0].value].hora3);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*3)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando4, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*4), data2[seleccionados[0].value].hora4);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*4)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando5, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*5), data2[seleccionados[0].value].hora5);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*5)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando6, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*6), data2[seleccionados[0].value].hora6);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*6)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando7, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*7), data2[seleccionados[0].value].hora7);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*7)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando8, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*8), data2[seleccionados[0].value].hora8);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*8)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando9, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*9), data2[seleccionados[0].value].hora9);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*9)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando10, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*10), data2[seleccionados[0].value].hora10);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*10)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando11, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*11), data2[seleccionados[0].value].hora11);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*11)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando12, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*12), data2[seleccionados[0].value].hora12);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*12)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando13, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*13), data2[seleccionados[0].value].hora13);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*13)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando14, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*14), data2[seleccionados[0].value].hora14);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*14)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando15, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*15), data2[seleccionados[0].value].hora15);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*15)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando16, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*16), data2[seleccionados[0].value].hora16);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*16)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando17, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*17), data2[seleccionados[0].value].hora17);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*17)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando18, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*18), data2[seleccionados[0].value].hora18);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*18)- 0.6, splitText);

		var splitText = doc.splitTextToSize(data2[seleccionados[0].value].comando19, 180);
		doc.setFontSize(10);
		doc.setTextColor(130);
		doc.text(margIzqui, comText+(intLi*19), data2[seleccionados[0].value].hora19);
		doc.setFontSize(8);
		doc.setTextColor(40);
		doc.text(sepHo, comText+(intLi*19)- 0.6, splitText);





		//Guardamos el pDF
		doc.save('salida.pdf');

 });
});
