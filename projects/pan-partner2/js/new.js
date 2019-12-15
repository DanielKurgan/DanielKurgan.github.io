

$(document).ready(function(){

	$(".popup-newyear__cross").click(function(){
		$(".popup-newyear").hide();
	});

	$(function($){
	  $(document).mouseup(function (e){ // событие клика по веб-документу
	    var div = $(".popup-newyear__block"); // тут указываем ID элемента
	    if (!div.is(e.target) // если клик был не по нашему блоку
	        && div.has(e.target).length === 0) { // и не по его дочерним элементам
	      $(".popup-newyear").hide(); // скрываем его
	    }
	  });
	});

	let timer2 = setInterval(popupVisible, 1000); 
	function popupVisible(){
		$(".popup-newyear").css("opacity", "1");
	};

	let timer = setInterval(momentTimer, 0); 
	function momentTimer() {
		$(".popup-newyear__block-timer__count").text(moment().format('hh:mm:ss') );
	};

});

$(document).ready(function() {
	$('.popup-newyear__block-submit').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(".pn1").css("display","none");
			$(".pn2").css("display","flex");
		});
		return false;
	});
});
