var temas = {
	SALUD: {codigo:0, color: '#FF7FD4'},
	EDUCACION: {codigo:1, color: '#7FAAFF'},
	SOCIEDAD: {codigo:2, color: '#FF7F88'},
	SEGURIDAD: {codigo:3, color: '#F6F6A1'},
	DERECHOS_HUMANOS: {codigo:4, color: '#333333'},
	PLANEAMIENTO_URBANO: {codigo:5, color: '#D8AD83'},
	ECONOMIA: {codigo:6, color: '#90E5BA'},
	TRANSPORTE: {codigo:7, color: '#BC92E7'},
	INTERNACIONAL: {codigo:8, color: '#55D4FF'},
	INSTITUCIONAL: {codigo:9, color: '#FFAA7F'},
	MEDIO_AMBIENTE: {codigo:10, color: '#97EC97'},
	VIVIENDA: {codigo:11, color: '#EE446F'}
}

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
