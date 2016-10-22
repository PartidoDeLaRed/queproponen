var candidatos = [];
var candidatosFiltrados = null;
function CargarCandidatos(callback)
{
	var cand = null;
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCandidatos.php",
	  data:{soloGanador:1}
	})
	.done(function( msg ) {
		candidatos = shuffle($.parseJSON(msg)).filter(function(cand){return cand.ganador == 1}).sort(function(a, b){ return a.enBallotage == 1 ? -1 : 1 });

		if(candidatos.filter(function(cand){ return cand.ganador == '1' }).length == 0)
			$('#generalesMenuItem').remove();
		if(candidatos.filter(function(cand){ return cand.ganador == '0' }).length == 0)
			$('#PASOMenuItem').remove();

		if(callback)
			callback();
  	});
}

function GetCandidatos(filtro, segundoFiltro)
{
	var cargo = document.getElementById('selectCargos') ? (document.getElementById('selectCargos').value == '' ? -1 : document.getElementById('selectCargos').value) : -1;
	var ciudad = document.getElementById('selectCiudades') ? (document.getElementById('selectCiudades').value == '' ? -1 : document.getElementById('selectCiudades').value) : -1;
	
	var res = candidatos;
	if(cargo != -1 && ciudad == -1)
		res = candidatos.filter(function(cand) { return cand.cargo.codigo == cargo; });
	else if(cargo != -1 && ciudad != -1)
		res = candidatos.filter(function(cand) { return cand.cargo.codigo == cargo && cand.ciudad.codigo == ciudad; });
	
	if(filtro != undefined)
		res = res.filter(function(cand){ return cand.partido == filtro; });

	//Filtro variable según lo que quiera
	if(segundoFiltro != undefined)
		res = res.filter(function(cand){ return cand.enBallotage == segundoFiltro; });
		
	return res;
}

function GetCandidato(codigo)
{
	return candidatos.filter(function(cand){ return cand.codigo == codigo; })[0];
}

function MostrarCandidato(modo, cand, part, ganador, contenedor)
{
	switch(modo)
	{
		case 0:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
			$(container).attr('data-codigo', cand.codigo);
			if(cand.enBallotage == 1)
				$(container).addClass('candidatoContainer candidatoBallotage');
			else
				$(container).addClass('candidatoContainer');
			$(container).click(function(){
				if($(contenedor).parents('.detalleContainer').length > 0)
					MostrarCandidato(1, cand, part);
			});
			$(contenedor).append(container);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);
			
			var cont = document.createElement('div');
			$(cont).addClass('contDataCandidato');
			$(cont).css('display', 'inline-block');
			$(cont).css('vertical-align', 'top');
			
			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCandidato');
			$(nombre).html(cand.nombre);
			$(cont).append(nombre);

			var lista = document.createElement('div');
			$(lista).addClass('listaCandidato');
			$(lista).html(cand.lista);
			$(cont).append(lista);

			$(container).append(cont);
			
			var part = partidos.filter(function(e){return e.codigo == cand.partido;})[0];
			var color = document.createElement('div');
			$(color).addClass('colorCandidato');
			$(color).css('background-color', part.color);
			$(color).html(part.nombre);
			$(container).append(color);

			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('item').addClass('propuestas');
			$(propuestasDIV).html(cand.propuestas.length);
			if(cand.propuestas.length == 0)
				$(propuestasDIV).addClass('numeroNoPropuestas');
			$(container).append(propuestasDIV);
			
			if(cand.ganador == 0)
			{
				var noPASO = document.createElement('div');
				$(noPASO).addClass('noPASO');
				$(container).append(noPASO);
				$(container).css('opacity', '.4');
			}

		}break;
		case 1:
		{
			var cont = $('#detalleContainer');
			cont.stop(true, true).fadeOut('300ms', function() {
				cont.html('');
				
				cont.append(MostrarVolver(0, null));
				cont.append(HeaderCandidato(cand, part));
				cont.append(MostrarContenedor(contenedores.PROPUESTAS));
				CargarAgrupamientosPropuestas(1, cand.codigo);
				//CargarOrdenamientosPropuestas(1, cand.codigo);
				
				GetPropuestas(1, cand.codigo).forEach(function(prop)
				{
					MostrarPropuesta(prop, 1);
				});
				VerificarPropuestas(cand);
				AbrirPropuestas();
	
            }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
			$('body').animate({
		        scrollTop: 0
		    }, 500, function(){
					GenerarGrafico(1, cand.codigo, $('.detalleContainer')); 
				});
			CambiarURL(1, cand, 1);
		}break;

		case 2:
		{
			var container = document.createElement('div');
			$(container).attr('data-codigo', cand.codigo);
			$(container).addClass('candidatoContainer');
			$(container).css('cursor', 'pointer');
			$(container).click(function(){
				MostrarCandidato(1, cand, part)
			});

			var color = document.createElement('div');
			$(color).addClass('colorCandidato_mini');
			$(color).css('background-color', part.color);
			$(container).append(color);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato_mini');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);
			
			return container;
		}break;
		case 3:
		{
			var container = document.createElement('div');
			$(container).attr('data-codigo', cand.codigo);
			if(part != null)
				$(container).attr('data-partido', part.codigo);
			$(container).attr('data-nombre', cand.nombre);
			$(container).attr('data-lista', cand.lista);
			$(container).attr('data-twitter', cand.twitter);
			if(cand.propuestas != null)
				$(container).attr('data-propuestas', cand.propuestas);
			if(ganador)
				$(container).addClass('candidatoContainerGanador');
			else
				$(container).addClass('candidatoContainer');
			
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
		}break;
		case 4:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
			$(container).attr('data-codigo', cand.codigo);
			$(container).addClass('candidatoVersusSelectedContainer');
			$(contenedor).append(container);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);
			
			var cont = document.createElement('div');
			$(cont).addClass('datosCandidatoContainer');
			$(cont).css('display', 'inline-block');
			$(cont).css('vertical-align', 'top');
			$(cont).css('margin', '0');
			$(cont).css('width', '60%');
			$(cont).css('height', '80%');
			
			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCandidato');
			$(nombre).html(cand.nombre);
			$(cont).append(nombre);

			var lista = document.createElement('div');
			$(lista).addClass('listaCandidato');
			$(lista).html(cand.lista);
			$(cont).append(lista);

			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('graficoContainer');
			$(cont).append(propuestasDIV);
			setTimeout(function(){
				GenerarGrafico(1, cand.codigo, $(cont)); 
			}, 500);

			$(container).append(cont);
			
			var part = partidos.filter(function(e){return e.codigo == cand.partido;})[0];
			var color = document.createElement('div');
			$(color).addClass('colorCandidato');
			$(color).css('background-color', part.color);
			$(color).html(part.nombre);
			$(container).append(color);

		}break;
		case 5:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
			$(container).attr('data-codigo', cand.codigo);
			$(container).addClass('candidatoContainer');
			$(contenedor).append(container);

			var part = partidos.filter(function(e){return e.codigo == cand.partido;})[0];
			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(imagen).css('border', '1px solid '+part.color);
			$(container).append(imagen);
			
			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('item').addClass('propuestas');
			$(propuestasDIV).css('background-color', part.color);
			$(propuestasDIV).html(GetPropuestas(1, cand.codigo).filter(function(prop){return prop.categorias.indexOf(ganador) > -1}).length);
			$(container).append(propuestasDIV);
						
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