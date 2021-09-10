const $videoContainer = $('.js-video-container');

$videoContainer.on('click', '.js-init-video', function(e) {
	e.preventDefault();
	const $this = $(this);

	$this.parent().next().get(0).play();
	$this.parent().hide();
	$this.parent().closest('.video__inner').removeClass('has-overlay');
});

$(".js-video").on('ended', function() {
	$this = $(this);

	$this.parent().addClass('has-overlay');
	$this.siblings().slideDown('slow');
});


$('.js-video-machine').on('ended', function() {
	$('.hero--machine').addClass('is-revealed');
});


