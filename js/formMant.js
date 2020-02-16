var data2 = [];

$.getJSON('../datos/data.json', function(data) {
	$.each(data, function(key,value) {
		/*$("#desplegable1").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable2").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable3").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable4").append("<option value="+key+">"+value['titulo']+"</option>");
		$("#desplegable5").append("<option value="+key+">"+value['titulo']+"</option>");*/
		data2 = data;
		//console.log(data2);
	}); // close each()
}); // close getJSON()

console.log(data2);

function añadeAlgoritmoMan(data2){
	//console.log(data2[0]["titulo"]);
	//console.log(data2);
	console.log(data2[0]["titulo"]);

  for (var i = 0; i < 10; i++) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.innerHTML = '<input name="checkboxN_'+i+'" id="checkboxN_'+i+'" value="'+i+'">';
    document.getElementById("divFoMan").appendChild(x);
		/*
		var x1 = document.createElement("INPUT");
		x1.setAttribute("type", "text");
    x1.innerHTML = '<input name="tituloN_'+i+'value="'+data2[0]+'">"'+data2[0].value["titulo"]+'">';
		//x1.innerHTML = '<input name="tituloN_'+i+'value="'+data2.key+'">"'+data2.value["titulo"]+'">';
    document.getElementById("divFoMan").appendChild(x1);*/
  }
}

añadeAlgoritmoMan(data2);
