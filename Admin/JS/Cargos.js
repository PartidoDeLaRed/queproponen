var cargos = null
function CargarCargos()
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCargos.php"
	})
	.done(function( msg ) {
		cargos = $.parseJSON(msg);
		var option = document.createElement('option');
		$(option).attr('id', -1);
		$(option).attr('value', -1);
		$(option).html('Todo');
		$('#selectCargos').append(option);

		cargos.forEach(function(car)
		{
			var option = document.createElement('option');
			$(option).attr('id', car.codigo);
			$(option).attr('value', car.codigo);
			$(option).html(car.nombre);
			$('#selectCargos').append(option);
		});

		if(cargos.length > 1)
		{
			$('#filtersContainer').show();
			document.getElementById('selectCargos').value == -1;
		}
		else
		{
			$('#filtersContainer').hide();
			document.getElementById('selectCargos').value == 0;
		}
  	})
	.fail(function( msg ) {
  	});
}

function CambiarCargo()
{
	var valor = document.getElementById('selectCargos').value;
	if(valor == -1)
		$('#textTipoCandidato').html('Todo');
	else
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