$(document).ready(function() {
    $("body").css("display","block");
});

$('.main-slider').slick({
    arrows: true,
    dots: true,
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
  $(".hamburger-box").toggleClass("hamburger-height");
  // Do something else, like open/close menu
});

$(document).ready(function() {
    $('.mihc1').click(function() {
        $('.sub1').toggleClass('visible');
    });
    $('.mihc2').click(function() {
        $('.sub2').toggleClass('visible');
    });
    $('.mihc3').click(function() {
        $('.sub3').toggleClass('visible');
    });
    $('.mihc4').click(function() {
        $('.sub4').toggleClass('visible');
    });
    $('.mihc5').click(function() {
        $('.sub5').toggleClass('visible');
    });
    $('.mihc6').click(function() {
        $('.sub6').toggleClass('visible');
    });
    $('.mihc7').click(function() {
        $('.sub7').toggleClass('visible');
    });
});

$('.store-slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
  });
$('.store-slider2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
});
$('.store-slider3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
});

$('.makers-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
});

$(".hamburger").click(function(){
    $('.store-menu__content').toggleClass('menu-visible');
});