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

//Guardamos los datos editados
$match = "update tbPropuestas set propTitulo='".utf8_decode($_GET['titulo'])."', propTexto='".utf8_decode($_GET['texto'])."', propFuente='".utf8_decode($_GET['fuente'])."', partID=".$_GET['partido'].", candID=".$_GET['candidato'].", catID=".$_GET['categoria']." where  propID=".$_GET['codigo']; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbPropuestas where propID=".$_GET['codigo'];
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 
$info = mysql_fetch_array( $qry );

$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$_GET['partido']) );
$candidato = mysql_fetch_array( mysql_query("select * from tbCandidatos where candID = ".$_GET['candidato']) );
$categoria = mysql_fetch_array( mysql_query("select * from tbCategorias where catID = ".$_GET['categoria']) );
$propuesta = array ('codigo'=> $info['propID'],
					'titulo'=>utf8_encode($info['propTitulo']),
					'texto'=>$info['propTexto'],
				  	'fuente'=>utf8_encode($propuesta['propFuente']),
					'categoria' => array (	'codigo' => $categoria['catID'],
				  				 			'nombre' => utf8_encode($categoria['catNombre']),
				  				 			'abreviatura' => utf8_encode($categoria['catAbreviatura']),
								 			'color' => $categoria['catColor']),
					'partido' => array ('codigo' => $partido['partID'],
				  						'nombre' => utf8_encode($partido['partNombre']),
										'imagen' => $partido['partImagen'],
										'color' => $partido['partColor']),
					'candidato' => array (	'codigo' => $candidato['candID'],
				  					  		'nombre' => utf8_encode($candidato['candNombre']),
									  		'lista' => utf8_encode($candidato['candLista']),
									  		'twitter' => utf8_encode($candidato['candTwitter']),
									  		'imagen' => $candidato['candImagen'],
									  		'ganador' => $candidato['candPASO'])
			);

echo json_encode($propuesta);

ob_end_flush();
?>