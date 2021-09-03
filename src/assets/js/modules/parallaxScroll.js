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
		getDirection: true,
		resetNativeScroll: false,
	}); 

	imagesLoaded(scrollContainer, { background: true }, function () {
		scroll.update();
	});

	setTimeout(function() {
		scroll.update();
	}, 2000);	
	
	const machineImages = {
		1: 'background-image: url(assets/images/showcase/multiplier-image-1.jpg);',
		2: 'background-image: url(assets/images/showcase/multiplier-image-2.jpg);',
		3: 'background-image: url(assets/images/showcase/multiplier-image-3.jpg);',
		4: 'background-image: url(assets/images/showcase/multiplier-image-4.jpg);',
		5: 'background-image: url(assets/images/showcase/multiplier-image-5.jpg);',
		6: 'background-image: url(assets/images/showcase/multiplier-image-6.jpg);',
		7: 'background-image: url(assets/images/showcase/multiplier-image-7.jpg);',
		8: 'background-image: url(assets/images/showcase/multiplier-image-8.jpg);',
		9: 'background-image: url(assets/images/showcase/multiplier-image-9.jpg);',
		10: 'background-image: url(assets/images/showcase/multiplier-image-10.jpg);',
		11: 'background-image: url(assets/images/showcase/multiplier-image-11.jpg);',
		12: 'background-image: url(assets/images/showcase/multiplier-image-12.jpg);',
		13: 'background-image: url(assets/images/showcase/multiplier-image-13.jpg);',
		14: 'background-image: url(assets/images/showcase/multiplier-image-14.jpg);',
		15: 'background-image: url(assets/images/showcase/multiplier-image-15.jpg);',
		16: 'background-image: url(assets/images/showcase/multiplier-image-16.jpg);',
		17: 'background-image: url(assets/images/showcase/multiplier-image-17.jpg);',
		18: 'background-image: url(assets/images/showcase/multiplier-image-18.jpg);',
		19: 'background-image: url(assets/images/showcase/multiplier-image-19.jpg);',
		20: 'background-image: url(assets/images/showcase/multiplier-image-20.jpg);',
		21: 'background-image: url(assets/images/showcase/multiplier-image-21.jpg);',
		22: 'background-image: url(assets/images/showcase/multiplier-image-22.jpg);',
		23: 'background-image: url(assets/images/showcase/multiplier-image-23.jpg);',
		24: 'background-image: url(assets/images/showcase/multiplier-image-24.jpg);',
		25: 'background-image: url(assets/images/showcase/multiplier-image-25.jpg);',
		26: 'background-image: url(assets/images/showcase/multiplier-image-26.jpg);',
		27: 'background-image: url(assets/images/showcase/multiplier-image-27.jpg);',
		28: 'background-image: url(assets/images/showcase/multiplier-image-28.jpg);',
		29: 'background-image: url(assets/images/showcase/multiplier-image-29.jpg);',
		30: 'background-image: url(assets/images/showcase/multiplier-image-30.jpg);',
		31: 'background-image: url(assets/images/showcase/multiplier-image-31.jpg);',
		32: 'background-image: url(assets/images/showcase/multiplier-image-32.jpg);',
		33: 'background-image: url(assets/images/showcase/multiplier-image-33.jpg);',
		34: 'background-image: url(assets/images/showcase/multiplier-image-34.jpg);',
		35: 'background-image: url(assets/images/showcase/multiplier-image-35.jpg);',
		36: 'background-image: url(assets/images/showcase/multiplier-image-36.jpg);',
		37: 'background-image: url(assets/images/showcase/multiplier-image-37.jpg);',
		38: 'background-image: url(assets/images/showcase/multiplier-image-38.jpg);',
		39: 'background-image: url(assets/images/showcase/multiplier-image-39.jpg);',
		40: 'background-image: url(assets/images/showcase/multiplier-image-40.jpg);',
		41: 'background-image: url(assets/images/showcase/multiplier-image-41.jpg);',
		42: 'background-image: url(assets/images/showcase/multiplier-image-42.jpg);',
		43: 'background-image: url(assets/images/showcase/multiplier-image-43.jpg);',
		44: 'background-image: url(assets/images/showcase/multiplier-image-44.jpg);',
		45: 'background-image: url(assets/images/showcase/multiplier-image-45.jpg);',
		46: 'background-image: url(assets/images/showcase/multiplier-image-46.jpg);',
		47: 'background-image: url(assets/images/showcase/multiplier-image-47.jpg);',
		48: 'background-image: url(assets/images/showcase/multiplier-image-48.jpg);',
		49: 'background-image: url(assets/images/showcase/multiplier-image-49.jpg);',
		50: 'background-image: url(assets/images/showcase/multiplier-image-50.jpg);',
		51: 'background-image: url(assets/images/showcase/multiplier-image-51.jpg);',
		52: 'background-image: url(assets/images/showcase/multiplier-image-52.jpg);',
		53: 'background-image: url(assets/images/showcase/multiplier-image-53.jpg);',
		54: 'background-image: url(assets/images/showcase/multiplier-image-54.jpg);',
		55: 'background-image: url(assets/images/showcase/multiplier-image-55.jpg);',
		56: 'background-image: url(assets/images/showcase/multiplier-image-56.jpg);',
		57: 'background-image: url(assets/images/showcase/multiplier-image-57.jpg);',
		58: 'background-image: url(assets/images/showcase/multiplier-image-58.jpg);',
		59: 'background-image: url(assets/images/showcase/multiplier-image-59.jpg);',
		60: 'background-image: url(assets/images/showcase/multiplier-image-60.jpg);',
		61: 'background-image: url(assets/images/showcase/multiplier-image-61.jpg);',
		62: 'background-image: url(assets/images/showcase/multiplier-image-62.jpg);',
		63: 'background-image: url(assets/images/showcase/multiplier-image-63.jpg);',
		64: 'background-image: url(assets/images/showcase/multiplier-image-64.jpg);',
		65: 'background-image: url(assets/images/showcase/multiplier-image-65.jpg);',
		66: 'background-image: url(assets/images/showcase/multiplier-image-66.jpg);',
		67: 'background-image: url(assets/images/showcase/multiplier-image-67.jpg);',
		68: 'background-image: url(assets/images/showcase/multiplier-image-68.jpg);',
		69: 'background-image: url(assets/images/showcase/multiplier-image-69.jpg);',
		70: 'background-image: url(assets/images/showcase/multiplier-image-70.jpg);',
		71: 'background-image: url(assets/images/showcase/multiplier-image-71.jpg);',
		72: 'background-image: url(assets/images/showcase/multiplier-image-72.jpg);',
		73: 'background-image: url(assets/images/showcase/multiplier-image-73.jpg);',
		74: 'background-image: url(assets/images/showcase/multiplier-image-74.jpg);',
		75: 'background-image: url(assets/images/showcase/multiplier-image-75.jpg);',
	}
	
	let i = 1;

	scroll.on('scroll', function(e) {
	 if ($('.js-showcase').hasClass('is-inview')) {	

	 	if (e.direction === 'down' && i < 75) {
	 		i++;
		} else if (e.direction === 'up' && i > 1){
			i--;
		};
		const y = e.scroll.y;
		let label = Math.min(Math.floor(y/30), i);
		const imageToUse = machineImages[label];
		$('.js-showcase-gallery').attr('style', `${imageToUse}`);
		}
	})
};

if(! ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
	initLocomotive(); 
};


