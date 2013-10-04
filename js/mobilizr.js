if (window.jQuery) {

	jQuery(document).ready(function($) {

		//change form field types
		//can't use jQuery, see http://stackoverflow.com/questions/1544317/change-type-of-input-field-with-jquery
		$('input[name="Email"]').get(0).type = 'email';	//appears on both advocacy and donation

		//we can't assume Modernizr
		if ( $('html.touch').length || isTouch() ) {
			$('input[name="amountOther"]').attr('step','0.01').get(0).type = 'number';
			$('input[name="cc"]').attr('step','1').get(0).type = 'number';
			$('input[name="CVV2"]').attr('step','1').get(0).type = 'number';
		}
	});

	//basic test for touch events, a proxy for checking if mobile
	//modified from Modernizr's touch test
	function isTouch() {
		return (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
	}

}