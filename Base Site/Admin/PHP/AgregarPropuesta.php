<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


//Seleccionamos el ultimo
$match = "SELECT * FROM tbPropuestas ORDER BY propID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());
$info = mysql_fetch_array( $qry );

//Agregamos el nuevo
$match = "insert into tbPropuestas values (".($info['propID']+1).", '".utf8_decode($_POST['titulo'])."', '".utf8_decode($_POST['texto'])."', '".utf8_decode($_POST['fuente'])."', ".$_POST['categorias'][0].", ".$_POST['partido'].", ".$_POST['candidato'].");";
$qry = mysql_query($match);

//Agregamos las categorias
foreach ($_POST['categorias'] as $cat) {
	$match = "insert into tbPropuestasCategorias values (".($info['propID']+1).", ".$cat.");";
	$qry = mysql_query($match);
}
//or die ("No se pudieron encontrar datos porque ".mysql_error());

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbPropuestas ORDER BY propID DESC LIMIT 1";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());
$info = mysql_fetch_array( $qry );

$partido = mysql_fetch_array( mysql_query("select * from tbPartidos where partID = ".$_POST['partido']) );
$candidato = mysql_fetch_array( mysql_query("select * from tbCandidatos where candID = ".$_POST['candidato']) );
$categorias = GetCategorias( mysql_query("select catID from tbPropuestasCategorias where propID = ".$info['propID']) );
$propuesta = array (	'codigo'=> $info['propID'],
				'titulo'=>utf8_encode($info['propTitulo']),
				'texto'=>utf8_encode($info['propTexto']),
			  	'fuente'=>utf8_encode($info['propFuente']),
				'categorias' => $categorias,
				'partido' => $partido['partID'],
				'candidato' => $candidato['candID']
		);

echo json_encode($propuesta);

ob_end_flush();

function GetCategorias($query)
{
	$res = array();
	while ($item = mysql_fetch_array($query))
		$res[] = $item['catID'];
	return $res;
}

?>
