<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


//Borramos las categorias
$match = "delete from tbPropuestasCategorias where propID=".$_POST['codigo'];
$qry = mysql_query($match);
//Borramos la propuesta
$match = "delete from tbPropuestas where propID=".$_GET['codigo'];
$qry = mysql_query($match)
or die ("No se pudieron borrar las propuestas porque ".mysql_error());

ob_end_flush();
?>
