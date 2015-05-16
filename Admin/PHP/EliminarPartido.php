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