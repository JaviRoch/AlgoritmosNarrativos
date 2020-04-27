<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

echo "<script>alert('En php');</script>";

//Código de chrishazfun https://github.com/chrishazfun/php-json-form-submit
//Importante configurar bien los permisos para la modificación del archivo

  $myFile = "../datos/dataSatura.json"; //Archivo de datos
  $arr_data = array(); //Array de trabajo

try
{
  //Cogemos los datos existentes en el archivo  de datos
  $jsondata = file_get_contents($myFile);

  //Convertimos JSON a array
  $arr_data = json_decode($jsondata, true);

  //Cogemos los datos del formulario
  $formdata = array(
     'RegFecha'=>date("j/n/Y ** G:i"),
     'pregunta1'=> $_POST['pregunta1'],
     'pregunta2'=> $_POST['pregunta2'],
     'pregunta3'=> $_POST['pregunta3'],
     'pregunta4'=> $_POST['pregunta4'],
     'pregunta5'=> $_POST['pregunta5'],
     'pregunta6'=> $_POST['pregunta6'],
     'pregunta7'=> $_POST['pregunta7'],
     'pregunta8'=> $_POST['pregunta8'],
     'pregunta9'=> $_POST['pregunta9'],
     'pregunta10'=> $_POST['pregunta10'],
     'pregunta11'=> $_POST['pregunta11'],
     'pregunta12'=> $_POST['pregunta12'],
     'pregunta13'=> $_POST['pregunta13'],
     'pregunta14'=> $_POST['pregunta14'],
     'pregunta15'=> $_POST['pregunta15'],
     'pregunta16'=> $_POST['pregunta16'],
     'pregunta17'=> $_POST['pregunta17'],
     'pregunta18'=> $_POST['pregunta18'],
     'pregunta19'=> $_POST['pregunta19'],
     'pregunta20'=> $_POST['pregunta20'],
     'pregunta21'=> $_POST['pregunta21'],
     'pregunta22'=> $_POST['pregunta22'],
  );

  //Insertamos datos del formulario al array
  array_push($arr_data,$formdata);


  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //Escribimos los datos en el archivo y redirrecionamos
  if(file_put_contents($myFile, $jsondata)) {
    echo "<script>alert('Datos guardados');</script>";
    //header("Location: datosGuardados.html"); //enlazar con página de resultado o algo
   }
  else
    echo "<script>alert('Error al guardar los datos');</script>";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}
 ?>
