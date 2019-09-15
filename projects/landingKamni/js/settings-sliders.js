// MAIN SLIDER
$('.main-slider').slick({
	dots: true,
	variableWidth: true,
	responsive: [
	    {
	      breakpoint: 550,
	      settings: {
	        arrows: false,
	      }
	    },
	]
});



// Stock SLIDER
$(function() {
 
  $(".innovation-sliders").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
	responsive: [
	    {
	      breakpoint: 1360,
	      settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 1150,
	      settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
		    arrows: false,
		    slidesToShow: 2,
		    slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 510,
	      settings: {
		    arrows: false,
		    slidesToShow: 1,
		    slidesToScroll: 1,
	      }
	    },
	]
  });
  
  $(".filter li").on('click', function(){
    var filter = $(this).data('filter');
    $(".innovation-sliders").slick('slickUnfilter');
    
    if(filter == 'red'){
      $(".innovation-sliders").slick('slickFilter','.red');
    }
    else if(filter == 'yellow'){
      $(".innovation-sliders").slick('slickFilter','.yellow');
    }
    else if(filter == 'blue'){
      $(".innovation-sliders").slick('slickFilter','.blue');
    }
    else if(filter == 'all'){
      
      $(".innovation-sliders").slick('slickUnfilter');
    }
    
  })
  
});



// INNOVATION SLIDER
$(function() {
 
  $(".stock-sliders").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
	responsive: [
	    {
	      breakpoint: 1360,
	      settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
	      }
	    },
	    {
	      breakpoint: 1150,
	      settings: {
		    slidesToShow: 2,
		    slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 640,
	      settings: {
		    arrows: false,
		    slidesToShow: 2,
		    slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 510,
	      settings: {
		    arrows: false,
		    slidesToShow: 1,
		    slidesToScroll: 1,
	      }
	    },
	]
  });
  
  $(".filter li").on('click', function(){
    var filter = $(this).data('filter');
    $(".stock-sliders").slick('slickUnfilter');
    
    if(filter == 'red'){
      $(".stock-sliders").slick('slickFilter','.red');
    }
    else if(filter == 'yellow'){
      $(".stock-sliders").slick('slickFilter','.yellow');
    }
    else if(filter == 'blue'){
      $(".stock-sliders").slick('slickFilter','.blue');
    }
    else if(filter == 'all'){
      
      $(".stock-sliders").slick('slickUnfilter');
    }
    
  })
  
});




// GOODS CARD
$('.good-picture_slider').slick({
	dots: false,
	variableWidth: true,
	responsive: [
	    {
	      breakpoint: 550,
	      settings: {
	        arrows: false,
	      }
	    },
	]
});
