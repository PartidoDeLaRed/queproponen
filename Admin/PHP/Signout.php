<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php"); 

// connect to the mysql server 
$link = mysql_connect($server, $db_user, $db_pass) 
or die ("No se pudo conectar a MySql porque ".mysql_error()); 

// select the database
mysql_select_db($database) 
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

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
	$match = "insert into tbUsuarios values (".($info['usrID']+1).", '".utf8_decode($_GET['name'])."', '".utf8_decode($_GET['user'])."', '".utf8_decode($_GET['pass'])."', '".utf8_decode($_GET['mail'])."', 0, null);";
	$qry = mysql_query($match)
	or die ("No se pudieron encontrar datos porque ".mysql_error()); 
	
	echo 'ok';
}
else
	echo 'No';
ob_end_flush();
?>