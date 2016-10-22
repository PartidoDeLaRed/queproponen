function MostrarContenedor(tipo)
{
	var template = null;
	switch(tipo)
	{
		case contenedores.PARTIDOS:
			template =
			"<div class='mainSharer'><a class='twitterButton' onclick='javascript:CompartirInicio(0)'>Compartí en Twitter</a>"
			+"<a class='facebookButton' onclick='javascript:CompartirInicio(1)'>Compartí en Facebook</a></div>"
			+"<div class='partidosContainer'><div class='title'>Partidos Políticos y Frentes</div></div> ";
			break;
		case contenedores.CANDIDATOS:
			template = "<div class='candidatosContainer'>"+
            	"<div class='title'>Candidatos a <div id='textTipoCandidato' style='display: inline-block;'></div>"+
					"<div id='filtersContainer' style='text-align:left;'>"+
						"<select class='mainSelect' id='selectCargos' onchange='javascript:CambiarCargo()'></select>"+
						"<div class='selectCiudadesContainer' style='display:none;'><label>por</label><select class='mainSelect' id='selectCiudades' onchange='javascript:CambiarCiudad()'></select></div>"+
					"</div>"+
				"</div>"+
				"</div>";
			break;
		case contenedores.CANDIDATOS_VERSUS:
			template = "<div class='candidatosVersusContainer'>"+
					"<div id='candidatoVersus1' class='candidatoVersusContainer'></div>"+
					"<div id='candidatoVersus2' class='candidatoVersusContainer'></div>"+
				"</div>";
			break;
		case contenedores.CATEGORIAS:
			template = "<div class='categoriasContainer' style='margin-bottom:50px;'>"+
	            "<div class='title'>Por Temas</div>"+
			"</div> ";
			break;
		case contenedores.PROPUESTAS:
			template = "<div class='propuestasContainer'>"+
						"<div class='graficoContainer'></div>"+
						"<div class='filtersContainer' style='text-align:left;'>"+
							"<div id='groupContainer' class='comboContainer'></div>"+
							"<div id='sortContainer' class='comboContainer'></div>"+
						"</div>"+
						"<div class='propuestasItemsContainer'></div>"+
			"</div> ";
			break;
		case contenedores.PROPUESTAS_VERSUS:
			template = "<div class='propuestasVersusContainer'>";
			categorias.forEach(function(cat){
				template += "<div class='versusCategoryContainer'>"+
					"<div id='"+cat.nombre+"' class='candidatoContainer_Header' style='border-top: 2px solid "+cat.color+"'>"+
						"<div id='"+cat.codigo+"1' class='versusCategoriaCandidato left'></div>"+
						"<div class='imagenCategoria' style='width: 60px; height: 60px; margin: 12px; background-image: url("+window.location.origin + window.location.pathname+"IMG/categorias/"+cat.imagen+");'></div>"+
						"<div class='nombreCategoria' style='color: "+cat.color+"; font-size: 35px; line-height: 85px;'>"+cat.nombre+"</div>"+
						"<div id='"+cat.codigo+"2' class='versusCategoriaCandidato right'></div>"+
					"</div>"+
					"<div id='propuestasVersus1' data-codigo='"+cat.codigo+"' class='propuestasItemsContainer'></div>"+
					"<div id='propuestasVersus2' data-codigo='"+cat.codigo+"' class='propuestasItemsContainer'></div>"+
				"</div> ";
			});
			"</div> ";
			break;
	};
	return template;
}

