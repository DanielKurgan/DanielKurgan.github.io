$(document).ready(function(){

// CLEAR LSEP
$("body").children().each(function() {
	document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
});

// TEACHER SLIDER
$('.teachers-slider__for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: true,
	asNavFor: '.teachers-slider__nav',
	nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="img/nextSlider.svg"></button>',
	prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="img/prevSlider.svg"></button>',
	responsive: [
	{
		breakpoint: 750,
		settings: {
			nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="img/studentsNext.png"></button>',
			prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="img/studentsPrev.png"></button>',
		}
	},
	]
});

$('.teachers-slider__nav').slick({
	slidesToShow: 10,
	slidesToScroll: 1,
	asNavFor: '.teachers-slider__for',
	dots: true,
	focusOnSelect: true,
	variableWidth: true,
	responsive: [
	{
		breakpoint: 700,
		settings: {
			slidesToShow: 6,
			slidesToScroll: 1,
		}
	},
	]
});



$('.students-slider').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	arrows: true,
	speed: 1000,
	infinity: false,
	variableWidth: true,
	nextArrow: '<button id="next" type="button" class="btn btn-juliet"><img src="img/studentsNext.png"></button>',
	prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><img src="img/studentsPrev.png"></button>',

});

var parallax = document.getElementById('parallax');
var parallaxInstance = new Parallax(parallax);

new WOW().init();

var rellax = new Rellax('.rellax', {
	speed: 5,
	center: true,
	round: true,
	vertical: true,
	horizontal: false
});

$(function(){
	if ($(window).width() > 700){
		$(".method-check").click(function() {
			$(".intimgdesk1").css("display", "flex");
			$(".intimgdesk2").css("display", "none");
			$(".intensive").addClass("intensivebg1").removeClass("intensivebg2");
		});

		$(".prepod-check").click(function() {
			$(".intimgdesk2").css("display", "flex");
			$(".intimgdesk1").css("display", "none");
			$(".intensive").addClass("intensivebg2").removeClass("intensivebg1");
		});
	} else if ($(window).width() < 700) {
		if ($(window).width() < 700){
			$(".intimgdesk1").css("display", "none");
			$(".intimgdesk2").css("display", "none");
		}
		$(".method-check").click(function() {
			$(".intimgmob1").css("display", "flex");
			$(".intimgmob2").css("display", "none");
			$(".intensive").addClass("intensivebg1").removeClass("intensivebg2");
		});

		$(".prepod-check").click(function() {
			$(".intimgmob2").css("display", "flex");
			$(".intimgmob1").css("display", "none");
			$(".intensive").addClass("intensivebg2").removeClass("intensivebg1");
		});

	};
});

let radioLabel = $(".radio-label");
radioLabel.click(function(event){
	$(this).css("color","#212649");
	$(this).css("color","#212649");
});
radioLabel.mouseenter(function(event){
	$(this).css("opacity","0.8");
});
radioLabel.mouseout(function(event){
	$(this).css("opacity","1");
});

let purpleLabel = $(".purple-label");

purpleLabel.click(function(event){
	$(this).css("color","#212649");
});
purpleLabel.mouseenter(function(event){
	$(this).css("opacity","0.8");
});
purpleLabel.mouseout(function(event){
	$(this).css("opacity","1");
});



purpleLabel.click(function(){
	if( !$(".purple-checkbox").prop("checked") ){
		purpleLabel.css("color", "#727489");
	} else {
		purpleLabel.css("color", "#212649");
	}
});

let $hamburger = $(".hamburger");
let $menuBlockLink = $(".menu-block nav a");

$hamburger.on("click", function(e) {

	if($(this).hasClass('is-active')){
		$menuBlockLink.css("transition", "opacity 1s ease 0");
		$menuBlockLink.css("transition", "opacity 1.3s ease 0");
		$menuBlockLink.css("transition", "opacity 1.5s ease 0");
		$menuBlockLink.css("transition", "opacity 1.7s ease 0");
		$menuBlockLink.css("transition", "opacity 1.9s ease 0");
		$menuBlockLink.css("transition", "opacity 2.1s ease 0");
		$(".menu-block .social-media").css("transition", "opacity 2.3s ease 0");

		$(".menu-block").css({
			"opacity": "0",
			"z-index": "-3",
		});

		$("body").css("overflowY", "visible");
		$("top-header").css("position", "fixed");
		$(this).removeClass('is-active');

	} else {

		$hamburger.toggleClass("is-active");
		$(".menu-block").css({
			"opacity": "1",
			"z-index": "9999",
		});
		$("body").css("overflowY", "hidden");
		$menuBlockLink.css("opacity", "1");
		$(".menu-block .social-media").css("opacity", "1");

	}
});

});