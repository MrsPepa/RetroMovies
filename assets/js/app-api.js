$(document).ready(function () {
  $('#search-btn').click(searchMovie);
  /*renderRandomMovies();
  renderRandomMovies();
  renderRandomMovies();
  renderRandomMovies();*/

  var i = 0;
  while(i <= 3){
    i++;
    console.log('funcionando...');
    renderRandomMovies();
  }
  
  //renderHorrorMovies();

  // Carousel
  $(function() {
    var jcarousel = $('.jcarousel');

    jcarousel
      .on('jcarousel:reload jcarousel:create', function () {
          var width = jcarousel.innerWidth();

          if (width >= 900) {
            width = width / 4;
          } else if (width >= 600) {
            width = width / 3;
          } else if (width >= 400) {
            width = width / 2;
          }

          jcarousel.jcarousel('items').css('width', width + 'px');
          })
          .jcarousel({
            wrap: 'circular'
          });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
  // Fin Carousel
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
    if (movieResult.Poster == 'N/A' || movieResult.Poster == 'undefined' && movieResult.type == 'episode' || movieResult == "False") {
      renderRandomMovies();
    }
    else {
      $('.jcarousel').find('ul').append('<li><img src="'+movieResult.Poster+'" alt="'+movieResult.Title+'"></li>');
      console.log(movieResult);
      console.log("Title: "+movieResult.Title+", ID: " +movieResult.Type+ ', ' +movieResult.imbdID);
    }  
  }
