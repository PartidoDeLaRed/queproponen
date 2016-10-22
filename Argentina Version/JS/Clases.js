var contenedores = {
	PARTIDOS: 0,
	CANDIDATOS: 1,
	CATEGORIAS: 2,
	PROPUESTAS: 3,
	CANDIDATOS_VERSUS: 4,
	PROPUESTAS_VERSUS: 5
}

function Seccion(_codigo, _nombre, _descripcion, _clase)
{
	var seccion = 
	{
		codigo: _codigo,
		nombre: _nombre,
		descripcion: _descripcion,
		clase: _clase,
		selected : false
	}
	return seccion;
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
