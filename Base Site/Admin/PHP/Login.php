<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


$match = "select * from tbUsuarios where usrUser='".str_replace("'","&#39;",$_GET['user'])."' and usrPass='".str_replace("'","&#39;",$_GET['pass'])."' limit 1;";
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
					'user'=>str_replace("&#39;","'",utf8_encode($info['usrUser'])),
					'name'=>str_replace("&#39;","'",utf8_encode($info['usrName'])),
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
