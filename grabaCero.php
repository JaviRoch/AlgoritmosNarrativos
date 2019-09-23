<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

//Código de chrishazfun https://github.com/chrishazfun/php-json-form-submit
//Importante configurar bien los permisos para la modificación del archivo

  $myFile = "data.json"; //Archivo de datos
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
     'titulo'=> $_POST['titulo'],
     'hora1'=> $_POST['hora1'],
     'hecho1'=> $_POST['hecho1'],
     'comando1'=> $_POST['comando1'],
     'hora2'=> $_POST['hora2'],
     'hecho2'=> $_POST['hecho2'],
     'comando2'=> $_POST['comando2'],
     'hora3'=> $_POST['hora3'],
     'hecho3'=> $_POST['hecho3'],
     'comando3'=> $_POST['comando3'],
     'hora4'=> $_POST['hora4'],
     'hecho4'=> $_POST['hecho4'],
     'comando4'=> $_POST['comando4'],
     'hora5'=> $_POST['hora5'],
     'hecho5'=> $_POST['hecho5'],
     'comando5'=> $_POST['comando5'],
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
