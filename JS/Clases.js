var temas = {
	SALUD: 0,
	EDUCACIÓN: 1,
	SOCIEDAD: 2,
	SEGURIDAD: 3,
	DERECHOS_HUMANOS: 4,
	PLANEAMIENTO_URBANO: 5,
	ECONOMÍA: 6
}

var contenedores = {
	PARTIDOS: 0,
	CANDIDATOS: 1,
	PROPUESTAS: 2
}

function Partido(_codigo, _nombre, _imagen, _color, _candidatos)
{
	var partido = 
	{
		codigo:_codigo,
		nombre: _nombre,
		imagen: _imagen,
		color: _color,
		candidatos: _candidatos
	}
	return partido;
}

function Candidato(_codigo, _nombre, _lista, _imagen, _partido, _propuestas)
{
	var candidato = 
	{
		codigo:_codigo,
		nombre: _nombre,
		lista: _lista,
		imagen: _imagen,
		partido: _partido,
		propuestas: _propuestas
	}
	return candidato;
}

function Propuesta(_titulo, _texto, _tema, _partido, _candidato)
{
	var propuesta = 
	{
		tema: _tema,
		titulo: _titulo,
		texto: _texto,
		partido: _partido,
		candidato: _candidato
	}
	return propuesta;
}
