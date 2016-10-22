<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


//Seleccionamos el ultimo
$match = "SELECT * FROM tbPartidos ORDER BY partID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());
$info = mysql_fetch_array( $qry );

//Agregamos el nuevo
$match = "insert into tbPartidos values (".($info['partID']+1).", '".utf8_decode($_GET['name'])."', '".utf8_decode($_GET['image'])."', '".$_GET['color']."');";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbPartidos ORDER BY partID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());
$info = mysql_fetch_array( $qry );

$partido = array (	'codigo'=> $info['partID'],
		'nombre'=>utf8_encode($info['partNombre']),
		'imagen'=>utf8_encode($info['partImagen']),
		'color'=>$info['partColor'],
		'candidatos'=>array(),
		'propuestas'=>array()
);
echo json_encode($partido);

ob_end_flush();
?>
