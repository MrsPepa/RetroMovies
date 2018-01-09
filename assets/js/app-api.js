$(document).ready(function () {
  $('#search-btn').click(searchMovie);
  renderRandomMovies();
  //renderHorrorMovies();    
})

/*
* Función que se encarga de capturar el texto de busqueda  
* para luego realizar la consulta con ese parametro
*/
function searchMovie () {
      var title = $('#title').val();
      var url = "http://www.omdbapi.com/?apikey=3a181f1c&s="+title;
      console.log(url);
      $.ajax({
        url: url,
        success: renderMovies,
        error: renderError
      });
}

/*
* Función que imprime el resultado de la   
* consulta en index.html
*/
function renderMovies (response) {
  console.log(response);
  var movies = response.Search; // Retorna los array del resultado
  $('#title-results').empty();

  for(var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var title = movie.Title;
    var imbdID = movie.imbdID;
    var imgPoster = movie.Poster;
    $('#title-results').append('<li>'+title+'</li>')
  }

}

function renderError (error) {
  console.error(error);
}



function renderRandomMovies () {
  var movieID = randomID();
  var url = "http://www.omdbapi.com/?apikey=3a181f1c&i=tt"+movieID;
  $.ajax({
        url: url,
        success: randomMovies,
        error: renderError
      });

}

// Funcion que muestra un id de pelicula al azar
function randomID() {
  var lengthID = 7;
  var number = Math.floor((Math.random() * 2155529) + 1);
  console.log('number: ' + number);
  var movieID = '' + number;
  while(movieID.length < lengthID) {
    movieID = '0' + movieID;
    console.log(movieID);
  }  
  return movieID;
}

function randomMovies(response) {
    movieResult = response;
    console.log(movieResult);
    console.log("Title: "+movieResult.Title+", ID: " +movieResult.Type+ ', ' +response.imbdID);
  }
