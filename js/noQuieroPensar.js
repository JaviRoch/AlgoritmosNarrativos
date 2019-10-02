$(document).ready(function(){
  $("#botonNoQuiero").click(function(event) {
    //Creamos el array
    tiempos = [];
    titulos =["Algoritmo narrativo para construir una plancha que la maquina de reconocimiento facial no lo detecte",
    "Algoritmo narrativo para poner del revés las fotos de tu casa",
    "Algoritmo narrativo para iniciar una colección de imágenes",
    "Algoritmo narrativo para crear un retrato robot digital",
    "Algoritmo narrativo para conseguir una imagen invisible",
    "Algoritmo narrativo para hacerte invisible",
    "Algoritmo narrativo para escuchar imágenes",
    "Algoritmo narrativo para que una imagen me haga sentir un deseo",
    "Algoritmo narrativo para perder el miedo a una imagen",
    "Algoritmo narrativo para dejar de usar emoticonos durante un día",
    "Algoritmo narrativo para conseguir expresar lo que siento haciendo una imagen",
    "Algoritmo narrativo para evitar que se te caiga el móvil al wáter",
    "Algoritmo narrativo para ver imágenes con los ojos cerrados",
    "Algoritmo narrativo para robar un banco de imágenes",
    "Algoritmo narrativo para llevarte un cartel de una pared",
    "Algoritmo narrativo para hacer una foto familiar",
    "Algoritmo narrativo para contar un día en mi vida con imágenes",
    "Algoritmo narrativo para buscar un título a mis imágenes",
    "Algoritmo narrativo para ir caminando sin mirar el móvil",
    "Algoritmo narrativo para que una imagen me haga reír",
    "Algoritmo narrativo para que una imagen me haga llorar"];

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

    aleatoriTitulo(20,0);

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
