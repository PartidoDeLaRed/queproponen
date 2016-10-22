var propuestas = [];
var propuestasFiltradas = null;
function CargarPropuestas(callback)
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetPropuestas.php"
	})
	.done(function( msg ) {
		propuestas = shuffle($.parseJSON(msg));

		if(callback)
			callback();
  	});
}

//modo -> 0:Por partido 1:Por candidato 2:Por categoria
//filtro ->Codigo del elemento
function GetPropuestas(modo, filtro)
{
	//Si el modo no es de candidatos
	if(modo != 1)
	{
		var res = propuestas;
		//Obtengo los candidatos activos por cargo y/o cargo
		var cands = candidatos;
		//Si el filtro era por partido, tomo los candidatos de ese partido
		if(modo == 0)
			cands = cands.filter(function(cand){ return cand.partido == filtro; });

		cands = cands.map(function(cand){ return cand.codigo; });
		//Tomo las propuestas de esos candidatos (filtrados por partido)
		res = propuestas.filter(function(prop){ return cands.indexOf(prop.candidato) > -1 });
		//Si el filtro era por categoria, Tomo las propuestas de esos candidatos que tengan la categoria a filtrar
		if(modo == 2)
			res = res.filter(function(prop){ return prop.categorias.indexOf(filtro) > -1 })
	}
	//Si el filtro era por candidato, Tomo todas las propuestas de ese candidato
	else
		res = propuestas.filter(function(prop){ return prop.candidato == filtro });

	//Devolvemos ordenadas según la primer categoria
	return res.sort(function(a,b){ return a.categorias[0] < b.categorias[0] ? 1 : -1 });
}

function MostrarPropuesta(prop, modo, contenedor)
{
	var part = partidos.filter(function(part){ return part.codigo == prop.partido })[0];
	var cand = candidatos.filter(function(cand){ return cand.codigo == prop.candidato })[0];
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

			var i = -1;
			prop.categorias.forEach(function(i)
			{
				var color = document.createElement('div');
				$(color).addClass('colorPropuesta');
				$(color).css('background-color', categorias.filter(function(cat){return cat.codigo == i})[0].color);
				$(container).append(color);
			});
	
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
		
			$(container).append(cont);
			
			var tagsContainer = document.createElement('div');
			$(tagsContainer).css('height', '30px');
			$(tagsContainer).css('position', 'relative');
			$(tagsContainer).css('overflow', 'hidden');
			$(tagsContainer).css('background', 'rgba(0,0,0,.05)');
			$(container).append(tagsContainer);

			if(modo != 2 && modo != 4)
			{
				prop.categorias.forEach(function(catCodigo)
				{
					var categoria = categorias.filter(function(cat){return cat.codigo == catCodigo })[0];
					var tagCategoria = document.createElement('div');
					if(contenedor == undefined)
						$(tagCategoria).click(function(){
							MostrarCategoria(1, categoria)
						});
					$(tagCategoria).addClass('tagCategoria');
					$(tagCategoria).attr('data-codigo', categoria.codigo);
					if(modo != 4)
						$(tagCategoria).html(categoria.nombre);
					$(tagCategoria).css('background-color', categoria.color);
					$(tagCategoria).css('background-image', 'url(../IMG/categorias/'+categoria.imagen+')');
					$(tagsContainer).append(tagCategoria);			
				});
			}

			var fuente = document.createElement('div');
			$(fuente).attr('id','fuente'+prop.codigo);
			$(fuente).addClass('fuentePropuesta');
			$(container).append(fuente);
			var fuenteLink = document.createElement('a');
			$(fuenteLink).attr('href',prop.fuente);
			$(fuenteLink).attr('target','_blank');
			$(fuenteLink).html(prop.fuente);
			$(fuente).append(fuenteLink);
	
			var linkFuente = document.createElement('div');
			$(linkFuente).addClass('linkFuentePropuesta');
			$(linkFuente).html('fuente');
			$(linkFuente).click(function(e) {
                $('#fuente'+prop.codigo).slideToggle(100);
            });
			$(tagsContainer).append(linkFuente);

			
			if(modo != 1 && modo != 4)
				$(container).append(MostrarCandidato(2, cand, part));
			else
			{
				$(titulo).css('padding-left', 0);
				$(texto).css('padding-left', 0);
			}
			
			var i = -1;
			
			var adminContainer = document.createElement('div');
			$(adminContainer).addClass('adminPartidoContainer');
			$(container).append(adminContainer);

			var botonEditar = document.createElement('div');
			$(botonEditar).attr('id', prop.codigo);
			$(botonEditar).addClass('botonEditar');
			$(botonEditar).click(function(){
				MostrarEditarPropuesta(prop)
			});
			$(adminContainer).append(botonEditar);
			
			var botonEliminar = document.createElement('div');
			$(botonEliminar).attr('id', prop.codigo);
			$(botonEliminar).addClass('botonEliminar');
			$(botonEliminar).click(function(){
				MostrarEliminarPropuesta(prop)
			});
			$(adminContainer).append(botonEliminar);

			if(contenedor == undefined)
				return container;
			else
				$(contenedor).append(container);
					
		}
	}
}

