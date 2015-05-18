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

$match = "select * from tbPartidos"; 
if($_GET['partido'] != -1)
	$match = $match." where partID=".$_GET['partido'];

$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

$partidos = array();
while($info = mysql_fetch_array( $qry )) 
{ 
	array_push($partidos,
		array (	'codigo'=> $info['partID'],
				'nombre'=>utf8_encode($info['partNombre']),
				'imagen'=>$info['partImagen'],
				'color'=>$info['partColor'],
				'candidatos'=> CargarCandidatos(mysql_query("select * from tbCandidatos where partID = ".$info['partID'])),
				'propuestas'=> CargarPropuestas(mysql_query("select * from tbPropuestas where partID = ".$info['partID']))
		)
	);
} 
echo json_encode($partidos);

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
				  	'candidato'=>utf8_encode($propuesta['candID']),
				  	'partido'=>utf8_encode($propuesta['partID']),
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

function CargarCandidatos($qry_candidatos)
{
	$candidatos = array();
	while($candidato = mysql_fetch_array( $qry_candidatos )) 
	{
		$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$candidato['partID']) );
		array_push($candidatos, 
			array (	'codigo'=> $candidato['candID'],
					'nombre'=>utf8_encode($candidato['candNombre']),
					'lista'=>utf8_encode($candidato['candLista']),
					'imagen'=>utf8_encode($candidato['candImagen']),
					'twitter'=>utf8_encode($candidato['candTwitter']),
					'ganador'=>$candidato['candPASO'],
					'partido' => array ('codigo' => $partido['partID'],
										'nombre' => utf8_encode($partido['partNombre']),
										'imagen' => $partido['partImagen'],
										'color' => $partido['partColor']),
					'propuestas'=> CargarPropuestas(mysql_query("select * from tbPropuestas where candID = ".$candidato['candID']))
			)
		);
	}
	return $candidatos;
}

ob_end_flush();
?>