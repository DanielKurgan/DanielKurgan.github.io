$('.mainbag').viewScroller({
	useScrollbar: false, // Use scrollbar to change views
	changeWhenAnim: false, // Change views when they are changing
	loopMainViews: true, // Change horizontal views (mainviews) in loop mode
	loopSubViews: true	// Change vertical views (subviews) in loop mode
});

function bosshoverOver() {
	$(".boss-image.hover").css("display", "block");
}
function bosshoverOut() {
	$(".boss-image.not-hover").css("display", "block");
	$(".boss-image.hover").css("display", "none");
}