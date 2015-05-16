<?php
ob_start();

include("config.php"); 

// connect to the mysql server 
$link = mysql_connect($server, $db_user, $db_pass) 
or die ("No se pudo conectar a MySql porque ".mysql_error()); 

// select the database
mysql_select_db($database) 
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

$match = "select * from tbPropuestas"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error()); 

	$propuestas = array();
	while($propuesta = mysql_fetch_array( $qry_propuestas )) 
	{
		$tema = mysql_fetch_array( mysql_query("select * from tbCategorias where catID = ".$info['catID']) );
		array_push($propuestas, 
			array (	'codigo'=> $info['propID'],
				  	'titulo'=>utf8_encode($info['propTitulo']),
				  	'texto'=>$info['propTexto'],
				  	'categoria' => array ('codigo' => $tema['catID'],
				  					 'nombre' => utf8_encode($tema['catNombre']),
									 'color' => $tema['catColor'])
					)
		);
	}

$propuestas = array();
while($info = mysql_fetch_array( $qry )) 
{ 
	$tema = mysql_fetch_array( mysql_query("select * from tbCategorias where catID = ".$info['catID']) );
	$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$info['partID']) );
	$candidato = mysql_fetch_array( mysql_query("select * from tbCandidatos where candID = ".$info['candID']) );
	
	array_push($propuestas, 
		array (	'codigo'=> $info['propID'],
				'titulo'=>utf8_encode($info['propTitulo']),
				'texto'=>$info['propTexto'],
				'categoria' => array ('codigo' => $tema['catID'],
				  				 'nombre' => utf8_encode($tema['catNombre']),
								 'color' => $tema['catColor']),
				'partido' => array ('codigo' => $partido['partID'],
				  					'nombre' => utf8_encode($partido['partNombre']),
									'imagen' => $partido['partImagen'],
									'color' => $partido['partColor']),
				'candidato' => array ('codigo' => $candidato['candID'],
				  					  'nombre' => utf8_encode($candidato['candNombre']),
									  'lista' => utf8_encode($candidato['candLista']),
									  'twitter' => utf8_encode($candidato['candTwitter']),
									  'ganador' => $candidatos['candPASO'])
		)
	);
} 
echo json_encode($propuestas);

ob_end_flush();
?>