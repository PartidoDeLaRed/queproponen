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
			categorias.forEach(function(cat)
			{
				template += "<div class='tipo'>"+
								"<div class='title' onclick='javascript:ToggleCategoriaBarra(this)' >"+
									"<IMG src='../IMG/categorias/"+cat.imagen+"' height='50' width='50' />"+
									"<span style='color:"+cat.color+";'>"+cat.nombre+"</span>"+
									"<div class='arrowButton down'></div>"+
									"<span class='quantityList'>0</span>"+
								"</div>"+
								"<div id='cat"+cat.codigo+"' class='contPropuestas'></div>"+
							"</div>";
			});
			template += "</div> ";
			break;
	};
	return template;
}