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
		color: _color,
		candidatos: function(){return candidatos.filter(function(a){return a.partidoCodigo == _codigo})},
		propuestas: function(){return propuestas.filter(function(a){return a.partidoCodigo == _codigo})}
	}
	return partido;
}

function Candidato(_codigo, _nombre, _lista, _imagen, _twitter, _partido, _ganador)
{
	var candidato = 
	{
		codigo:_codigo,
		nombre: _nombre,
		lista: _lista,
		imagen: _imagen,
		twitter: _twitter,
		partidoCodigo: _partido,
		ganador: _ganador,
		partido: function(){return partidos.filter(function(a){return a.codigo == _partido})[0]},
		propuestas: function(){return propuestas.filter(function(a){return a.candidatoCodigo == _codigo})}
	}
	return candidato;
}

function Propuesta(_codigo, _titulo, _texto, _tema, _partido, _candidato)
{
	var propuesta = 
	{
		codigo: _codigo,
		tema: _tema,
		titulo: _titulo,
		texto: _texto,
		partidoCodigo: _partido,
		partido: function(){return partidos.filter(function(a){return a.codigo == _partido})[0]},
		candidatoCodigo: _candidato,
		candidato: function(){return candidatos.filter(function(a){return a.codigo == _candidato})[0]}
	}
	return propuesta;
}
