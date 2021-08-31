const bottomBar = document.querySelector('.js-bottom-bar');
const main = document.querySelector('.js-sticky-watch');
const stickyNav = document.querySelector('.js-nav-sticky');
const hero = document.querySelector('.js-hero');


const addSticky = () => {
	if (main === null) {
		return;
	}	
	const stickyBar = function(entries) {
		const [entry] = entries;

		if (! entry.isIntersecting) {
			console.log('no')
			stickyNav.classList.remove('is-intersecting');
			bottomBar.classList.remove('is-intersecting');
		} else {
			console.log('is-ui')
			stickyNav.classList.add('is-intersecting');
			bottomBar.classList.add('is-intersecting');

		};
	};

	const mainObserver = new IntersectionObserver(stickyBar, {
		root: null,
		threshold: 0,
		rootMargin: `0px 0px 0px 0px`
	});

	mainObserver.observe(main);
};

addSticky();



