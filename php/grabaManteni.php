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
     'RegFecha'=>$_POST['regFechaMan'],
     'titulo'=> $_POST['titulo'],
     'hecho0'=> $_POST['hecho0'],
     'comando0'=> $_POST['comando0'],
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
     'hecho6'=> $_POST['hecho6'],
     'comando6'=> $_POST['comando6'],
     'hecho7'=> $_POST['hecho7'],
     'comando7'=> $_POST['comando7'],
     'hecho8'=> $_POST['hecho8'],
     'comando8'=> $_POST['comando8'],
     'hecho9'=> $_POST['hecho9'],
     'comando9'=> $_POST['comando9'],
     'hecho10'=> $_POST['hecho10'],
     'comando10'=> $_POST['comando10'],
     'hecho11'=> $_POST['hecho11'],
     'comando11'=> $_POST['comando11'],
     'hecho12'=> $_POST['hecho12'],
     'comando12'=> $_POST['comando12'],
     'hecho13'=> $_POST['hecho13'],
     'comando13'=> $_POST['comando13'],
     'hecho14'=> $_POST['hecho14'],
     'comando14'=> $_POST['comando14'],
     'hecho15'=> $_POST['hecho15'],
     'comando15'=> $_POST['comando15'],
     'hecho16'=> $_POST['hecho16'],
     'comando16'=> $_POST['comando16'],
     'hecho17'=> $_POST['hecho17'],
     'comando17'=> $_POST['comando17'],
     'hecho18'=> $_POST['hecho18'],
     'comando18'=> $_POST['comando18'],
     'hecho19'=> $_POST['hecho19'],
     'comando19'=> $_POST['comando19'],
     'nEntrada' => $_POST['nEntrada'],
  );

  //Insertamos datos del formulario al array
  //array_push($arr_data,$formdata);
  $arr_data[$formdata['nEntrada']] = $formdata;


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
