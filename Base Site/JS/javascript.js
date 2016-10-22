var secciones = new Array();
window.masAncho = false;

function CargaInicial()
{
	window.masAncho = window.outerWidth - window.outerHeight > 0 ? true : false;
	window.paneles = [1, 1, 1];

	if(window.location.search.split('?')[1] != undefined)
	{
		var params = window.location.search.slice(0, -1).split('?')[1].split('&');
		for(var i in params)
		{
			var param = params[i].split('=')[0];
			var value = params[i].split('=')[1];

			switch(param)
			{
				case 'e':
					if(value == '1')
					{
						$('.headerContainer').remove();
						$('.footerContainer').remove();
						$('.bannerEmbeded').show();
					}
					else
					{
						$('.bannerAfiliacion').show();
					}
				break;
				case 'm':
					if(value == false)
						window.paneles[0] = 0;
				break;
				case 'p':
					if(value == false)
						window.paneles[1] = 0;
				break;
				case 'v':
					if(value == false)
						window.paneles[2] = 0;
				break;
			}
		}
	}

	$('#tabsContainer').html('');
	$('.contentContainer').html('');
	if(typeof CargarTemplateMediaNaranja == 'function' && window.paneles[0] == 1)
	{
		CargarTemplateMediaNaranja();
		var seccion = Seccion(0, 'Media Naranja', 'Encontrá tu afinidad con los candidatos', 'medianaranja');
		secciones.push(seccion);
		CrearItem(seccion);
	}

	if(typeof CargarTemplateDetalles == 'function' && window.paneles[1] == 1)
	{
		CargarTemplateDetalles(true)
		var seccion = Seccion(1, 'Propuestas', 'Todas las propuestas agrupadas por categorías', 'detalles');
		secciones.push(seccion);
		CrearItem(seccion);
	}

	if(typeof CargarTemplateVersus == 'function' && window.paneles[2] == 1)
	{
		CargarTemplateVersus(true)
		var seccion = Seccion(2, 'Versus', 'Compará las propuestas de dos candidatos', 'versus');
		secciones.push(seccion);
		CrearItem(seccion);
	}

	if($('#tabsContainer').children().length < 2)
		$('#tabsContainer').remove();

	secciones.filter(function(sec){ return sec.clase == 'detalles'; }).selected = true;
	CargarSeccion();
}

function RecalcularMedidas()
{
	$('.seccionContainer').css('width', $('.mainContainer').outerWidth(false) + 'px');

}

function CrearItem(seccion)
{
	var Item = document.createElement('div');
	$(Item).addClass('tabItem '+seccion.clase);
	$('.contentContainer').children().last().attr('id', 'tabItem'+seccion.codigo);
	$('#tabsContainer').append(Item);

	$(Item).click(function(e) {
		SeleccionarItem(seccion, true);
	});

	var itemTitle = document.createElement('div');
	$(itemTitle).addClass('tabItemTitle');
	$(itemTitle).html(seccion.nombre);
	$(Item).append(itemTitle);

	var itemSubtitle = document.createElement('div');
	$(itemSubtitle).addClass('tabItemSubtitle');
	$(itemSubtitle).html(seccion.descripcion);
	$(Item).append(itemSubtitle);
}

function SeleccionarItem(seccion, cambiarURL)
{
	secciones.forEach(function(sec){ sec.selected = false; });
	secciones.filter(function(sec){ return sec.codigo == seccion.codigo; })[0].selected = true;

	$('#tabsContainer').children('.'+seccion.clase).addClass('selected');
	$('#tabsContainer').children().not('.'+seccion.clase).removeClass('selected');

	CargarSeccionPrincipal('tabItem'+seccion.codigo);
	if(seccion.clase === 'medianaranja')
		ActivarMediaNaranja();
	else if(seccion.clase === 'detalles')
		CargarTemplateDetalles(false);
	else if(seccion.clase === 'versus')
		CargarTemplateVersus(false);

	if(cambiarURL == undefined || cambiarURL === true)
		CambiarURL(seccion.codigo, null);
}

function CargarSeccionPrincipal(id)
{
	//Oculto todos los contenedores que no sean el seleccionado
	$('.contentContainer').children().not('#'+id).css('display', 'none');
		//Muestro el contenedores seleccionado
		$('.contentContainer').children('#'+id).fadeIn(600, function (){ window.panelAcual = id; });
}

