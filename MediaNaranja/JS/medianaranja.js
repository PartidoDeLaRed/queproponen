function SetearDatos()
{
	var ciudad = document.createElement('div');
	$(ciudad).html(Ciudad);
	$(ciudad).addClass('subtitle');
	$('.headerText').append(ciudad);
	
	$('meta[property="og:description"]').attr('content', 'Conocé todas las propuestas de los candidatos a Gobernador por '+Ciudad);
	$('meta[name="description"]').attr('content', 'Conocé todas las propuestas de los candidatos a Gobernador por '+Ciudad);
	
	//Facebook
	$('.fb-like').attr('data-href', 'https://facebook.com/'+Facebook);
	
	//Twitter
	$('#followButton').attr('href', 'https://twitter.com/'+Twitter);
	$('#followButton').html('@'+Twitter);
}


///////COSAS DE MEDIA NARANJA///////

var indexCategoria = 0;
var resultados = Array();
var ponderaciones = Array();

function CandidatoResultado(_candidato)
{
	var resultado = {
		candidato: _candidato,
		votos: [],
		porcentaje: 0
	};
	return resultado;
}

function Voto(_categoria, _ponderacion)
{
	var voto = {
		categoria: _categoria,
		ponderacion: _ponderacion,
	};
	return voto;
}

var ponderacionCategoria = 3;
$(document).ready(function(e) {
	
	CargarCategorias();
	CargarCandidatos(1);
	
	//Creo los items de progreso por categoría
	categorias.forEach(function(cat){
		var progressItemContainer = document.createElement('div');
		$(progressItemContainer).addClass('surveyProgressItemContainer');
		$(progressItemContainer).css('width', (100/categorias.length) + '%');
		$('.surveyProgressContainer').append(progressItemContainer);
		
		var progressItem = document.createElement('div');
		$(progressItem).addClass('surveyProgressItem');
		$(progressItem).attr('data-codigo', cat.codigo);
		$(progressItem).attr('data-nombre', cat.nombre);
		$(progressItem).attr('data-color', cat.color);
		$(progressItem).css('background-image', 'url(IMG/categorias/'+cat.imagen+')');
		$(progressItemContainer).append(progressItem);
	});
	
	//Inicializo los resultados por candidato agregando la opción 'Ninguno'
	candidatos.forEach(function(cand){
		resultados.push(CandidatoResultado(cand));
	});
	resultados.push(CandidatoResultado({codigo: -1, nombre:'Ningún candidato', lista: '', imagen:'', twitter:'', partido: {nombre:'', color:'#DDDDDD'}, propuestas: null }));
	
	$('#ratingSelect').barrating('show', {
            initialRating: 3,
            showValues: false,
            showSelectedRating: true,
            onSelect:function(value, text) {
                ponderacionCategoria = parseInt(value);
            }
        });
	
	CargarPropuestasCategoria(indexCategoria);
	
    $('.Next').click(function(e) {
		$('.loadingPanel').css('display','block');
		if($('.surveyItem.selected').length > 0)
		{
			//Cargo el resultado para la categoria
			var sel = parseInt($('.surveyItem.selected').attr('data-candidato'));
			resultados.filter(function(res){return res.candidato.codigo == sel})[0].votos.push(Voto(
				categorias.filter(function(cat){return cat.codigo == parseInt($($('.surveyProgressItem')[indexCategoria]).attr('data-codigo'))})[0],
				ponderacionCategoria
			));
			ponderaciones.push(ponderacionCategoria);
			//Saco el color al item de la categoria actual
			$('.surveyProgressItem.selected').last().css('background-color','');
		
			indexCategoria++;
			$('.surveyContainer').animate({ marginLeft: "-100px", opacity: 0 }, 500, function(){
				//Muestro las propuestas de cada candidato de la categoria actual
				CargarPropuestasCategoria(indexCategoria);
				//Si es la ultima, ocultar el boton de next y mostrar el boton de finalizar
				if(categorias.length == indexCategoria+1)
				{
					$('.Next').css('display','none');
					$('.End').css('display','inline-block');
				}
			}).animate({ marginLeft: "100px" }, 10).animate({ marginLeft: "0px", opacity: 1 }, 500, function(){
				$('.loadingPanel').css('display','none');
				if($('body').scrollTop() > $('.surveyProgressContainer').offset().top)
					$('body').animate({ scrollTop: $('.surveyProgressContainer').offset().top }, 500);
			});
		}
		else
		{
			$('.surveyNoSelection').fadeOut('fast').fadeIn('fast').fadeOut('fast').fadeIn('fast');
			$('.loadingPanel').css('display','none');
		}
    });
	
	$('.End').click(function(e) {
		if($('.surveyItem.selected').length > 0)
		{
			//Cargo el resultado para la categoria
			var sel = parseInt($('.surveyItem.selected').attr('data-candidato'));
			resultados.filter(function(res){return res.candidato.codigo == sel})[0].votos.push(Voto(
				categorias.filter(function(cat){return cat.codigo == parseInt($($('.surveyProgressItem')[indexCategoria]).attr('data-codigo'))})[0],
				ponderacionCategoria
			));
			ponderaciones.push(ponderacionCategoria);
			//Saco el color al item de la categoria actual
			$('.surveyProgressItem.selected').last().css('background-color','');
			
			//Calculo los porcentajes de cada candidato según en que categorías los votaron y cuanta ponderación tenía cada categoría
			var promedioPonderaciones = avg(ponderaciones);
			var porcentajeInicialCategoria = 100 / categorias.length;
			resultados.forEach(function(res){
				res.votos.forEach(function(voto){ res.porcentaje += porcentajeInicialCategoria * (voto.ponderacion / promedioPonderaciones) });
				res.porcentaje = res.porcentaje.toFixed(2);
			});
			
			$('.contentContainer').animate({ opacity: 0 }, 1000, function(){

				$('.contentContainer').html('');
				$('body').animate({ scrollTop: 0 }, 500);
				MostrarResultados();

			}).animate({ opacity: 1 }, 1000, function(){
				$('.resultadoContainer').fadeIn();
			});
		}
		else
		{
			$('.surveyNoSelection').fadeOut('fast').fadeIn('fast').fadeOut('fast').fadeIn('fast');
		}
    });
	
});

