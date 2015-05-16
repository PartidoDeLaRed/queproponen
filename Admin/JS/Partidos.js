var partidos = [];
function CargarPartidos(_partido)
{
	$('#loading').fadeIn('fast');
	var part = null;
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetPartidos.php",
	  data: { partido: _partido }
	})
	.done(function( msg ) {
		if(_partido != -1)
			part = $.parseJSON(msg)[0];
		else
		{
			partidos = $.parseJSON(msg);
			partidos = shuffle(partidos);
		}
		$('#loading').fadeOut('fast');
  	});
	return part;
}

function MostrarPartido(modo, part)
{
	switch(modo)
	{
		case 0:
		{
			var container = document.createElement('div');
			$(container).attr('id', 'part'+part.codigo);
			$(container).addClass('partidoContainer');

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenPartido');
			$(imagen).css('background-image', 'url(IMG/partidos/' + part.imagen + ')');
			$(container).append(imagen);
			
			var nombre = document.createElement('div');
			$(nombre).addClass('item').addClass('nombre');
			$(nombre).css('color', part.color);
			$(nombre).html(part.nombre);
			$(container).append(nombre);
			

			var adminContainer = document.createElement('div');
			$(adminContainer).addClass('adminPartidoContainer');
			$(container).append(adminContainer);

			var botonAgegarCandidato = document.createElement('div');
			$(botonAgegarCandidato).attr('id', part.codigo);
			$(botonAgegarCandidato).addClass('botonAgregarCandidato');
			$(botonAgegarCandidato).click(function(){
				MostrarAgregarCandidato(part)
			});
			$(adminContainer).append(botonAgegarCandidato);

			var botonEditar = document.createElement('div');
			$(botonEditar).attr('id', part.codigo);
			$(botonEditar).addClass('botonEditar');
			$(botonEditar).click(function(){
				MostrarEditarPartido(part)
			});
			$(adminContainer).append(botonEditar);
			
			var botonEliminar = document.createElement('div');
			$(botonEliminar).attr('id', part.codigo);
			$(botonEliminar).addClass('botonEliminar');
			$(botonEliminar).click(function(){
				MostrarEliminarPartido(part)
			});
			$(adminContainer).append(botonEliminar);

			
			$('.partidosContainer').append(container);
		}break;
	}
}