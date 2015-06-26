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
$match = "insert into tbCandidatos values (".($info['candID']+1).", '".utf8_decode($_GET['name'])."', '".utf8_decode($_GET['list'])."', '".utf8_decode($_GET['image'])."', '".$_GET['twitter']."', ".$_GET['cargo'].", ".$_GET['ciudad'].", ".$_GET['partido'].", ".$_GET['PASO'].");"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbCandidatos ORDER BY candID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 
$info = mysql_fetch_array( $qry );

$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$info['partID']) );
$cargo = mysql_fetch_array( mysql_query("select * from tbCargos where carID = ".$info['carID']) );
$ciudad = mysql_fetch_array( mysql_query("select * from tbCiudades where ciuID = ".$info['ciuID']) );
$candidato = array ('codigo'=> $info['candID'],
					'nombre'=>utf8_encode($info['candNombre']),
		  			'lista'=>utf8_encode($info['candLista']),
		  			'imagen'=>utf8_encode($info['candImagen']),
					'twitter'=>$info['candTwitter'],
					'ganador'=>$info['candPASO'],
					'partido' => array ('codigo' => $partido['partID'],
										'nombre' => utf8_encode($partido['partNombre']),
										'imagen' => utf8_encode($partido['partImagen']),
										'color' => $partido['partColor']),
					'cargo' => array ('codigo' => $cargo['carID'],
										'nombre' => utf8_encode($cargo['carNombre'])),
					'ciudad' => array ('codigo' => $ciudad['ciuID'],
										'nombre' => utf8_encode($ciudad['ciuNombre'])),
					'propuestas'=> array()
			);

echo json_encode($candidato);

ob_end_flush();
?>