function CargarAgrupamientosPropuestas(modo, codigoItem)
{
	var selectFiltrosLabel = document.createElement('div');
	$(selectFiltrosLabel).addClass('selectLabel');
	$(selectFiltrosLabel).html('Agrupar por');
	$('#groupContainer').append(selectFiltrosLabel);
	
	var selectFiltros = document.createElement('select');
	$(selectFiltros).addClass('selectFiltros agrupamientos');
	$(selectFiltros).change(function(e) {
		AgruparPropuestas(e, modo, codigoItem);
	});
	$('#groupContainer').append(selectFiltros);
	
	//Opcion por default, sin agrupamiento
	var noOption = document.createElement('option');
	$(noOption).addClass('optionFiltros');
	$(noOption).attr('value', '-1');
	$(noOption).html('Ninguno');
	$(selectFiltros).append(noOption);

	//Si no estamos en una categoria, agregamos el agrupamiento por categoria
	if(modo != 2)
	{
		var optionCategorias = document.createElement('option');
		$(optionCategorias).addClass('optionFiltros');
		$(optionCategorias).attr('value', '2');
		$(optionCategorias).html('Tema');
		$(selectFiltros).append(optionCategorias);
	}
	
	//Si no estamos en un candidato, agregamos el agrupamiento por candidato
	if(modo != 1)
	{
		var optionCandidatos = document.createElement('option');
		$(optionCandidatos).addClass('optionFiltros');
		$(optionCandidatos).attr('value', '1');
		$(optionCandidatos).html('Candidato');
		$(selectFiltros).append(optionCandidatos);
	}

	//Si no estamos en un candidato ni en un partido, agregamos el agrupamiento por partido
	if(modo != 1 && modo != 0)
	{
		var optionPartidos = document.createElement('option');
		$(optionPartidos).addClass('optionFiltros');
		$(optionPartidos).attr('value', '0');
		$(optionPartidos).html('Partido');
		$(selectFiltros).append(optionPartidos);
	}
	
	//Aplicamos Selectric a los dropdown
	$(selectFiltros).selectric();
}


function CargarOrdenamientosPropuestas(modo, codigoItem)
{
	var selectFiltrosLabel = document.createElement('div');
	$(selectFiltrosLabel).addClass('selectLabel');
	$(selectFiltrosLabel).html('Ordenar por');
	$('#sortContainer').append(selectFiltrosLabel);
	
	var selectOrder = document.createElement('select');
	$(selectOrder).addClass('selectFiltros ordenamientos');
	$(selectOrder).change(function(e) {
		OrdenarPropuestas(e, modo, codigoItem);
	});	
	$('#sortContainer').append(selectOrder);
	
	//Opcion por default, sin agrupamiento
	var noOption = document.createElement('option');
	$(noOption).addClass('optionFiltros');
	$(noOption).attr('value', '-1');
	$(noOption).html('Ninguno');
	$(selectOrder).append(noOption);

	var optionCantidad = document.createElement('option');
	$(optionCantidad).attr('value', '0');
	$(optionCantidad).html('Cantidad de propuestas');
	$(selectOrder).append(optionCantidad);

	var optionAlfabetica = document.createElement('option');
	$(optionAlfabetica).attr('value', '1');
	$(optionAlfabetica).html('Alfabeticamente');
	$(selectOrder).append(optionAlfabetica);

	//Aplicamos Selectric a los dropdown
	$(selectOrder).selectric();
}

