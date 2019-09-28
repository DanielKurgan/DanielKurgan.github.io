$(document).ready(function() {

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
        		$.fancybox(gallery, {
        			minWidth: 530,
        			minHeight: 629,
        			autoScale: true,
                    // API options
                    padding: 0,
                    index: i // starts gallery from (double) clicked element
                  });
        	}
        });
      });
}); // ready

// FANCYBOX END







});