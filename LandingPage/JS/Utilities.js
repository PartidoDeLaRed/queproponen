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

Array.prototype.move = function (old_index, new_index) {
    if (new_index >= this.length) {
        var k = new_index - this.length;
        while ((k--) + 1) {
            this.push(undefined);
        }
    }
    this.splice(new_index, 0, this.splice(old_index, 1)[0]);
    return this; // for testing purposes
};

function CompartirInicio(tipo)
{
	switch(tipo)
	{
		case 0:
		  window.open('https://twitter.com/intent/tweet?'+
		  'related=PartidodelaRed&'+
		  'text='+ '%23yvosquepropones las propuestas de todos los candidatos de CABA, Santa Fe y La Rioja en un solo lugar '+location.origin+location.pathname, 'tweet', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		break;
		case 1:
		  window.open('http://www.facebook.com/dialog/feed?app_id=825676227513877' +
			'&link='+location.origin+location.pathname +
			'&picture=http:%2F%2Fqueproponen.com.ar%2FIMG%2FshareMainImage-mini.png' +
			'&name=' + 'Todas las propuestas de los candidatos de CABA, Santa Fe y La Rioja en un solo lugar' +
			'&caption=' + 'via queproponen.com.ar - Partido de la Red' +
			'&description=' + 'Conocé todas las propuestas de los candidatos de CABA, Santa Fe y La Rioja y discutilas directamente con ellos.' +
			'&redirect_uri='+location.origin+location.pathname+'close.html' +
			'&display=popup'
			, 'Compartí todas las propuestas', 'width=900,height=300,menubar=no,status=no,titlebar=no,top=200,left='+(screen.width-900)/2);
		break;
	}
}