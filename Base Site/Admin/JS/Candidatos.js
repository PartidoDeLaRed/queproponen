var candidatos = [];
var candidatosFiltrados = null;

function CargarCandidatos(callback) {
  var cand = null;
  $.ajax({
      method: "GET",
      async: false,
      url: location.origin + location.pathname + "/PHP/GetCandidatos.php"
    })
    .done(function(msg) {
      candidatos = shuffle($.parseJSON(msg)) /*.filter(function(cand){return cand.ganador == 1})*/ .sort(function(a, b) {
        return a.ganador == 1 ? -1 : 1
      });

      if (candidatos.filter(function(cand) {
          return cand.ganador == '1'
        }).length == 0)
        $('#generalesMenuItem').remove();
      if (candidatos.filter(function(cand) {
          return cand.ganador == '0'
        }).length == 0)
        $('#PASOMenuItem').remove();

      if (callback)
        callback();
    });
}

function GetCandidatos(filtro) {
  var res = candidatos;
  if (filtro != undefined)
    res = res.filter(function(cand) {
      return cand.partido == filtro;
    });

  return res;
}

function GetCandidato(codigo) {
  return candidatos.filter(function(cand) {
    return cand.codigo == codigo;
  })[0];
}

function MostrarCandidato(modo, cand, part, ganador, contenedor) {
  switch (modo) {
    case 0:
      {
        var container = document.createElement('div');
        $(container).attr('id', 'cand' + cand.codigo);
        $(container).attr('data-codigo', cand.codigo);
        $(container).addClass('candidatoContainer');
        $(container).click(function(e) {
          if (!$(e.target).hasClass('botonEditar') && !$(e.target).hasClass('botonAgregarPropuesta') && !$(e.target).hasClass('botonEliminar'))
            MostrarCandidato(1, cand, part);
        });
        $(contenedor).append(container);

        var imagen = document.createElement('div');
        $(imagen).addClass('imagenCandidato');
        $(imagen).css('background-image', 'url(../IMG/candidatos/' + cand.imagen + ')');
        $(container).append(imagen);

        var cont = document.createElement('div');
        $(cont).css('display', 'inline-block');
        $(cont).css('vertical-align', 'top');
        $(cont).css('margin', '6px 0');
        $(cont).css('width', '100%');

        var color = document.createElement('div');
        $(color).addClass('colorCandidato');
        $(color).css('background-color', part.color);
        $(color).html(part.nombre);
        $(cont).append(color);

        var nombre = document.createElement('div');
        $(nombre).addClass('nombreCandidato');
        $(nombre).html(cand.nombre);
        $(cont).append(nombre);

        var lista = document.createElement('div');
        $(lista).addClass('listaCandidato');
        $(lista).html(cand.lista);
        $(cont).append(lista);

        $(container).append(cont);

        var propuestasDIV = document.createElement('div');
        $(propuestasDIV).addClass('item').addClass('propuestas');
        $(propuestasDIV).html(cand.propuestas.length);
        if (cand.propuestas.length == 0)
          $(propuestasDIV).addClass('numeroNoPropuestas');
        $(container).append(propuestasDIV);

        if (cand.ganador == false) {
          var noPASO = document.createElement('div');
          $(noPASO).addClass('noPASO');
          $(container).append(noPASO);
          $(container).css('opacity', '.4');
        }

        var adminContainer = document.createElement('div');
        $(adminContainer).addClass('adminPartidoContainer');
        $(container).append(adminContainer);

        var botonAgegarPropuesta = document.createElement('div');
        $(botonAgegarPropuesta).attr('id', part.codigo);
        $(botonAgegarPropuesta).addClass('botonAgregarPropuesta');
        $(botonAgegarPropuesta).click(function() {
          MostrarAgregarPropuesta(cand)
        });
        $(adminContainer).append(botonAgegarPropuesta);

        var botonEditar = document.createElement('div');
        $(botonEditar).attr('id', part.codigo);
        $(botonEditar).addClass('botonEditar');
        $(botonEditar).click(function() {
          MostrarEditarCandidato(cand)
        });
        $(adminContainer).append(botonEditar);

        var botonEliminar = document.createElement('div');
        $(botonEliminar).attr('id', part.codigo);
        $(botonEliminar).addClass('botonEliminar');
        $(botonEliminar).click(function() {
          MostrarEliminarCandidato(cand)
        });
        $(adminContainer).append(botonEliminar);

      }
      break;
    case 1:
      {
        if ($('.candidatoContainer[id=cand' + cand.codigo + ']').hasClass('selectedItem')) {
          $('.candidatoContainer').removeClass('selectedItem').removeClass('deselectedItem');
          $('.propuestasContainer').children('.propuestaContainer').slideDown('fast');
        } else {
          $('.candidatosContainer').children('.candidatoContainer[id=cand' + cand.codigo + ']').removeClass('deselectedItem').addClass('selectedItem');
          $('.candidatosContainer').children('.candidatoContainer[id!=cand' + cand.codigo + ']').removeClass('selectedItem').addClass('deselectedItem');
          $('.propuestasContainer').children('.propuestaContainer[data-candidato=' + cand.codigo + ']').slideDown('fast');
          $('.propuestasContainer').children('.propuestaContainer[data-candidato!=' + cand.codigo + ']').slideUp('fast');
        }
      }
      break;

    case 2:
      {
        var container = document.createElement('div');
        $(container).attr('data-codigo', cand.codigo);
        $(container).addClass('candidatoContainer');
        $(container).css('cursor', 'pointer');
        $(container).click(function() {
          MostrarCandidato(1, cand, part)
        });

        var color = document.createElement('div');
        $(color).addClass('colorCandidato_mini');
        $(color).css('background-color', part.color);
        $(container).append(color);

        var imagen = document.createElement('div');
        $(imagen).addClass('imagenCandidato_mini');
        $(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
        $(container).append(imagen);

        return container;
      }
      break;
    case 3:
      {
        var container = document.createElement('div');
        $(container).attr('data-codigo', cand.codigo);
        if (part != null)
          $(container).attr('data-partido', part.codigo);
        $(container).attr('data-nombre', cand.nombre);
        $(container).attr('data-lista', cand.lista);
        $(container).attr('data-twitter', cand.twitter);
        if (cand.propuestas != null)
          $(container).attr('data-propuestas', cand.propuestas);
        if (ganador)
          $(container).addClass('candidatoContainerGanador');
        else
          $(container).addClass('candidatoContainer');

        //Datos Candidato
        var imagen = document.createElement('div');
        $(imagen).addClass('imagenCandidato');
        $(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
        $(container).append(imagen);

        var cont = document.createElement('div');
        $(cont).addClass('candidatoDatosContainer');

        var nombre = document.createElement('div');
        $(nombre).addClass('nombreCandidato');
        $(nombre).html(cand.nombre);
        $(cont).append(nombre);

        var lista = document.createElement('div');
        $(lista).addClass('listaCandidato');
        $(lista).html(cand.lista);
        $(cont).append(lista);

        //Datos Partido
        if (part != null) {
          var containerPartido = document.createElement('div');
          $(containerPartido).attr('id', part.nombre);
          $(containerPartido).addClass('partidoContainer');

          var nombrePartido = document.createElement('div');
          $(nombrePartido).addClass('item').addClass('nombre');
          $(nombrePartido).css('background-color', part.color);
          $(nombrePartido).html(part.nombre);
          $(containerPartido).append(nombrePartido);
          $(container).append(containerPartido);
        }

        $(container).append(cont);
        return container;
      }
      break;
    case 4:
      {
        var container = document.createElement('div');
        $(container).attr('id', cand.nombre);
        $(container).attr('data-codigo', cand.codigo);
        $(container).addClass('candidatoVersusSelectedContainer');
        $(contenedor).append(container);

        var imagen = document.createElement('div');
        $(imagen).addClass('imagenCandidato');
        $(imagen).css('background-image', 'url(IMG/candidatos/' + cand.imagen + ')');
        $(container).append(imagen);

        var cont = document.createElement('div');
        $(cont).addClass('datosCandidatoContainer');
        $(cont).css('display', 'inline-block');
        $(cont).css('vertical-align', 'top');
        $(cont).css('margin', '0');
        $(cont).css('width', '60%');
        $(cont).css('height', '80%');

        var nombre = document.createElement('div');
        $(nombre).addClass('nombreCandidato');
        $(nombre).html(cand.nombre);
        $(cont).append(nombre);

        var lista = document.createElement('div');
        $(lista).addClass('listaCandidato');
        $(lista).html(cand.lista);
        $(cont).append(lista);

        var propuestasDIV = document.createElement('div');
        $(propuestasDIV).addClass('graficoContainer');
        $(cont).append(propuestasDIV);
        $('html, body').animate({
          scrollTop: 0
        }, 200, function() {
          GenerarGrafico(1, cand.codigo, $(cont));
        });

        $(container).append(cont);

        var part = partidos.filter(function(e) {
          return e.codigo == cand.partido;
        })[0];
        var color = document.createElement('div');
        $(color).addClass('colorCandidato');
        $(color).css('background-color', part.color);
        $(color).html(part.nombre);
        $(container).append(color);

      }
      break;

  }
}

function VerificarCandidatos() {
  if ($('.candidatosContainer').children('.candidatoContainer').length == 0) {
    var noCandidatos = document.createElement('div');
    $(noCandidatos).addClass('noElements');
    $(noCandidatos).html('No hay candidatos');
    $('.candidatosContainer').append(noCandidatos);
  }
}
