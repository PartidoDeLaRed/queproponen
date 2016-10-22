var partidos = [];
var partidosFiltrados = null;
function CargarPartidos(callback)
{
	var part = null;
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetPartidos.php"
	})
	.done(function( msg ) {
		partidos = shuffle($.parseJSON(msg)).sort(function(a, b){ 
			var ganA = GetCandidatos(a.codigo).filter(function(cand){ return cand.ganador == 1; }).length;
			var ganB = GetCandidatos(b.codigo).filter(function(cand){ return cand.ganador == 1; }).length; 
			return ganA > ganB ? -1 : 1; 
		});

		if(callback)
			callback();
  	});
}

function GetPartido(codigo)
{
	return partidos.filter(function(part){return part.codigo == codigo})[0];
}

var partidoSeleccionado = -1;

function MostrarPartido(modo, part, contenedor)
{
	var candidatosPartido = GetCandidatos(part.codigo);
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
			cantPropuestas = GetPropuestas(0, part.codigo).length;
			$(propuestasDIV).html(cantPropuestas);
			if(cantPropuestas == 0)
			    $(propuestasDIV).addClass('numeroNoPropuestas');
			$(container).append(propuestasDIV);
			
			var ganadores = GetCandidatos(part.codigo).filter(function(cand){ return cand.ganador == 1; });
			if(ganadores.length == 0)
			{
				var noPASO = document.createElement('div');
				$(noPASO).addClass('noPASO');
				$(container).append(noPASO);
				$(container).css('opacity', '.4');
			}


			$(contenedor).append(container);
		}break;
		case 1:
		{
			partidoSeleccionado = part.codigo;
			var cont = $('#detalleContainer');
			cont.stop(true, true).fadeOut('300ms', function() {
				if(document.getElementById('selectCargos'))
				{
					var cargo = document.getElementById('selectCargos').value;
					var ciudad = document.getElementById('selectCiudades').value;
				}
				
				cont.html('');
				
				cont.append(MostrarVolver(0, null));
				cont.append(HeaderPartido(part));
				cont.append(MostrarContenedor(contenedores.CANDIDATOS));
				cont.append(MostrarContenedor(contenedores.PROPUESTAS));
				CargarAgrupamientosPropuestas(0, part.codigo);
				CargarOrdenamientosPropuestas(0, part.codigo);
				
				candidatosPartido.forEach(function(cand) {
					MostrarCandidato(0, cand);
					GetPropuestas(0, part.codigo).forEach(function(prop) {
						MostrarPropuesta(prop, 0);
					});
				});
				var cargo = document.getElementById('selectCargos').value;
				var ciudad = document.getElementById('selectCiudades').value;
				VerificarPropuestas(part);
				AbrirPropuestas();
				
            }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
			$('body').animate({
		        scrollTop: 0
		    }, 500, function(){GenerarGrafico(0, part.codigo, $('.detalleContainer'))});
			CambiarURL(1, part, 0);
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