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

// ПЛАВНАЯ ПРОКРУТКА ДО ЯКОРЯ
$("body").on('click', '[href*="#"]', function(e){
    $.scrollTo($(this.hash), 500);
});

// FANCYBOX
  $(document).ready(function() {

  $(".comments-popup").fancybox({
    'width': 456,
    'height': 565,
  });

  $(".certificate-popup").fancybox({
    'width': 456,
    'height': 565,
  });

  $(".example-popup").fancybox({
    'width': 690,
    'height': 580,
  });

  $(".licenses-popup").fancybox({
    'width': 456,
    'height': 565,
  });
  
});

// TABS

$(".tab-first").click(function(){
  $(".mass-tab__first").css("display", "block");
  $(".mass-tab__second").css("display", "none");
  $(".mass-tab__third").css("display", "none");

  $(".tab-first").css("border", "2px solid #3e7ebf");
  $(".tab-first").css("color", "#3e7ebf");

  $(".tab-second").css("border", "2px solid #888888");
  $(".tab-second").css("color", "#808080");

  $(".tab-third").css("border", "2px solid #888888");
  $(".tab-third").css("color", "#808080");
});


$(".tab-second").click(function(){
  $(".mass-tab__first").css("display", "none");
  $(".mass-tab__second").css("display", "block");
  $(".mass-tab__third").css("display", "none");

  $(".tab-first").css("border", "2px solid #888888");
  $(".tab-first").css("color", "#808080");

  $(".tab-second").css("border", "2px solid #3e7ebf");
  $(".tab-second").css("color", "#3e7ebf");

  $(".tab-third").css("border", "2px solid #888888");
  $(".tab-third").css("color", "#808080");
});


$(".tab-third").click(function(){
  $(".mass-tab__first").css("display", "none");
  $(".mass-tab__second").css("display", "none");
  $(".mass-tab__third").css("display", "block");

  $(".tab-first").css("border", "2px solid #888888");
  $(".tab-first").css("color", "#808080");

  $(".tab-second").css("border", "2px solid #888888");
  $(".tab-second").css("color", "#808080");

  $(".tab-third").css("border", "2px solid #3e7ebf");
  $(".tab-third").css("color", "#3e7ebf");
});