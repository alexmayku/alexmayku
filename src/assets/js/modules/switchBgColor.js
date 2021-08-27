const sectionWhite = document.querySelector('.js-section-white');

const initBgSwitch = () => {
	if (sectionWhite === null) {
		return;
	}

	const switchBackground = function(entries) {
		const [entry] = entries;

		if (! entry.isIntersecting) {
			sectionWhite.classList.remove('is-intersecting');
		} else {
			sectionWhite.classList.add('is-intersecting');
		}
	}

	const sectionObserver = new IntersectionObserver(switchBackground, {
		root: null,
		threshold: 0,
		rootMargin: `-300px 0px -300px 0px`
	});

	sectionObserver.observe(sectionWhite);
};

initBgSwitch();
