// resets to top after load
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// preloader
$(document).ready(function() {
    // Animate loader off screen
    preloaderFadeOutTime = 1000;
    function hidePreloader() {
        var preloader = $('.se-pre-con');
        preloader.fadeOut(preloaderFadeOutTime);
        }
    hidePreloader();
}); 


$( document ).ready(function() {
    var menu = $('#menu');
    var myNav = $('#myNav');
    menu.click(function() {
        myNav.toggleClass('open');
       return false;
    });
  });
  
//   /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    location.reload();
  }

// hide nav bar
$(function () {
    $(document).scroll(function () {
        var $nav = $("#nav-main");
        var $top = $("#top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $top.height());
    });
});