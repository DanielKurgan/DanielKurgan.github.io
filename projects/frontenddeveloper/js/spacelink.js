$("html, body").animate({
  scrollTop: target.offset().top - 350
}, 900, function(){
  $(document).on("scroll", onScroll);
});