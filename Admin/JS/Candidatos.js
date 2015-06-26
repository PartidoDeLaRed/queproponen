var candidatos = [];
function CargarCandidatos(_partido, _candidato)
{
	var cand = null;
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCandidatos.php",
	  data: { partido: _partido, candidato: _candidato }
	})
	.done(function( msg ) {
		if(_candidato != -1)
			cand = $.parseJSON(msg)[0];
		else
			candidatos = $.parseJSON(msg);
  	});
	return cand;
}

function MostrarCandidato(modo, cand, part)
{
	switch(modo)
	{
		case 0:
		{
			var container = document.createElement('div');
			$(container).attr('id', 'cand'+cand.codigo);
			$(container).attr('data-cargo', cand.cargo.codigo);
			$(container).attr('data-ciudad', cand.ciudad.codigo);
			$(container).attr('data-partido', part.codigo);
			$(container).addClass('candidatoContainer');
			$(container).click(function(e){
				if(!$(e.target).hasClass('botonEditar') && !$(e.target).hasClass('botonAgregarPropuesta') && !$(e.target).hasClass('botonEliminar'))
					MostrarCandidato(1, cand, part);
			});
			$('.candidatosContainer').append(container);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato');
			$(imagen).css('background-image', 'url(../IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);

			var cont = document.createElement('div');
			$(cont).css('display', 'inline-block');
			$(cont).css('vertical-align', 'top');
			$(cont).css('margin', '6px 0');
			$(cont).css('max-width', '215px');
			
			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCandidato');
			$(nombre).html(cand.nombre);
			$(cont).append(nombre);

			var color = document.createElement('div');
			$(color).addClass('colorCandidato');
			$(color).css('background-color', part.color);
			$(color).html(part.nombre);
			$(cont).append(color);

			var lista = document.createElement('div');
			$(lista).addClass('listaCandidato');
			$(lista).html(cand.lista);
			$(cont).append(lista);

			$(container).append(cont);
			
			var adminContainer = document.createElement('div');
			$(adminContainer).addClass('adminPartidoContainer');
			$(container).append(adminContainer);

			var botonAgegarPropuesta = document.createElement('div');
			$(botonAgegarPropuesta).attr('id', part.codigo);
			$(botonAgegarPropuesta).addClass('botonAgregarPropuesta');
			$(botonAgegarPropuesta).click(function(){
				MostrarAgregarPropuesta(cand)
			});
			$(adminContainer).append(botonAgegarPropuesta);

			var botonEditar = document.createElement('div');
			$(botonEditar).attr('id', part.codigo);
			$(botonEditar).addClass('botonEditar');
			$(botonEditar).click(function(){
				MostrarEditarCandidato(cand)
			});
			$(adminContainer).append(botonEditar);
			
			var botonEliminar = document.createElement('div');
			$(botonEliminar).attr('id', part.codigo);
			$(botonEliminar).addClass('botonEliminar');
			$(botonEliminar).click(function(){
				MostrarEliminarCandidato(cand)
			});
			$(adminContainer).append(botonEliminar);

		}break;
		case 1:
		{
			if($('.candidatoContainer[id=cand'+cand.codigo+']').hasClass('selectedItem'))
			{
				$('.candidatoContainer').removeClass('selectedItem').removeClass('deselectedItem');
				$('.contPropuestas').children('.propuestaContainer').slideDown('fast');
			}
			else
			{
				$('.candidatosContainer').children('.candidatoContainer[id=cand'+cand.codigo+']').removeClass('deselectedItem').addClass('selectedItem');
				$('.candidatosContainer').children('.candidatoContainer[id!=cand'+cand.codigo+']').removeClass('selectedItem').addClass('deselectedItem');
				$('.contPropuestas').children('.propuestaContainer[data-candidato='+cand.codigo+']').slideDown('fast');
				$('.contPropuestas').children('.propuestaContainer[data-candidato!='+cand.codigo+']').slideUp('fast');
			}
		}break;

		case 2:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
			$(container).addClass('candidatoContainer');
			$(container).css('cursor', 'pointer');

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato_mini');
			$(imagen).css('background-image', 'url(../IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);
			
			var color = document.createElement('div');
			$(color).addClass('colorCandidato_mini');
			$(color).css('background-color', part.color);
			$(container).append(color);

			return container;
		}break;
	}
}