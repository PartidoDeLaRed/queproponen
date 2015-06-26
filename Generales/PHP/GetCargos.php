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