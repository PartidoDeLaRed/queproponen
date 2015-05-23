var ciudades = null
function CargarCiudades()
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCiudades.php"
	})
	.done(function( msg ) {
		ciudades = $.parseJSON(msg);
		var option = document.createElement('option');
		$(option).attr('id', -1);
		$(option).attr('value', -1);
		$(option).html('Todo');
		$('.selectCiudades').append(option);
		ciudades.forEach(function(ciu)
		{
			var option = document.createElement('option');
			$(option).attr('id', ciu.codigo);
			$(option).attr('value', ciu.codigo);
			$(option).html(ciu.nombre);
			$('.selectCiudades').append(option);
		});
  	})
	.fail(function( msg ) {
  	});
}

function CambiarCiudad()
{
	CargaInicial(false);
}