function CompartirInicio(tipo)
{
	if(tipo == 0)
	  window.open('https://twitter.com/intent/tweet?'+
	  'related=PartidodelaRed&'+
	  'text='+ '%23yvosquepropones las propuestas de todos los candidatos para '+ Ciudad +' en un solo lugar '+location.origin+location.pathname, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
	else
	  window.open('http://www.facebook.com/dialog/feed?app_id=825676227513877' +
        '&link='+location.origin+location.pathname +
        '&picture=http:%2F%2Fqueproponen.com.ar%2Fvosquepropones%2FIMG%2FshareLogo.png' +
        '&name=' + 'Todas las propuestas de los candidatos para '+Ciudad+' en un solo lugar' +
        '&caption=' + 'via queproponen.com.ar - Partido de la Red' +
        '&description=' + 'Conocé todas las propuestas de los candidatos a Gobernador de '+ Ciudad +' y discutilas directamente con los ellos.' +
        '&redirect_uri='+location.origin+location.pathname+'close.html' +
        '&display=popup'
		, 'Compartí todas las propuestas', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
}

function HeaderPartido(part, chico, cantProps)
{
	var container = document.createElement('div');
	$(container).attr('id', part.nombre);
	$(container).addClass('partidoContainer');
	if(chico)
		$(container).css('margin-top', '30px');
	$(container).css('width', '90%');

	var imagen = document.createElement('div');
	$(imagen).addClass('imagenPartido_Header');
	$(imagen).css('background-image', 'url(IMG/partidos/' + part.imagen + ')');
	if(chico)
		$(imagen).css('width', '140px').css('height', '85px');
	$(container).append(imagen);

	var nombre = document.createElement('div');
	$(nombre).addClass('item').addClass('nombre_Header');
	$(nombre).css('color', part.color).css('background-color', '#fff');
	if(chico)
		$(nombre).css('left', '140px').css('line-height', '70px');
	$(nombre).html('<div>'+part.nombre+'</div>');
	$(container).append(nombre);

	if(!chico)
	{
		var tweet = document.createElement('a');
		$(tweet).addClass('twitterButton');
		$(tweet).html('Compartí sus propuestas en twitter');
		$(tweet).click(function(e) {
			window.open('https://twitter.com/intent/tweet?'+
			'url='+location.origin+location.pathname+'%23partido%2F'+part.nombre.split(' ').join('-')+'&'+
			'related=PartidodelaRed&'+
			'text='+ '%23yvosquepropones Mirá las propuestas para ' + Ciudad + ' del ' + part.nombre, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
		$(nombre).append(tweet);

		var facebook = document.createElement('a');
		$(facebook).addClass('facebookButton');
		$(facebook).html('Compartí sus propuestas en facebook');
		$(facebook).click(function(e) {
			window.open(
			'http://www.facebook.com/dialog/feed?app_id=825676227513877' +
			'&link=' + escape(window.location.href) +
			'&picture=http:%2F%2Fqueproponen.com.ar%2Fubasociales%2FIMG%2FshareImage.png' +
			'&name=' + 'Todas las propuestas del ' + part.nombre +
			'&caption=' + 'via queproponen.com.ar - Partido de la Red' +
			'&description=' + 'Conocé todas sus propuestas y la de todos los candidatos a '+ cargo[0].nombre + ' en '+ Ciudad +
			'&redirect_uri=' + 'http://queproponen.com.ar/close.html' +
			'&display=popup'
			, 'Compartí todas las propuestas del partido', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
		$(nombre).append(facebook);
	}

	if(part.candidatos.length > 1)
	{
		var candidatosDIV = document.createElement('div');
		$(candidatosDIV).addClass('item').addClass('candidatos_Header');
		$(candidatosDIV).html(GetCandidatos(part.codigo).length);
		if(chico)
			$(candidatosDIV).css('line-height', '40px');
		$(container).append(candidatosDIV);
	}

	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	if(chico)
		$(propuestasDIV).css('line-height', '40px');
	var props = GetPropuestas(0, part.codigo);
	var cantPropuestas = cantProps != undefined ? cantProps : props.length;
	$(propuestasDIV).html(cantPropuestas);
	if(cantPropuestas == 0)
	    $(propuestasDIV).addClass('numeroNoPropuestas');
	$(container).append(propuestasDIV);

	return container;
}

function HeaderCandidato(cand, part, chico, cantProps)
{
	var container = document.createElement('div');
	$(container).attr('id', cand.nombre);
	if(chico)
		$(container).css('margin-top', '30px');
	$(container).addClass('candidatoContainer_Header');

	var imagen = document.createElement('div');
	$(imagen).addClass('imagenCandidato');
	$(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
	$(container).append(imagen);

	var cont = document.createElement('div');
	$(cont).addClass('datosCandidato');
	$(cont).css('display', 'inline-block');
	$(cont).css('vertical-align', 'top');
	$(cont).css('margin', '6px 0 0 85px');

	var nombre = document.createElement('div');
	$(nombre).addClass('nombreCandidato');
	$(nombre).html(cand.nombre);
	$(cont).append(nombre);

	var color = document.createElement('div');
	$(color).addClass('colorCandidato');
	$(color).css('background-color', part.color);
	$(color).html(part.nombre);
	$(cont).append(color);

	var lista = document.createElement('div');
	$(lista).addClass('listaCandidato');
	$(lista).html(cand.lista);
	$(cont).append(lista);

	$(container).append(cont);

	if(!chico)
	{
		var tweet = document.createElement('a');
		$(tweet).addClass('twitterButton');
		$(tweet).html('Twitealo');
		$(tweet).click(function(e) {
			window.open('https://twitter.com/intent/tweet?'+
			'url='+location.origin+location.pathname+'%23propuestas%2Fcandidato%2F'+cand.nombre.split(' ').join('-')+'&'+
			'related=PartidodelaRed&'+
			'text='+ '%23yvosquepropones Mirá las propuestas para ' + Ciudad + ' de ' + cand.nombre, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
		$(container).append(tweet);

		var facebook = document.createElement('a');
		$(facebook).addClass('facebookButton');
		$(facebook).html('Compartilo');
		$(facebook).click(function(e) {
			window.open(
			'http://www.facebook.com/dialog/feed?app_id=825676227513877' +
			'&link=' + escape(window.location.href) +
			'&picture=http:%2F%2Fqueproponen.com.ar%2Fubasociales%2FIMG%2FshareImage.png' +
			'&name=' + 'Todas las propuestas de ' + cand.nombre +
			'&caption=' + 'via queproponen.com.ar - Partido de la Red' +
			'&description=' + 'Conocé todas sus propuestas y la de todos los candidatos a '+ cargos[0].nombre +' en '+ Ciudad +
			'&redirect_uri=' + 'http://queproponen.com.ar/close.html' +
			'&display=popup'
			, 'Compartí todas las propuestas del candidato', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
		$(container).append(facebook);
	}

	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	if(chico)
		$(propuestasDIV).css('line-height', '40px');
	var cantidadProps = cantProps != undefined ? cantProps : cand.propuestas.length;
	$(propuestasDIV).html(cantidadProps);
	if(cantidadProps == 0)
		$(propuestasDIV).addClass('numeroNoPropuestas');
	$(container).append(propuestasDIV);

	return container;
}

function HeaderCategoria(categoria, chico, cantProps)
{
	var container = document.createElement('div');
	$(container).attr('id', categoria.nombre);
	if(chico)
		$(container).css('margin-top', '30px');
	$(container).addClass('candidatoContainer_Header');

	var imagen = document.createElement('div');
	$(imagen).addClass('imagenCategoria');
	$(imagen).css('background-image', 'url(IMG/categorias/' + categoria.imagen + ')');
	if(chico)
		$(imagen).css('width', '60px').css('height', '60px').css('margin','12px');
	$(container).append(imagen);

	var nombre = document.createElement('div');
	$(nombre).addClass('nombreCategoria');
	$(nombre).html(categoria.nombre);
	$(nombre).css('color', categoria.color);
	if(chico)
		$(nombre).css('font-size', '35px').css('line-height', '85px');
	$(container).append(nombre);

	if(!chico)
	{
		var tweet = document.createElement('a');
		$(tweet).addClass('twitterButton');
		$(tweet).html('Twitealo');
		$(tweet).click(function(e) {
			window.open('https://twitter.com/intent/tweet?'+
			'url='+location.origin+location.pathname+'%23propuestas%2Fcategoria%2F'+categoria.nombre.split(' ').join('-')+'&'+
			'related=PartidodelaRed&'+
			'text='+ '%23yvosquepropones Mirá las propuestas sobre ' + categoria.nombre + ' de los candidatos a ' + cargos[0].nombre, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
		$(container).append(tweet);

		var facebook = document.createElement('a');
		$(facebook).addClass('facebookButton');
		$(facebook).html('Compartilo');
		$(facebook).click(function(e) {
			window.open(
			'http://www.facebook.com/dialog/feed?app_id=825676227513877' +
			'&link=' + escape(window.location.href) +
			'&picture=http:%2F%2Fqueproponen.com.ar%2Fubasociales%2FIMG%2FshareImage.png' +
			'&name=' + 'Todas las propuestas sobre ' + categoria.nombre +
			'&caption=' + 'via queproponen.com.ar - Partido de la Red' +
			'&description=' + 'Conocé las propuestas de todos los candidatos a '+ cargos[0].nombre +' sobre '+ categoria.nombre +
			'&redirect_uri=' + 'http://queproponen.com.ar/close.html' +
			'&display=popup'
			, 'Compartí todas las propuestas', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		});
		$(container).append(facebook);
	}

	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	if(chico)
		$(propuestasDIV).css('line-height', '40px');
	var cantidadProps = cantProps != undefined ? cantProps : GetPropuestas(2, categoria.codigo).length;
	$(propuestasDIV).html(cantidadProps);
	if(cantidadProps == 0)
	    $(propuestasDIV).addClass('numeroNoPropuestas');
	$(container).append(propuestasDIV);

	return container;
}

function MostrarVolver(tipo, cosa)
{
	var cont = document.createElement('div');
	$(cont).addClass('atrasContainer');
	$(cont).append(flecha);

	var flecha = document.createElement('div');
	$(flecha).addClass('flechaAtras');
	$(cont).append(flecha);

	var texto = document.createElement('div');
	$(texto).addClass('textoAtras');
	if (cosa == null)
		$(texto).html('Volver al Inicio');
	else if (cosa.nombre !== undefined)
		$(texto).html('Volver a ' + cosa.nombre);

	$(cont).click(function(e) {
		if(cosa == null)
		{
			SeleccionarItem(secciones.filter(function(sec){ return sec.clase == 'detalles' })[0], true);
		}
		else if(cosa.color != undefined)
			MostrarPartido(1, cosa);
		else if (cosa.twitter != undefined)
			MostrarCandidato(1, cosa);
    });

	$(cont).append(texto);

	return cont;
}

function CargarAbout()
{
	$('.menu').children('.selected').removeClass('selected');
	$('.menu').children().last().addClass('selected');

	cont.stop(true, true).fadeOut('300ms', function() {
		$('.contentContainer').html('');

		var about = document.createElement('div');
		$(about).addClass('aboutContainer');
		$(about).html("La metodología de recopilación de la información se realizó investigando los medios sociales de los candidatos, frentes y partidos. <br/><br/> Se considera una propuesta a aquellas consignas cuyo destinatario sea una política pública a realizar en caso de que el candidato sea electo, NO a bases de acción política o manifiestos políticos. <br/><br/> La carga de los datos se hace en orden aleatorio.");
		$('.contentContainer').append(about);

    }).fadeIn('300ms').animate({marginTop:'0px'},'300ms');
}

function MostrarMasInfo()
{
		var wrapper = $('<div class="popup-container"></div>');
		var popup = $('<div class="popup-content"></div>');
		var closeButton = $('<div class="closeButton"></div>').html('X');
		closeButton.click(function(event) {
			wrapper.fadeOut('fast', function() {
				$(this).remove();
				$('body, html').removeClass('vertical-overflow-hidden');
			});
		});

		var title1 = $('<div class="title"></div>').html("Title 1");
		var text1_1 = $('<li class="text"></li>').html("Text 1");
		var text1_2 = $('<li class="text"></li>').html("Text 2");
		var text1_3 = $('<li class="text"></li>').html("Text 3");

		var title2 = $('<div class="title"></div>').html("Title 2");
		var text2 = $('<div class="text"></div>').html("Text 4");

		var title3 = $('<div class="title"></div>').html("Title 3");
		var text3 = $('<div class="text"></div>').html("Text 5");

		var title4 = $('<div class="title"></div>').html("Title 4");
		var text4 = $('<div class="text"></div>').html("Text 6");

		var title5 = $('<div class="title"></div>').html("Title 5");
		var text5_1 = $('<li class="text"></li>').html("Text 7");
		var text5_2 = $('<li class="text"></li>').html("Text 8");
		var text5_3 = $('<li class="text"></li>').html("Text 9");
		var text5_4 = $('<li class="text"></li>').html('Text 10');
		var text5_5 = $('<li class="text"></li>').html('Text 11');

		popup
			.append(closeButton)
			.append($("<div style='overflow: auto; height: 100%;'></div>")
				.append(title1).append('<ul>').append(text1_1).append(text1_2).append(text1_3).append('</ul>')
				.append(title2).append(text2)
				.append(title3).append(text3)
				.append(title4).append(text4)
				.append(title5).append('<ul>').append(text5_1).append(text5_2).append(text5_3).append(text5_4).append(text5_5).append('/<ul>')
			);
		wrapper.append(popup);
		$('body').append(wrapper);

		$('body, html').addClass('vertical-overflow-hidden');
		wrapper.fadeIn('fast');
}
