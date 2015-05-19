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

$match = "select * from tbUsuarios where usrUser='".$_GET['user']."' and usrPass='".$_GET['pass']."' limit 1;"; 
$qry = mysql_query($match)
or die ("Fallo la query porque ".mysql_error()); 

$info = mysql_fetch_array( $qry );
if($info != false)
{
	if($info['usrUser'] == 'admin')
	{
		if($info['hash'] != NULL && $info['hash'] != 'wait')
			echo 'No';
		else
		{
			echo 'Si';
			$match = "update tbUsuarios set hash='wait' where usrID=".$info['usrID'].";"; 
			$qry = mysql_query($match);
		}
	}
	else
	{
		$md5 = md5($_GET['pass']);
		$match = "update tbUsuarios set hash='".$md5."' where usrID=".$info['usrID'].";"; 
		$qry = mysql_query($match)
		or die ("Fallo la query porque ".mysql_error()); 
		
		$user = json_encode(
			array (	'codigo'=> $info['usrID'],
					'user'=>utf8_encode($info['usrUser']),
					'name'=>utf8_encode($info['usrName']),
					'hash'=>md5($_GET['pass'])
			)
		);
		echo $user;
	}
}
else
	echo "No";

ob_end_flush();
?>