<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


$match = "update tbUsuarios set hash=NULL where usrID=".$_GET['codigo'].";";
$qry = mysql_query($match)
or die ("Fallo la query porque ".mysql_error());

echo 'ok';

ob_end_flush();
?>
