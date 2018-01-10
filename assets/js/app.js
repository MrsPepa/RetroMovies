$(document).ready(function(){

});
/*funcion buscador*/
$('.search').click(function(){
  $('.bootsnipp-search').html(`<div class="container"><form action="http://bootsnipp.com/search" method="GET" role="search"><div class="input-group"><input type="text" class="form-control" name="q" placeholder="Ingresa nombre de película aquí..."><span class="input-group-btn"><button class="btn btn-danger" type="reset"><span class="icon-cross"></span></button></span></div></form></div>`);
  cerrarSearch();

  $('.form-control').keyup(function(){
    var movie = $('.form-control').val();
    if(movie.length > 0){
      $('.input-group-btn').html(`<button class="btn btn-info" type="reset"><span class="icon-arrow-right"></span></button>`);
    } else {
      $('.input-group-btn').html(`<button class="btn btn-danger" type="reset"><span class="icon-cross"></span></button>`);
    } 
    cerrarSearch();
    $('.btn-info').click(function(){
      searchMovie();
      $('.input-group-btn').html(`<button class="btn btn-danger" type="reset"><span class="icon-cross"></span></button>`)
      $('.form-control').val('');
      cerrarSearch();
    });
  });
});
/*
* Función que se encarga de capturar el texto de busqueda  
* para luego realizar la consulta con ese parametro
*/
function searchMovie () {
  var title = $('.form-control').val();
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
  $('.second').empty();

  for(var i = 0; i < movies.length; i++) {
    var movie = movies[i];
    var title = movie.Title;
    var imbdID = movie.imbdID;
    var imgPoster = movie.Poster;
    $('.second').append('<li>'+title+'</li>')
  }
}
function renderError (error) {
  console.error(error);
}


function cerrarSearch(){
  $('.btn-danger').click(function(){
    $('.bootsnipp-search').empty();
  });
};
/* fin buscador */

/*aparece login*/
 $('#loginmainnvb').click(function(){
  $('.contlog').append(`<section id="lab_video_slider" class="login-form-link">
<video autoplay muted loop id="myVideo">
  <source src="assets/img/ipad.mp4" type="video/mp4">
</video>
    <div class="container-fluid flip">
    <div class="loginBox card">
      <img src="assets/img/ticket.png" class="user">
      <form>
        <h2 class="logtitle">Iniciar sesión</h2>
        <p>Email</p>
        <input type="text" name="" placeholder="Enter Email">
        <p>Contraseña</p>
        <input type="password" name="" placeholder="••••••">
        <input type="submit" name="" id="loginbtn" value="Inicia sesión">
        <p>¿No tienes una cuenta?<a href="#" class="fliper-btn register-form-link"> Registrate</a></p>
      </form>
    </div>
    </div>
  </section>


  <section id="lab_video_slider" class="signup-form-link">
<video autoplay muted loop id="myVideo">
  <source src="assets/img/ipad.mp4" type="video/mp4">
</video>
    <div class="container-fluid hide face back">
    <div class="loginBox card">
      <img src="assets/img/ticket.png" class="user">
      <form>
        <h2 class="logtitle">Registrate</h2>
        <p>Email</p>
        <input type="text" name="" placeholder="Enter Email">
        <p>Contraseña</p>
        <input type="password" name="" placeholder="••••••">
        <input type="submit" name="" id="loginbtn" value="Registrate">
        <p>¿Ya tienes una cuenta?<a href="#" id="haveacc" class="fliper-btn login-form-link"> Inicia Sesión</p>
      </form>
    </div>
    </div>
  </section>`);

  $('.register-form-link').click(function(){
  $('.flip').addClass('hide')
  $('.face').removeClass("hide");
});
 $('#haveacc').click(function(){
  $('.face').addClass('hide')
  $('.flip').removeClass("hide");
});
});
 /*fin login*/