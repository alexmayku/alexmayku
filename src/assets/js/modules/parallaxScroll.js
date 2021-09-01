import LocomotiveScroll from 'locomotive-scroll';
 const imagesLoaded = require("imagesloaded");

const scrollContainer = document.querySelector('[data-scroll-container]');

const initLocomotive = () => {
	if (scrollContainer === null) {
		return;
	} 
	const scroll = new LocomotiveScroll({
		el: scrollContainer,
		smooth: true,
		touchMultiplier: 2,
		smartphone: {
			smooth: true
		},
		tablet: {
			smooth: true
		},
		scrollFromAnywhere: true,
	}); 

	imagesLoaded(scrollContainer, { background: true }, function () {
		scroll.update();
	});

	setTimeout(function() {
		scroll.update();
	}, 2000);	
};

if(! ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
	initLocomotive(); // DEV PURPOSE ONLY
};



