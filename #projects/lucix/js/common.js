
$(".pop-up-close").click(function(){
  $('.pop-up-wrapper').removeClass('pop-up-wrapper-flex')
}); 

$(".header__top__cal_d").click(function(){
  $('.pop-up-wrapper').addClass('pop-up-wrapper-flex')
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".header-wrapper").offset().top
    }, 2000);
});
$(".header__top__cal").click(function(){
  $('.pop-up-wrapper').addClass('pop-up-wrapper-flex')
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".header-wrapper").offset().top
    }, 2000);
});
$(".button__get").click(function(){
  $('.pop-up-wrapper').addClass('pop-up-wrapper-flex')
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".header-wrapper").offset().top
    }, 2000);
}); 

$(".get__materials").click(function(){
  $('.pop-up-wrapper').addClass('pop-up-wrapper-flex')
  $([document.documentElement, document.body]).animate({
        scrollTop: $(".header-wrapper").offset().top
    }, 2000);
}); 
