var candidato1;
var candidato2;
var pos = 1;

function CargarTemplateVersus(nuevo)
{
	if(nuevo)
	{
		loadcssfile('CSS/versus.css');

		var seccionContainer = document.createElement('div');
		$(seccionContainer).addClass('seccionContainer');
		$('.contentContainer').append(seccionContainer);
		//$('.contentContainer').css('width', $('.contentContainer').outerWidth(true) + $(window).outerWidth(true) + 'px');
		
		var wrapperContainer = document.createElement('div');
		$(wrapperContainer).addClass('wrapperContainer');
		$(seccionContainer).append(wrapperContainer);

		var versusContainer = document.createElement('div');
		$(versusContainer).attr('id', 'versusContainer');
		$(versusContainer).addClass('versusContainer');
		$(wrapperContainer).append(versusContainer);
	}
	else
	{
		var versusContainer = $('#versusContainer');
		versusContainer.html('');
	}

	$(versusContainer).append(MostrarContenedor(contenedores.CANDIDATOS));
	
	var versusSubTitle = document.createElement('div');
	$(versusSubTitle).addClass('versusSubtitle');
	$(versusSubTitle).html('Enfrentá a los dos candidatos del ballotage, navega a través de las categorías y compará las prioridades de cada uno.');
	$(versusContainer).children('.candidatosContainer').append(versusSubTitle);
	
	FiltrarContenido();
	if(candidatosFiltrados.length > 2)
	{
		var candidatosVersusContainer = document.createElement('div');
		$(candidatosVersusContainer).attr('id', 'candidatosVersus');
		$(versusContainer).children('.candidatosContainer').append(candidatosVersusContainer);
		CargarContenido(contenedores.CANDIDATOS, $(candidatosVersusContainer));
	}

	$(versusContainer).append(MostrarContenedor(contenedores.CANDIDATOS_VERSUS));
	$(versusContainer).append(MostrarContenedor(contenedores.PROPUESTAS_VERSUS));
	
	if(cargos.length == 1)
	{
		$(versusContainer).find('#textTipoCandidato').html(cargos[0].nombre);
		$(versusContainer).find('#selectCargos').hide();
	}
	
	CargarDrag();

	$(document).scroll(function (e){
		$('.versusCategoryContainer').each(function(index, element) {
			var escrol = $('body').scrollTop();
			var elTop = $(element).offset().top;
			var elBottom = $(element).offset().top + $(element).height()
			var elLeft = $(element).offset().left;
			var bar = $(element).children('.candidatoContainer_Header');
			if(escrol >= elTop && escrol <= elBottom)
			{
				$(bar).addClass('headerFixed');
				$(bar).css('left', elLeft+'px');
			}
			else
			{
				$(bar).removeClass('headerFixed');
				$(bar).css('left','0');
			}
		});
	});

	setTimeout(function(){
		if(candidatos.filter(function(cand){return cand.enBallotage == 1; }).length > 0)
		{
			var index = 1;
			candidatos.filter(function(cand){return cand.enBallotage == 1; }).forEach(function(cand) {
				CargarCandidatoVersus(cand, index);
				index++;
			});
		}
	}, 200);
	return true;
}

function CargarDrag()
{
	pos = 1;
	$('.versusContainer').find('.candidatoContainer').each(function(index, element) {
        $(element).draggable(
			{ 
				cursor: "move", 
				helper: 'clone',
				start: function() {
					$('.versusContainer').find('.candidatoVersusContainer').addClass('wait');
				},
				drag: function() {
				},
				stop: function() {
					$('.versusContainer').find('.candidatoVersusContainer.dropped').removeClass('wait');
				}
			}
		);
		$(element).click(function(e) {
			var cand = GetCandidato(parseInt($(e.currentTarget).attr('data-codigo')));
			var index = pos;
			CargarCandidatoVersus(cand, index);
			
			pos = (pos == 1) ? 2 : 1;
        });
    });

	$('.versusContainer').find('.candidatoVersusContainer').addClass('wait').each(function(index, element) {
        $(element).droppable({ 
				accept: ".candidatoContainer", 
				drop: function( event, ui ) {
					var cand = GetCandidato(parseInt($(ui.draggable[0]).attr('data-codigo')));
					var index = parseInt($(this).attr('id').split('candidatoVersus')[1]);
					CargarCandidatoVersus(cand, index);
				}
			}
		);
    });
}

function CargarCandidatoVersus(cand, index)
{
		var c = hexToRgb(GetPartido(cand.partido).color);
		var contVersus = $('#candidatoVersus'+index)[0];
		$(contVersus).html('');
		$(contVersus).removeClass('wait').addClass('dropped');
		$(contVersus).css('border-color', 'rgb('+c.r+', '+c.g+', '+c.b+')');
		MostrarCandidato(4, cand, GetPartido(cand.partido), cand.PASO, $(contVersus));
		
		var conts = $('div[id="propuestasVersus'+index+'"]');
		conts.html('');
		conts.css('background-color', 'rgba('+c.r+', '+c.g+', '+c.b+', .3)');
		GetPropuestas(1, cand.codigo).forEach(function(prop)
		{
			prop.categorias.forEach(function(catCodigo){
				var cont = $('#propuestasVersus'+index+'[data-codigo="'+catCodigo+'"]');
				MostrarPropuesta(prop, 4, cont);
			});
		});
		
		conts.each(function(i, contenedor){
			if(contenedor.children.length == 0)
				$(contenedor).append(NoPropuesta(cand));
			$('#'+$(contenedor).attr('data-codigo')+index).children().remove();
			MostrarCandidato(5, cand, GetPartido(cand.partido), $(contenedor).attr('data-codigo'), $('#'+$(contenedor).attr('data-codigo')+index));
		});
		
		VerificarPropuestas(cand);
		AbrirPropuestas();
}