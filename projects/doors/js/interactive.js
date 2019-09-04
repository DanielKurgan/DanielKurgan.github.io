$(document).ready(function() {
    $("body").css("display","block");
});

$('.main-slider').slick({
    arrows: true,
    dots: true,
});

var $hamburger1 = $(".header-top__line .container .hamburger");
$hamburger1.on("click", function(e) {
  $hamburger1.toggleClass("is-active");
  $(".header-top__line .container .hamburger-box").toggleClass("hamburger-height");
  // Do something else, like open/close menu
});

var $hamburger2 = $(".header-top__menu .hamburger");
$hamburger2.on("click", function(e) {
  $hamburger2.toggleClass("is-active");
  $(".header-top__menu .hamburger-box").toggleClass("hamburger-height");
  // Do something else, like open/close menu
});

var $hamburger3 = $(".store-menu__hamburger-opener");
var $hamburger4 = $(".store .hamburger");
$hamburger3.on("click", function(e) {
  $hamburger4.toggleClass("is-active");
  $(".store .hamburger-box").toggleClass("hamburger-height");
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
$('.store-slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 845,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
$('.store-slider3').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
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

$(".header-top__line .container .hamburger").click(function(){
    $('.header-top__anchors').toggleClass('menu-visible');
});

$(".header-top__menu .hamburger").click(function(){
    $('.header-top__menu nav').toggleClass('menu-visible');
});

$(".store-menu__hamburger-opener").click(function(){
    $('.store-menu__content').toggleClass('menu-visible');
});



$(".bunch-card1").hover(
  function() {
  $(".bunch-name1").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name1").css("background-color", "#191919");
});

$(".bunch-card2").hover(
  function() {
  $(".bunch-name2").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name2").css("background-color", "#191919");
});

$(".bunch-card3").hover(
  function() {
  $(".bunch-name3").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name3").css("background-color", "#191919");
});

$(".bunch-card4").hover(
  function() {
  $(".bunch-name4").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name4").css("background-color", "#191919");
});

$(".bunch-card5").hover(
  function() {
  $(".bunch-name5").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name5").css("background-color", "#191919");
});

$(".bunch-card6").hover(
  function() {
  $(".bunch-name6").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name6").css("background-color", "#191919");
});

$(".bunch-card7").hover(
  function() {
  $(".bunch-name7").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name7").css("background-color", "#191919");
});

$(".bunch-card8").hover(
  function() {
  $(".bunch-name8").css("background-color", "#e31e24");
  },
  function(){
  $(".bunch-name8").css("background-color", "#191919");
});

