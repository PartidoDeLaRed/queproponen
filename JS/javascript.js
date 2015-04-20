
function CargarDatos()
{
	var partidos = [
		Partido(0, 'FPV', 'fpv.png', '#4FADE7', 
			[
				Candidato(0, 'Mariano Recalde', 'CFK', 'Recalde.jpg', 0, 
					[
						Propuesta("Ampliación de los hospitales públicos", "Se planea construir 10 metros cuadrados más en cada hospital y así poder poner un inodóro más.", temas.SALUD, 0, 0),
						Propuesta("Bandas en las puertas", "Todos los días desde las 17 a las 19 hs en la puerta de cada hospital público se presentaran diversas bandas musicales para alegrarle el día a los pobres enfermos.", temas.SALUD, 0, 0)
					]
				), 
				Candidato(1, 'Gabriela Cerruti', 'LA CIUDAD ES EL OTRO', 'Cerruti.jpg', 0, 
					[
					]
				), 
				Candidato(2, 'Gustavo López', 'CIUDAD PARA TODOS', 'Lopez.jpg', 0, 
					[
					]
				), 
				Candidato(3, 'Aníbal Ibarra', 'FRENTE SÍ', 'Ibarra.jpg', 0, 
					[
					]
				), 
				Candidato(4, 'Carlos Heller', 'UNIDOS POR LA CIUDAD', 'Heller.jpg', 0, 
					[
					]
				), 
				Candidato(5, 'Carlos Oviedo', 'ESPACIO ABIERTO', 'Oviedo.jpg', 0, 
					[
					]
				), 
				Candidato(6, 'Víctor Ramos', 'REVOLUCIÓN URBANA', 'Ramos.jpg', 0, 
					[
					]
				)
			]
		),
		Partido(1, 'PRO', 'pro.png', '#FFDD00', 
			[
				Candidato(0, 'Horacio R. Larreta', 'LISTA A', 'Larreta.jpg', 1, 
					[
					]
				), 
				Candidato(1, 'Gabriela Michetti', 'HAY EQUIPO', 'Michetti.jpg', 1, 
					[
					]
				) 
			]
		),
		Partido(2, 'ECO', 'eco.png', '#87C301', 
			[
				Candidato(0, 'Martín Lousteau', 'SUMÁ +', 'Lousteau.jpg', 2, 
					[
					]
				), 
				Candidato(1, 'Graciela Ocaña', 'TRANSPARENCIA Y GESTIÓN', 'Ocania.jpg', 2, 
					[
					]
				),
				Candidato(2, 'Andrés Borthagaray', 'ABRIMOS BA', 'Borthagaray.jpg', 2, 
					[
					]
				) 
			]
		),
		Partido(3, 'MST', 'mst.png', '#D50100', 
			[
				Candidato(0, 'Héctor Bidonde', 'LISTA 1', 'Bidonde.jpg', 3, 
					[
					]
				), 
				Candidato(1, 'Sergio García', 'LISTA 2', 'Garcia.jpg', 3, 
					[
					]
				),
				Candidato(2, 'Maru Lopes', 'LISTA 3', 'Lopes.jpg', 3, 
					[
					]
				),
				Candidato(3, 'Martín Torres', 'LISTA 4', 'Torres.jpg', 3, 
					[
					]
				) 
			]
		),
		Partido(4, 'SURGEN', 'surgen.png', '#238E48', 
			[
				Candidato(0, 'Humberto Tumini', 'VIENTOS DE CAMBIO', 'Tumini.jpg', 4, 
					[
					]
				), 
				Candidato(1, 'Sergio Abrevaya', 'CIUDAD JUSTA', 'Abrevaya.jpg', 4, 
					[
					]
				)
			]
		),
		Partido(5, 'Movimiento para el Bien Comun', 'bc.png', '#198BA5', 
			[
				Candidato(0, 'Gustavo Vera', 'LISTA A', 'Vera.jpg', 5, 
					[
					]
				), 
				Candidato(1, 'Leonardo Fabre', 'LISTA B', 'Fabre.jpg', 5, 
					[
					]
				)
			]
		),
		Partido(6, 'Frente Renovador', 'fr.png', '#000000', 
			[
				Candidato(0, 'Guillermo Nielsen', 'FRENTE POR BUENOS AIRES', 'Nielsen.jpg', 6, 
					[
					]
				)
			]
		),
		Partido(7, 'Es posible', 'ep.png', '#0073C8', 
			[
				Candidato(0, 'Ivo Cutzarida', 'COMPROMISO FEDERAL', 'Cutzarida.jpg', 7, 
					[
					]
				)
			]
		),
		Partido(8, 'Camino Popular', 'cp.png', '#FE5900', 
			[
				Candidato(0, 'Claudio Lozano', 'OTRO CAMINO PARA GOBERNAR', 'Lozano.jpg', 8, 
					[
					]
				)
			]
		),
		Partido(9, 'Frente de Izquierda', 'fit.png', '#E20612', 
			[
				Candidato(0, 'Myriam Bregman', 'UNIDAD', 'Bregman.jpg', 9, 
					[
					]
				)
			]
		),
		Partido(10, 'Alternativa Buenos Aires', 'aba.png', '#14C8C7', 
			[
				Candidato(0, 'Pablo Ferreyra', 'LISTA A', 'Ferreyra.jpg', 10, 
					[
					]
				)
			]
		),
		Partido(11, 'Nuevo MAS', 'nm.png', '#F9343B', 
			[
				Candidato(0, 'Manuela Castañeira', 'LAS ROJAS', 'Castanieira.jpg', 11, 
					[
					]
				)
			]
		),
		Partido(12, 'Partido Humanista', 'ph.png', '#FE5900', 
			[
				Candidato(0, 'Gustavo Tenaglia', 'LISTA ÚNICA', 'Tenaglia.jpg', 12, 
					[
					]
				)
			]
		),
		Partido(13, 'Bandera Vecinal', 'bv.png', '#494CAB', 
			[
				Candidato(0, 'Ramiro Vasena', 'COMÚN', 'Vasena.jpg', 13, 
					[
					]
				)
			]
		),
		Partido(14, 'Movimiento Federal', 'mf.png', '#0A6955', 
			[
				Candidato(0, 'Enrique Piragini', 'CELESTE Y BLANCA', 'Piragini.jpg', 14, 
					[
					]
				)
			]
		),
		Partido(15, 'Autodeterminación y Libertad', 'ayl.png', '#790786',  
			[
				Candidato(0, 'Luis Zamora', 'CAMINAMOS PREGUNTANDO', 'Zamora.jpg', 15, 
					[
					]
				)
			]
		)
	];
	return partidos;
}

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

			var nombre = document.createElement('div');
			$(nombre).addClass('item').addClass('nombre');
			$(nombre).css('color', part.color);
			$(nombre).html(part.nombre);
			$(container).append(nombre);
			
			var imagen = document.createElement('div');
			$(imagen).addClass('imagenPartido');
			$(imagen).css('background-image', 'url(IMG/partidos/' + part.imagen + ')');
			$(container).append(imagen);
			
			var candidatos = document.createElement('div');
			$(candidatos).addClass('item').addClass('candidatos');
			$(candidatos).html(part.candidatos.length);
			$(container).append(candidatos);

			var propuestas = document.createElement('div');
			$(propuestas).addClass('item').addClass('propuestas');
			var cantPropuestas = 0;
			part.candidatos.forEach(function(e){ cantPropuestas += e.propuestas.length; });
			$(propuestas).html(cantPropuestas);
			$(container).append(propuestas);

			$('.partidosContainer').append(container);
		}break;
		case 1:
		{
			
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
			
			var propuestas = document.createElement('div');
			$(propuestas).addClass('item').addClass('propuestas');
			$(propuestas).html(cand.propuestas.length);
			$(container).append(propuestas);
		}break;
		case 1:
		{
			
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
					case temas.ECONOMÍA:
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
					case temas.EDUCACIÓN:
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
				
				$(container).append(MostrarCandidato(2, partidos.filter(function(e){return e.codigo == prop.partido;})[0].candidatos.filter(function(e){return e.codigo == prop.candidato;})[0]));
				
			}break;
			case 1:
			{
				
			}break;
		}
	}
}