var propuestas = [];

function CargarPropuestas()
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetPropuestas.php",
	  data: { partido: -1, candidato: -1, categoria: -1 }
	})
	.done(function( msg ) {
		propuestas = $.parseJSON(msg);
  	});
}

function MostrarPropuesta(prop, part, cand)
{
	if(cand != undefined)
	{
		if(cand.partido != undefined)
		{
			var container = document.createElement('div');
			$(container).attr('id', prop.codigo);
			$(container).attr('data-partido', cand.partido.codigo);
			$(container).attr('data-candidato', cand.codigo);
			$(container).css('position', 'relative');
			$(container).addClass('propuestaContainer');
			var colorValue = null;
			$('#cat'+prop.categoria.codigo).append(container);

			var color = document.createElement('div');
			$(color).addClass('colorPropuesta');
			$(color).css('background-color', prop.categoria.color);
			$(container).append(color);
	
			var cont = document.createElement('div');
			$(cont).css('display', 'inline-block');
			$(cont).css('vertical-align', 'top');
			$(cont).css('margin', '10px 15px');
			
			var titulo = document.createElement('div');
			$(titulo).addClass('tituloPropuesta');
			$(titulo).html(prop.titulo);
			$(cont).append(titulo);
	
			var texto = document.createElement('div');
			$(texto).addClass('textoPropuesta');
			$(texto).html(prop.texto);
			$(cont).append(texto);
	
			var fuente = document.createElement('div');
			$(fuente).addClass('fuentePropuesta');
			var fuenteLink = document.createElement('a');
			$(fuenteLink).attr('href',prop.fuente);
			$(fuenteLink).attr('target','_blank');
			$(fuenteLink).html(prop.fuente);
			$(fuente).append(fuenteLink);
	
			var linkFuente = document.createElement('div');
			$(linkFuente).addClass('linkFuentePropuesta');
			$(linkFuente).html('fuente');
			$(linkFuente).click(function(e) {
                $(fuente).slideToggle(100);
            });
			$(texto).append(linkFuente);
	
			$(container).append(cont);
			$(container).append(fuente);
	
			var tweet = document.createElement('a');
			$(tweet).addClass('twitterButton');
			$(tweet).attr('target', 'popup');
			$(tweet).html('Hablá con '+cand.nombre+' sobre esto');
			
			$(tweet).click(function(e) {
				window.open('https://twitter.com/share?'+
				'url='+location.origin+location.pathname+'%23candidato%2F'+cand.nombre.split(' ').join('-')+'%2Fpropuesta%2F'+prop.codigo+'&'+
				'related=PartidodelaRed&'+
				'hashtags=yvosquepropones&'+
				'text='+ 'Hola ' + cand.twitter + " esta propuesta me parece", 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
			});
			$(container).append(tweet);
			
			$(container).append(MostrarCandidato(2, cand, part));
		}
	}
}

function VerificarPropuestas(cosa)
{
	var count = 0;
	$('.tipo').each(function(index, element) {
		$(element).children('.noPropuestaContainer').remove();
		var cantidad = $($(element).children().last()).children('.propuestaContainer').filter(function() {return $(this).css('display') != 'none'}).length;
		if(cantidad == 0)
		{
			$(NoPropuesta(cosa)).insertBefore($($(element).children().last()));
			$(element).children('.title').children('.arrowButton').hide('fast');
		}
		else
		{
			$(element).children('.title').children('.arrowButton').show('fast');
		}
		$(element).children('.title').children('.quantityList').html(cantidad);
		count += cantidad;
	});	

	if(count == 0)
	{
		$('.graficoContainer').css('display', 'none');
	}
}

function GenerarGrafico()
{
	var chart = document.createElement('canvas');
	if($('#chart').length == 0)
	{
		$(chart).attr('id','chart').css('width','100%').css('height','400');
		$('.graficoContainer').append(chart);
		var data = {
			labels: [],
			datasets: [
				{
					label: "",
					data: [],
				},
			]
		};
		$(categorias).map(function(){ 
			data.labels.push(this.abreviatura);
			data.datasets[0].data.push($('#cat'+this.codigo).children('.propuestaContainer').length);
		});
		window.myObjBar = new Chart(chart.getContext("2d")).Bar(data, {
			barStrokeWidth : 0,
			barValueSpacing : 1,
			responsive : false,
			maintainAspectRatio: false,
			scaleFontSize:15
		});
		
		for(var i=0; i< categorias.length;i++)
			myObjBar.datasets[0].bars[i].highlightFill = myObjBar.datasets[0].bars[i].fillColor = categorias[i].color;
		myObjBar.update();
	}
	else
	{
		for(var i=0; i< categorias.length;i++)
			myObjBar.datasets[0].bars[i].value = $('#cat'+categorias[i].codigo).children('.propuestaContainer').filter(function() {return $(this).css('display') != 'none'}).length;
		myObjBar.update();
	}
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
		cosa.candidatos.filter(function(a){return a.partido == cosa.codigo}).forEach(function(a)
		{
			var tweet = document.createElement('a');
			$(tweet).addClass('twitterButton');
			$(tweet).html('Escribile a '+a.nombre);
			$(tweet).click(function(e) {
				//makeShort(cont, window.location.origin + window.location.pathname + '#candidato/'+a.nombre.split(' ').join('-'), function(){
				window.open('https://twitter.com/intent/tweet?'+
				'url='+location.origin+location.pathname+'%23candidato%2F'+a.nombre.split(' ').join('-')+'&'+
				'related=PartidodelaRed&'+
				'text=' + 'Hola ' + a.twitter + ' %23yvosquepropones para la Ciudad sobre ' + $(e.target).parents('.tipo').children('.title').children('span').html(), 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
				//});
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
				//makeShort(cont, window.location.origin + window.location.pathname + '#candidato/'+cosa.nombre.split(' ').join('-'), function(){
				window.open('https://twitter.com/intent/tweet?'+
				'url='+location.origin+location.pathname+'%23candidato%2F'+cosa.nombre.split(' ').join('-')+'&'+
				'related=PartidodelaRed&'+
				'text=' + 'Hola ' + cosa.twitter + ' %23yvosquepropones para la Ciudad sobre '+$(e.target).parents('.tipo').children('.title').children('span').html(), 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
				//});
			});
		$(tweetContainer).append(tweet);
		$(cont).append(tweetContainer);
	}
	
	return cont;
}