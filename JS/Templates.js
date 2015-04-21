function MostrarContenedor(tipo)
{
	var template = null;
	switch(tipo)
	{
		case contenedores.PARTIDOS:
			template = "<div class='partidosContainer'>"+
            	"<div class='title'>Partidos Polítcos y Frentes</div>"+
				"</div> ";
			break;
		case contenedores.CANDIDATOS:
			template = "<div class='candidatosContainer'>"+
            	"<div class='title'>Candidatos a Jefe de Gobierno</div>"+
				"</div> ";
			break;
		case contenedores.PROPUESTAS:
			template = "<div class='propuestasContainer'>"+
					"<div class='title'>Propuestas</div>"+
					"<div class='tipo' id='salud'>"+
						"<div class='title'><img src='IMG/temas/salud.png' height='60' width='60' /><span style='color:#D99ED6;'>Salud</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='educacion'>"+
						"<div class='title'><img src='IMG/temas/educacion.png' /><span style='color:#9EB8D9;'>Educación</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='sociedad'>"+
						"<div class='title'><img src='IMG/temas/sociedad.png' /><span style='color:#D99EA6;'>Sociedad</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='seguridad'>"+
						"<div class='title'><img src='IMG/temas/seguridad.png' /><span style='color:#ECEAA8;'>Seguridad</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='economia'>"+
						"<div class='title'><img src='IMG/temas/economia.png' /><span style='color:#9ED9C3;'>Economía</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='derechosHumanos'>"+
						"<div class='title'><img src='' /><span style='color:#333333;'>Derechos Humanos</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='transporte'>"+
						"<div class='title'><img src='IMG/temas/transporte.png' /><span style='color:#AA7FFF;'>Transporte</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='institucional'>"+
						"<div class='title'><img src='IMG/temas/institucional.png' /><span style='color:#FFAA7F;'>Institucional</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='planeamientoUrbano'>"+
						"<div class='title'><img src='IMG/temas/planificacionUrbana.png' /><span style='color:#D9BE9E;'>Planeamiento Urbano</span><span class='quantityList'>0</span></div>"+
					"</div>"+
					"<div class='tipo' id='internacional'>"+
						"<div class='title'><img src='IMG/temas/internacional.png' /><span style='color:#55D4FF;'>Internacionales</span><span class='quantityList'>0</span></div>"+
					"</div>"+
				"</div> ";
			break;
	};
	return template;
}

function HeaderPartido(part)
{
	var container = document.createElement('div');
	$(container).attr('id', part.nombre);
	$(container).addClass('partidoContainer');
	$(container).css('display', 'block').css('width', '100%');
	$(container).click(function(){
		MostrarPartido(1, part)
	});
	
	var imagen = document.createElement('div');
	$(imagen).addClass('imagenPartido_Header');
	$(imagen).css('background-image', 'url(IMG/partidos/' + part.imagen + ')');
	$(container).append(imagen);
	
	var nombre = document.createElement('div');
	$(nombre).addClass('item').addClass('nombre_Header');
	$(nombre).css('color', part.color).css('background-color', '#fff');
	$(nombre).html(part.nombre);
	$(container).append(nombre);
	
	var candidatosDIV = document.createElement('div');
	$(candidatosDIV).addClass('item').addClass('candidatos_Header');
	$(candidatosDIV).html(candidatos.filter(function(a){return a.partido == part.codigo}).length);
	$(container).append(candidatosDIV);
	
	var propuestasDIV = document.createElement('div');
	$(propuestasDIV).addClass('item').addClass('propuestas_Header');
	var cantPropuestas = 0;
	cantPropuestas = propuestas.filter(function(a){return a.partido == part.codigo}).length;
	$(propuestasDIV).html(cantPropuestas);
	if(cantPropuestas == 0)
		$(propuestasDIV).css('color','#f11');
	$(container).append(propuestasDIV);
	
	return container;
}

function HeaderCandidato(cand)
{
	
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
	if(cosa == null)
		$(texto).html('Volver al inicio ');
	else
		$(texto).html('Volver a ' + cosa.nombre);
		
	$(cont).click(function(e) {
		if(cosa == null)
			CargaInicial();
		else if(cosa.propuestas == undefined)
			MostrarPartido(1, cosa);
		else
			MostrarCandidato(1, cosa);
    });	
		
	$(cont).append(texto);
	
	return cont;
}