import 'magnific-popup';

$(document).ready(function() {
	$('.js-slider-image').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-with-zoom',
			zoom: {
		    enabled: true,

		    duration: 350,
		    easing: "ease-in-out",
		  },
			image: {
			verticalFit: true
		},
	});
});