function SetearDatos()
{
	var ciudad = document.createElement('div');
	$(ciudad).html(Ciudad);
	$(ciudad).addClass('subtitle');
	$('.headerContainer').find('.headerText').append(ciudad);
	$('.textProvincia').html(Ciudad);

	$('meta[property="og:description"]').attr('content', 'Conocé todas las propuestas de los candidatos a Gobernador por '+Ciudad);
	$('meta[name="description"]').attr('content', 'Conocé todas las propuestas de los candidatos a Gobernador por '+Ciudad);

	//Facebook
	$('.fb-like').attr('data-href', 'https://facebook.com/'+Facebook);

	//Twitter
	$('#followButton').attr('href', 'https://twitter.com/'+Twitter);
	$('#followButton').html('@'+Twitter);
}

function CargarContenido(tipo, contenedor)
{
	switch(tipo)
	{
		case contenedores.PARTIDOS:
			partidosFiltrados.forEach(function(part) {
				MostrarPartido(0, part, contenedor);
			});
			VerificarPartidos();
		break;
		case contenedores.CANDIDATOS:
			candidatosFiltrados.forEach(function(cand) {
				var partido = GetPartido(cand.partido);
				MostrarCandidato(0, cand, partido, cand.PASO, contenedor);
			});
			VerificarCandidatos();
		break;
		case contenedores.PROPUESTAS:
			propuestasFiltradas.forEach(function(prop) {
				var partido = partidos.filter(function(part){ return part.codigo == prop.partido })[0];
				var candidato = candidatos.filter(function(cand){ return cand.codigo == prop.candidato })[0];
				MostrarPropuesta(prop, contenedor);
			});
			VerificarPropuestas(null);
		break;
		case contenedores.CATEGORIAS:
			categorias.forEach(function(cat) {
				MostrarCategoria(0, cat);
			});
		break;
	}

}

function FiltrarContenido()
{
	var selectCargos = document.getElementById('selectCargos');
	var selectCiudades = document.getElementById('selectCiudades');

	var cargo = selectCargos != null ? selectCargos.value : -1;
	var ciudad = selectCiudades != null ? selectCargos.value : -1;

	partidosFiltrados = partidos;
	candidatosFiltrados = GetCandidatos(undefined, undefined);
	propuestasFiltradas = propuestas;

	if(cargo != '' && ciudad != '')
	{
		if(cargo != -1 && ciudad == -1)
		{
			candidatosFiltrados = candidatos.filter(function(cand) { return cand.cargo == cargo; });
			partidosFiltrados = partidos.filter(function(part){ return candidatosFiltrados.map(function(cand){return cand.partido}).contains(part.codigo) });
			propuestasFiltradas = propuestas.filter(function(prop){ return candidatosFiltrados.map(function(cand){return cand.codigo}).contains(prop.candidato)});
		}
		else if(cargo != -1 && ciudad != -1)
		{
			candidatosFiltrados = candidatos.filter(function(cand) { return cand.cargo == cargo && cand.ciudad == ciudad; });
			partidosFiltrados = partidos.filter(function(part){ return candidatosFiltrados.map(function(cand){return cand.partido}).contains(part.codigo) });
			propuestasFiltradas = propuestas.filter(function(prop){ return candidatosFiltrados.map(function(cand){return cand.codigo}).contains(prop.candidato)});
		}

	}
}

