<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


//Seleccionamos el ultimo
$match = "SELECT * FROM tbUsuarios where usrUser='admin';";
$qry = mysql_query($match)
or die ("No se pudieron encontrar datos porque ".mysql_error());
$info = mysql_fetch_array( $qry );

if($info['hash'] == 'wait')
{
	$match = "update tbUsuarios set hash='done' where usrUser='admin';";
	$qry = mysql_query($match);
	//Agregamos el nuevo
	$match = "insert into tbUsuarios values (".($info['usrID']+1).", '".utf8_decode(str_replace("'","&#39;",$_GET['name']))."', '".utf8_decode(str_replace("'","&#39;",$_GET['user']))."', '".utf8_decode(str_replace("'","&#39;",$_GET['pass']))."', '".utf8_decode($_GET['mail'])."', 0, null);";
	$qry = mysql_query($match)
	or die ("No se pudieron encontrar datos porque ".mysql_error());

	echo 'ok';
}
else
	echo 'No';
ob_end_flush();
?>
