var editarPropuesta = false;
var edicionPropuestaCodigo = -1;
function MostrarAgregarPropuesta(cand)
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionPropuesta.html', null, function(a, b, c)
	{
		editarPropuesta = false;
		if(cand != undefined)
		{
			$('#mas-input').css('display','inline-block');
			document.getElementById('candidato-input').value = cand.codigo;
		}
	});
}

function MostrarEditarPropuesta(prop)
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionPropuesta.html', null, function(a, b, c)
	{
		$('#mas-input').attr('checked','false').css('display','none');
		document.getElementById('titulo-input').value = prop.titulo;
		document.getElementById('texto-input').value = prop.texto;
		document.getElementById('candidato-input').value = prop.candidato.codigo;
		document.getElementById('categoria-input').value = prop.categoria.codigo;
		editarPropuesta = true;
		edicionPropuestaCodigo = prop.codigo;
	});
}

function EdicionPropuesta()
{
	$('#loading').fadeIn('fast');

	var _titulo = document.getElementById('titulo-input').value;
	var _texto = document.getElementById('texto-input').value;
	var _candidato = document.getElementById('candidato-input').value;
	var _partido = partidos.filter(function(part){ return part.candidatos.filter(function(cand){return cand.codigo == document.getElementById('candidato-input').value;}).length > 0;})[0].codigo;
	var _categoria = document.getElementById('categoria-input').value;
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + (!editarPropuesta ? "PHP/AgregarPropuesta.php" : "PHP/EditarPropuesta.php"),
	  data: {
		codigo: edicionPropuestaCodigo,
		titulo: _titulo,
		texto: _texto,
		candidato: _candidato,
		partido: _partido,
		categoria: _categoria
	  }
	})
	.fail(function( msg ) {
  	})
	.done(function( msg ) {
		var prop = $.parseJSON(msg);
		if(!document.getElementById('mas-input').checked)
		{
			$('#paneles').fadeOut('fast');
			$('#paneles').html('');
		}
		else{
			document.getElementById('titulo-input').value = '';
			document.getElementById('texto-input').value = '';
		}
		if(!editarPropuesta)
		{
			MostrarPropuesta(prop , prop.partido, prop.candidato);
			VerificarPropuestas();
		}
		else
		{
			var container = $('#prop'+prop.codigo);
			if(!container.parent().attr('id') == 'cat'+prop.categoria.codigo)
			{
				container.detach();
				$('#cat'+prop.categoria.codigo).append(container);
			}
			container.children('.tituloPropuesta').html(prop.titulo);
			container.children('.textoPropuesta').html(prop.texto);
			container.children('.imagenCandidato_mini').css('background-image', 'IMG/candidatos/'+prop.candidato.imagen);
			container.children('.colorCandidato_mini').css('background-color', prop.partido.color);
		}
		$('#loading').fadeOut('fast');
  	});

}

function MostrarEliminarPropuesta(cand)
{
	var wrapper = document.createElement('div');
	$(wrapper).addClass('pn-wraper');

	var container = document.createElement('div');
	$(container).addClass('pn-container');
	$(container).css('padding-top', '20px');
	$(wrapper).append(container);

	var text = document.createElement('div');
	$(text).css('font-size','25px').css('margin','30px 0');
	$(text).html('Esta seguro que desea borrar esta propuesta?');
	$(container).append(text);

	var aceptar = document.createElement('button');
	$(aceptar).addClass('');
	$(aceptar).html('Aceptar');
	$(aceptar).click(function(){
		EliminarPropuesta(cand);
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

function EliminarPropuesta(prop, popup)
{
	$('#loading').fadeIn('fast');
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + "PHP/EliminarPropuesta.php",
	  data: {
		codigo: prop.codigo
	  }
	})
	.fail(function( msg ) {
  	})
	.done(function( msg ) {
		$('#paneles').fadeOut('fast');
		$('#paneles').html('');
		$('#prop'+prop.codigo).remove();
		VerificarPropuestas();
		$('#loading').fadeOut('fast');
  	});

}