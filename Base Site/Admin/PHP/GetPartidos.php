<?php
ob_start();

include("config.php");


$match = "select * from tbPartidos";

$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

$partidos = array();
while($info = mysql_fetch_array( $qry ))
{
	$candidatos = GetCandidatos(mysql_query("select candID from tbCandidatos where partID = ".$info['partID']));
	array_push($partidos,
		array (	'codigo'=> $info['partID'],
				'nombre'=>utf8_encode($info['partNombre']),
				'imagen'=>utf8_encode($info['partImagen']),
				'color'=>$info['partColor'],
				'candidatos' => $candidatos
		)
	);
}
echo json_encode($partidos);

function GetCandidatos($query)
{
	$res = array();
	while ($item = mysql_fetch_array($query))
		$res[] = $item['candID'];
	return $res;
}

ob_end_flush();
?>