function AgruparPropuestas(e, modo, codigoItem)
{
	$('.propuestasItemsContainer').html('');
	var propuestasFiltradas = GetPropuestas(modo, codigoItem);
	switch(e.target.value)
	{
		//ningun agrupamiento
		case '-1':
			propuestasFiltradas.forEach(function(prop)
			{
				MostrarPropuesta(prop, modo);
			});
		break;
		//por partido
		case '0':
			partidos.forEach(function(part){
				var props = propuestasFiltradas.filter(function(prop){ return prop.partido == part.codigo });
				$('.propuestasItemsContainer').append(HeaderPartido(part, true, props.length));
				if(props.length > 0)
					props.forEach(function(prop)
					{
						MostrarPropuesta(prop, 0);
					});
				else
					$('.propuestasItemsContainer').append(NoPropuesta(part));
			});
		break;
		//por candidato
		case '1':
			GetCandidatos(modo == 0 ? codigoItem : undefined).forEach(function(cand){
				var props = propuestasFiltradas.filter(function(prop){ return prop.candidato == cand.codigo });
				$('.propuestasItemsContainer').append(HeaderCandidato(cand, GetPartido(cand.partido), true, props.length));
				if(props.length > 0)
					props.forEach(function(prop)
					{
						MostrarPropuesta(prop, 1);
					});
				else
					$('.propuestasItemsContainer').append(NoPropuesta(cand));
			});
		break;
		//por tema
		case '2':
			categorias.forEach(function(cat){
				var props = propuestasFiltradas.filter(function(prop){ return prop.categorias.indexOf(cat.codigo) > -1 });
				$('.propuestasItemsContainer').append(HeaderCategoria(cat, true, props.length));
				if(props.length > 0)
					props.forEach(function(prop)
					{
						if (modo == 0)
							MostrarPropuesta(prop, 0);
						else if (modo == 1)
							MostrarPropuesta(prop, 1);
					});
				else
					if (modo == 0)
						$('.propuestasItemsContainer').append(NoPropuesta(GetPartido(codigoItem), cat));
					else if (modo == 1)
						$('.propuestasItemsContainer').append(NoPropuesta(GetCandidato(codigoItem), cat));
			});
		break;
	}
}

function OrdenarPropuestas(e, modo, codigoItem)
{
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
		//$('.graficoContainer').css('display', 'none');
	}
}

function GenerarGrafico(modo, codigoItem, contenedor)
{
	var chart = document.createElement('canvas');
	if($(contenedor).find('#chart').length == 0)
	{
		$(chart).attr('id','chart').css('width','100%').css('height', $(contenedor).hasClass('datosCandidatoContainer') ? '100%' : '400');
		$(contenedor).find('.graficoContainer').append(chart);
		
		var data = { labels: [], datasets: [] };
		switch(modo)
		{
			case 0:
			case 1:
			{
				categorias.forEach(function(cat){ 
					data.labels.push(cat.abreviatura);
				});
				var i = 0;
				if(modo == 0)
				{
					GetCandidatos(codigoItem).forEach(function(cand)
					{
						data.datasets[i] = { label: cand.nombre, data: [] };
						var propsCandidato = GetPropuestas(1, cand.codigo);
						categorias.forEach(function(cat){ 
							data.datasets[i].data.push(propsCandidato.filter(function(prop){return prop.categorias.indexOf(cat.codigo) > -1}).length);
						});
						i++;
					});
				}
				else
				{
					var cand = GetCandidato(codigoItem);
					data.datasets[0] = { label: cand.nombre, data: [] };
					var propsCandidato = GetPropuestas(1, cand.codigo);
					categorias.forEach(function(cat){ 
						data.datasets[0].data.push(propsCandidato.filter(function(prop){return prop.categorias.indexOf(cat.codigo) > -1}).length);
					});
				}
			}break;
			case 2:
			{
				data.datasets[0] = { label: 'Propuestas', data: [] };
				candidatos.forEach(function(cand){ 
					data.labels.push(cand.nombre.split(' ').slice(1).join(' '));
					data.datasets[0].data.push(GetPropuestas(1, cand.codigo).filter(function(prop){return prop.categorias.indexOf(codigoItem) > -1}).length);
				});
			}break;
		};
		window.myObjBar = new Chart(chart.getContext("2d")).Bar(data, {
			barStrokeWidth : 0,
			barShowStroke : false,
			barValueSpacing : 1,
			responsive : false,
			maintainAspectRatio: false,
			scaleFontSize:15,
			showScale: true,
			omitXLabels: $(contenedor).hasClass('datosCandidatoContainer') ? true : false,
			scaleShowGridLines : true,
			multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>"
		});
		
		switch(modo)
		{
			case 0:
			case 1:
			{
				for(var i=0; i< categorias.length;i++)
					myObjBar.datasets.forEach(function(dataSet){
						dataSet.bars[i].highlightFill = dataSet.bars[i].fillColor = categorias[i].color;
					});
				myObjBar.update();
				chart.onclick = function(evt){
					var activeBars = myObjBar.getBarsAtEvent(evt);
				};
			}break;
			case 2:
			{
				for(var i=0; i< candidatos.length;i++)
					myObjBar.datasets.forEach(function(dataSet){
						dataSet.bars[i].strokeColor = dataSet.bars[i].highlightFill = dataSet.bars[i].fillColor = GetPartido(candidatos[i].partido).color;
					});
				myObjBar.update();
				chart.onclick = function(evt){
					var activeBars = myObjBar.getBarsAtEvent(evt);
				};
			}break;
		}
	}
	else
	{
	}
}

