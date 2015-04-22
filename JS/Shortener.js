function makeShort(contenedor, longURL) 
{
    var request = gapi.client.urlshortener.url.insert({
      'resource': {
      'longUrl': longURL
    }
    });
    request.execute(function(response) 
    {
        if(response.id != null)
        {
            $(contenedor).data('data-shorturl', response.id);
        }
    });
 }
