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
     'hora0'=> $_POST['hora0'],
     'hecho0'=> $_POST['hecho0'],
     'comando0'=> $_POST['comando0'],
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
     'hora5'=> $_POST['hora5'],
     'hecho5'=> $_POST['hecho5'],
     'comando5'=> $_POST['comando5'],
     'hora6'=> $_POST['hora6'],
     'hecho6'=> $_POST['hecho6'],
     'comando6'=> $_POST['comando6'],
     'hora7'=> $_POST['hora7'],
     'hecho7'=> $_POST['hecho7'],
     'comando7'=> $_POST['comando7'],
     'hora8'=> $_POST['hora8'],
     'hecho8'=> $_POST['hecho8'],
     'comando8'=> $_POST['comando8'],
     'hora9'=> $_POST['hora9'],
     'hecho9'=> $_POST['hecho9'],
     'comando9'=> $_POST['comando9'],
     'hora10'=> $_POST['hora10'],
     'hecho10'=> $_POST['hecho10'],
     'comando10'=> $_POST['comando10'],
     'hora11'=> $_POST['hora11'],
     'hecho11'=> $_POST['hecho11'],
     'comando11'=> $_POST['comando11'],
     'hora12'=> $_POST['hora12'],
     'hecho12'=> $_POST['hecho12'],
     'comando12'=> $_POST['comando12'],
     'hora13'=> $_POST['hora13'],
     'hecho13'=> $_POST['hecho13'],
     'comando13'=> $_POST['comando13'],
     'hora14'=> $_POST['hora14'],
     'hecho14'=> $_POST['hecho14'],
     'comando14'=> $_POST['comando14'],
     'hora15'=> $_POST['hora15'],
     'hecho15'=> $_POST['hecho15'],
     'comando15'=> $_POST['comando15'],
     'hora16'=> $_POST['hora16'],
     'hecho16'=> $_POST['hecho16'],
     'comando16'=> $_POST['comando16'],
     'hora17'=> $_POST['hora17'],
     'hecho17'=> $_POST['hecho17'],
     'comando17'=> $_POST['comando17'],
     'hora18'=> $_POST['hora18'],
     'hecho18'=> $_POST['hecho18'],
     'comando18'=> $_POST['comando18'],
     'hora19'=> $_POST['hora19'],
     'hecho19'=> $_POST['hecho19'],
     'comando19'=> $_POST['comando19'],
  );

  //Insertamos datos del formulario al array
  array_push($arr_data,$formdata);


  //Convertimos array a JSON
  $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);

  //Escribimos los datos en el archivo y redirrecionamos
  if(file_put_contents($myFile, $jsondata)) {
    echo "Datos guardados";
    header("Location: datosGuardados.html"); //enlazar con página de resultado o algo
   }
  else
       echo "Error al guardar datos";

}
catch (Exception $e) {
         echo 'Caught exception: ',  $e->getMessage(), "\n";
}


 ?>
