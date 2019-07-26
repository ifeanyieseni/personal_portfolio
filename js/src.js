(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(this).toggleClass("active");
  });

  // Smooth scrolling
$('.js-scroll-trigger').click(function () {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
});

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
  });
  //Check validity of form info using regEx
  $('#submit').click(function(e){
    let regTest = new RegExp('([a-zA-z0-9])+[@]([a-z])+[.][a-z]{3}');
    let email = regTest.test($("#email").val());
    if(!email){
      $('#email').addClass('error');
    }else $('#email').removeClass('error');

    regTest = new RegExp('([a-z]){3,}');
    let name = regTest.test($("#name").val());
    if(!name){
      $('#name').addClass('error');
    }else $('#name').removeClass('error');

    regTest = new RegExp('([a-z]){3,}');
    let message = regTest.test($("#message").val());
    if(!message){
      $('#message').addClass('error');
    }else $('#message').removeClass('error');
    if(!(name && message && email))e.preventDefault();
  });
 // Scroll to top button appear
 $('#button').fadeOut();
 $(document).scroll(function() {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 300) {
    $('#button').fadeIn();
  } else {
    $('#button').fadeOut();
  }
});
$('#button').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '800');
});

})(jQuery); // End of use strict
