<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


$info = mysql_fetch_array( mysql_query("SELECT * FROM tbCandidatos where candID = ".$_GET['codigo'].";") );
//Borramos la imagen
if($info['candImagen'] != 'default.png')
	unlink(implode('/', explode('/',getcwd(),-2)).'/IMG/candidatos/'.$info['candImagen']);

//Borramos el candidato
$match = "delete from tbCandidatos where candID=".$_GET['codigo'];
$qry = mysql_query($match)
or die ("No se pudo borrar el partido porque ".mysql_error());

//Borramos las propuestas del candidato
$match = "delete from tbPropuestas where candID=".$_GET['codigo'];
$qry = mysql_query($match)
or die ("No se pudieron borrar las propuestas porque ".mysql_error());

ob_end_flush();
?>
