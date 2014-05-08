test( "Slider widget works correctly", function() {
	var slider = $( "#plain" ).slider();

	deepEqual( slider.slider( "widget" ).hasClass( "ui-slider-input" ), true, "Slider widget has class ui-slider-input" );
});
