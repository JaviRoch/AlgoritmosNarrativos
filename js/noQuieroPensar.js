$(document).ready(function(){

  //Función para rellenar los campos del formulario con un ejemplo
  $("#botonVerEjemplo").click(function(event){
    ejemplo0 =[
    "Persona", "T\u00fa y m\u00e1s gente si quiere colaborar",
    "Objeto", "Imagen en papel y una garrafa de agua",
    "Objeto", "Una semilla de un \u00e1rbol, el que se quiera",
    "Objeto", "Azada y pico",
    "Lugar", "En un campo, alejado de la poblaci\u00f3n",
    "Caracteristica", "Esperar a que sea Luna llena, porque favorece el crecimiento de la semilla",
    "Caracteristica", "La acci\u00f3n debe realizarse al amanecer o al atardecer, nunca a mediod\u00eda",
    "Accion", "Acudir al lugar",
    "Accion", "Escoger el lugar concreto y empezar a utilizar el pico para romper la tierra compactada",
    "Accion", "Cuando te canses, pasa el pico a tu compa\u00f1era o compa\u00f1ero ",
    "Caracteristica", "Si vas s\u00f3lo, se paciente",
    "Accion", "Cuando tengas un agujero de unos cuarenta cent\u00edmetros de hondo, empieza a utilizar la azada para hacerlo ancho, junto con el pico",
    "Accion", "Cuando est\u00e9 terminado, deposita la imagen en un costado del agujero y t\u00e1palo con tierra",
    "Accion", "Cuando est\u00e9 a unos quince cent\u00edmetros del ras del suelo, pon la semilla y c\u00fabrela con la tierra",
    "Accion", "Al acabar, regar sin abusar",
    "Caracteristica", "Durante las primeras semanas, conviene controlar el riego",
    "Accion", "Cuando salga el brote, ayudarlo con tutores o gu\u00edas para que siga creciendo",
    "-", "",
    "-", "",
    "-", "",
    "Algoritmo narrativo para sembrar una imagen"
    ];

    ejemplo1 =[
      "Persona", "T\u00fa",
      "Objeto", "Una colecci\u00f3n de fotograf\u00edas variada",
      "Objeto", "Una azada",
      "Objeto", "Una regadora",
      "Objeto", "Un libro de la historia de la fotograf\u00eda",
      "Lugar", "El descampado de tu barrio",
      "Accion", "Cava tantos hoyos como fotograf\u00edas tengas ",
      "Accion", "Planta las fotograf\u00edas en cada uno de ellos",
      "Accion", "Riega",
      "Accion", "L\u00e9ete el libro entero",
      "Accion", "Si todav\u00eda no ha crecido el bosque de fotograf\u00edas, sigue leyendo, aunque ya hayas le\u00eddo esas p\u00e1ginas.",
      "Accion", "Lev\u00e1ntate y anda entonces en el bosque de fotograf\u00edas",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "Algoritmo narrativo para caminar en un bosque de fotograf\u00edas"
    ]

    ejemplo2 =[
      "Persona", " T\u00fa",
      "Objeto", " c\u00e1mara de fotos o m\u00f3vil",
      "Accion", " Haz una foto al Sol de mediod\u00eda en un d\u00eda sin nubes",
      "Caracteristica", " Puedes hacer m\u00e1s fotos, se trata de conseguir im\u00e1genes quemadas",
      "Caracteristica", " Para que la acci\u00f3n se lleve de forma correcta,se tiene que introducir un dedo en el encuadre del Sol",
      "Accion", " Despu\u00e9s puedes imprimirla o no, pero ya habr\u00e1s conseguido el objetivo",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", " ",
      "-", "",
      "Algoritmo narrativo para quemar una foto sin quemarte los dedos"
    ]

    ejemplo3=[
      "Lugar", "En casa",
      "Persona", "Yo",
      "Accion", "Corta dos rodajas de pepino",
      "Accion", "Si\u00e9ntate o t\u00fambate en el sof\u00e1",
      "Caracteristica", "O donde quieras",
      "Accion", "Cierra los ojos",
      "Accion", "Ponte una rodaja de pepino en cada ojo",
      "Accion", "Intenta no pensar para que tampoco te lleguen im\u00e1genes mentales",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "-", "",
      "Algoritmo narrativo para descansar la mirada"
    ]

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
      for (var i = 0; i < 40; i+=2) {
        $("#campoCeroT"+i).val(ejemplo[i]);
        var ip = i+1;
        $("#campoCeroC"+i).attr("placeholder", ejemplo[ip]);
      }
      $("#titlePuntoCero").attr("placeholder", ejemplo[40]);
    }

      var ejemploTemp = Math.round(Math.random()*(3-0)+parseInt(0));
      switch (ejemploTemp) {
        case 0:
          rellenaEjemplo(ejemplo0);
          break;
        case 1:
          rellenaEjemplo(ejemplo1);
          break;
        case 2:
          rellenaEjemplo(ejemplo2);
          break;
        case 3:
          rellenaEjemplo(ejemplo3);
          break;    
      }


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

    function aleatoriTitulo(max,min){
      var tituloTemp = Math.round(Math.random()*(max-min)+parseInt(min));
      $('#titlePuntoCero').val(titulos[tituloTemp]);
    }

    aleatoriTitulo(125,0);

  });
});
