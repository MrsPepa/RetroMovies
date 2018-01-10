$(document).ready(function(){
  $("#link-top-movies").click(function() {
    var offset = -10; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#top-movies").offset().top + offset
    }, 1500);
  });

  $("#link-episode").click(function() {
    var offset = -10; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#episode").offset().top + offset
    }, 1500);
  });

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
});
/*funcion buscador*/
$('.search').click(function(){
  $('.bootsnipp-search').html(`<div class="container"><form><div class="input-group"><input type="text" class="form-control" name="q" placeholder="Ingresa nombre de película aquí..."><span class="input-group-btn"><button class="btn btn-danger" type="reset"><span class="icon-cross"></span></button></span></div></form></div>`);
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
  var url = "https://www.omdbapi.com/?apikey=3a181f1c&s="+title;
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

/* boton ir arriba */
$(document).ready(function(){
  $('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  $(window).scroll(function(){
    if( $(this).scrollTop() > 0 ){
      $('.ir-arriba').slideDown(300);
    } else {
      $('.ir-arriba').slideUp(300);
    }
  });
});
/* fin boton ir arriba */

/*aparece login*/
 $('#loginmainnvb').click(function(){
  $(".pagini").hide()
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
        <input type="text" name="" id="email" placeholder="Email">
        <p>Contraseña</p>
        <input type="password" name="" id="contrasena" placeholder="••••••">
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
        <input type="text" name="" id="email2" placeholder="Email">
        <p>Contraseña</p>
        <input type="password" name="" id="contrasena2" placeholder="••••••">
        <input type="submit" name="" id="signup" value="Registrate">
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

/* Initialize Firebase*/

var config = {
  apiKey: "AIzaSyDyxOeEibwG-ZpO1a96-Br8wXsqqdzso74",
  authDomain: "shaped-buttress-188103.firebaseapp.com",
  databaseURL: "https://shaped-buttress-188103.firebaseio.com",
  projectId: "shaped-buttress-188103",
  storageBucket: "shaped-buttress-188103.appspot.com",
  messagingSenderId: "798835163345"
};
firebase.initializeApp(config);

$("#signup").click(function(){
  var email = document.getElementById("email").value;
  var contrasena = document.getElementById("contrasena").value;
  firebase.auth().createUserWithEmailAndPassword(email, contrasena)
  .then(function(){
  verificar()
})
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode);
    console.log(errorMessage);
  });
});


$("#loginbtn").click(function(){
  var email2 = document.getElementById("email2").value;
  var contrasena2 = document.getElementById("contrasena2").value;
  firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorCode);
    console.log(errorMessage);
  });
});


function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
      console.log("existe usuario activo")
      aparece(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      console.log("**************");
      console.log(user.emailVerified)
      console.log("**************");
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no existe usuario activo")
      // ...
    }
  });
}
observador();

function aparece(user){
  var user = user;
  var contenido = document.getElementById("contenido");
  if(user.emailVerified){
alert("Ya estás conectado")
  $(".inicio").hide()
  }else{
  alert("Verifica tu correo o no podrás loguear")
}

  /*el boton logout no quiere funcionar, ni siquiera para tirar un alert*/
  $(".outbtn").click(function(){
    alert("hi")
    firebase.auth().signOut()
    .then(function(){
      console.log("saliendo...")
    })
    .catch(function(error){
      console.log(error)
    })
    $(".pagini").hide()
  });
}

function verificar(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
  // Email sent.
  alert("Enviando correo de verificación, una vez verificado su correo inicie sesión");
  }).catch(function(error) {
    // An error happened.
    alert("Ha ocurrido un error");
  });
}
//fin de login logout

});

