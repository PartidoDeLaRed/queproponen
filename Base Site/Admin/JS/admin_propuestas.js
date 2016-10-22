var editarPropuesta = false;
var edicionPropuestaCodigo = -1;
partidoAnteriorCodigo = -1;
candidatoAnteriorCodigo = -1;
function MostrarAgregarPropuesta(cand)
{
$('#paneles').fadeIn('fast');
$('#paneles').load('Templates/EdicionPropuesta.html?'+ new Date().getTime(), null, function(a, b, c)
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
$('#mas-input').prop('checked', false)
$('.label-mas-input').css('display','none');
document.getElementById('titulo-input').value = prop.titulo;
document.getElementById('texto-input').value = replaceHtml(prop.texto);
document.getElementById('fuente-input').value = prop.fuente;
document.getElementById('candidato-input').value = prop.candidato;
$(document.getElementById('categoria-input')).select2("val", prop.categorias);
editarPropuesta = true;
edicionPropuestaCodigo = prop.codigo;
partidoAnteriorCodigo = prop.partido;
candidatoAnteriorCodigo = prop.candidato;
$('#submit').html('Editar Propuesta');
});
}

function replaceHtml(string_to_replace) {
return $("<div>").append(string_to_replace.replace(/&nbsp;/g, ' ').replace(/<br.*?>/g, '')).text();
}

function EdicionPropuesta()
{
$('#loading').fadeIn('fast');

var _titulo = document.getElementById('titulo-input').value;
var _texto = document.getElementById('texto-input').value;
var _fuente = document.getElementById('fuente-input').value;
var _candidato = document.getElementById('candidato-input').value;
var _partido = candidatos.filter(function(cand){return cand.codigo == document.getElementById('candidato-input').value;})[0].partido;
var _cats = $(document.getElementById('categoria-input')).select2('data');

var _categorias = new Array();
for(var i in _cats)
{
	var text = _cats[i].text;
	var cat = GetCategoriaByName(text);
	_categorias.push(cat.codigo);
}

$.ajax({
method: "POST",
url: location.origin + location.pathname + (!editarPropuesta ? "PHP/AgregarPropuesta.php" : "PHP/EditarPropuesta.php"),
data: {
codigo: edicionPropuestaCodigo,
titulo: _titulo,
texto: _texto,
fuente: _fuente,
candidato: _candidato,
partido: _partido,
categorias: _categorias
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
	propuestas.push(prop);
	MostrarPropuesta(prop , 1, $('.propuestasContainer'));
	VerificarPropuestas();
}
else
{
partidoAnterior = partidos.filter(function(_part){return _part.codigo == partidoAnteriorCodigo;})[0];
candidatoAnterior = candidatos.filter(function(cand){return cand.codigo == candidatoAnteriorCodigo;})[0];
propuesta = propuestas.filter(function(_prop){return _prop.codigo == prop.codigo;})[0];
propuesta.titulo = prop.titulo;
propuesta.texto = prop.texto;
propuesta.fuente = prop.fuente;
propuesta.partido = prop.partido;
propuesta.candidato = prop.candidato;
propuesta.categorias = prop.categorias;
if(candidatoAnterior.codigo != prop.candidato)
{
partidoNuevo = partidos.filter(function(_part){return _part.codigo == prop.partido;})[0];
candidatoNuevo = candidatos.filter(function(cand){return cand.codigo == prop.candidato;})[0];
candidatoNuevo.propuestas.push(propuesta);
candidatoAnterior.propuestas.splice(candidatoAnterior.propuestas.indexOf(propuesta), 1);
}

var prev = $('#'+prop.codigo);
$(MostrarPropuesta(prop, 1)).insertAfter(prev);
prev.remove();
}
$('#loading').fadeOut('fast');
});

}

function MostrarEliminarPropuesta(prop)
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
EliminarPropuesta(prop);
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
$('#'+prop.codigo).remove();
VerificarPropuestas();
$('#loading').fadeOut('fast');
});

}