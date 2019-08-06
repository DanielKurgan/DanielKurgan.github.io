$('.about-cards_block').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
 	autoplaySpeed: 10000,
 	arrows: true,

 	responsive: [
 		{
 			breakpoint: 1280,
 			settings: {
 				arrows: true,
				slidesToShow: 2,
				slidesToScroll: 2,
			 	autoplaySpeed: 5000,
 			}
 		},
 		{
 			breakpoint: 1095,
 			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
 			}
 		},
 		{
 			breakpoint: 900,
 			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
 				autoplaySpeed: 3000,
 				arrows: false,
 			}
 		},
 	]
});