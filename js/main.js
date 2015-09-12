// Activate Isotope

$(window).load(function(){   

$( function() {

  // init Isotope

  var $container = $('.portfolio').isotope({

    itemSelector: '.element',



  });

  // filter functions

  var filterFns = {

    // show if number is greater than 50

    numberGreaterThan50: function() {

      var number = $(this).find('.number').text();

      return parseInt( number, 10 ) > 50;

    },

    // show if name ends with -ium

    ium: function() {

      var name = $(this).find('.name').text();

      return name.match( /ium$/ );

    }

  };

  // bind filter button click

  $('#filters').on( 'click', 'button', function() {

    var filterValue = $( this ).attr('data-filter');

    // use filterFn if matches value

    filterValue = filterFns[ filterValue ] || filterValue;

    $container.isotope({ filter: filterValue });

  });

  // change is-checked class on buttons

  $('.button-group').each( function( i, buttonGroup ) {

    var $buttonGroup = $( buttonGroup );

    $buttonGroup.on( 'click', 'button', function() {

      $buttonGroup.find('.is-checked').removeClass('is-checked');

      $( this ).addClass('is-checked');

    });

  });

});  

});

jQuery(window).load(function(){

  setTimeout(function(){

    jQuery('.portfolio').isotope('layout');

  }, 1000);

});



// Magnific popup

  $('.light-box-content').magnificPopup({

    delegate: 'a',

    type: 'image',

    tLoading: 'Loading image #%curr%...',

    mainClass: 'mfp-img-mobile',

    gallery: {

      enabled: true,

      navigateByImgClick: true,

      preload: [0,1] // Will preload 0 - before current, and 1 after the current image

    },

    image: {

      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',

      titleSrc: function(item) {

        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';

      }

    }

  });





//Counter Up

jQuery(document).ready(function($) {

    $('.counter').counterUp({

        delay: 10,

        time: 800

    });

/*

$( ".accr" ).click(function() {

  $(".accr").css({"max-height": "500px"});

    });



});



$( ".close-icon" ).click(function() {

  $(".accr").css({"max-height": "100px"});

*/

    });



 /* ==============================================

Smoth scroll

=============================================== */



$('a[href*=#]').on('click', function(event){     

    event.preventDefault();

    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);

});



/* ==============================================

Auto Close Responsive Navbar on Click

=============================================== */



function close_toggle() {

if ($(window).width() <= 1920) {

  $('.navbar-collapse a').on('click', function(){

      $('.navbar-collapse').collapse('hide');

  });

}

else {

 $('.navbar .navbar-default a').off('click');

}

}

close_toggle();



$(window).resize(close_toggle); 



$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });



/* ==============================================

Progress bar

=============================================== */



$(document).ready(function() {

    $('.progress .progress-bar').progressbar({display_text: 'fill'});

});


/* ==============================================

Form validation

=============================================== */



  $('#form').parsley();

/* ==============================================
Google Maps
=============================================== */
$("#map").gmap3({
    marker:{     
  address:"Alun-Alun Pasuruan Jl. Alun-Alun Selatan, Kebonsari, Pasuruan, Jawa Timur 67116, Indonesia"},
    map:{
    options:{
  zoom: 17,
  scrollwheel:false,
  draggable: true }
  }
  }); 

