$(document).ready(function() {
	// FANCYBOX

		$(".photo-slider__slide").fancybox({
			minWidth: 530,
			minHeight: 629,
			autoScale: true,
		});

	// FANCYBOX END

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










});