function NoPropuesta(cosa, categoria)
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
		GetCandidatos(cosa.codigo).filter(function(a){return a.partido == cosa.codigo}).forEach(function(a)
		{
			var tweet = document.createElement('a');
			$(tweet).addClass('twitterButton');
			$(tweet).html('Escribile a '+a.nombre);
			$(tweet).click(function(e) {
				//makeShort(cont, window.location.origin + window.location.pathname + '#candidato/'+a.nombre.split(' ').join('-'), function(){
				window.open('https://twitter.com/intent/tweet?'+
				'url='+location.origin+location.pathname+'%23propuestas%2Fcandidato%2F'+a.nombre.split(' ').join('-')+'&'+
				'related=PartidodelaRed&'+
				'text=' + 'Hola ' + a.twitter + ' %23yvosquepropones para ' + ObtenerNombreLocalidad(0, null) + (categoria ? ' sobre '+categoria.nombre : ''), 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
				//});[
			});
			$(tweetContainer).append(tweet);
		});
		$(cont).append(tweetContainer);
	}
	else if(cosa.twitter != undefined)
	{
		$(titulo).html('No tiene propuestas en sus canales online oficiales');
		$(cont).append(titulo);

		var tweetContainer = document.createElement('div');
		$(tweetContainer).css('display', 'block').css('margin','0 auto 20px auto').css('text-align','center');

		var tweet = document.createElement('a');
		$(tweet).addClass('twitterButton');
		$(tweet).html('Preguntale a '+cosa.nombre+' que piensa sobre esto');
			$(tweet).click(function(e) {
				//makeShort(cont, window.location.origin + window.location.pathname + '#candidato/'+cosa.nombre.split(' ').join('-'), function(){
				window.open('https://twitter.com/intent/tweet?'+
				'url='+location.origin+location.pathname+'%23propuestas%2Fcandidato%2F'+cosa.nombre.split(' ').join('-')+'&'+
				'related=PartidodelaRed&'+
				'text=' + 'Hola ' + cosa.twitter + ' %23yvosquepropones para la ' + ObtenerNombreLocalidad(1, cosa) + (categoria ? ' sobre '+categoria.nombre : ''), 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
				//});
			});
		$(tweetContainer).append(tweet);
		$(cont).append(tweetContainer);
	}
	
	return cont;
}

function ObtenerNombreLocalidad(tipo, candidato)
{
	switch(tipo)
	{
		case 0:
			if (document.getElementById('selectCargos').value == 0)
				return Ciudad 
			else if (document.getElementById('selectCiudades').value == 0)
				return Ciudad
			else
				return ciudades.filter(function(ciu){return ciu.codigo == document.getElementById('selectCiudades').value})[0].nombre;
		break;
		case 1:
			if (candidato.cargo == 0)
				return Ciudad 
			else if (candidato.ciudad == 0)
				return Ciudad
			else
				return ciudades.filter(function(ciu){return ciu.codigo == candidato.ciudad})[0].nombre;
		break;
	}
}