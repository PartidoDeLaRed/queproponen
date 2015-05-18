window.editarPartido = false;
window.edicionPartidoCodigo = -1;
function MostrarAgregarPartido()
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionPartido.html', null, function(a, b, c)
	{
		jscolor.init();
		$('.imageSource').css('background-image','url(../IMG/partidos/default.png)');
		window.editarPartido = false;
	});
}

function MostrarEditarPartido(part)
{
	$('#paneles').fadeIn('fast');
	$('#paneles').load('Templates/EdicionPartido.html', null, function(a, b, c)
	{
		jscolor.init();

		document.getElementById('name-input').value = part.nombre;
		$('.color')[0].color.fromString(part.color.split('#')[1]);
		$('.imageSource').css('background-image','url(../IMG/partidos/'+part.imagen+')');
		window.editarPartido = true;
		window.edicionPartidoCodigo = part.codigo;
		$('#submit').html('Editar Partido');
	});
}

function EdicionPartido()
{
	var _name = document.getElementById('name-input').value;
	var _color = '#'+$('.color')[0].value;
	var _image = null;
	var upload = $('#image-input').data('uploadifive');
	if(window.nombreImagenPartido != null)
	{
		if($.inArray(window.nombreImagenPartido.split('.')[1], ['png','PNG','jpg','JPG','jpeg','JPEG','gif','GIF','bmp','BMP']) != -1)
		{
			_image = document.getElementById('name-input').value.split(' ').join('_') + '.' + window.nombreImagenPartido.split('.')[1];
			$('#image-input').data('uploadifive').settings.formData =  {'name' : _image};
			$('#image-input').data('uploadifive').settings.onUploadComplete = function(file, response, data)
			{
				ActionEdicionPartido(_name, _color, _image);
				var container = $('.partidosContainer').children('#part'+window.edicionPartidoCodigo);
				container.children('.imagenPartido').css('background-image', 'none').css('background-image', 'url(../IMG/partidos/'+response+'?'+ new Date().getTime()+')');
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
		ActionEdicionPartido(_name, _color, _image);
	

}
function ActionEdicionPartido(_name, _color, _image)
{
	$('#loading').fadeIn('fast');
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + (!window.editarPartido ? "PHP/AgregarPartido.php" : "PHP/EditarPartido.php"),
	  data: {
		codigo: window.edicionPartidoCodigo,
		name: _name,
		color: _color,
		image: _image != null ? _image : (!window.editarPartido ? 'default.png' : 'noChange')
	  }
	})
	.fail(function( msg ) {
  	})
	.done(function( msg ) {
		var part = $.parseJSON(msg);
		$('#paneles').fadeOut('fast');
		$('#paneles').html('');
		if(!window.editarPartido)
		{
			partidos.push(part);
			MostrarPartido(0, part);
		}
		else
		{
			partido = partidos.filter(function(_part){return _part.codigo == part.codigo;})[0];
			partido.nombre = part.nombre;
			partido.color = part.color;
			partido.imagen = part.imagen;
			var container = $('.partidosContainer').children('#part'+window.edicionPartidoCodigo);
			container.children('.nombre').css('color', part.color).html(part.nombre);
			container.children('.imagenPartido').css('background-image', 'none').css('background-image', 'url(../IMG/partidos/'+part.imagen+'?'+ new Date().getTime()+')');
			$($('.candidatoContainer[data-partido="'+part.codigo+'"]').children()[1]).children('.colorCandidato').css('background-color', part.color).html(part.nombre);
			$($('.propuestaContainer[data-partido="'+part.codigo+'"]').children()[2]).children('.colorCandidato_mini').css('background-color', part.color);
		}
		$('#loading').fadeOut('fast');
  	});
}

function MostrarEliminarPartido(part)
{
	var wrapper = document.createElement('div');
	$(wrapper).addClass('pn-wraper');

	var container = document.createElement('div');
	$(container).addClass('pn-container');
	$(container).css('padding-top', '20px');
	$(wrapper).append(container);

	var text = document.createElement('div');
	$(text).css('font-size','25px').css('margin','30px 0');
	$(text).html('Esta seguro que desea borrar el Partido y todos sus candidatos y propuestas?');
	$(container).append(text);

	var aceptar = document.createElement('button');
	$(aceptar).addClass('');
	$(aceptar).html('Aceptar');
	$(aceptar).click(function(){
		EliminarPartido(part);
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

function EliminarPartido(part, popup)
{
	$('#loading').fadeIn('fast');
	$.ajax({
	  method: "GET",
	  url: location.origin + location.pathname + "PHP/EliminarPartido.php",
	  data: {
		codigo: part.codigo
	  }
	})
	.fail(function( msg ) {
  	})
	.done(function( msg ) {
		$('#paneles').fadeOut('fast');
		$('#paneles').html('');
		$('.partidosContainer').children('#part'+part.codigo).remove();
		$('.candidatoContainer[data-partido="'+part.codigo+'"]').remove();
		$('.propuestaContainer[data-partido="'+part.codigo+'"]').remove();
		partidos.splice(partidos.indexOf(partidos.filter(function(e){return e.codigo == part.codigo})[0]), 1);
		VerificarPropuestas();
		$('#loading').fadeOut('fast');
  	});

}