var candidatos = null
function CargarCandidatos(ganadores)
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCandidatos.php",
	  data: { ganadores: 1, cargo: 0 }
	})
	.done(function( msg ) {
		candidatos = $.parseJSON(msg);
		candidatos = shuffle(candidatos);
  	});
}

var orderCandidatos = 0;
function MostrarCandidato(modo, cand, ganador)
{
	switch(modo)
	{
		case 0:
		{
			part = cand.partido;
			
			var container = document.createElement('div');
			$(container).attr('id', orderCandidatos);
			$(container).attr('data-codigo', cand.codigo);
			if(part != null)
				$(container).attr('data-partido', part.codigo);
			$(container).attr('data-nombre', cand.nombre);
			$(container).attr('data-lista', cand.lista);
			$(container).attr('data-twitter', cand.twitter);
			if(cand.propuestas != null)
				$(container).attr('data-propuestas', cand.propuestas.length);
			if(ganador)
				$(container).addClass('candidatoContainerGanador');
			else
				$(container).addClass('candidatoContainer');
			
			//Datos Candidato
			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato');
			$(imagen).css('background-image', 'url(../IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);

			var cont = document.createElement('div');
			$(cont).addClass('candidatoDatosContainer');
			
			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCandidato');
			$(nombre).html(cand.nombre);
			$(cont).append(nombre);

			var lista = document.createElement('div');
			$(lista).addClass('listaCandidato');
			$(lista).html(cand.lista);
			$(cont).append(lista);

			//Datos Partido
			if(part != null)
			{
				var containerPartido = document.createElement('div');
				$(containerPartido).attr('id', part.nombre);
				$(containerPartido).addClass('partidoContainer');
	
				var nombrePartido = document.createElement('div');
				$(nombrePartido).addClass('item').addClass('nombre');
				$(nombrePartido).css('background-color', part.color);
				$(nombrePartido).html(part.nombre);
				$(containerPartido).append(nombrePartido);
				$(container).append(containerPartido);
			}
			
			$(container).append(cont);
			return container;
			
			orderCandidatos++;
		}break;
		case 1:
		{
			if(cand.ganador == 1)
			{
				var cont = $('.contentContainer');
				
				if($('.candidatoContainer[data-codigo='+cand.codigo+']').hasClass('selectedItem'))
				{
					$('.candidatoContainer').removeClass('selectedItem').removeClass('deselectedItem');
					$('.contPropuestas').children().slideDown('fast');
					CerrarCategorias();
					setTimeout(function(){
						VerificarPropuestas(cand);
						GenerarGrafico();
					}, 200);
					CambiarURL(3, null);
				}
				else
				{
					$('.candidatosContainer').children('.candidatoContainer[data-codigo='+cand.codigo+']').removeClass('deselectedItem').addClass('selectedItem');
					$('.candidatosContainer').children('.candidatoContainer[data-codigo!='+cand.codigo+']').removeClass('selectedItem').addClass('deselectedItem');
					$('.candidatosContainerFixed').children('.candidatoContainer[data-codigo='+cand.codigo+']').removeClass('deselectedItem').addClass('selectedItem');
					$('.candidatosContainerFixed').children('.candidatoContainer[data-codigo!='+cand.codigo+']').removeClass('selectedItem').addClass('deselectedItem');
					$('.contPropuestas').children('.propuestaContainer[data-candidato='+cand.codigo+']').slideDown('fast');
					$('.contPropuestas').children('.propuestaContainer[data-candidato!='+cand.codigo+']').slideUp('fast');
					setTimeout(function(){
						AbrirCategorias();
						VerificarPropuestas(cand);
						GenerarGrafico();
					}, 200);
					CambiarURL(1, cand);
				}
			}
			else
			{
				var url = location.origin + location.pathname.replace('index.html','');
				url += 'PASO/#candidato/' + cand.nombre.split(' ').join('-');
				window.location.href = url;
			}
		}break;

		case 2:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
			$(container).css('border-color', cand.partido.color);
			$(container).addClass('candidatoContainer');

			var color = document.createElement('div');
			$(color).addClass('colorCandidato_mini');
			$(color).css('background-color', cand.partido.color);
			$(container).append(color);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato_mini');
			$(imagen).css('background-image', 'url(../IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);
			
			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCandidato_mini');
			$(nombre).html(cand.nombre);

			$(container).append(nombre);
			
			return container;
		}break;
	}
}