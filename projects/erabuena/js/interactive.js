$(document).ready(function(){

    // RANGE SLIDERS
    $( function() {
        $( "#slider-range1" ).slider({
            range: true,
            min: 0,
            max: 50000,
            values: [ 0, 50000 ],
            slide: function( event, ui ) {
                $( "#amount1" ).val( ui.values[ 0 ] + " руб"  );
                $( "#amount2" ).val( ui.values[ 1 ] + " руб" );
            }
        });
        $( "#amount1" ).val( $( "#slider-range1" ).slider( "values", 0 ) + " руб");
        $( "#amount2" ).val( $( "#slider-range1" ).slider( "values", 1 ) + " руб");
        
    } );

    $( function() {
        $( "#slider-range2" ).slider({
            range: true,
            min: 0,
            max: 50,
            values: [ 0, 50 ],
            slide: function( event, ui ) {
                $( "#amount3" ).val( ui.values[ 0 ] + " см");
                $( "#amount4" ).val( ui.values[ 1 ] + " см" );
            }
        });
        $( "#amount3" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " см");
        $( "#amount4" ).val( $( "#slider-range2" ).slider( "values", 1 ) + " см" );
    } );

    $( function() {
        $( "#slider-range3" ).slider({
            range: true,
            min: 0,
            max: 50,
            values: [ 0, 50 ],
            slide: function( event, ui ) {
                $( "#amount5" ).val( ui.values[ 0 ] + " см");
                $( "#amount6" ).val( ui.values[ 1 ] + " см" );
            }
        });

        $( "#amount5" ).val( $( "#slider-range3" ).slider( "values", 0 ) + " см");
        $( "#amount6" ).val( $( "#slider-range3" ).slider( "values", 1 ) + " см" );
    } );

    //   ADAPTIVE RANGE SLIDER FOR GLIDE MOBILE
    $('#slider-range1').draggable();
    $('#slider-range2').draggable();
    $('#slider-range3').draggable();

});

    // FILTER BUTTON

    $(".catalog-filter__button").click(function(){
        $(".catalog-filter__container").toggleClass("filterOpen");
    });

    // FILTER OPEN CHILD
    $(".catalog-filter__nav li").click(function(){
        $(this).find(".child").toggleClass("child-open");
    });

    // HOVER COLORS
    $('.catalog-filter__colors__color').click(function(){
        if ($(".catalog-filter__colors__color").hasClass('color-active') ) {
            $(".catalog-filter__colors__color").removeClass('color-active');
            $(this).addClass('color-active');
                //Insert logic if you want a type of optional click/off click code
            } 
            else
            {
                $(this).addClass('color-active');
                //Insert event handling logic
            }
        });

    // SLICK SLIDERS
    $('.tab-pane').slick({
        variableWidth: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });

    // STICKY BLOCK
    $(window).scroll(function() {
      if ($(".item-page__content").scrollTop() >= 5) {
        $('.item-page__sidebar').addClass('fixed');
      } else {
        $('.item-page__sidebar').removeClass('fixed');
      }
    });

    // INPUT NUMBER
    $(document).ready(function () {
        $('.numb').number_plugin();
    });

    $("select option").click(function(){

    });    

    $(document).ready(function(){
        // Находим плавающий блок и делаем его плавающим
        $('.item-page__sidebar-container').stick_in_parent({
            // Отступ сверху
            offset_top: 10
        });
    });