var partidos = [];
function CargarPartidos(_partido)
{
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

			var candidatos = []
			partidos.forEach(function(part){ part.candidatos.forEach(function(cand){ candidatos.push(cand)})});
			
			if(candidatos.filter(function(cand){ return cand.ganador == '1' }).length == 0)
				$('#generalesMenuItem').remove();
			if(candidatos.filter(function(cand){ return cand.ganador == '0' }).length == 0)
				$('#PASOMenuItem').remove();
		}
  	});
	return part;
}

var partidoSeleccionado = -1;

function MostrarPartido(modo, part)
{
	switch(modo)
	{
		case 0:
		{
			var container = document.createElement('div');
			$(container).attr('id', part.nombre);
			$(container).addClass('partidoContainer');
			$(container).click(function(){
				MostrarPartido(1, part)
			});

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenPartido');
			$(imagen).css('background-image', 'url(IMG/partidos/' + part.imagen + ')');
			$(container).append(imagen);
			
			var nombre = document.createElement('div');
			$(nombre).addClass('item').addClass('nombre');
			$(nombre).css('color', part.color);
			$(nombre).html(part.nombre);
			$(container).append(nombre);
			
			var candidatosDIV = document.createElement('div');
			$(candidatosDIV).addClass('item').addClass('candidatos');
			$(candidatosDIV).html(part.candidatos.length);
			$(container).append(candidatosDIV);

			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('item').addClass('propuestas');
			var cantPropuestas = 0;
			cantPropuestas = part.propuestas.length;
			$(propuestasDIV).html(cantPropuestas);
			if(cantPropuestas == 0)
			    $(propuestasDIV).addClass('numeroNoPropuestas');
			$(container).append(propuestasDIV);

			$('.partidosContainer').append(container);
		}break;
		case 1:
		{
			partidoSeleccionado = part.codigo;
			var cont = $('.contentContainer');
			cont.stop(true, true).fadeOut('300ms', function() {
				if(document.getElementById('selectCargos'))
				{
					var cargo = document.getElementById('selectCargos').value;
					var ciudad = document.getElementById('selectCiudades').value;
				}
				
				$('.contentContainer').html('');
				
				cont.append(MostrarVolver(0, null));
				cont.append(HeaderPartido(part));
				
				cont.append(MostrarContenedor(contenedores.CANDIDATOS));
				cont.append(MostrarContenedor(contenedores.PROPUESTAS));
				CargarCargos();
				CargarCiudades();
				
				part.candidatos.filter(function(cand){return cand.partido == partidoSeleccionado}).forEach(function(cand) {MostrarCandidato(0, cand);});
				part.propuestas.filter(function(prop){return prop.partido == partidoSeleccionado}).forEach(function(prop) {
					MostrarPropuesta(prop, part, part.candidatos.filter(function(e){ return e.codigo == prop.candidato})[0]);
				});
				var cargo = document.getElementById('selectCargos').value;
				var ciudad = document.getElementById('selectCiudades').value;
				VerificarPropuestas(part);
				AbrirPropuestas();
				
            }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
			$('html, body').animate({
		        scrollTop: cont.offset().top
		    }, 500, function(){GenerarGrafico()});
			CambiarURL(0, part);
		}break;
	}
}

function VerificarPartidos()
{
	if($('.partidosContainer').children('.partidoContainer').length == 0)
	{
		var noPartidos = document.createElement('div');
		$(noPartidos).addClass('noElements');
		$(noPartidos).html('No hay partidos');
		$('.partidosContainer').append(noPartidos);
	}
}