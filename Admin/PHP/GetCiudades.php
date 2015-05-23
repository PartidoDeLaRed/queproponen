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

$match = "select * from tbCiudades"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

$ciudades = array();
while($info = mysql_fetch_array( $qry )) 
{ 
 
	array_push($ciudades, 
		array (	'codigo' => utf8_encode($info['ciuID']),
				'nombre' => $info['ciuNombre']
		)
	);

} 
echo json_encode($ciudades);

ob_end_flush();
?>