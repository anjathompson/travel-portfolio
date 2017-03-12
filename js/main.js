$(document).ready(function() {

  $('.portfolio-images').isotope({
    // options
    itemSelector: '.portfolio-image'
  });

  $('.filter-button').click(function() {
    var filterValue = $(this).data('filter');
    console.log(filterValue);
    $('.portfolio-images').isotope({ filter: filterValue });
  });

  $('.country-images').isotope({
    // options
    itemSelector: '.country-image'
  });

  if ($('body.home')) {

  // Get height to top from latest section
  var heightToTop = $('h2').offset().top;

    $(window).scroll(function() {
      // Trigger class when scrolled past latest section
      if ($(window).scrollTop() > 50) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }

      if ($(window).scrollTop() > (heightToTop)){
        $('header').addClass('show-logo');
      } else {
        $('header').removeClass('show-logo');
      }

    });

  }

  // Animate scrolling
  if ($('body').hasClass('home')) {
    var extra = 50;
  } else {
    var extra = 0;
  }
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top-(extra)
          }, 1000);
          return false;
        }
      }
    });
  });

});
