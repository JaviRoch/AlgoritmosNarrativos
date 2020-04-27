<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
echo "en php";

//Código de chrishazfun https://github.com/chrishazfun/php-json-form-submit
//Importante configurar bien los permisos para la modificación del archivo

  $myFile = "../datos/data.json"; //Archivo de datos
  $arr_data = array(); //Array de trabajo

try
{
  //Cogemos los datos existentes en el archivo de datos
  $jsondata = file_get_contents($myFile);

  //Convertimos JSON a array
  $arr_data = json_decode($jsondata);


  //Cogemos los datos del formulario
  $formdata = array(
     'nEntrada' => $_POST['nEntrada'],
  );

  //Insertamos datos del formulario al array
  //array_push($arr_data,$formdata);
  //$arr_data[$formdata['nEntrada']] = $formdata;

  //Borramos campo elegido
  unset($arr_data[$formdata['nEntrada']]);
  //Indexamos de nuevo las keys del array
  $arr_data = array_values($arr_data);

  /*$result = print_r($arr_data, true);
  $fp = fopen("../datos/procesos_php.txt","a");
  fwrite($fp, "datos array despues de eliminar" . PHP_EOL);
  fwrite($fp, $result . PHP_EOL);
  fclose($fp);*/

  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);


  //Escribimos los datos en el archivo y redirrecionamos
  if(file_put_contents($myFile, $jsondata)) {
    echo "Datos guardados";

   }
  else
    echo "Error al guardar datos";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}


 ?>
