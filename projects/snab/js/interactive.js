$(".hamburger").click(function() {
	
	if( $(".menu-feedback").css("display") === "none") {

		$(".menu-feedback").css("display", "flex");
		$(".main").css("opacity", "0.2");
		
		function OffScroll () {
		var winScrollTop = $(window).scrollTop();
		$(window).bind('scroll',function () {
		  $(window).scrollTop(winScrollTop);
		});}
		OffScroll ();  //Запустили отмену прокрутки

	} else {
		$(".menu-feedback").css("display", "none");
		$(".main").css("opacity", "1");
		$(window).unbind('scroll'); //Выключить отмену прокрутки
	}

});

$(".feedback button").click(function() {
	
});

