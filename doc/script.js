$(document).ready(function() {

  // Sticky menu
  var menuTop = $('nav ul').offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() > menuTop) {
      $('nav ul').css({
        position: 'fixed',
        top: '0px',
        width: "calc(100% - 10%)",
        height: "75px",
        fontSize: "15px"
      });
    } else {
      $('nav ul').css({
        position: 'static',
        top: '0px',
        width: "100%",
        height: "100px",
        fontSize: "18px"
      });
    }
    if ($(window).scrollTop() > 2200) {
      $('nav ul').hide();
    } else {
      $('nav ul').show();
    }
  });

  // Smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 75 // 75 is fixed nav height
        }, 500);
        return false;
      }
    }
  });

  // Header fadeIn fadeOut
  $(".header-container img").css("opacity", "1");
  setTimeout(function() {
    $(".header-container h1, .header-container p,.header-container a").css("opacity", "1");
  }, 1000);

  var images = ["img/nanominer.png", "img/diagram.png"]
  var $img = $(".image-border img"), i = 0, speed = 300;
  window.setInterval(function() {
    $img.fadeOut(speed, function() {
      $img.attr("src", images[(++i % images.length)]);
      $img.fadeIn(speed);
    });
  }, 7000);


});
