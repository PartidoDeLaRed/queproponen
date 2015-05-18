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
			$(container).attr('data-partido', part.codigo);
			$(container).addClass('candidatoContainer');
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
			cand = CargarCandidatos(-1, cand.codigo);
			var cont = $('.contentContainer');
			cont.stop(true, true).fadeOut('300ms', function() {
				$('.contentContainer').html('');
				
				cont.append(MostrarVolver(0, part));
				cont.append(HeaderCandidato(cand));
				
				cont.append(MostrarContenedor(contenedores.PROPUESTAS));
				
				cand.propuestas.forEach(function(prop)
				{
					MostrarPropuesta(prop, cand.partido, cand);
				});
				VerificarPropuestas(cand);
				AbrirPropuestas();
	
            }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
			$('html, body').animate({
		        scrollTop: cont.offset().top
		    }, 500, function(){GenerarGrafico()});
			CambiarURL(1, cand);
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