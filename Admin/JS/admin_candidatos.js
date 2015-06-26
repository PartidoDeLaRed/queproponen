window.editarCandidato = false;
window.edicionCandidatoCodigo = -1;
partidoAnteriorCodigo = -1;
function MostrarAgregarCandidato(part)
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionCandidato.html?'+ new Date().getTime(), null, function(a, b, c)
	{
		window.editarCandidato = false;
		if(part != undefined)
		{
			document.getElementById('partido-input').value = part.codigo;
		}
		document.getElementById('cargo-input').value = document.getElementById('selectCargos').value;
		document.getElementById('ciudad-input').value = document.getElementById('selectCiudades').value;
		$('.imageSource').css('background-image','url(../IMG/candidatos/default.png)');
	});
}

function MostrarEditarCandidato(cand)
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionCandidato.html', null, function(a, b, c)
	{
		var paso = cand.ganador == '1' ? true : false;
		document.getElementById('name-input').value = cand.nombre;
		document.getElementById('cargo-input').value = cand.cargo.codigo;
		if(cand.cargo.codigo == 0)
		{
			document.getElementById('ciudad-input').value = 0;
			$('#ciudad-input').parent().slideUp('100ms');
		}
		else
			document.getElementById('ciudad-input').value = cand.ciudad.codigo;
		document.getElementById('list-input').value = cand.lista;
		document.getElementById('twitter-input').value = cand.twitter;
		$('.imageSource').css('background-image','url(../IMG/candidatos/'+cand.imagen+')');
		$('#PASO-input').prop('checked', paso);
		document.getElementById('partido-input').value = cand.partido.codigo;
		window.editarCandidato = true;
		window.edicionCandidatoCodigo = cand.codigo;
		partidoAnteriorCodigo = cand.partido.codigo;
		$('#submit').html('Editar Candidato');
	});
}

function EdicionCandidato()
{
	var check = $('#PASO-input');
	var _name = document.getElementById('name-input').value;
	var _cargo = document.getElementById('cargo-input').value;
	var _ciudad = document.getElementById('ciudad-input').value;
	var _lista = document.getElementById('list-input').value;
	var _twitter = document.getElementById('twitter-input').value;
	var _PASO = document.getElementById('PASO-input').checked ? 1 : 0;
	var _partido = document.getElementById('partido-input').value;
	var _image = null;
	var upload = $('#image-input').data('uploadifive');
	if(window.nombreImagenCandidato != null)
	{
		if($.inArray(window.nombreImagenCandidato.split('.')[1], ['png','PNG','jpg','JPG','jpeg','JPEG','gif','GIF','bmp','BMP']) != -1)
		{
			_image = document.getElementById('name-input').value.split(' ').join('_') + '.' + window.nombreImagenCandidato.split('.')[1];
			$('#image-input').data('uploadifive').settings.formData =  {'name' : _image};
			$('#image-input').data('uploadifive').settings.onUploadComplete = function(file, response, data)
			{
				ActionEdicionCandidato(_name, _lista, _twitter, _PASO, _cargo, _ciudad, _partido, _image);
				var container = $('.candidatosContainer').children('#cand'+window.edicionCandidatoCodigo);
				$(container).find('.imagenCandidato').css('background-image', 'none').css('background-image', 'url(../IMG/candidatos/'+response+'?'+ new Date().getTime()+')');
			};
			$('#image-input').uploadifive('upload');
		}
		else
		{
			alert('Formato de archivo inválido. Solo se aceptan PNG, JPG y GIF');
			$('#image-input').uploadifive('clearQueue');
		}
	}
	else
		ActionEdicionCandidato(_name, _lista, _twitter, _PASO, _cargo, _ciudad, _partido, _image);
}

function ActionEdicionCandidato(_name, _lista, _twitter, _PASO, _cargo, _ciudad, _partido, _image)
{
	$('#loading').fadeIn('fast');
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + (!window.editarCandidato ? "PHP/AgregarCandidato.php" : "PHP/EditarCandidato.php"),
	  data: {
		codigo: window.edicionCandidatoCodigo,
		name: _name,
		list: _lista,
		twitter: _twitter,
		PASO: _PASO,
		image: _image != null ? _image : (!window.editarCandidato ? 'default.png' : 'noChange'),
		cargo: _cargo,
		ciudad: _ciudad,
		partido: _partido
	  }
	})
	.fail(function( msg ) {
  	})
	.done(function( msg ) {
		var cand = $.parseJSON(msg);
		$('#paneles').fadeOut('fast');
		$('#paneles').html('');
		if(!window.editarCandidato)
		{
			if(document.getElementById('selectCargos').value == -1  || cand.cargo.codigo == document.getElementById('selectCargos').value)
				if(document.getElementById('selectCiudades').value == -1 || cand.ciudad.codigo == document.getElementById('selectCiudades').value)
					MostrarCandidato(0, cand, cand.partido);
			partidos.filter(function(part){return part.codigo == cand.partido.codigo;})[0].candidatos.push(cand);
		}
		else
		{
			partidoAnterior = partidos.filter(function(_part){return _part.codigo == partidoAnteriorCodigo;})[0];
			candidato = partidoAnterior.candidatos.filter(function(cand){return cand.codigo == window.edicionCandidatoCodigo;})[0];
			var cargoAnterior = candidato.cargo;
			var ciudadAnterior = candidato.ciudad;
			candidato.nombre = cand.nombre;
			candidato.lista = cand.lista;
			candidato.imagen = cand.imagen;
			candidato.ganador = cand.ganador;
			candidato.cargo = cand.cargo;
			candidato.ciudad = cand.ciudad;
			candidato.partido = cand.partido;
			if(cand.partido.codigo != partidoAnteriorCodigo)
			{
				partidoNuevo = partidos.filter(function(_part){return _part.codigo == cand.partido.codigo;})[0];
				partidoNuevo.candidatos.push(candidato);
				partidoAnterior.candidatos.splice(partidoAnterior.candidatos.indexOf(candidato), 1);
			}

			var container = $('.candidatosContainer').children('#cand'+window.edicionCandidatoCodigo);
			if(document.getElementById('selectCargos').value == -1  || 
				(cand.cargo.codigo == document.getElementById('selectCargos').value && (document.getElementById('selectCiudades').value == -1 || cand.ciudad.codigo == document.getElementById('selectCiudades').value)))
			{
				$(container).find('.nombreCandidato').html(cand.nombre);
				$(container).find('.listaCandidato').html(cand.lista);
				$(container).find('.colorCandidato').css('background-color', cand.partido.color).html(cand.partido.nombre);
				$(container).find('.imagenCandidato').css('background-image', 'url(../IMG/candidatos/'+cand.imagen+'?'+ new Date().getTime()+')');
				$(container).attr('data-partido',cand.partido.codigo);
				$('.propuestaContainer[data-candidato="'+cand.codigo+'"]').find('.imagenCandidato_mini').css('background-image', 'url(../IMG/candidatos/'+cand.imagen+'?'+ new Date().getTime()+')');
			}
			else
				$(container).remove();
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