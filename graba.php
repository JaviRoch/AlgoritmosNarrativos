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

if($_POST){
  echo "valor de post hecho1". $_POST['hecho1']."enter ";
}
else{
  echo "no hay datos";
}

$pru1 = $_POST["hora"];
  echo ($pru1);

  //Cogemos los datos del formulario
  $formdata = array(
     'Nhecho'=>count($arr_data),
     'hecho1'=> $_POST['hecho1'],
     'comando1'=> $_POST['comando1'],
     'hecho2'=> $_POST['hecho2'],
     'comando2'=> $_POST['comando2'],
     'hecho3'=> $_POST['hecho3'],
     'comando3'=> $_POST['comando3'],
     'hecho4'=> $_POST['hecho4'],
     'comando4'=> $_POST['comando4'],
     'hecho5'=> $_POST['hecho5'],
     'comando5'=> $_POST['comando5'],
  );

  //Insertamos datos del formulario al array
  array_push($arr_data,$formdata);


  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //Escribimos los datos en el archivo y redirrecionamos
  if(file_put_contents($myFile, $jsondata)) {
    echo "Datos guardados2";
       //header("Location: datosGuardados.html");
   }
  else
       echo "error al guardar datos";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}


 ?>
