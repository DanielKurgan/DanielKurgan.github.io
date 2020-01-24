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