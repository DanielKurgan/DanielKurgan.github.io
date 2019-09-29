$(document).ready(function() {

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
		arrows: false,
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







});