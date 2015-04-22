function UrlCorta(url) {
  gapi.client.setApiKey('AIzaSyCto0kYSGt2dFZm79T2L0reMVK-IBORxTY');
  gapi.client.load('urlshortener', 'v1').then( makeRequest(url) );
}

function makeRequest(url) {
	var request = gapi.client.urlshortener.url.get({
	  'longUrl': url
	});
	request.then(function(response) {
	  return response.result.shortUrl;
	}, function(reason) {
	  console.log('Error: ' + reason.result.error.message);
	});
  }
