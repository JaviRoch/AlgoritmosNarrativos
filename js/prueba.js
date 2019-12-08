//Función de grabación de datos en JSON a través de PHP
function grabaDatos(data){
	console.log("data");
	console.log(data);

	var dataSe = JSON.stringify(data);
	//console.log("dataSE");
	//console.log(dataSe);

/*		//AJAX.
		$.ajax({
				/*data:  [
				    {
				        "RegFecha": "11\/11\/2019 ** 15:43",
				        "tipo": "normal",
				        "contenido": "wperjwperjwe",
				        "hora": "11:00:00"
				    },
				    {
								"RegFecha": "11\/11\/2019 ** 15:43",
								"tipo": "normal",
								"contenido": "wperjwperjwe",
								"hora": "11:00:00"
				    }
					],

				//data:  dataSe,
				data:  data,
				type : 'GET',
				url  : '../php/grabaAlgoritmo.php',
				//dataType: "json",
				success:function(data) {
					console.log("Respuesta del servidor")
					console.log(data);
				},
				error: function(xhr, ajaxOptions, thrownError) {
        	alert(xhr.status);
        	alert(thrownError);
      	}
	 	});*/

    var net = new XMLHttpRequest();

    net.onload = function(e) {
      console.log(net.responseText);
    }

    //var datos = { hola: "mundo" };
    var datos_json = JSON.stringify(data);

    net.open("GET", "../php/grabaAlgoritmo.php");

    net.setRequestHeader("Content-Type", "application/json");

    net.send(datos_json);
}



menAlgoritmo = [
    {
        "RegFecha": "11\/11\/2019 ** 15:43",
        "tipo": "normal",
        "contenido": "wperjwperjwe",
        "hora": "11:00:00"
    },
    {
        "RegFecha": "11\/11\/2019 ** 15:43",
        "tipo": "normal",
        "contenido": "wperjwperjwe",
        "hora": "11:00:00"
    }
  ];

  $(document).ready(function(){
  grabaDatos(menAlgoritmo);
  });
