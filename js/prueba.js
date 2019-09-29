tiempos = [];

function aleatoriTiempo(max,min,numAsiento){
  console.log("En función");
  console.log(numAsiento);
  tiempos.push(min);
  for(var i = 0; i<numAsiento;i++){
    var tiempoTemp = Math.random()*(max-min)+parseInt(min);
    tiempos.push(tiempoTemp);
    console.log("En for");
    console.log(tiempoTemp);
    console.log(tiempos);
  }
  console.log(tiempos);
      //Función para poner tiempos correlativos
  tiempos.sort(function(a, b) {
  return a - b;
});
  console.log("En ordenación");
  console.log(tiempos);

}

function time_convert(num)
 {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return hours + ":" + minutes + ":"+"00";
}

$(document).ready(function(){
  $("#setText").click(function(event) {
    $('#time1').val(ti2);
  });
});



var ti = aleatoriTiempo(115,9,20);

var ti2 = time_convert(1300);

console.log("Tiempo convertido 2560 "+ti2);
