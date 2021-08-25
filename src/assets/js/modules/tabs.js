$('.js-tabs').on('click', '.tabs__nav a', function(e) {
	e.preventDefault();
	
	const $this = $(this);

	const tabId = $this.attr('href');
	const $target = $(tabId);

	$target.addClass('is-current')
			.siblings().removeClass('is-current');

	$this.parent().addClass('is-current')
					.siblings().removeClass('is-current');	
})
