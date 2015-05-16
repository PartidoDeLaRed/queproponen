<?php
ob_start();

include("config.php"); 

// connect to the mysql server 
$link = mysql_connect($server, $db_user, $db_pass) 
or die ("No se pudo conectar a MySql porque ".mysql_error()); 

// select the database
mysql_select_db($database) 
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

mysql_query("insert into tbPartidos values (0,'FPV','fpv.png','#4FADE7')");
mysql_query("insert into tbPartidos values (1,'PRO','pro.png','#FFDD00')");
mysql_query("insert into tbPartidos values (2,'ECO','eco.png','#87C301')");
mysql_query("insert into tbPartidos values (3,'MST','mst.png','#D50100')");
mysql_query("insert into tbPartidos values (4,'SURGEN','surgen.png','#238E48')");
mysql_query("insert into tbPartidos values (5,'Mov. para el Bien Comun','bc.png','#198BA5')");
mysql_query("insert into tbPartidos values (6,'Frente Renovador','fr.png','#000000')");
mysql_query("insert into tbPartidos values (7,'Es posible','ep.png','#0073C8')");
mysql_query("insert into tbPartidos values (8,'Camino Popular','cp.png','#FE5900')");
mysql_query("insert into tbPartidos values (9,'Frente de Izquierda','fit.png','#E20612')");
mysql_query("insert into tbPartidos values (10,'Alternativa Buenos Aires','aba.png','#14C8C7')");
mysql_query("insert into tbPartidos values (11,'Nuevo MAS','nm.png','#F9343B')");
mysql_query("insert into tbPartidos values (12,'Partido Humanista','ph.png','#FE5900')");
mysql_query("insert into tbPartidos values (13,'Bandera Vecinal','bv.png','#494CAB')");
mysql_query("insert into tbPartidos values (14,'Movimiento Federal','mf.png','#0A6955')");
mysql_query("insert into tbPartidos values (15,'Autodet. y Libertad','ayl.png','#790786')");

ob_end_flush();

?>