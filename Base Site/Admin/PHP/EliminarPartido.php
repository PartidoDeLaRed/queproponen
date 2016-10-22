<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


$info = mysql_fetch_array( mysql_query("SELECT * FROM tbPartidos where partID = ".$_GET['codigo'].";") );
//Borramos la imagen
if($info['partImagen'] != 'default.png')
	unlink(implode('/', explode('/',getcwd(),-2)).'/IMG/partidos/'.$info['partImagen']);

//Borramos el partido
$match = "delete from tbPartidos where partID=".$_GET['codigo'];
$qry = mysql_query($match)
or die ("No se pudo borrar el partido porque ".mysql_error());

//Borramos los candidatos del partido
$match = "delete from tbCandidatos where partID=".$_GET['codigo'];
$qry = mysql_query($match)
or die ("No se pudieron borrar los candidatos porque ".mysql_error());

//Borramos las propuestas del partido
$match = "delete from tbPropuestas where partID=".$_GET['codigo'];
$qry = mysql_query($match)
or die ("No se pudieron borrar las propuestas porque ".mysql_error());

ob_end_flush();
?>
