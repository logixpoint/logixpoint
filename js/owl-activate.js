$(document).ready(function () {



    var carousel = $("#owl-demo2");
  carousel.owlCarousel({
  	items: 5,
  	pagination:false,
    navigation:true,
    navigationText: [
      '<img src="images/prev-red.png" alt="next" />',
      '<img src="images/next-red.png" alt="next" />'
      ],
  });

   var carousel = $("#owl-carousel");
  carousel.owlCarousel({
  	items: 5,
  	pagination:false,
    navigation:true,
  });

      var carousel = $("#owl-demo");
  carousel.owlCarousel({
  	items: 5,
  	pagination:false,
    navigation:true,
    navigationText: [
      '<img src="images/prev.png" alt="next" />',
      '<img src="images/next.png" alt="next" />'
      ],
  });


  
});