<?php
ob_start();

include("config.php");


$match = "select * from tbPropuestas";

$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

$propuestas = array();
while($info = mysql_fetch_array( $qry ))
{
	$categorias = GetCategorias( mysql_query("select catID from tbPropuestasCategorias where propID = ".$info['propID']) );
	$partido = mysql_fetch_array( mysql_query("select partID from tbPartidos where partID = ".$info['partID']) );
	$candidato = mysql_fetch_array( mysql_query("select candID from tbCandidatos where candID = ".$info['candID']) );

	array_push($propuestas,
		array (	'codigo'=> $info['propID'],
				'titulo'=>utf8_encode($info['propTitulo']),
				'texto'=>utf8_encode($info['propTexto']),
			  	'fuente'=>utf8_encode($info['propFuente']),
				'categorias' => $categorias,
				'partido' => $partido['partID'],
				'candidato' => $candidato['candID']
		)
	);
}
echo json_encode($propuestas);

ob_end_flush();

function GetCategorias($query)
{
	$res = array();
	while ($item = mysql_fetch_array($query))
		$res[] = $item['catID'];
	return $res;
}

?>
