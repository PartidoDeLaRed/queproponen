<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php"); 

// connect to the mysql server 
$link = mysql_connect($server, $db_user, $db_pass) 
or die ("No se pudo conectar a MySql porque ".mysql_error()); 

// select the database
mysql_select_db($database) 
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

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