function CargarPropuestasCategoria(indexCategoria)
{
	$('#ratingSelect').barrating('set', 3);
	ponderacionCategoria = 3;
	
	var categoriaSiguiente = $('.surveyProgressItem')[indexCategoria];
	$(categoriaSiguiente).addClass('selected').css('background-color',categorias[indexCategoria].color + ' !important');;
	$('.surveyProgressActive').css('right',100-(100/categorias.length)*(indexCategoria+1)+'%');
	$('.surveyHeaderTitle').html($(categoriaSiguiente).attr('data-nombre'));
	$('.surveyHeader').css('background-color', $(categoriaSiguiente).attr('data-color'));

	$('.surveyItemsContainer').html('');
	$('.candidatosNoPropuestasContainer').html('');
	shuffle(candidatos).forEach(function(cand){
		var propuestas = cand.propuestas.filter(function(prop){return prop.categoria.codigo == $(categoriaSiguiente).attr('data-codigo')});
		if(propuestas.length > 0)
		{
			var itemText = '';
			propuestas.forEach(function(prop){itemText += prop.titulo + '& '});
			var surveyItem = document.createElement('div');
			$(surveyItem).addClass('surveyItem');
			$(surveyItem).attr('data-candidato',cand.codigo);
			$(surveyItem).html("<div>" + itemText.split('&').slice(0, -1).join('</div><div>') + "</div>");
			$(surveyItem).click(function(e) {
				$('.surveyItem.selected').removeClass('selected');
				$(this).addClass('selected');
				$('.surveyNoSelection').fadeOut('fast');
			});
			$('.surveyItemsContainer').append(surveyItem);
		}
		else
		{
			$('.candidatosNoPropuestasContainer').append(MostrarCandidato(2, cand));
		}
	});	
	
	var surveyItemNo = document.createElement('div');
	$(surveyItemNo).addClass('surveyItem').addClass('noProp');
	$(surveyItemNo).attr('data-candidato','-1');
	$(surveyItemNo).html('Ninguna de las anteriores');
	$(surveyItemNo).click(function(e) {
		$('.surveyItem.selected').removeClass('selected');
		$(this).addClass('selected');
		$('.surveyNoSelection').fadeOut('fast');
	});
	$('.surveyItemsContainer').append(surveyItemNo);

	if($('.candidatosNoPropuestasContainer').children().length > 0)
		$('.candidatosNoPropuestas').show('fast');
	else
		$('.candidatosNoPropuestas').hide('fast');
}

