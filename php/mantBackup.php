<?php

$fecha = date("d m y H:i:s");
$fichero = "../datos/data.json";
$ficheroBak = "../datos/backup/data".$fecha.".json";

if(!copy($fichero,$ficheroBack)){
  echo "Error al realizar backup $fichero...\n";
  echo '<script language="javascript">alert("juas");</script>'; 
}
?>
