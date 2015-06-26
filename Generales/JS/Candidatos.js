var candidatos = null
function CargarCandidatos()
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCandidatos.php",
	  data: { partido: -1, candidato: -1 }
	})
	.done(function( msg ) {
		candidatos = $.parseJSON(msg);
		candidatos = shuffle(candidatos).sort(function(a,b){return a.partido.codigo - b.partido.codigo});

		if(candidatos.filter(function(cand){ return cand.ganador == '1' }).length == 0)
			$('#generalesMenuItem').remove();
		if(candidatos.filter(function(cand){ return cand.ganador == '0' }).length == 0)
		{
			$('#PASOMenuItem').remove();
			$('.candidatosPerdedores').hide('fast');
		}
  	});
}

var orderCandidatos = 0;
function MostrarCandidato(modo, cand)
{
	switch(modo)
	{
		case 0:
		{
			part = cand.partido;
			
			var container = document.createElement('div');
			$(container).attr('id', orderCandidatos);
			$(container).attr('data-codigo', cand.codigo);
			$(container).attr('data-partido', cand.partido.codigo);
			$(container).attr('data-nombre', cand.nombre);
			$(container).attr('data-lista', cand.lista);
			$(container).attr('data-twitter', cand.twitter);
			$(container).attr('data-propuestas', cand.propuestas.length);
			$(container).addClass('candidatoContainer');

			if(cand.ganador == 1)
			{
				//Datos Partido
				var containerPartido = document.createElement('div');
				$(containerPartido).attr('id', part.nombre);
				$(containerPartido).addClass('partidoContainer');
	
				var imagenPartido = document.createElement('div');
				$(imagenPartido).addClass('imagenPartido');
				$(imagenPartido).css('background-image', 'url(IMG/partidos/' + part.imagen + ')');
				$(containerPartido).append(imagenPartido);
				
				var nombrePartido = document.createElement('div');
				$(nombrePartido).addClass('item').addClass('nombre');
				$(nombrePartido).css('color', part.color);
				$(nombrePartido).html(part.nombre);
				$(containerPartido).append(nombrePartido);
				$(container).append(containerPartido);
			}

			//Datos Candidato
			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);

			var cont = document.createElement('div');
			$(cont).addClass('candidatoDatosContainer');
			
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
			
			var props = cand.propuestas;
			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('item').addClass('propuestas');
			$(propuestasDIV).html(props.length);
			if(props.length == 0)
				$(propuestasDIV).addClass('numeroNoPropuestas');
			$(container).append(propuestasDIV);
			
			if(cand.ganador == 1)
			{
				//Propuestas
				props.forEach(function(prop){
					MostrarPropuesta(prop, cand);
				});
			
				$('.candidatosContainer').append( $(container).click(function(){
					MostrarCandidato(1, cand)
				}) );
				$('.candidatosContainerFixed').append($(container).clone().click(function(){
					MostrarCandidato(1, cand)
				}));
			}
			else
			{
				$('.candidatosPerdedores').append($(container).click(function(){
					MostrarCandidato(1, cand)
				}));
			}
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
						var scrollTop = $('body').scrollTop();
						var scrollTop1 = $('.propuestasContainer').offset().top - 150;
						if(scrollTop < scrollTop1)
							$('body').animate({
								scrollTop: $('.propuestasContainer').offset().top - 150
							}, 500);
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
			$(container).addClass('candidatoContainer');

			var color = document.createElement('div');
			$(color).addClass('colorCandidato_mini');
			$(color).css('background-color', cand.partido.color);
			$(container).append(color);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato_mini');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);
			
			if(!cand.ganador)
			{
				var nombre = document.createElement('div');
				$(nombre).addClass('nombreCandidato_mini');
				$(nombre).html(cand.nombre);
				$(cont).append(nombre);
				$(container).append(nombre);
			}
			
			return container;
		}break;
	}
}

function VerificarCandidatos()
{
	if($('.candidatosContainer').children('.candidatoContainer').length == 0)
	{
		var noCandidatos = document.createElement('div');
		$(noCandidatos).addClass('noElements');
		$(noCandidatos).html('No hay candidatos');
		$('.candidatosContainer').append(noCandidatos);
	}
}