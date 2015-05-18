function CargaGenerales()
{
	$('.menu').children('.selected').removeClass('selected');
	$($('.menu').children()[0]).addClass('selected');
	CargaInicial(true);
}

function CargaPaso()
{
	window.location = location.origin + location.pathname + 'PASO/';
}

function SetearDatos()
{
	var ciudad = document.createElement('div');
	$(ciudad).html(Ciudad);
	$(ciudad).addClass('subtitle');
	$('.headerText').append(ciudad);
	
	//Facebook
	$('.fb-like').attr('data-href', 'https://facebook.com/'+Facebook);
	
	//Twitter
	$('#followButton').attr('href', 'https://twitter.com/'+Twitter);
	$('#followButton').html('@'+Twitter);
}

function CargaInicial(nuevo)
{
	cont = $('.contentContainer');
	cont.stop(true, true).fadeOut('300ms', function() {
		cont.html('');
		cont.append(MostrarContenedor(contenedores.CANDIDATOS));
		cont.append(MostrarContenedor(contenedores.PROPUESTAS));
		
		candidatos.forEach(function(cand) { MostrarCandidato(0, cand); });
		candidatos.filter(function(cand) { return cand.ganador == 1 }).forEach(function(cand) { cand.propuestas.forEach(function(prop) {MostrarPropuesta(prop, cand.partido, cand); }) });
		VerificarPropuestas(null);
		
    }).fadeIn('300ms').animate({marginTop:'0px'},'300ms').animate({scrollTop:200}, '300');
	$('html, body').animate({
		scrollTop: 0
	}, 500, function(){GenerarGrafico()});

	if(nuevo)
		CambiarURL(3, null);
	setTimeout(function(){GenerarGrafico();}, 1000);	
}

function CargarSeccion()
{
	if(window.location.hash.split('/')[1] != undefined)
	{
		if($('.partidosContainer').children('.partidoContainer').length == 0)
			CargaInicial(false);

		secciones = unescape(window.location.hash).split('/');
		var nombre = secciones[1].split('-').join(' ');
		if(window.location.hash.indexOf('candidato') != -1)
		{
			var cand = candidatos.filter(function(e){ return e.nombre == nombre; })[0];
			if(cand != undefined)
			{
				setTimeout(function(){MostrarCandidato(1, cand, cand.partido);}, 500);
				if(secciones.indexOf('propuesta') != -1)
				{
					var nombrePropuesta = secciones[3];
					setTimeout(function(){hacerScrollID(nombrePropuesta)}, 1500);
				}
				else if(secciones.indexOf('#propuesta') != -1)
				{
					var nombrePropuesta = secciones[3];
					setTimeout(function(){hacerScrollID(nombrePropuesta)}, 1500);
				}
				return true;
			}
		}
	}
	else
		CargaInicial(true);
}

function ToggleCandidatosPerdedores()
{
	$('.candidatosPerdedores').slideToggle(500);
	if($('.candidatosPerdedoresHeader').hasClass('opened'))
		$('.candidatosPerdedoresHeader').removeClass('opened').addClass('closed');
	else
		$('.candidatosPerdedoresHeader').removeClass('closed').addClass('opened');
}

function ToggleCategoriaBarra(barra){
	var barra = $(barra);
	ToggleCategoria(barra.find('.arrowButton')[0]);

}

function ToggleCategoria(boton, sentido)
{
	var contenedorPropuestas = $(boton).parents('.tipo').children('.contPropuestas');
	if(sentido == 0)
	{
		$(boton).removeClass('up').addClass('down');
		contenedorPropuestas.slideUp('fast');
	}
	else if(sentido == 1)
	{
		$(boton).removeClass('down').addClass('up');
		contenedorPropuestas.slideDown('fast');
	}
	else
	{
		if(contenedorPropuestas.css('display') == 'none')
			$(boton).removeClass('down').addClass('up');
		else
			$(boton).removeClass('up').addClass('down');
		contenedorPropuestas.slideToggle('fast');
	}
}

function CambiarURL(tipo, cosa)
{
	var title = '';
	var url= '';
	switch(tipo)
	{
		case 0:
		{
			title = '¿Que proponen? - ' +cosa.nombre + ' - Partido de la Red';
			url = window.location.origin + window.location.pathname + '#partido/'+(cosa.nombre.split(' ').join('-'));
		}break;
		case 1:
		{
			title = '¿Que proponen? - ' +cosa.nombre + ' - Partido de la Red';
			url = window.location.origin + window.location.pathname + '#candidato/'+(cosa.nombre.split(' ').join('-'));
		}break;
		case 3:
		{
			title = '¿Que proponen?' + ' - Partido de la Red';
			url = window.location.origin + window.location.pathname;
		}break;
	}
    if (typeof (history.pushState) != "undefined") 
	{
		document.title = title;
        var obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
    }
	ga('send', 'pageview', { 'page': location.pathname + location.search  + location.hash });
}

function hacerScrollID(elemento)
{
	$('html, body').animate({ scrollTop: ($('#'+elemento).offset().top - 200) }, 1000);
	$('#'+elemento).effect("highlight", {},5000);
}

function AbrirCategorias()
{
	$('.tipo').children('.title').children('div').each(function(index, element) {
		ToggleCategoria(element, 1);
    });
}
function CerrarCategorias()
{
	$('.tipo').children('.title').children('div').each(function(index, element) {
		ToggleCategoria(element, 0);
    });
}

function ClickAfiliacion()
{
	ga('send', 'pageview', { 'page': location.pathname + location.search  + "#Afiliacion" });
}