$(document).ready(function(){

  //Función para rellenar los campos del formulario con un ejemplo
  $("#botonVerEjemplo").click(function(event){
    ejemplo =[
    "Lugar", "comando1",
    "Accion", "comando2",
    "Lugar", "comando3",
    "Objeto", "comando4",
    "Lugar", "comando1",
    "Accion", "comando2",
    "Lugar", "comando3",
    "Objeto", "comando4"
  /*quitar la última coma*/];


    function rellenaEjemplo(ejemplo){

      //Expandimos todos los asientos ocultos
      document.getElementById('asiento1').style.display='block';
      document.getElementById('asiento2').style.display='block';
      document.getElementById('asiento3').style.display='block';
      document.getElementById('asiento4').style.display='block';
      document.getElementById('asiento5').style.display='block';
      document.getElementById('asiento6').style.display='block';
      document.getElementById('asiento7').style.display='block';
      document.getElementById('asiento8').style.display='block';
      document.getElementById('asiento9').style.display='block';
      document.getElementById('asiento10').style.display='block';
      document.getElementById('asiento11').style.display='block';
      document.getElementById('asiento12').style.display='block';
      document.getElementById('asiento13').style.display='block';
      document.getElementById('asiento14').style.display='block';
      document.getElementById('asiento15').style.display='block';
      document.getElementById('asiento16').style.display='block';
      document.getElementById('asiento17').style.display='block';
      document.getElementById('asiento18').style.display='block';
      document.getElementById('asiento19').style.display='block';

      //For para iterar las varibles por los campos del array de ejemplo
      for (var i = 0; i < 38; i+=2) {
        $("#campoCeroT"+i).val(ejemplo[i]);
        var ip = i+1;
        $("#campoCeroC"+i).attr("placeholder", ejemplo[ip]);
      }
    }

    rellenaEjemplo(ejemplo);

  });
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
    "Algoritmo narrativo para explicar como ganarse la vida haciendo fotos",
    "Algoritmo narrativo para ver una imagen en la oscuridad",
    "Algoritmo narrativo para no perderte en la búsqueda de tu identidad",
    "Algoritmo narrativo para enviar mensajes positivos a tu mente",
    "Algoritmo narrativo para enviar mensajes negativos a tu mente",
    "Algoritmo narrativo para borrar mensajes negativos de tu mente",
    "Algoritmo narrativo para bailar una imagen",
    "Algoritmo narrativo para escribir una fotografía",
    "Algoritmo narrativo para no olvidar aquella imagen",
    "Algoritmo narrativo para abrazar una imagen",
    "Algoritmo narrativo para tener dulces sueños",
    "Algoritmo narrativo para volar con una imagen",
    "Algoritmo narrativo para volver a comenzar",
    "Algoritmo narrativo para hacer autofotografías",
    "Algoritmo narrativo para que un instante dure cien años",
    "Algoritmo narrativo para fotografiarte con un desconocido",
    "Algoritmo narrativo para fotografiar a un desconocido",
    "Algoritmo narrativo para decir te quiero con una imagen",
    "Algoritmo narrativo para mirar de cerca con una foto",
    "Algoritmo narrativo para mirar de lejos con una foto",
    "Algoritmo narrativo para mirar un evento desde diferentes perspectivas",
    "Algoritmo narrativo para pedir ayuda con una imagen",
    "Algoritmo narrativo para enviar una imagen como un mensaje sin el móvil",
    "Algoritmo narrativo para navegar en un mar de fotografías",
    "Algoritmo narrativo para caminar en un bosque de fotografías",
    "Algoritmo narrativo para transmitir el olor de una fotogografía",
    "Algoritmo narrativo para ver una imagen en la oscuridad",
    "Algoritmo narrativo para no perderte en la búsqueda de tu identida",
    "Algoritmo narrativo para enviar mensajes positivos a tu ment",
    "Algoritmo narrativo para enviar mensajes negativos a tu ment",
    "Algoritmo narrativo para borrar mensajes negativos de tu ment",
    "Algoritmo narrativo para bailar una image",
    "Algoritmo narrativo para escribir una fotografí",
    "Algoritmo narrativo para no olvidar aquella image",
    "Algoritmo narrativo para abrazar una image",
    "Algoritmo narrativo para tener dulces sueño",
    "Algoritmo narrativo para volar con una image",
    "Algoritmo narrativo para volver a comenza",
    "Algoritmo narrativo para hacer autofotografía",
    "Algoritmo narrativo para que un instante dure cien año",
    "Algoritmo narrativo para fotografiarte con un desconocid",
    "Algoritmo narrativo para fotografiar a un desconocid",
    "Algoritmo narrativo para decir te quiero con una image",
    "Algoritmo narrativo para mirar de cerca con una fot",
    "Algoritmo narrativo para mirar de lejos con una fot",
    "Algoritmo narrativo para mirar un evento desde diferentes perspectiva",
    "Algoritmo narrativo para pedir ayuda con una image",
    "Algoritmo narrativo para enviar una imagen como un mensaje sin el móvi",
    "Algoritmo narrativo para navegar en un mar de fotografía",
    "Algoritmo narrativo para caminar en un bosque de fotografía",
    "Algoritmo narrativo para transmitir el olor de una fotogografía"];


    /*//Función para la creación de los tiempos al pulsar el boton "No quiero pensar"
    function aleatoriTiempo(max,min,numAsiento){
      for(var i = 0; i<numAsiento;i++){
        var tiempoTemp = Math.round(Math.random()*(max-min)+parseInt(min));
        tiempos.push(tiempoTemp);
      }
      //Función para poner tiempos correlativos
      tiempos.sort(function(a, b) {
      return a - b;
    });
  }*/

    function aleatoriTitulo(max,min){
      var tituloTemp = Math.round(Math.random()*(max-min)+parseInt(min));
      $('#titlePuntoCero').val(titulos[tituloTemp]);
    }

    aleatoriTitulo(125,0);

    /*/Lanzamos función de generación de tiempos aleatorios
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
    };*/
  });
});
