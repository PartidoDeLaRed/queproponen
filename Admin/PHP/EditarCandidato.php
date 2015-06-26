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
	$agregarImagen = "', candImagen='".utf8_decode($_GET['image']);
//Guardamos los datos editados
$match = "update tbCandidatos set candNombre='".utf8_decode($_GET['name']).$agregarImagen."', candLista='".utf8_decode($_GET['list'])."', partID=".$_GET['partido'].", carID=".$_GET['cargo'].", ciuID=".$_GET['ciudad'].", candTwitter='".$_GET['twitter']."', candPASO=".$_GET['PASO']." where candID = ".$_GET['codigo'].";"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbCandidatos where candID=".$_GET['codigo'];
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
					'propuestas'=> CargarPropuestas(mysql_query("select * from tbPropuestas where candID = ".$info['candID']))
			);

echo json_encode($candidato);

function CargarPropuestas($qry_propuestas)
{
	$propuestas = array();
	while($propuesta = mysql_fetch_array( $qry_propuestas )) 
	{
		$tema = mysql_fetch_array( mysql_query("select * from tbCategorias where catID = ".$propuesta['catID']) );
		$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$propuesta['partID']) );
		$candidato = mysql_fetch_array( mysql_query("select * from tbCandidatos where candID = ".$propuesta['candID']) );
		array_push($propuestas, 
			array (	'codigo'=> $propuesta['propID'],
				  	'titulo'=>utf8_encode($propuesta['propTitulo']),
				  	'texto'=>utf8_encode($propuesta['propTexto']),
				  	'fuente'=>utf8_encode($propuesta['propFuente']),
				  	'categoria' => array ('codigo' => $tema['catID'],
				  					 'nombre' => utf8_encode($tema['catNombre']),
									 'color' => $tema['catColor']
									),
					'partido' => array ('codigo' => $partido['partID'],
										'nombre' => utf8_encode($partido['partNombre']),
										'imagen' => $partido['partImagen'],
										'color' => $partido['partColor']
									),
					'candidato' => array ('codigo' => $candidato['candID'],
										  'nombre' => utf8_encode($candidato['candNombre']),
										  'lista' => utf8_encode($candidato['candLista']),
										  'twitter' => utf8_encode($candidato['candTwitter']),
										  'ganador' => $candidatos['candPASO']
									)
					)
		);
	}
	return $propuestas;
}

ob_end_flush();
?>