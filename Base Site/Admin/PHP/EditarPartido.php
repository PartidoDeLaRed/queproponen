<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


$agregarImagen = '';
if($_GET['image'] != 'noChange')
	$agregarImagen = "', partImagen='".utf8_decode($_GET['image']);
//Guardamos los datos editados
$match = "update tbPartidos set partNombre='".utf8_decode($_GET['name']).$agregarImagen."', partColor='".$_GET['color']."' where partID = ".$_GET['codigo'].";";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());


$match = "SELECT * FROM tbPartidos where partID = ".$_GET['codigo'].";";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());
$info = mysql_fetch_array( $qry );

$partido = array (	'codigo'=> $info['partID'],
		'nombre'=>utf8_encode($info['partNombre']),
		'imagen'=>utf8_encode($info['partImagen']),
		'color'=>$info['partColor']
);
echo json_encode($partido);

ob_end_flush();
?>
