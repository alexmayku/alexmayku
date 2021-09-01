if(('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {

	const stickyNavLinks = document.querySelectorAll('.js-nav-sticky li a');
	stickyNavLinks.forEach(link => {
		const target = link.getAttribute('href');

		link.addEventListener('click', (e) => {
			e.preventDefault();

			document.querySelector(target).scrollIntoView({
				behaviour: 'smooth',
			})
		});
	});	
};