function MostrarResultados()
{
	var title = document.createElement('div');
	$(title).addClass('title ganador');
	$(title).html('Tu media naranja es');
	$('.contentContainer').append(title);

	//Ordeno los resultados por el porcentaje de mayor a menor
	var ordenados = resultados.sort(function(a, b){ return (parseFloat(b.porcentaje) > parseFloat(a.porcentaje)) ? 1 : -1 });

	//Agrego al ganador
	GenerarResultado(ordenados[0], true);
	if(ordenados[0].candidato.nombre != 'Ningún candidato')
		//Creo el contenedor para compartir el resultado
		var shareContainer = document.createElement('div');
		$(shareContainer).addClass('shareContainer');
		$(shareContainer).append(BotonCompartirResultado(0, ordenados[0]));
		$(shareContainer).append(BotonCompartirResultado(1, ordenados[0]));
		$('.resultadoContainerGanador').append(shareContainer);
	//Mando el evento a analytics
	ga('send', 'event', 'Resultado Media Naranja - CABA', 'Ganador', ordenados[0].candidato.nombre, 1);
	

	//Creo el contenedor de los perdedores
	var perdedoresContainer = document.createElement('div');
	$(perdedoresContainer).addClass('perdedoresContainer')
	$('.contentContainer').append(perdedoresContainer);
		//Agrego a los perdedores
		var i = 2;
		ordenados.slice(1).filter(function(res){return res.candidato.nombre != 'Ningún candidato' }).forEach(function(res){
			GenerarResultado(res, false);
			//Mando el evento a analytics
			ga('send', 'event', 'Resultado Media Naranja - CABA', i+'° Puesto', res.candidato.nombre, 1);
			i++;
		});

	//Creo el contenedor del gráfico
	var chartContainer = document.createElement('div');
	$(chartContainer).addClass('chartContainer');
	$(chartContainer).css('margin-bottom', ($('.perdedoresContainer').height()/2 - 20) + 'px');
	$('.contentContainer').append(chartContainer);
		var orangeChart = document.createElement('div');
		$(orangeChart).addClass('orangeChart');
		$(chartContainer).append(orangeChart);

	//Creo el gráfico de porcentajes de los candidatos
	var chart1 = document.createElement('canvas');
	$(chart1).attr('id','chart1').css('width','220px').css('height', '220px').css('position', 'absolute').css('left','0').css('transform', 'rotateY(180deg)');
	$(chartContainer).append(chart1);
	var chart2 = document.createElement('canvas');
	$(chart2).attr('id','chart2').css('width','220px').css('height', '220px').css('position', 'absolute').css('left','0');
	$(chartContainer).append(chart2);

	var Options = {
		responsive : true,
		maintainAspectRatio: true,
		segmentShowStroke : false,
		animation : true,
		percentageInnerCutout : 70,
		animationSteps : 70,
		animationEasing : "easeOutQuad",
		animateRotate : true,
		animateScale : false,
		onAnimationComplete : null,
		showTooltips: false
	};
	var data1 = [];
	data1.push(
		{
			value: parseFloat(ordenados[0].porcentaje),
			color: ordenados[0].candidato.partido.color,
			highlight: ordenados[0].candidato.partido.color,
		}
	);
	data1.push(
		{
			value: 100-parseFloat(ordenados[0].porcentaje),
			color: 'rgba(0,0,0,0)',
			highlight: 'rgba(0,0,0,0)',
		}
	);
	var data2 = [];
	$(ordenados.slice(1)).map(function(){ 
		data2.push(
			{
				value: parseFloat(this.porcentaje),
				color: this.candidato.partido.color,
				highlight: this.candidato.partido.color,
			}
		);
	});
	data2.push(
		{
			value: parseFloat(ordenados[0].porcentaje),
			color: 'rgba(0,0,0,0)',
			highlight: 'rgba(0,0,0,0)',
		}
	);

	//Creo el boton para ir a todas las propuestas
	var botonFinal = document.createElement('div');
	$(botonFinal).addClass('surveyButton final').addClass('Todas');
	$(botonFinal).html('Conocé todas las propuestas');
	$(botonFinal).click(function(e) {
        window.location = 'http://caba.queproponen.com.ar/propuestas';
    });;
	$(chartContainer).append(botonFinal);

	//Arranco con las animaciones para hacer aparecer las cosas
	$('.resultadoContainerGanador').animate({ opacity:1 }, 1000, function(){
		setTimeout(function(){
			$('.resultadoContainerGanador').animate({ left:0, marginLeft:0 }, 500, function(){
	
				//Animo los perdedores
				var animationDelay = 600;
				var offset = 500;
				$('.resultadoContainer').each(function(){
					var e = this;
					setTimeout(function(){
						$(e).animate({
							opacity: "1"
						}, animationDelay);
					},($(e).index()-1) * offset)
				});
				
				if(window.outerWidth > 600)
				{
					//Creo el gráfico
					window.myObjBar = new Chart(chart1.getContext("2d")).Doughnut(data1, Options);
					window.myObjBar = new Chart(chart2.getContext("2d")).Doughnut(data2, Options);
				}
				$(botonFinal).animate({opacity: 1}, 500);
				$('.orangeChart').animate({opacity: 1}, 500);
		});
		}, 1000);
	});
}

