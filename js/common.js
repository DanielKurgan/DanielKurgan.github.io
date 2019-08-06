$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(document).ready(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(500).fadeOut("slow");

});

// $(document).ready(function(){

// 	});

$('.skillbar').skillBars({

  // number start
  from: 0,       

  // number end 
  to: false,      

  // animation speed
  speed: 1500,   

  // how often the element should be up<a href="https://www.jqueryscript.net/time-clock/">date</a>d
  interval: 500,    

  // the number of decimal places to show
  decimals: 0,      

  // callback method for every time the element is updated,
  onUpdate: null,   

  // callback method for when the element finishes updating
  onComplete: null,   

  // CSS classes
  classes:{
    skillBarBar : '.skillbar-bar',
    skillBarPercent : '.skill-bar-percent',
  }
  
});