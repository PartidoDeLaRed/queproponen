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

$match = "select * from tbUsuarios where hash='".$_GET['hash']."';"; 
$qry = mysql_query($match)
or die ("Fallo la query porque ".mysql_error()); 

$user = null;
while($info = mysql_fetch_array( $qry )) 
{ 
	$user = json_encode(
		array (	'codigo'=> $info['usrID'],
				'user'=>str_replace("&#39;","'",utf8_encode($info['usrUser'])),
		  		'name'=>str_replace("&#39;","'",utf8_encode($info['usrName']))
		)
	);
}
if($user == null)
	echo "No";
else
	echo $user;

ob_end_flush();
?>