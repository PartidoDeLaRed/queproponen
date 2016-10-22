<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


$match = "select * from tbCargos";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

$cargos = array();
while($info = mysql_fetch_array( $qry ))
{

	array_push($cargos,
		array (	'codigo' => $info['carID'],
				'nombre' => utf8_encode($info['carNombre'])
		)
	);

}
echo json_encode($cargos);

ob_end_flush();
?>
