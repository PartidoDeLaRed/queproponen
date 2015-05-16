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

//Seleccionamos el ultimo
$match = "SELECT * FROM tbPartidos ORDER BY partID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 
$info = mysql_fetch_array( $qry );

//Agregamos el nuevo
$match = "insert into tbPartidos values (".($info['partID']+1).", '".$_GET['name']."', '".$_GET['image']."', '".$_GET['color']."');"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbPartidos ORDER BY partID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 
$info = mysql_fetch_array( $qry );

$partido = array (	'codigo'=> $info['partID'],
		'nombre'=>utf8_encode($info['partNombre']),
		'imagen'=>$info['partImagen'],
		'color'=>$info['partColor'],
		'candidatos'=>array(),
		'propuestas'=>array()
);
echo json_encode($partido);

ob_end_flush();
?>