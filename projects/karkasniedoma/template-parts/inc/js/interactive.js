jQuery(document).ready(function(){

	jQuery(".fancybox").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		// 'overlayShow'	:	false
    }).attr('data-fancybox', 'group1');

	// jQuery(".filter-form__button").click(function(){
	// 	jQuery(".filter-form").toggleClass("displayNone");
	// });



    var str = window.location.href;
    if (str.indexOf('/customsearch.php/?order-price=ASC') != -1) {
        jQuery(".price-asc").css("text-decoration", "underline");
    } else if (str.indexOf('/customsearch.php/?order-price=DESC') != -1) {
        jQuery(".price-desc").css("text-decoration", "underline");
    }
    else if (str.indexOf('/customsearch.php/?order-area=ASC') != -1) {
        jQuery(".area-asc").css("text-decoration", "underline");
    } else if (str.indexOf('/customsearch.php/?order-area=DESC') != -1) {
        jQuery(".area-desc").css("text-decoration", "underline");
    }

});