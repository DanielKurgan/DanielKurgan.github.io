$(window).bind('scroll', function () {
if ($(window).scrollTop() > window.innerHeight) {
    $('.menu').addClass('fixed');
    $('.main').addClass('body_scroll');
} else {
    $('.menu').removeClass('fixed');
    $('.main').removeClass('body_scroll');
}
});