<?php
ob_start();

include("config.php");


$match = "select * from tbCandidatos";
if($_GET['soloGanador'] == 1)
	$match .= " where candPASO = 1";

$qry = mysql_query($match)
or die ("Fallo la query porque ".mysql_error());

$candidatos = array();
while($info = mysql_fetch_array( $qry ))
{
	$partido = mysql_fetch_array( mysql_query("select partID from tbPartidos where partID = ".$info['partID']) );
	$cargo = mysql_fetch_array( mysql_query("select carID from tbCargos where carID = ".$info['carID']) );
	$ciudad = mysql_fetch_array( mysql_query("select ciuID from tbCiudades where ciuID = ".$info['ciuID']) );
	$propuestas = GetPropuestas(mysql_query("select propID from tbPropuestas where candID = ".$info['candID']));
	array_push($candidatos,
		array (	'codigo'=> $info['candID'],
				'nombre'=>utf8_encode($info['candNombre']),
		  		'lista'=>utf8_encode($info['candLista']),
		  		'imagen'=>utf8_encode($info['candImagen']),
				'twitter'=>$info['candTwitter'],
				'ganador'=>$info['candPASO'],
				'enBallotage'=>$info['candBallotage'],
				'cargo' => $cargo['carID'],
				'ciudad' => $ciudad['ciuID'],
				'partido' => $partido['partID'],
				'propuestas' => $propuestas
		)
	);

}
echo json_encode($candidatos);

ob_end_flush();

function GetPropuestas($query)
{
	$res = array();
	while ($item = mysql_fetch_array($query))
		$res[] = $item['propID'];
	return $res;
}
?>
