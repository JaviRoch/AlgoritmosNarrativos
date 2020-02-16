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
  $arr_data = json_decode($jsondata, true);

  //Cogemos los datos del formulario
  $formdata = array(
     'nEntrada' => $_POST['nEntrada'],
  );

  //Insertamos datos del formulario al array
  //array_push($arr_data,$formdata);
  //$arr_data[$formdata['nEntrada']] = $formdata;
  unset($arr_data[$formdata['nEntrada']]);


  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //Escribimos los datos en el archivo y redirrecionamos
  if(file_put_contents($myFile, $jsondata)) {
    echo "Datos guardados";

    //Mandamos un mail
    $to = "javi@javierroche.es";
    $subject = "Asunto del email";
    $message = "Este es mi primer envío de email con PHP";
    mail($to, $subject, $message);

   }
  else
    echo "Error al guardar datos";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}


 ?>
