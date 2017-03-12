$(document).ready(function() {

  // If on the country page
  if ($('body.countries')) {

    // Function to get URL parameter
    function getParameterByName(name, url) {
      if (!url) {
        url = window.location.href;
      }
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var countryFiltered = getParameterByName('country');

    console.log(countryFiltered);

    $('.all-country-images').isotope({
      // options
      itemSelector: '.all-country-image',
      filter: '.' + countryFiltered
    });

    $('.filter-button').click(function() {
      var filterValue = $(this).data('filter');
      $('.all-country-images').isotope({ filter: filterValue });
    });

  }

  $('.portfolio-images').isotope({
    // options
    itemSelector: '.portfolio-image'
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
