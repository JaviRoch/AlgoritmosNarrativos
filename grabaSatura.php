<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

//Código de chrishazfun https://github.com/chrishazfun/php-json-form-submit
//Importante configurar bien los permisos para la modificación del archivo

  $myFile = "dataSatura.json"; //Archivo de datos
  $arr_data = array(); //Array de trabajo

try
{
  //Cogemos los datos existentes en el archivo  de datos
  $jsondata = file_get_contents($myFile);

  //Convertimos JSON a array
  $arr_data = json_decode($jsondata, true);

  //Cogemos los datos del formulario
  $formdata = array(
     'Nhecho'=>count($arr_data),
     'pregunta1'=> $_POST['pregunta1'],
     'pregunta2'=> $_POST['pregunta2'],
  );

  //Insertamos datos del formulario al array
  array_push($arr_data,$formdata);


  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //Escribimos los datos en el archivo y redirrecionamos
  if(file_put_contents($myFile, $jsondata)) {
    echo "Datos guardados";
    //header("Location: datosGuardados.html"); //enlazar con página de resultado o algo
   }
  else
       echo "Error al guardar datos";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}
 ?>
