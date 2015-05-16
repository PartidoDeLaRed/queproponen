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
$match = "SELECT * FROM tbCandidatos ORDER BY candID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 
$info = mysql_fetch_array( $qry );

//Agregamos el nuevo
$match = "insert into tbCandidatos values (".($info['candID']+1).", '".$_GET['name']."', '".$_GET['list']."', '".$_GET['image']."', '".$_GET['twitter']."', ".$_GET['partido'].", ".$_GET['PASO'].");"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbCandidatos ORDER BY candID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 
$info = mysql_fetch_array( $qry );

$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$info['partID']) );
$candidato = array ('codigo'=> $info['candID'],
					'nombre'=>utf8_encode($info['candNombre']),
		  			'lista'=>utf8_encode($info['candLista']),
		  			'imagen'=>$info['candImagen'],
					'twitter'=>$info['candTwitter'],
					'ganador'=>$info['candPASO'],
					'partido' => array ('codigo' => $partido['partID'],
										'nombre' => utf8_encode($partido['partNombre']),
										'imagen' => $partido['partImagen'],
										'color' => $partido['partColor'])
			);

echo json_encode($candidato);

ob_end_flush();
?>