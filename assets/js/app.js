$(function() {

  $('a[href="#search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]').on('click', function(event) {
  event.preventDefault();
  $('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
  $('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
  $('a[href="#toggle-search"]').closest('li').toggleClass('active');

    if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
    /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
      setTimeout(function() {
        $('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
      }, 100);
    }
  });

  $(document).on('keyup', function(event) {
    if (event.which == 27 && $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
      $('a[href="#toggle-search"]').trigger('click');
    }
  });
});
/*funcion para abrir buscador*/
$('.animate').click(function(){
  $('.closse').show();
  $('.closse').removeClass('hide');
  
});
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
  if (user) {
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

