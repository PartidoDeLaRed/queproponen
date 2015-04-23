function makeShort(contenedor, longURL, callback) 
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
            contenedor.setAttribute('data-shorturl', response.id);
			callback();
        }
    });
 }
