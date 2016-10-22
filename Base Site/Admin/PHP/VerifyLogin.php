<?php
header('Content-Type: text/html; charset=utf-8');
ob_start();

include("config.php");


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
