$('.slider').slick({
  infinite: false,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        centerMode: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: false,
      }
    },
    {
      breakpoint: 515,
      settings: {
        arrows: false,
      }
    },
  ]
});



$('.comments-slider').slick({
  infinite: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
      }
    },
    {
      breakpoint: 992,
      settings: {
        centerMode: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
      }
    },
  ]
});