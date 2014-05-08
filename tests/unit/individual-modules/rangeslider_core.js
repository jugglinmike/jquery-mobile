test( "Rangeslider widget works correctly", function() {
	var rangeslider = $( "#plain" ).rangeslider();

	deepEqual( rangeslider.rangeslider( "widget" ).hasClass( "ui-rangeslider" ), true, "Slider widget has class ui-rangeslider" );
});
