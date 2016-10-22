<?php
ob_start();

include("config.php");


$match = "select * from tbCategorias order by catOrden";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());

$categorias = array();
while($info = mysql_fetch_array( $qry ))
{
	array_push($categorias,
		array (	'codigo' => $info['catID'],
				'nombre' => utf8_encode($info['catNombre']),
				'abreviatura' => utf8_encode($info['catAbreviatura']),
				'color' => $info['catColor'],
				'imagen' => $info['catImagen']
		)
	);
}
echo json_encode($categorias);

ob_end_flush();
?>
