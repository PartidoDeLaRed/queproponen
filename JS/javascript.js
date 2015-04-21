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
			$(candidatosDIV).html(candidatos.filter(function(a){return a.partido == part.codigo}).length);
			$(container).append(candidatosDIV);

			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('item').addClass('propuestas');
			var cantPropuestas = 0;
			cantPropuestas = propuestas.filter(function(a){return a.partido == part.codigo}).length;
			$(propuestasDIV).html(cantPropuestas);
			if(cantPropuestas == 0)
				$(propuestasDIV).css('color','#f11');
			$(container).append(propuestasDIV);

			$('.partidosContainer').append(container);
		}break;
		case 1:
		{
			var cont = $('.contentContainer');
			cont.stop(true, true).fadeOut('300ms', function() {
				$('.contentContainer').html('');
				
				cont.append(MostrarVolver(0, null));
				cont.append(HeaderPartido(part));
				
				cont.append(MostrarContenedor(contenedores.CANDIDATOS));
				cont.append(MostrarContenedor(contenedores.PROPUESTAS));
				
				candidatos.filter(function(a){return a.partido == part.codigo}).forEach(function(cand) {MostrarCandidato(0, cand);});
				propuestas.filter(function(a){return a.partido == part.codigo}).forEach(function(prop) {MostrarPropuesta(0, prop);});
				VerificarPropuestas(part);
				
            }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
			$('html, body').animate({
		        scrollTop: cont.offset().top
		    }, 400, function(){GenerarGrafico()});
			CambiarURL(0, part);
		}break;
	}
}

function MostrarCandidato(modo, cand)
{
	switch(modo)
	{
		case 0:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
			$(container).addClass('candidatoContainer');
			$(container).click(function(){
				MostrarCandidato(1, cand)
			});
			$('.candidatosContainer').append(container);

			var color = document.createElement('div');
			$(color).addClass('colorCandidato');
			$(color).css('background-color', partidos.filter(function(e){return e.codigo == cand.partido;})[0].color);
			$(container).append(color);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);

			var cont = document.createElement('div');
			$(cont).css('display', 'inline-block');
			$(cont).css('vertical-align', 'top');
			$(cont).css('margin', '6px 0');
			
			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCandidato');
			$(nombre).html(cand.nombre);
			$(cont).append(nombre);

			var lista = document.createElement('div');
			$(lista).addClass('listaCandidato');
			$(lista).html(cand.lista);
			$(cont).append(lista);

			$(container).append(cont);
			
			var propuestasDIV = document.createElement('div');
			$(propuestasDIV).addClass('item').addClass('propuestas');
			$(propuestasDIV).html(propuestas.filter(function(a){return a.candidato == cand.codigo && a.partido == cand.partido}).length);
			if(propuestas.filter(function(a){return a.candidato == cand.codigo && a.partido == cand.partido}).length == 0)
				$(propuestasDIV).css('color','#f11');
			$(container).append(propuestasDIV);
		}break;
		case 1:
		{
			var cont = $('.contentContainer');
			cont.stop(true, true).fadeOut('300ms', function() {
				$('.contentContainer').html('');
				
				cont.append(MostrarVolver(0, partidos.filter(function(e){ return e.codigo == cand.partido; })[0]));
				cont.append(HeaderCandidato(cand));
				
				cont.append(MostrarContenedor(contenedores.PROPUESTAS));
				
				propuestas.filter(function(a){return a.candidato == cand.codigo && a.partido == cand.partido}).forEach(function(prop)
				{
					MostrarPropuesta(0, prop);
				});
				VerificarPropuestas(cand);
	
            }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
			$('html, body').animate({
		        scrollTop: cont.offset().top
		    }, 400);
			CambiarURL(1, cand);
		}break;

		case 2:
		{
			var container = document.createElement('div');
			$(container).attr('id', cand.nombre);
			$(container).addClass('candidatoContainer');
			$(container).css('position', 'absolute').css('top', '0').css('right', '0').css('width','auto').css('border','1px solid #999');
			$(container).click(function(){
				MostrarCandidato(1, cand)
			});

			var color = document.createElement('div');
			$(color).addClass('colorCandidato_mini');
			$(color).css('background-color', partidos.filter(function(e){return e.codigo == cand.partido;})[0].color);
			$(container).append(color);

			var imagen = document.createElement('div');
			$(imagen).addClass('imagenCandidato_mini');
			$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
			$(container).append(imagen);

			var nombre = document.createElement('div');
			$(nombre).addClass('nombreCandidato_mini');
			$(nombre).html(cand.nombre);
			$(cont).append(nombre);
			$(container).append(nombre);
			
			return container;
		}break;
	}
}

