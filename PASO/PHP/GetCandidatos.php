<?php
ob_start();

include("config.php"); 

// connect to the mysql server 
$link = mysql_connect($server, $db_user, $db_pass) 
or die ("No se pudo conectar a MySql porque ".mysql_error()); 

// select the database
mysql_select_db($database) 
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

$match = "select * from tbCandidatos"; 
if($_GET['partido'] != -1)
	$match = $match." where partID=".$_GET['partido'];
else if($_GET['candidato'] != -1)
	$match = $match." where candID=".$_GET['candidato'];

$qry = mysql_query($match)
or die ("Fallo la query porque ".mysql_error()); 

$candidatos = array();
while($info = mysql_fetch_array( $qry )) 
{ 
	$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$info['partID']) );
	$cargo = mysql_fetch_array( mysql_query("select * from tbCargos where carID = ".$info['carID']) );
	$ciudad = mysql_fetch_array( mysql_query("select * from tbCiudades where ciuID = ".$info['ciuID']) );
	array_push($candidatos, 
		array (	'codigo'=> $info['candID'],
				'nombre'=>utf8_encode($info['candNombre']),
		  		'lista'=>utf8_encode($info['candLista']),
		  		'imagen'=>utf8_encode($info['candImagen']),
				'twitter'=>$info['candTwitter'],
				'ganador'=>$info['candPASO'],
				'cargo' => array ('codigo' => $cargo['carID'],
									'nombre' => utf8_encode($cargo['carNombre'])),
				'ciudad' => array ('codigo' => $ciudad['ciuID'],
									'nombre' => utf8_encode($ciudad['ciuNombre'])),
				'partido' => array ('codigo' => $partido['partID'],
									'nombre' => utf8_encode($partido['partNombre']),
									'imagen' => utf8_encode($partido['partImagen']),
									'color' => $partido['partColor']),
				'propuestas'=> CargarPropuestas(mysql_query("select * from tbPropuestas where candID = ".$info['candID']))
		)
	);

} 
echo json_encode($candidatos);

function CargarPropuestas($qry_propuestas)
{
	$propuestas = array();
	while($propuesta = mysql_fetch_array( $qry_propuestas )) 
	{
		$tema = mysql_fetch_array( mysql_query("select * from tbCategorias where catID = ".$propuesta['catID']) );
		array_push($propuestas, 
			array (	'codigo'=> $propuesta['propID'],
				  	'titulo'=>utf8_encode($propuesta['propTitulo']),
				  	'texto'=>utf8_encode($propuesta['propTexto']),
				  	'fuente'=>utf8_encode($propuesta['propFuente']),
				  	'categoria' => array ('codigo' => $tema['catID'],
				  					 'nombre' => utf8_encode($tema['catNombre']),
									 'color' => $tema['catColor'])
					)
		);
	}
	return $propuestas;
}

ob_end_flush();
?>