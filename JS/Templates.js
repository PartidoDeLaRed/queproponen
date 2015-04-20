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
						"<div class='title'><img src='IMG/temas/salud.png' height='60' width='60' /><span style='color:#D99ED6;'>Salud</span></div>"+
					"</div>"+
					"<div class='tipo' id='educacion'>"+
						"<div class='title'><img src='IMG/temas/educacion.png' /><span style='color:#9EB8D9;'>Educación</span></div>"+
					"</div>"+
					"<div class='tipo' id='sociedad'>"+
						"<div class='title'><img src='IMG/temas/sociedad.png' /><span style='color:#D99EA6;'>Sociedad</span></div>"+
					"</div>"+
					"<div class='tipo' id='seguridad'>"+
						"<div class='title'><img src='IMG/temas/seguridad.png' /><span style='color:#ECEAA8;'>Seguridad</span></div>"+
					"</div>"+
					"<div class='tipo' id='economia'>"+
						"<div class='title'><img src='IMG/temas/economia.png' /><span style='color:#9ED9C3;'>Economía</span></div>"+
					"</div>"+
					"<div class='tipo' id='derechosHumanos'>"+
						"<div class='title'><img src='' /><span style='color:#333333;'>Derechos Humanos</span></div>"+
					"</div>"+
					"<div class='tipo' id='planeamientoUrbano'>"+
						"<div class='title'><img src='IMG/temas/planificacionUrbana.png' /><span style='color:#D9BE9E;'>Planeamiento Urbano</span></div>"+
					"</div>"+
				"</div> ";
			break;
	};
	return template;
}