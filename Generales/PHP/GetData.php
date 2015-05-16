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

$match = "select * from tbDatos limit 1"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

$data = mysql_fetch_array($qry);
 
echo json_encode(
	array (	'ciudad' => utf8_encode($data['datCiudad']),
			'facebook' => $data['datFacebook'],
			'twitter' => $data['datTwitter']
	)
);

ob_end_flush();
?>