function CargarTemplateDetalles(nuevo)
{
	var valeLaPenaCandidatos = false;
	partidos.forEach(function(part){
		if(part.candidatos.length > 1)
			valeLaPenaCandidatos = true;
	});

	if(nuevo)
	{
		var seccionContainer = document.createElement('div');
		$(seccionContainer).addClass('seccionContainer');
		$('.contentContainer').append(seccionContainer);
		//$('.contentContainer').css('width', $('.contentContainer').outerWidth(true) + $(window).outerWidth(true) + 'px');

		var wrapperContainer = document.createElement('div');
		$(wrapperContainer).addClass('wrapperContainer');
		$(seccionContainer).append(wrapperContainer);

		var detalleContainer = document.createElement('div');
		$(detalleContainer).attr('id', 'detalleContainer');
		$(detalleContainer).addClass('detalleContainer');
		$(wrapperContainer).append(detalleContainer);

		if(!valeLaPenaCandidatos)
			$(detalleContainer).append(MostrarContenedor(contenedores.PARTIDOS));
		if(valeLaPenaCandidatos)
			$(detalleContainer).append(MostrarContenedor(contenedores.CANDIDATOS));
		$(detalleContainer).append(MostrarContenedor(contenedores.CATEGORIAS));

		FiltrarContenido();
		if(!valeLaPenaCandidatos)
			CargarContenido(contenedores.PARTIDOS, $(detalleContainer).children('.partidosContainer'));
		if(valeLaPenaCandidatos)
			CargarContenido(contenedores.CANDIDATOS, $(detalleContainer).children('.candidatosContainer'));
		CargarContenido(contenedores.CATEGORIAS);

		if(cargos.length == 1)
		{
			$(detalleContainer).find('#textTipoCandidato').html(cargos[0].nombre);
			$(detalleContainer).find('#selectCargos').hide();
		}

		$(detalleContainer).stop(true, true).fadeOut('300ms', function() {
		}).fadeIn('300ms').animate({marginTop:'0px'},'300ms').animate({scrollTop:200}, '300');
	}
	else
	{
		var detalleContainer = $('#detalleContainer');

		detalleContainer.html('');
		if(!valeLaPenaCandidatos)
			$(detalleContainer).append(MostrarContenedor(contenedores.PARTIDOS));
		if(valeLaPenaCandidatos)
			$(detalleContainer).append(MostrarContenedor(contenedores.CANDIDATOS));
		$(detalleContainer).append(MostrarContenedor(contenedores.CATEGORIAS));

		FiltrarContenido();
		if(!valeLaPenaCandidatos)
			CargarContenido(contenedores.PARTIDOS, $(detalleContainer).children('.partidosContainer'));
		if(valeLaPenaCandidatos)
			CargarContenido(contenedores.CANDIDATOS, $(detalleContainer).children('.candidatosContainer'));
		CargarContenido(contenedores.CATEGORIAS);

		if(cargos.length == 1)
		{
			$(detalleContainer).find('#textTipoCandidato').html(cargos[0].nombre);
			$(detalleContainer).find('#selectCargos').hide();
		}
	}
	return true;
}

function hacerScrollID(elemento)
{
	$('html, body').animate({ scrollTop: ($('#'+elemento).offset().top - 200) }, 1000);
	$('#'+elemento).effect("highlight", {}, 10000);
}

function AbrirPropuestas()
{
	$('.tipo').children('.title').children('div').each(function(index, element) {
		ToggleCategoria(element);
    });
}

function ClickAfiliacion()
{
	ga('send', 'pageview', { 'page': location.pathname + location.search  + "#Afiliacion" });
}
