$(document).ready(function(){
  $("#botonNoQuiero").click(function(event) {
    //Creamos el array
    tiempos = [];
    titulos = [
    "Algoritmo narrativo para construir una plancha que la maquina de reconocimiento facial no lo detecte",
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
    "Algoritmo narrativo para que una imagen me haga llorar",
    "Algoritmo narrativo para meter una fotografía en un buzón",
    "Algoritmo narrativo para dejar una fotografía en un carro de la compra",
    "Algoritmo narrativo para esconder una colección de fotografías dentro de los libros de una biblioteca",
    "Algoritmo narrativo para quemar una foto sin quemarte los dedos",
    "Algoritmo narrativo para unir dos fotos con tus manos",
    "Algoritmo narrativo para hacer carteles de objetos perdidos",
    "Algoritmo narrativo para enterrar imágenes de muertos que veas en la prensa",
    "Algoritmo narrativo para ver una imagen frente a un espejo roto",
    "Algoritmo narrativo para hacer marcapáginas con imágenes de huelgas",
    "Algoritmo narrativo para imprimir tus huellas dactilares",
    "Algoritmo narrativo para definir que es una imagen sostenible",
    "Algoritmo narrativo para definir una imagen invisible",
    "Algoritmo narrativo para definir una imagen prohibida",
    "Algoritmo narrativo para censurar una foto",
    "Algoritmo narrativo para hacer las fotos de tu propia campaña electoral",
    "Algoritmo narrativo para fotografiar los restos de tu comida diaria",
    "Algoritmo narrativo para retratarte con todos tus zapatos",
    "Algoritmo narrativo para filmar todos los móviles que encuentres en tu casa",
    "Algoritmo narrativo para filmar como crece un árbol",
    "Algoritmo narrativo para filmar un terremoto",
    "Algoritmo narrativo para construir un barco con una imagen",
    "Algoritmo narrativo para hacer una foto a un fantasma",
    "Algoritmo narrativo para consumir menos imágenes",
    "Algoritmo narrativo para cambiar de color a blanco y negro la interface de tu móvil",
    "Algoritmo narrativo para fotografiar el vertedero de tu ciudad",
    "Algoritmo narrativo para abandonar tus viejas fotos en la calle",
    "Algoritmo narrativo para romper tus viejas fotos en mil pedazos",
    "Algoritmo narrativo para compararte con un objeto",
    "Algoritmo narrativo para ponerte en el lugar del otro",
    "Algoritmo narrativo para construir tu propia cámara de fotos sostenible",
    "Algoritmo narrativo para dormir con una foto bajo la almohada",
    "Algoritmo narrativo para colgar fotos en el tendedero de la ropa",
    "Algoritmo narrativo para descongelar tus fotos en el microondas",
    "Algoritmo narrativo para congelar imágenes",
    "Algoritmo narrativo para tostar tus fotos en el horno",
    "Algoritmo narrativo para conseguir que tu mascota destroce una imagen",
    "Algoritmo narrativo para viajar sin hacer fotos",
    "Algoritmo narrativo para el ayuno visual",
    "Algoritmo narrativo para dividir una imagen",
    "Algoritmo narrativo para sembrar una imagen",
    "Algoritmo narrativo para vestirte reflejando como eres",
    "Algoritmo narrativo para ver imágenes con los ojos cerrados",
    "Algoritmo narrativo para poder encontrar las primeras fotos que hice con mi primer móvil",
    "Algoritmo narrativo para hacer funcionar tu viejo móvil de tecnología obsoleta",
    "Algoritmo narrativo para que la batería del móvil me dure todo el día",
    "Algoritmo narrativo para hacerle una foto a la persona que me gusta",
    "Algoritmo narrativo para contar un día en mi vida con imágenes",
    "Algoritmo narrativo para encontrar el cargador del móvil",
    "Algoritmo narrativo para enseñar a mis abuelos cómo instalar instagram",
    "Algoritmo narrativo para eliminar de mis redes sociales la imagen que más likes tiene",
    "Algoritmo narrativo para ir caminando sin mirar el móvil",
    "Algoritmo narrativo para quedar con mis amigxs sin el móvil",
    "Algoritmo narrativo para que una imagen me haga reír",
    "Algoritmo narrativo para que una imagen me haga llorar",
    "Algoritmo narrativo para explicar como ganarse la vida haciendo fotos"];

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

    aleatoriTitulo(73,0);

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
