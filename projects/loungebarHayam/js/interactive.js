$(document).ready(function() {
    
    // WATER RIPPLE EFFECT
    $(".menu-section__omar").ripples();
    // WATER RIPPLE EFFECT END
    
    // ANIMATION WHEN SCROLL

$(document).ready(function(){
      $(document).bind("scroll",function(){
        $(".about .block-title").each(function(){
          var position = $(this).offset().top;
          var classToBeAdded = "visible";
          
          if (position < $(window).scrollTop() + $(window).height()){
            $(".about .block-title .pseudolineLeft").addClass('animateLineLeft');
            $(".about .block-title .pseudolineRight").addClass('animateLineRight');
            $(".about .block-title .pseudolineBottom").addClass('animateLineBottom');
          }
          
        });
        $(".menu-section .block-title").each(function(){
          var position = $(this).offset().top;
          var classToBeAdded = "visible";
          
          if (position < $(window).scrollTop() + $(window).height()){
            $(".menu-section .block-title .pseudolineLeft").addClass('animateLineLeft');
            $(".menu-section .block-title .pseudolineRight").addClass('animateLineRight');
            $(".menu-section .block-title .pseudolineBottom").addClass('animateLineBottom');
          }
          
        });
      });
    });
    // ANIMATION WHEN SCROLL END

    // HAMBURGER
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        $("body").toggleClass("overflowHidden");
        $(".header-text").toggleClass("none");
        $(".header-buttons").toggleClass("none");
        $(".hamburger-menu").toggleClass("flex");
    });
    // HAMBURGER END

    // HAMBURGER CLICK LINK
    $(".hamburger-menu__links a").click(function(event){
        $("body").toggleClass("overflowHidden");
        $(".header-text").toggleClass("none");
        $(".header-buttons").toggleClass("none");
        $(".hamburger-menu").toggleClass("flex");
        $hamburger.toggleClass("is-active");
    });
    // HAMBURGER CLICK LINK END

    // HAMBURGER LINK CLICK STYLE
    $(".hamburger-menu__links a").mouseenter(function(event){
        $(this).css("color", "white");
        $(this).find("span").css("color", "#FFCC99");
    });
    $(".hamburger-menu__links a").mouseout(function(event){
        $(this).css("color", "#FFCC99");
        $(this).find("span").css("color", "white");
    });
    // HAMBURGER LINK CLICK STYLE END

	// SLIDER
	$('.photo-slider').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
        responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        ]
    });
	// SLIDER END

// FANCYBOX


var gallery = []; // array of gallery elements
jQuery(document).ready(function ($) {
	$(".photo-slider__slide").each(function (i) {
        gallery.push(this.href); // push element to the array

        // bind your click and double-click events
        $(this).on({
        	click: function (event) {
        		event.preventDefault();
        	},

         dblclick: function (event) {

            if ($(window).width() >= 701){
              $.fancybox(gallery, {
                minWidth: 530,
                minHeight: 629,
                // API options
                padding: 0,
                index: i // starts gallery from (double) clicked element
            });
          }

          else if($(window).width() < 701) {
              $.fancybox(gallery, {
                minWidth: 345,
                minHeight: 450,
                        // API options
                        padding: 0,
                        index: i // starts gallery from (double) clicked element
                    });

          }
      }
  });
    });
}); // ready
// FANCYBOX END


// CLOSE POPUP
$(function($){
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".booking-popup .booking-block"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        $(".booking-popup").css("z-index","-999999");
        $(".booking-popup").css("display","none");
      div.toggle(); // скрываем его
    }
  });
});
// CLOSE POPUP END

// BOOKING POPUP OPEN

$(".hbookingbtn").click(function(){
    $(".booking-popup").css("display","flex");
    $(".booking-popup").css("z-index","9999999");
    $(".booking-block").show();
    $(".popup-background").show();
});
// BOOKING POPUP OPEN CLOSE

// MASK
 $(function() {
   $('.mask__number').mask('+0(000)000-00-00');
 });
// MASK END


    $(".agelimit").css("display", "flex");
    $("body").css("overflowY","hidden");
    $(".agelimit__button").click(function(){
        $(".agelimit").toggle();
        $("body").css("overflowY","visible");
    });

});