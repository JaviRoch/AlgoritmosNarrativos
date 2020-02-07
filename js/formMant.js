
$.getJSON('../datos/data.json', function(data) {
	$.each(data, function(key,value) {
		/*$("#desplegable1").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable2").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable3").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable4").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable5").append("<option value="+key+">"+value['titulo']+"</option>");
		data2 = data;*/
	}); // close each()
}); // close getJSON()

function añadeAlgoritmoMan(){

  for (var i = 0; i < 10; i++) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.innerHTML = '<input name="checkboxN_'+i+'" id="subscribeNews" value="newsletter">';
    document.getElementById("divFoMan").appendChild(x);
  }
}

añadeAlgoritmoMan();
