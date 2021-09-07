const $stickyNav = $('.js-nav-sticky');

$stickyNav.on('click', 'li a', function(e) {
	e.preventDefault();

	const $this = $(this);
	$this.parent().siblings().removeClass('is-current');
	$this.parent().toggleClass('is-current');
})
