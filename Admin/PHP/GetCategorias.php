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

$match = "select * from tbCategorias order by catOrden"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

$categorias = array();
while($info = mysql_fetch_array( $qry )) 
{ 
	array_push($categorias,
		array (	'codigo' => $info['catID'],
				'nombre' => utf8_encode($info['catNombre']),
				'color' => $info['catColor'],
				'imagen' => $info['catImagen']
		)
	);
} 
echo json_encode($categorias);

ob_end_flush();
?>