$(document).ready(function(){
  $("#botonNoQuiero").click(function(event) {
    tiempos = [];

    function aleatoriTiempo(max,min,numAsiento){
      tiempos.push(min);
      for(var i = 0; i<numAsiento;i++){
        var tiempoTemp = Math.round(Math.random()*(max-min)+parseInt(min));
        tiempos.push(tiempoTemp);
      }
          //Función para poner tiempos correlativos
      tiempos.sort(function(a, b) {
      return a - b;
    });
    }

    //Lanzamos función de generación de tiempos aleatorios
    //Máximo minutos en un día 1439 ->23:59 | 600 -> 10:00
    //De 8:00 a 12:00 con siete asientos
    var interTiemp1 = aleatoriTiempo(720,480,6);
    var interTiemp2 = aleatoriTiempo(900,720,5);
    var interTiemp3 = aleatoriTiempo(1080,900,4);
    var interTiemp4 = aleatoriTiempo(1439,1080,1);

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
      $('#time'+i).val(tiemposConver[i]);
    };
  });
});
