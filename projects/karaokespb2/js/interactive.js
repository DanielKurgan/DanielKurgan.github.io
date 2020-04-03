$(document).ready(function(){
	new WOW().init();

	$('.mask-phone').mask('9 (999) 999-99-99');

	$(".popup-reservation__close, .popup-reservation__background").click(function(){
		$(".reservation__form-block").slideUp();
		$(".popup-reservation__background").fadeOut();
		$(".popup-reservation").fadeOut();
	})
	$(".booking__button").click(function(){
		$(".reservation__form-block").slideDown();
		$(".popup-reservation__background").fadeIn();
		$(".popup-reservation").fadeIn();
	});

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $(".menu ul").slideToggle();
  });

});