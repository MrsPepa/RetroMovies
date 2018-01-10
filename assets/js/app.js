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