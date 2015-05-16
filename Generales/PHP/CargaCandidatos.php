<?php
ob_start();

include("config.php"); 

// connect to the mysql server 
$link = mysql_connect($server, $db_user, $db_pass) 
or die ("No se pudo conectar a MySql porque ".mysql_error()); 

// select the database
mysql_select_db($database) 
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

mysql_query("insert into tbCandidatos values (0,'".utf8_decode('Mariano Recalde')."','".utf8_decode('CFK')."','".utf8_decode('Recalde.jpg')."','".utf8_decode('@marianorecalde')."',0,1)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (1,'".utf8_decode('Gabriela Cerruti')."','".utf8_decode('LA CIUDAD ES EL OTRO')."','".utf8_decode('Cerruti.jpg')."','".utf8_decode('@gabicerru')."',0,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (2,'".utf8_decode('Gustavo López')."','".utf8_decode('CIUDAD PARA TODOS')."','".utf8_decode('Lopez.jpg')."','".utf8_decode('@gustavoflopez')."',0,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (3,'".utf8_decode('Aníbal Ibarra')."','".utf8_decode('FRENTE SÍ')."','".utf8_decode('Ibarra.jpg')."','".utf8_decode('@anibarra')."',0,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (4,'".utf8_decode('Carlos Heller')."','".utf8_decode('UNIDOS POR LA CIUDAD')."','".utf8_decode('Heller.jpg')."','".utf8_decode('@CarlosHeller')."',0,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (5,'".utf8_decode('Carlos Oviedo')."','".utf8_decode('ESPACIO ABIERTO')."','".utf8_decode('Oviedo.jpg')."','".utf8_decode('@oviedocg')."',0,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (6,'".utf8_decode('Víctor Ramos')."','".utf8_decode('REVOLUCIÓN URBANA')."','".utf8_decode('Ramos.jpg')."','".utf8_decode('@RRamosVictor')."',0,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (7,'".utf8_decode('Horacio R. Larreta')."','".utf8_decode('LISTA A')."','".utf8_decode('Larreta.jpg')."','".utf8_decode('@horaciorlarreta')."',1,1)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (8,'".utf8_decode('Gabriela Michetti')."','".utf8_decode('HAY EQUIPO')."','".utf8_decode('Michetti.jpg')."','".utf8_decode('@gabimichetti')."',1,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (9,'".utf8_decode('Martín Lousteau')."','".utf8_decode('SUMÁ +')."','".utf8_decode('Lousteau.jpg')."','".utf8_decode('@GugaLusto')."',2,1)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (10,'".utf8_decode('Graciela Ocaña')."','".utf8_decode('TRANSPARENCIA Y GESTIÓN')."','".utf8_decode('Ocania.jpg')."','".utf8_decode('@gracielaocana')."',2,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (11,'".utf8_decode('Andrés Borthagaray')."','".utf8_decode('ABRIMOS BA')."','".utf8_decode('Borthagaray.jpg')."','".utf8_decode('@A_Borthagaray')."',2,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (12,'".utf8_decode('Héctor Bidonde')."','".utf8_decode('LISTA 1')."','".utf8_decode('Bidonde.jpg')."','".utf8_decode('@HectorBidonde')."',3,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (13,'".utf8_decode('Sergio García')."','".utf8_decode('LISTA 2')."','".utf8_decode('Garcia.jpg')."','".utf8_decode('@SergioGarciaMST')."',3,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (14,'".utf8_decode('Maru Lopes')."','".utf8_decode('LISTA 3')."','".utf8_decode('Lopes.jpg')."','".utf8_decode('@marulopesMST')."',3,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (15,'".utf8_decode('Martín Torres')."','".utf8_decode('LISTA 4')."','".utf8_decode('Torres.jpg')."','".utf8_decode('')."',3,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (16,'".utf8_decode('Humberto Tumini')."','".utf8_decode('VIENTOS DE CAMBIO')."','".utf8_decode('Tumini.jpg')."','".utf8_decode('@HumbertoTumini')."',4,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (17,'".utf8_decode('Sergio Abrevaya')."','".utf8_decode('CIUDAD JUSTA')."','".utf8_decode('Abrevaya.jpg')."','".utf8_decode('')."',4,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (18,'".utf8_decode('Gustavo Vera')."','".utf8_decode('LISTA A')."','".utf8_decode('Vera.jpg')."','".utf8_decode('@gVeraLaalameda')."',5,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (19,'".utf8_decode('Leonardo Fabre')."','".utf8_decode('LISTA B')."','".utf8_decode('Fabre.jpg')."','".utf8_decode('@LeonardoFabreok')."',5,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (20,'".utf8_decode('Guillermo Nielsen')."','".utf8_decode('FRENTE POR BUENOS AIRES')."','".utf8_decode('Nielsen.jpg')."','".utf8_decode('@NielsenEcon')."',6,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (21,'".utf8_decode('Ivo Cutzarida')."','".utf8_decode('COMPROMISO FEDERAL')."','".utf8_decode('Cutzarida.jpg')."','".utf8_decode('@ivoesposible')."',7,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (22,'".utf8_decode('Claudio Lozano')."','".utf8_decode('OTRO CAMINO PARA GOBERNAR')."','".utf8_decode('Lozano.jpg')."','".utf8_decode('@Lozano_Claudio')."',8,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (23,'".utf8_decode('Myriam Bregman')."','".utf8_decode('UNIDAD')."','".utf8_decode('Bregman.jpg')."','".utf8_decode('@myriambregman')."',9,1)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (24,'".utf8_decode('Pablo Ferreyra')."','".utf8_decode('LISTA A')."','".utf8_decode('Ferreyra.jpg')."','".utf8_decode('@PabloRFerreyra')."',10,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (25,'".utf8_decode('Manuela Castañeira')."','".utf8_decode('LAS ROJAS')."','".utf8_decode('Castanieira.jpg')."','".utf8_decode('@ManuelaC22')."',11,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (26,'".utf8_decode('Gustavo Tenaglia')."','".utf8_decode('LISTA ÚNICA')."','".utf8_decode('Tenaglia.jpg')."','".utf8_decode('@tenagliaph')."',12,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (27,'".utf8_decode('Ramiro Vasena')."','".utf8_decode('COMÚN')."','".utf8_decode('Vasena.jpg')."','".utf8_decode('@VasenaRamiro')."',13,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (28,'".utf8_decode('Enrique Piragini')."','".utf8_decode('CELESTE Y BLANCA')."','".utf8_decode('Piragini.jpg')."','".utf8_decode('')."',14,0)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 
mysql_query("insert into tbCandidatos values (29,'".utf8_decode('Luis Zamora')."','".utf8_decode('CAMINAMOS PREGUNTANDO')."','".utf8_decode('Zamora.jpg')."','".utf8_decode('@AyLibertad')."',15,1)")
or die ("No se pudo acceder a la base de datos porque ".mysql_error()); 

ob_end_flush();

?>