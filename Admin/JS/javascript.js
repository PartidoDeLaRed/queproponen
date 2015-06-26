function ToggleCategoriaBarra(barra){
	var barra = $(barra);
	ToggleCategoria(barra.find('.arrowButton')[0]);

}

function ToggleCategoria(boton, modo)
{
	var contenedorPropuestas = $(boton).parents('.tipo').children('.contPropuestas');
	if(modo == 0)
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
}

function CargaGenerales()
{
	window.location = (location.origin + location.pathname).replace('PASO/','');
}

function CargaPaso()
{
	$('.menu').children('.selected').removeClass('selected');
	$($('.menu').children()[1]).addClass('selected');
	CargaInicial(true);
}

function SetearDatos()
{
	$('.nombreCiudad').html(Ciudad);
}

function CargaInicial(nuevo)
{
	if(nuevo){
		cont = $('.contentContainer');
		cont.stop(true, true).fadeOut('300ms', function() {
			cont.html('');
			cont.append(MostrarContenedor(contenedores.PARTIDOS));
			cont.append(MostrarContenedor(contenedores.CANDIDATOS));
			cont.append(MostrarContenedor(contenedores.PROPUESTAS));
			CargarContenido();
			if(cargos.length > 1)
				$('#textTipoCandidato').html('Todos');
			else
				$('#textTipoCandidato').html(cargos[0].nombre);
		}).fadeIn('300ms').animate({marginTop:'0px'},'300ms').animate({scrollTop:200}, '300');
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		CambiarURL(3, null);
	}
	else
	{
		$('.partidosContainer').children('.partidoContainer').remove();
		$('.candidatosContainer').children('.candidatoContainer').remove();
		$('.propuestasContainer').find('.propuestaContainer').remove();
		$('.propuestasContainer').find('.noPropuestaContainer').remove();
		CargarContenido();
	}
}

function CargarContenido()
{
	var cargo = document.getElementById('selectCargos').value;
	var ciudad = document.getElementById('selectCiudades').value;
	if(cargo == -1)
	{
		partidos.forEach(function(part) {
			MostrarPartido(0, part);
			part.candidatos.forEach(function(cand) {
				MostrarCandidato(0, cand, part);
				cand.propuestas.forEach(function(prop) {
					MostrarPropuesta(prop, part, cand);
				});
			});
		});
	}
	else if(ciudad == -1)
	{
		partidos.filter(function(part) { return part.candidatos.filter(function(cand) { return cand.cargo.codigo == cargo; }).length > 0; })
		.forEach(function(part) {
			MostrarPartido(0, part);
			part.candidatos.filter(function(cand) { return cand.cargo.codigo == cargo; })
			.forEach(function(cand) {
				MostrarCandidato(0, cand, part);
				cand.propuestas.forEach(function(prop) {
					MostrarPropuesta(prop, part, cand);
				});
			});
		});
	}
	else
	{
		partidos.filter(function(part) { return part.candidatos.filter(function(cand) { return cand.cargo.codigo == cargo && cand.ciudad.codigo == ciudad; }).length > 0; })
		.forEach(function(part) {
			MostrarPartido(0, part);
			part.candidatos.filter(function(cand) { return cand.cargo.codigo == cargo && cand.ciudad.codigo == ciudad; })
			.forEach(function(cand) {
				MostrarCandidato(0, cand, part);
				cand.propuestas.forEach(function(prop) {
					MostrarPropuesta(prop, part, cand);
				});
			});
		});
	}
	VerificarPropuestas(null);
}

function CargarSeccion()
{
	if(window.location.hash.split('/')[1] != undefined)
	{
		secciones = unescape(window.location.hash).split('/');
		var nombre = secciones[1].split('-').join(' ');
		if(window.location.hash.indexOf('partido') != -1)
		{
			var lista = partidos.filter(function(e){ return e.nombre == nombre; });
			if(lista.length > 0)
			{
				MostrarPartido(1, lista[0]);
				return true;
			}
		}
		else if(window.location.hash.indexOf('candidato') != -1)
		{
			partidos.forEach(function(e){ e.candidatos.forEach(function(a){candidatos.push(a) }) });
			var cand = CargarCandidatos(-1, candidatos.filter(function(e){ return e.nombre == nombre; })[0].codigo);
			if(cand != undefined)
			{
				MostrarCandidato(1, cand, CargarPartidos(cand.partido.codigo));
				if(secciones.indexOf('propuesta') != -1)
				{
					var codigoPropuesta = secciones[3];
					setTimeout(function(){hacerScrollID(codigoPropuesta)}, 1000);
				}
				return true;
			}
		}
	}
	CargaInicial(true);
}
function hacerScrollID(elemento)
{
	$('html, body').animate({ scrollTop: ($('#'+elemento).offset().top - 200) }, 1000);
	$('#'+elemento).effect("highlight", {},5000);
}

function AbrirPropuestas()
{
	$('.tipo').children('.title').children('div').each(function(index, element) {
		ToggleCategoria(element, 0);
    });
}