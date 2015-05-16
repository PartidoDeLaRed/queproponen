<?php
ob_start();

include("config.php"); 

// connect to the mysql server 
$link = mysql_connect($server, $db_user, $db_pass) 
or die ("No se pudo conectar a MySql porque ".mysql_error()); 

// select the database
mysql_select_db($database) 
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

mysql_query("insert into tbCategorias values (0,'".utf8_decode('Salud')."','#FF7FD4', 'salud.png',0)");
mysql_query("insert into tbCategorias values (1,'".utf8_decode('Educación')."','#7FAAFF', 'educacion.png',9)");
mysql_query("insert into tbCategorias values (2,'".utf8_decode('Sociedad')."','#FF7F88', 'sociedad.png',2)");
mysql_query("insert into tbCategorias values (3,'".utf8_decode('Seguridad')."','#F6F6A1', 'seguridad.png',5)");
mysql_query("insert into tbCategorias values (4,'".utf8_decode('Derechos Humanos')."','#443868', 'derechosHumanos.png',11)");
mysql_query("insert into tbCategorias values (5,'".utf8_decode('Planeamiento Urbano')."','#D8AD83', 'planeamientoUrbano.png',4)");
mysql_query("insert into tbCategorias values (6,'".utf8_decode('Economía')."','#90E5BA', 'economia.png',7)");
mysql_query("insert into tbCategorias values (7,'".utf8_decode('Transporte')."','#BC92E7', 'transporte.png',10)");
mysql_query("insert into tbCategorias values (8,'".utf8_decode('Internacional')."','#55D4FF', 'internacional.png',8)");
mysql_query("insert into tbCategorias values (9,'".utf8_decode('Institucional')."','#FFAA7F', 'institucional.png',3)");
mysql_query("insert into tbCategorias values (10,'".utf8_decode('Medio Ambiente')."','#97EC97', 'medioAmbiente.png',6)");
mysql_query("insert into tbCategorias values (11,'".utf8_decode('Vivienda')."','#EE446F', 'vivienda.png',1)");
	
ob_end_flush();

?>