const $bottomBar = $('.js-bottom-bar');
const $window = $(window);
let winHeight = $window.height();

$bottomBar.hide(); 

$window.on('scroll', function() {
	const $this = $(this);

	if ($this.scrollTop() > winHeight - 100) {
		$bottomBar.slideDown();
	} else {
		$bottomBar.slideUp();
	}
}).on("resize", function() {
	winHeight = $(this).height();
})

