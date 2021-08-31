const bottomBar = document.querySelector('.js-bottom-bar');
const stickyWatcher = document.querySelector('.js-sticky-watch');
const stickyNav = document.querySelector('.js-nav-sticky');


const addSticky = () => {
	if (stickyWatcher === null) {
		return;
	}	
	const stickyBar = function(entries) {
		const [entry] = entries;

		if (! entry.isIntersecting) {
			// stickyNav.classList.remove('is-intersecting');
			bottomBar.classList.remove('is-intersecting');
		} else {
			// stickyNav.classList.add('is-intersecting');
			bottomBar.classList.add('is-intersecting');

		};
	};

	const stickyObserver = new IntersectionObserver(stickyBar, {
		root: null,
		threshold: 0,
		rootMargin: '0px 0px -50% 0px',
	});

	stickyObserver.observe(stickyWatcher);
};

addSticky();



