function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


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
            contenedor.innerHTML = str;
        }
    });
 }
