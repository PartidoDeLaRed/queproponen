<?php
header('Content-Type: text/html; charset=utf-8');

ob_start();

include("config.php");


//Guardamos los datos editados
$match = "update tbPropuestas set propTitulo='".utf8_decode($_POST['titulo'])."', propTexto='".utf8_decode($_POST['texto'])."', propFuente='".utf8_decode($_POST['fuente'])."', partID=".$_POST['partido'].", candID=".$_POST['candidato'].", catID=".$_POST['categorias'][0]." where  propID=".$_POST['codigo'];
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

//Borramos las categorias
$match = "delete from tbPropuestasCategorias where propID=".$_POST['codigo'];
$qry = mysql_query($match);
//Agregamos las categorias
foreach ($_POST['categorias'] as $cat) {
	$match = "insert into tbPropuestasCategorias values (".$_POST['codigo'].", ".$cat.");";
	$qry = mysql_query($match);
}

//Seleccionamos el agregado y lo devolvemos en formato json
$match = "SELECT * FROM tbPropuestas where propID=".$_POST['codigo'];
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
