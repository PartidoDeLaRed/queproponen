function MostrarContenedor(tipo)
{
	var template = null;
	switch(tipo)
	{
		case contenedores.PARTIDOS:
			template = 
			"<div class='partidosContainer'><div class='title'>Partidos Políticos y Frentes</div><div class='addPartido' onclick='javascript:MostrarAgregarPartido()'></div></div> ";
			break;
		case contenedores.CANDIDATOS:
			template = "<div class='candidatosContainer'>"+
            	"<div class='title'>Candidatos a <div id='textTipoCandidato'></div></div><div class='addCandidato' onclick='javascript:MostrarAgregarCandidato()'></div>"+
				"</div>";
			break;
		case contenedores.PROPUESTAS:
			template = "<div class='propuestasContainer'>"+
						"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)'>Propuestas</div><div class='addPropuesta' onclick='javascript:MostrarAgregarPropuesta()'></div>";
			template += "</div> ";
			break;
	};
	return template;
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
	$(imagen).css('background-image', 'url(../IMG/categorias/' + categoria.imagen + ')');
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

