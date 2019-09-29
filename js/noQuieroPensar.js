$(document).ready(function(){
  $("#botonNoQuiero").click(function(event) {
    //Creamos el array
    tiempos = [];
    titulos =["tituloPredef1","tituloPredef2","tituloPredef3","tituloPredef4","tituloPredef5","tituloPredef6","tituloPredef7","tituloPredef8","tituloPredef9","tituloPredef10","tituloPredef11"];

    //Función para la creación de los tiempos al pulsar el boton "No quiero pensar"
    function aleatoriTiempo(max,min,numAsiento){
      for(var i = 0; i<numAsiento;i++){
        var tiempoTemp = Math.round(Math.random()*(max-min)+parseInt(min));
        tiempos.push(tiempoTemp);
      }
      //Función para poner tiempos correlativos
      tiempos.sort(function(a, b) {
      return a - b;
    });
    }

    function aleatoriTitulo(max,min){
      var tituloTemp = Math.round(Math.random()*(max-min)+parseInt(min));
      $('#titlePuntoCero').val(titulos[tituloTemp]);
    }

    aleatoriTitulo(10,0);

    //Lanzamos función de generación de tiempos aleatorios
    //Máximo minutos en un día 1439 ->23:59 | 600 -> 10:00
    //De  12:00 a 8:00 con siete asientos
    //Aquí configuramos los rangos de tiempo y la cantidad de asientos
    var interTiemp1 = aleatoriTiempo(720,480,7);
    var interTiemp2 = aleatoriTiempo(900,720,6);
    var interTiemp3 = aleatoriTiempo(1080,900,5);
    var interTiemp4 = aleatoriTiempo(1439,1080,2);

    //Convertimos el valor en número a String con formato time
    for(var i = 0;i<20;i++){
      var tiemposConver = tiempos.map(function time_convert(num)
       {
        var hours = String(Math.floor(num / 60));
        var hoursPad = hours.padStart(2,"0");
        var minutes = String(num % 60);
        var minutesPad = minutes.padStart(2,"0");
        var tiempoString = String(hoursPad + ":" + minutesPad + ":"+"00");
        var tiempoString2 = tiempoString.toString();
        return tiempoString2;
      });
      //Cargamos los valores en los inputs del formulario
      $('#time'+i).val(tiemposConver[i]);
    };
  });
});
