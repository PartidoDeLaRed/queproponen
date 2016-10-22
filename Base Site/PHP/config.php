<?php
// Server to connect to, the default is 'LocalHost' but if it does not work use your IP address for your server
$server = "localhost";

// The name of the database, when using cPanel you would normally have your user name first like so: username_DATABASE-NAME
$database = "fville5_queproponen_ubasociales";

// MySQL username to access the database with.
$db_user = "root";

// MySQL password to access the database with.
$db_pass = "Contr@senia";


// connect to the mysql server
$link = mysql_connect($server, $db_user)
or die ("No se pudo conectar a MySql porque ".mysql_error());

// select the database
mysql_select_db($database)
or die ("No se pudo acceder a la base de datos porque ".mysql_error());

?>
