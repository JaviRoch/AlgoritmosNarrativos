<?php

echo "<script>alert('Error al guardar los datos');</script>";

error_reporting(E_ALL);
ini_set('display_errors', '1');

//Código de chrishazfun https://github.com/chrishazfun/php-json-form-submit
//Importante configurar bien los permisos para la modificación del archivo

  $myFile = "../datos/dataAlgoritmos.json"; //Archivo de datos
  $arr_data = array(); //Array de trabajo

try
{
  //Cogemos los datos existentes en el archivo  de datos
  $jsondata = file_get_contents($myFile);

  //Convertimos JSON a array
  $arr_data = json_decode($jsondata, true);

  //Cogemos los datos
  $formdata = array(
     'RegFecha'=>date("j/n/Y ** G:i"),
     'tipo'=> $_POST['tipo'],
     'contenido'=> $_POST['contenido'],
     'hora'=> $_POST['hora'],
  );

  //Insertamos datos del formulario al array
  array_push($arr_data,$formdata);

  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //Escribimos los datos en el archivo y redirrecionamos
  if(file_put_contents($myFile, $jsondata)) {
    echo "<script>alert('Datos guardados');</script>";
   }
  else
    echo "<script>alert('Error al guardar los datos');</script>";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}
 ?>
