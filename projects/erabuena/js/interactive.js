$( function() {
    $( "#slider-range1" ).slider({
      range: true,
      min: 0,
      max: 50000,
      values: [ 0, 50000 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.values[ 0 ] + " руб" + " - " + ui.values[ 1 ] + " руб" );
      }
    });
    $( "#amount1" ).val( $( "#slider-range1" ).slider( "values", 0 ) + " руб" +
      " - " + $( "#slider-range1" ).slider( "values", 1 ) + " руб" );
  } );

$( function() {
    $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 50,
      values: [ 0, 50 ],
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.values[ 0 ] + " см" + " - " + ui.values[ 1 ] + " см" );
      }
    });
    $( "#amount2" ).val( $( "#slider-range2" ).slider( "values", 0 ) + " см" +
      " - " + $( "#slider-range2" ).slider( "values", 1 ) + " см" );
  } );

$( function() {
    $( "#slider-range3" ).slider({
      range: true,
      min: 0,
      max: 50,
      values: [ 0, 50 ],
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.values[ 0 ] + " см" + " - " + ui.values[ 1 ] + " см" );
      }
    });
    $( "#amount3" ).val( $( "#slider-range3" ).slider( "values", 0 ) + " см" +
      " - " + $( "#slider-range3" ).slider( "values", 1 ) + " см" );
  } );