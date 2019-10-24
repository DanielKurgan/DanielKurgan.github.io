$(document).ready(function() {
	$(".ribbon-text").lettering();
	new CircleType(document.getElementById('ribbon-text'))
	  .radius(750);
	$(".ribbon-title").lettering();
	new CircleType(document.getElementById('ribbon-title'))
	  .radius(750);
});