function GenerarResultado(res, ganador)
{
		var container = document.createElement('div');
		$(container).attr('id', res.candidato.twitter);
		if(ganador)
			$(container).addClass('resultadoContainerGanador');
		else
			$(container).addClass('resultadoContainer');
		
		if(res.candidato.nombre == 'Ningún candidato')
		{
			var noOrange = document.createElement('div');
			$(noOrange).addClass('noOrange')
			$(container).append(noOrange);
			var enunciadoNoAfinidad = document.createElement('div');
			$(enunciadoNoAfinidad).addClass('enunciadoNoAfinidad')
			$(enunciadoNoAfinidad).html("No coincidís con ningún candidato. <div class='finalPartido'> Si querés votar por una idea conocé al</div> <a href='http://partidodelared.org'><div class='logo'></div> Partido de la Red</a>");
			$(container).append(enunciadoNoAfinidad);
		}
		else
		{
			//Agrego los datos del candidato
			$(container).append(MostrarCandidato(0, res.candidato, ganador));
	
			//Agrego el porcentaje obtenido
			var porcentaje = document.createElement('div');
			$(porcentaje).addClass('porcentajeContainer')
			$(porcentaje).html(res.porcentaje + '%');
			$(container).append(porcentaje);
	
			//Agrego las categorias afines
			var afinidadCategorias = document.createElement('div');
			$(afinidadCategorias).addClass('afinidadCategorias')
			$(container).append(afinidadCategorias);
			if(res.votos.length > 0)
			{
				var countCategoria = res.votos.length;
				res.votos.forEach(function(voto){
					var afinidadCategoria = document.createElement('div');
					$(afinidadCategoria).addClass('afinidadCategoria');
					$(afinidadCategoria).attr('data-codigo', voto.categoria.codigo);
					$(afinidadCategoria).attr('data-nombre', voto.categoria.nombre);
					$(afinidadCategoria).attr('data-color', voto.categoria.color);
					$(afinidadCategoria).css('background-image', 'url(IMG/categorias/'+voto.categoria.imagen+')');
					$(afinidadCategoria).css('background-color', voto.categoria.color);
					$(afinidadCategoria).css('z-index', countCategoria);
					$(afinidadCategorias).append(afinidadCategoria);
					var afinidadCategoriaTooltip = document.createElement('div');
					$(afinidadCategoriaTooltip).addClass('afinidadCategoriaTooltip');
					$(afinidadCategoriaTooltip).css('background-color', voto.categoria.color);
					$(afinidadCategoriaTooltip).html(voto.categoria.abreviatura);
					$(afinidadCategoria).append(afinidadCategoriaTooltip);
					countCategoria--;
				});
			}
			else
			{
				var noAfinidadCategoria = document.createElement('div');
				$(noAfinidadCategoria).addClass('noAfinidadCategoria');
				$(noAfinidadCategoria).html('Ninguna');
				$(afinidadCategorias).append(noAfinidadCategoria);
			}
		}

		if(ganador)
			$('.contentContainer').append(container);
		else
			$('.perdedoresContainer').append(container);
}

function BotonCompartirResultado(tipo, ganador)
{
	var shareButton = document.createElement('div');
	$(shareButton).html('Compartir');
	if(tipo == 0)
	{
		$(shareButton).addClass('facebookButton');
		$(shareButton).click(function(e) {
		  window.open('http://www.facebook.com/dialog/feed?app_id=825676227513877' +
			'&link='+location.origin+location.pathname +
			'&picture='+ location.origin+location.pathname +'IMG/orange.png' +
			'&name=' + encodeURIComponent('Mi #MediaNaranja para estas elecciones es ' + ganador.candidato.nombre + ' con '+ ganador.porcentaje +'% de afinidad!') +
			'&caption=' + 'via queproponen.com.ar - Partido de la Red' +
			'&description=' + 'Buscá vos también tu Media Naranja en base a sus propuestas.' +
			'&redirect_uri='+location.origin+location.pathname+'close.html' +
			'&display=popup'
			, 'Encontrá tu media naranja', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
				});
	}
	else
	{
		$(shareButton).addClass('twitterButton');
		var url = 'https://twitter.com/intent/tweet?'+
		  'related=PartidodelaRed&'+
		  'text='+ encodeURIComponent('Mi #mediaNaranja para estas elecciones es ' + (TieneTwitter(ganador.candidato) ? ganador.candidato.twitter : ganador.candidato.nombre) + ' con '+ ganador.porcentaje +'% de afinidad. Buscá la tuya en '+location.origin+location.pathname);
		$(shareButton).click(function(e) {
		  window.open(url, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
	}
	return shareButton;
}

function TieneTwitter(cand)
{
	if(cand.twitter.indexOf('@') != -1)
		return true;
	else
		return false;
}