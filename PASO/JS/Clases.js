var contenedores = {
	PARTIDOS: 0,
	CANDIDATOS: 1,
	PROPUESTAS: 2
}

function Partido(_codigo, _nombre, _imagen, _color)
{
	var partido = 
	{
		codigo:_codigo,
		nombre: _nombre,
		imagen: _imagen,
		color: _color
	}
	return partido;
}

function Candidato(_codigo, _nombre, _lista, _imagen, _partido, _twitter)
{
	var candidato = 
	{
		codigo:_codigo,
		nombre: _nombre,
		lista: _lista,
		imagen: _imagen,
		twitter: _twitter,
		partido: _partido
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
