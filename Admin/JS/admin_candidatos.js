var editarCandidato = false;
var edicionCandidatoCodigo = -1;
function MostrarAgregarCandidato(part)
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionCandidato.html', null, function(a, b, c)
	{
		editarCandidato = false;
		if(part != undefined)
		{
			document.getElementById('partido-input').value = part.codigo;
		}
	});
}

function MostrarEditarCandidato(cand)
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionCandidato.html', null, function(a, b, c)
	{
		var paso = cand.ganador == '1' ? true : false;
		document.getElementById('name-input').value = cand.nombre;
		document.getElementById('list-input').value = cand.lista;
		document.getElementById('twitter-input').value = cand.twitter;
		$('PASO-input').prop('checked', paso);
		document.getElementById('partido-input').value = cand.partido.codigo;
		editarCandidato = true;
		edicionCandidatoCodigo = cand.codigo;
	});
}

function EdicionCandidato()
{
	$('#loading').fadeIn('fast');

	var check = $('#PASO-input');
	var _name = document.getElementById('name-input').value;
	var _lista = document.getElementById('list-input').value;
	var _twitter = document.getElementById('twitter-input').value;
	var _PASO = document.getElementById('PASO-input').checked ? 1 : 0;
	var _partido = document.getElementById('partido-input').value;
	var _image = document.getElementById('image-input').files[0] ? document.getElementById('name-input').value.split(' ').join('_') + '.' + document.getElementById('image-input').files[0].name.split('.')[1] : '-';
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + (!editarCandidato ? "PHP/AgregarCandidato.php" : "PHP/EditarCandidato.php"),
	  data: {
		codigo: edicionCandidatoCodigo,
		name: _name,
		list: _lista,
		twitter: _twitter,
		PASO: _PASO,
		image: _image,
		partido: _partido
	  }
	})
	.fail(function( msg ) {
  	})
	.done(function( msg ) {
		var cand = $.parseJSON(msg);
		$('#paneles').fadeOut('fast');
		$('#paneles').html('');
		if(!editarCandidato)
		{
			MostrarCandidato(0, cand, cand.partido);
			partidos.filter(function(part){return part.codigo == cand.partido.codigo;})[0].candidatos.push(cand);
		}
		else
		{
			candidato = partidos.filter(function(part){return part.codigo == cand.partido.codigo;})[0].candidatos.filter(function(cand){return cand.codigo == edicionCandidatoCodigo;})[0];
			candidato.nombre = cand.nombre;
			candidato.lista = cand.lista;
			candidato.imagen = cand.imagen;
			candidato.partido = cand.partido;
			var container = $('.candidatosContainer').children('#cand'+edicionCandidatoCodigo);
			$(container.children()[1]).children('.nombreCandidato').html(cand.nombre);
			$(container.children()[1]).children('.listaCandidato').html(cand.lista);
			$(container.children()[1]).children('.colorCandidato').css('background-color', cand.partido.color).html(cand.partido.nombre);
			container.children('.imagenCandidato').css('background-image', 'url(IMG/candidatos/'+cand.imagen+')');
			$($('.propuestaContainer[data-candidato="'+cand.codigo+'"]').children()[2]).children('.imagenCandidato_mini').css('background-image', 'url(IMG/candidatos/'+cand.imagen+')');
		}
		$('#loading').fadeOut('fast');
  	});

}

function MostrarEliminarCandidato(cand)
{
	var wrapper = document.createElement('div');
	$(wrapper).addClass('pn-wraper');

	var container = document.createElement('div');
	$(container).addClass('pn-container');
	$(container).css('padding-top', '20px');
	$(wrapper).append(container);

	var text = document.createElement('div');
	$(text).css('font-size','25px').css('margin','30px 0');
	$(text).html('Esta seguro que desea borrar el Candidato y todas sus propuestas?');
	$(container).append(text);

	var aceptar = document.createElement('button');
	$(aceptar).addClass('');
	$(aceptar).html('Aceptar');
	$(aceptar).click(function(){
		EliminarCandidato(cand);
		$('#paneles').fadeOut('fast');
	});
	$(container).append(aceptar);

	var cerrar = document.createElement('div');
	$(cerrar).addClass('pn-closeButton');
	$(cerrar).click(function(){
		CerrarPanel();
	});
	$(container).append(cerrar);

	$('#paneles').append(wrapper);
	$('#paneles').fadeIn('fast');
}

function EliminarCandidato(cand, popup)
{
	$('#loading').fadeIn('fast');
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + "PHP/EliminarCandidato.php",
	  data: {
		codigo: cand.codigo
	  }
	})
	.fail(function( msg ) {
  	})
	.done(function( msg ) {
		$('#paneles').fadeOut('fast');
		$('#paneles').html('');
		$('.candidatosContainer').children('#cand'+cand.codigo).remove();
		$('.propuestaContainer[data-candidato="'+cand.codigo+'"]').remove();
		var candidatosPartido = partidos.filter(function(part){return part.codigo == cand.partido.codigo;})[0].candidatos;
		candidatosPartido.splice(candidatosPartido.indexOf(candidatosPartido.filter(function(e){return e.codigo == cand.codigo})[0]), 1);
		VerificarPropuestas();
		$('#loading').fadeOut('fast');
  	});

}