const $stickyNav = $('.js-nav-sticky');

$stickyNav.on('click', 'li a', function(e) {
	e.preventDefault();

	const $this = $(this);
	$this.parent().toggleClass('is-current');
})