function MostrarPropuesta(modo, prop)
{
	if(prop.partido != undefined)
	{
		var candidato = candidatos.filter(function(e){return e.codigo == prop.candidato && e.partido == prop.partido;})[0];
		
		switch(modo)
		{
			case 0:
			{
				var container = document.createElement('div');
				$(container).attr('id', prop.titulo);
				$(container).css('position', 'relative');
				$(container).addClass('propuestaContainer');
				$(container).click(function(){
					MostrarPropuesta(1, prop);
				});
				var colorValue = null;
				switch(prop.tema)
				{
					case temas.SALUD:
					{
						colorValue = '#D99ED6';
						$('#salud').append(container);
					}break;
					case temas.ECONOMIA:
					{
						colorValue = '#9ED9C3';
						$('#economia').append(container);
					}break;
					case temas.SOCIEDAD:
					{
						colorValue = '#D99EA6';
						$('#sociedad').append(container);
					}break;
					case temas.SEGURIDAD:
					{
						colorValue = '#ECEAA8';
						$('.seguridad').append(container);
					}break;
					case temas.EDUCACION:
					{
						colorValue = '#9EB8D9';
						$('#educacion').append(container);
					}break;
					case temas.DERECHOS_HUMANOS:
					{
						colorValue = '#222222';
						$('#derechosHumanos').append(container);
					}break;
					case temas.PLANEAMIENTO_URBANO:
					{
						colorValue = '#D9BE9E';
						$('#planeamientoUrbano').append(container);
					}break;
					case temas.INSTITUCIONAL:
					{
						colorValue = '#FFAA7F';
						$('#institucional').append(container);
					}break;
					case temas.TRANSPORTE:
					{
						colorValue = '#AA7FFF';
						$('#transporte').append(container);
					}break;
					case temas.INTERNACIONAL:
					{
						colorValue = '#55D4FF';
						$('#internacional').append(container);
					}break;
				}
	
				var color = document.createElement('div');
				$(color).addClass('colorPropuesta');
				$(color).css('background-color', colorValue);
				$(container).append(color);
	
				var cont = document.createElement('div');
				$(cont).css('display', 'inline-block');
				$(cont).css('vertical-align', 'top');
				$(cont).css('margin', '0 10px');
				
				var titulo = document.createElement('div');
				$(titulo).addClass('tituloPropuesta');
				$(titulo).html(prop.titulo);
				$(cont).append(titulo);
	
				var texto = document.createElement('div');
				$(texto).addClass('textoPropuesta');
				$(texto).html(prop.texto);
				$(cont).append(texto);

				$(container).append(cont);
	
				var tweet = document.createElement('a');
				$(tweet).addClass('twitterButton');
				$(tweet).html('Hablá con '+candidato.nombre+' sobre esto');
				$(tweet).click(function(e) {
                    window.open('https://twitter.com/share?'+
				'url=https%3A%2F%2Ffedericovilledary.com.ar%2Fvosquepopones%2Fpropuesta%2F'+prop.titulo.replace(' ','-')+'&'+
				'related=fvilledary&'+
				'text='+candidato.twitter+' '+prop.titulo, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
                });
				$(container).append(tweet);
				
				$(container).append(MostrarCandidato(2, candidato));
				
			}break;
			case 1:
			{
				
			}break;
		}
	}
}

function VerificarPropuestas(cosa)
{
	$('.tipo').each(function(index, element) {
		if($(element).children('.propuestaContainer').length == 0)
			$(element).append(NoPropuesta(cosa));
		else
			$(element).children('.title').children('.quantityList').html($(element).children('.propuestaContainer').length + ' propuestas');
	});	
}

function GenerarGrafico()
{
	var chart = document.createElement('canvas');
	if($('#chart').length > 0)
		chart = $('#chart').get(0);
	$(chart).attr('id','chart').css('width','100%').css('height','300');
	$(chart).insertAfter($('.propuestasContainer').children('.title').get(0));
	var data = {
		labels: ["Salud", "Educacion", "Sociedad", "Economia", "Transporte", "Derechos Humanos", "Seguridad"],
		datasets: [
			{
				label: "Propuestas de ",
				fillColor: "rgba(100,100,100,0.9)",
				strokeColor: "rgba(220,220,220,0.8)",
				highlightFill: "rgba(100,100,100,0.9)",
				highlightStroke: "rgba(220,220,220,0.8)",
				data: [20, 7, 0, 15, 10, 2, 1]
			},
		]
	};
	new Chart(chart.getContext("2d")).Bar(data);
}

function NoPropuesta(cosa)
{
	var cont = document.createElement('div');
	$(cont).addClass('noPropuestaContainer');
	
	var titulo = document.createElement('div');
	$(titulo).addClass('tituloNoPropuesta');

	if(cosa == null)
	{
		$(titulo).html('No hay propuestas');
		$(cont).append(titulo);
	}
	else if(cosa.color != undefined)
	{
		$(titulo).html('No tienen propuestas');
		var texto = document.createElement('div');
		$(texto).addClass('textoNoPropuesta');
		$(texto).html('Si querés preguntarle a sus candidatos algo sobre esta categoría, escribiles:');
		$(cont).append(titulo);
		$(cont).append(texto);

		var tweetContainer = document.createElement('div');
		$(tweetContainer).css('display', 'block').css('margin','0 auto 20px auto').css('text-align','center');
		candidatos.filter(function(a){return a.partido == cosa.codigo}).forEach(function(a)
		{
			var tweet = document.createElement('a');
			$(tweet).addClass('twitterButton');
			$(tweet).html('Escribile a '+a.nombre);
			$(tweet).click(function(e) {
				window.open('https://twitter.com/share?'+
			'url=https%3A%2F%2Ffedericovilledary.com.ar%2Fvosquepropones%2F#candidato%2F'+a.nombre.replace(' ','-')+'&'+
			'related=fvilledary&'+
			'text='+a.twitter + ', quisiera saber propuestas tuyas sobre '+$(this).parents('.tipo').attr('id'), 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
			});
			$(tweetContainer).append(tweet);
		});
		$(cont).append(tweetContainer);
	}
	else if(cosa.twitter != undefined)
	{
		$(titulo).html('No tiene propuestas');
		var texto = document.createElement('div');
		$(texto).addClass('textoNoPropuesta');
		$(texto).html('Si queres preguntarle algo sobre esta categoría, escribile:');
		$(cont).append(titulo);
		$(cont).append(texto);

		var tweetContainer = document.createElement('div');
		$(tweetContainer).css('display', 'block').css('margin','0 auto 20px auto').css('text-align','center');
		var tweet = document.createElement('a');
		$(tweet).addClass('twitterButton');
		$(tweet).html('Preguntale a '+cosa.nombre+' que piensa sobre esto');
		$(tweet).click(function(e) {
			window.open('https://twitter.com/share?'+
		'url=https%3A%2F%2Ffedericovilledary.com.ar%2Fvosquepropones%2F#candidato%2F'+cosa.nombre.replace(' ','-')+'&'+
		'related=fvilledary&'+
		'text='+cosa.twitter + ', quisiera saber propuestas tuyas sobre '+$(this).parents('.tipo').attr('id'), 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
		$(tweetContainer).append(tweet);
		$(cont).append(tweetContainer);
	}
	
	return cont;
}

function CambiarURL(tipo, cosa)
{
	var title = '';
	var url= '';
	switch(tipo)
	{
		case 0:
		{
			title = '¿Vos que propones? - '+cosa.nombre;
			url = window.location.origin + window.location.pathname + '#partido/'+(cosa.nombre.replace(' ','-'));
		}break;
		case 1:
		{
			title = '¿Vos que propones? - '+cosa.nombre;
			url = window.location.origin + window.location.pathname + '#candidato/'+(cosa.nombre.replace(' ','-'));
		}break;
		case 2:
		{
			title = '¿Vos que propones? - '+cosa.titulo;
			url = window.location.origin + window.location.pathname + '#propuesta/'+(cosa.titulo.replace(' ','-'));
		}break;
		case 3:
		{
			title = '¿Vos que propones?';
			url = window.location.origin + window.location.pathname;
		}break;
	}
	ChangeUrl(title, url);
}

function ChangeUrl(title, url) 
{
    if (typeof (history.pushState) != "undefined") 
	{
        var obj = { Title: title, Url: url };
        history.pushState(obj, obj.Title, obj.Url);
    } 
}

function CargaInicial()
{
	cont = $('.contentContainer');
	cont.stop(true, true).fadeOut('300ms', function() {
		cont.html('');
		cont.append(MostrarContenedor(contenedores.PARTIDOS));
		cont.append(MostrarContenedor(contenedores.CANDIDATOS));
		cont.append(MostrarContenedor(contenedores.PROPUESTAS));
		
		partidos.forEach(function(part) {MostrarPartido(0, part);});
		candidatos.forEach(function(cand) {MostrarCandidato(0, cand);});
		propuestas.forEach(function(prop) {MostrarPropuesta(0, prop);});
		VerificarPropuestas(null);
    }).fadeIn('300ms').animate({marginTop:'0px'},'300ms').animate({scrollTop:200}, '300');
	CambiarURL(3, null);
}

function CargarSeccion()
{
	if(window.location.hash.split('/')[1] != undefined)
	{
		var nombre = window.location.hash.split('/')[1].replace('-',' ');
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
			var lista = candidatos.filter(function(e){ return e.nombre == nombre; });
			if(lista.length > 0)
			{
				MostrarCandidato(1, lista[0]);
				return true;
			}
		}
	}
	CargaInicial();
}