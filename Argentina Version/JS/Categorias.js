var categorias = null
function CargarCategorias(callback)
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCategorias.php"
	})
	.done(function( msg ) {
		categorias = $.parseJSON(msg);

		if(callback)
			callback();
  	});
}

function MostrarCategoria(modo, categoria)
{
	switch(modo)
	{
		case 0:
		{
			var container = document.createElement('div');
			$(container).attr('id', categoria.nombre);
			$(container).addClass('categoriaContainer');
			$(container).click(function(){
				MostrarCategoria(1, categoria);
			});
			$(container).mouseenter(function()
			{
				$(container).css('background-color', categoria.color);
			});
			$(container).mouseleave(function()
			{
				$(container).css('background-color', '');
			});
			$('.categoriasContainer').append(container);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCategoria');
			$(imagen).css('background-image', 'url(IMG/categorias/' + categoria.imagen + ')');
			$(container).append(imagen);

			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCategoria');
			$(nombre).html(categoria.nombre);
			$(container).append(nombre);

			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('item').addClass('propuestas');
			var propuestasCategoria = GetPropuestas(2, categoria.codigo);
			$(propuestasDIV).html(propuestasCategoria.length);
			if(propuestasCategoria.length == 0)
				$(propuestasDIV).addClass('numeroNoPropuestas');
			$(container).append(propuestasDIV);
		}break;
		case 1:
		{
			var cont = $('#detalleContainer');
			cont.stop(true, true).fadeOut('300ms', function() {
				cont.html('');
				
				cont.append(MostrarVolver(0, null));
				cont.append(HeaderCategoria(categoria));
				cont.append(MostrarContenedor(contenedores.PROPUESTAS));
				CargarAgrupamientosPropuestas(2, categoria.codigo);
				//CargarOrdenamientosPropuestas(2, categoria.codigo);
				
				GetPropuestas(2, categoria.codigo).forEach(function(prop)
				{
					MostrarPropuesta(prop, 2);
				});
				VerificarPropuestas(null);
				AbrirPropuestas();
	
            }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
			$('body').animate({
		        scrollTop: 0
		    }, 500, function(){GenerarGrafico(2, categoria.codigo, $('.detalleContainer'))});
			CambiarURL(1, categoria, 2);
		}break;

		case 2:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
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