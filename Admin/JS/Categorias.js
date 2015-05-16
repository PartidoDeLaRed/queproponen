var categorias = null
function CargarCategorias()
{
	$.ajax({
	  method: "GET",
	  async:false,
	  url: location.origin + location.pathname + "/PHP/GetCategorias.php"
	})
	.done(function( msg ) {
		categorias = $.parseJSON(msg);
  	})
	.fail(function( msg ) {
  	});
}