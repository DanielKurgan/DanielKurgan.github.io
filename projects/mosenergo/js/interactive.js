$('.comments-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
			variableWidth: false,
    }
  },
  {
    breakpoint: 1030,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
			variableWidth: false,
    }
  },
  {
    breakpoint: 850,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
			variableWidth: false,
    }
  },
  ]
});

$('.license-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
			variableWidth: false,
    }
  },
  {
    breakpoint: 850,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
			variableWidth: false,
    }
  },
  ]
});

 var $hamburger = $(".hamburger");
 $hamburger.on("click", function(e) {
   $hamburger.toggleClass("is-active");
   // Do something else, like open/close menu
 });

$( ".cross" ).click(function() {
  $( ".popup" ).hide();
});

$( ".call-me" ).click(function() {
  $( ".popup-call" ).toggle();
});
$( ".services-block a" ).click(function() {
  $( ".popup-example" ).toggle();
});