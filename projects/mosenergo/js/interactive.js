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

// АНИМАЦИЯ ГАМБУРГЕРА
 var $hamburger = $(".hamburger");
 $hamburger.on("click", function(e) {
   $hamburger.toggleClass("is-active");
   // Do something else, like open/close menu
 });

// ПОПАПЫ
$( ".cross" ).click(function() {
  $( ".popup" ).hide();
});

$( ".call-me" ).click(function() {
  $( ".popup-call" ).toggle();
});
$( ".services-block a" ).click(function() {
  $( ".popup-example" ).toggle();
});

// ПЛАВНАЯ ПРОКРУТКА ДО ЯКОРЯ
$(document).ready(function(){
          $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
              scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
          });
          return false;
         });