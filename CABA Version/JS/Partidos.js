var partidos = null
function CargarPartidos()
{
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + "/PHP/GetPartidos.php",
	  data: { partido: -1 }
	})
	.done(function( msg ) {
		partidos = $.parseJSON(msg);
  	});
}