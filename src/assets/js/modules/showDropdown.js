const $dropdown = $('.js-dropdown');

if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
	$('.js-nav').on('click', '.js-dropdown-trigger', function(e) {
		e.preventDefault();
		$dropdown.addClass('is-visible');
	});

	$(window).on('click',  function() {
		$dropdown.removeClass('is-visible');
	});
};


$('.js-nav').on('mouseenter', '.js-dropdown-trigger', function() {
	$dropdown.addClass('is-visible');
});

$dropdown.on('mouseleave',  function() {
	$dropdown.removeClass('is-visible');
});
