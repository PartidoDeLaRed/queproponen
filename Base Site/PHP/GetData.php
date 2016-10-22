<?php
ob_start();

include("config.php");

$match = "select * from tbDatos limit 1"; 
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

$data = mysql_fetch_array($qry);

echo json_encode(
	array (	'ciudad' => utf8_encode($data['datCiudad']),
			'facebook' => $data['datFacebook'],
			'twitter' => $data['datTwitter']
	)
);

ob_end_flush();
?>
