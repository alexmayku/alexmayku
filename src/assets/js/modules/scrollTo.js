$('.js-scrolldown-btn').on('click', function(e) {
	e.preventDefault();

	const $this = $(this);
	const target = $this.parent().next();

	$('html, body').animate({ scrollTop: target.offset().top - (160)}, 100);
});
