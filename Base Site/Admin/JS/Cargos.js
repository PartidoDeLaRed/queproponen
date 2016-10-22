var cargos = null
function CargarCargos(callback)
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCargos.php"
	})
	.done(function( msg ) {
		cargos = $.parseJSON(msg);
		cargos.forEach(function(car)
		{
			var option = document.createElement('option');
			$(option).attr('id', car.codigo);
			$(option).attr('value', car.codigo);
			$(option).html(car.nombre);
			$('#selectCargos').append(option);
		});
		
		if(document.getElementById('selectCargos'))
			document.getElementById('selectCargos').value = 0;
		
		cargos.length > 1 ? $('#filtersContainer').show() : $('#filtersContainer').hide();

		if(callback)
			callback();
  	})
	.fail(function( msg ) {
  	});
}

function CambiarCargo()
{
	var valor = document.getElementById('selectCargos').value;
	if(cargos.length == 0)
		$('#textTipoCandidato').html(cargos.filter(function(car){return car.codigo == valor;})[0].nombre);
	
	if(valor < 1)
	{
		document.getElementById('selectCiudades').value = valor;
		$('.selectCiudadesContainer').fadeOut('100ms');
	}
	else
	{
		document.getElementById('selectCiudades').value = -1;
		$('.selectCiudadesContainer').fadeIn('100ms');
	}
	CargaInicial(false);
}