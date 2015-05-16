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

$match = "update tbUsuarios set hash=NULL where usrID=".$_GET['codigo'].";"; 
$qry = mysql_query($match)
or die ("Fallo la query porque ".mysql_error()); 

echo 'ok';

ob_end_flush();
?>