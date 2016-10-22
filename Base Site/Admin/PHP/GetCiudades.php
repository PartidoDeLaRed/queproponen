<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


$match = "select * from tbCiudades";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

$ciudades = array();
while($info = mysql_fetch_array( $qry ))
{

	array_push($ciudades,
		array (	'codigo' => $info['ciuID'],
				'nombre' => utf8_encode($info['ciuNombre'])
		)
	);

}
echo json_encode($ciudades);

ob_end_flush();
?>