function CargarSeccion()
{
	if(window.location.hash.split('#')[1] != undefined)
	{
		partesURL = unescape(window.location.hash).split('#')[1].split('/');
		var seccion = partesURL[0];
		if(seccion == 'medianaranja')
		{
			SeleccionarItem(secciones.filter(function(sec){ return sec.clase == 'medianaranja'})[0], false);
		}
		else if (seccion == 'propuestas')
		{
			var nombre = partesURL.length > 2 ? partesURL[2].split('-').join(' ') : '';

			SeleccionarItem(secciones.filter(function(sec){ return sec.clase == 'detalles'})[0], false);

			if(window.location.hash.indexOf('partido') != -1)
			{
				var partido = partidos.filter(function(e){ return e.nombre == nombre; })[0];
				if(partido != undefined)
				{
					MostrarPartido(1, partido);
					return true;
				}
			}
			else if(window.location.hash.indexOf('candidato') != -1)
			{
				var cand = candidatos.filter(function(e){ return e.nombre == nombre; })[0];
				if(cand != undefined)
				{
					MostrarCandidato(1, cand, GetPartido(cand.partido), $('.detalleContainer').children('.candidatosContainer'));
					GenerarGrafico(1, cand.codigo, $('.detalleContainer'));
					if(partesURL.indexOf('propuesta') != -1)
					{
						var codigoPropuesta = partesURL[4];
						setTimeout(function(){hacerScrollID(codigoPropuesta)}, 1000);
					}
					return true;
				}
			}
			else if(window.location.hash.indexOf('categoria') != -1)
			{
				var categoria = categorias.filter(function(e){ return e.nombre == nombre; })[0];
				if(categoria != undefined)
				{
					MostrarCategoria(1, categoria);
					return true;
				}
			}
		}
		else if (seccion == 'versus')
		{
			SeleccionarItem(secciones.filter(function(sec){ return sec.clase == 'versus'})[0], false);
		}
	}
	else
	{
		if(secciones.filter(function(sec){ return sec.clase == 'detalles'})[0] != undefined)
			SeleccionarItem(secciones.filter(function(sec){ return sec.clase == 'detalles'})[0], false);
		else if(secciones.filter(function(sec){ return sec.clase == 'medianaranja'})[0] != undefined)
			SeleccionarItem(secciones.filter(function(sec){ return sec.clase == 'medianaranja'})[0], false);
		else if(secciones.filter(function(sec){ return sec.clase == 'versus'})[0] != undefined)
			SeleccionarItem(secciones.filter(function(sec){ return sec.clase == 'versus'})[0], false);
	}
}

function ToggleCategoriaBarra(barra){
	var barra = $(barra);
	ToggleCategoria(barra.find('.arrowButton')[0]);

}

function ToggleCategoria(boton)
{
	var contenedorPropuestas = $(boton).parents('.tipo').children('.contPropuestas');
	if(contenedorPropuestas.css('display') == 'none')
		$(boton).removeClass('down').addClass('up');
	else
		$(boton).removeClass('up').addClass('down');
	contenedorPropuestas.slideToggle('fast');
}

function CambiarURL(tipo, cosa, subtipo)
{
	var title = '';
	var url= '';
	if(tipo == 0)
	{
		title = '¿Que proponen? - Media Naranja - Partido de la Red';
		url = window.location.origin + window.location.pathname + '#medianaranja';
	}
	else if (tipo == 1)
	{
		if(subtipo != undefined)
		{
			switch(subtipo)
			{
				case 0:
				{
					title = '¿Que proponen? - ' +cosa.nombre + ' - Partido de la Red';
					url = window.location.origin + window.location.pathname + '#propuestas/partido/'+(cosa.nombre.split(' ').join('-'));
				}break;
				case 1:
				{
					title = '¿Que proponen? - ' +cosa.nombre + ' - Partido de la Red';
					url = window.location.origin + window.location.pathname + '#propuestas/candidato/'+(cosa.nombre.split(' ').join('-'));
				}break;
				case 2:
				{
					title = '¿Que proponen? - ' +cosa.nombre + ' - Partido de la Red';
					url = window.location.origin + window.location.pathname + '#propuestas/categoria/'+(cosa.nombre.split(' ').join('-'));
				}break;
				case 3:
				{
					title = '¿Que proponen? - Propuestas - Partido de la Red';
					url = window.location.origin + window.location.pathname + '#propuestas';
				}break;
			}
		}
		else
		{
			title = '¿Que proponen? - Propuestas - Partido de la Red';
			url = window.location.origin + window.location.pathname + '#propuestas';
		}

	}
	else if (tipo == 2)
	{
		title = '¿Que proponen? - Versus - Partido de la Red';
		url = window.location.origin + window.location.pathname + '#versus';
	}

    if (typeof (history.pushState) != "undefined")
	{
		document.title = title;
        var obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
    }
	ga('send', 'pageview', { 'page': location.pathname + location.search  + location.hash });
}
