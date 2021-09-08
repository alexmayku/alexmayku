import LocomotiveScroll from 'locomotive-scroll';
const imagesLoaded = require("imagesloaded");
const scrollContainer = document.querySelector('[data-scroll-container]');

const machineImages = {
	1: 'assets/images/showcase/multiplier-image-1.jpg',
	2: 'assets/images/showcase/multiplier-image-2.jpg',
	3: 'assets/images/showcase/multiplier-image-3.jpg',
	4: 'assets/images/showcase/multiplier-image-4.jpg',
	5: 'assets/images/showcase/multiplier-image-5.jpg',
	6: 'assets/images/showcase/multiplier-image-6.jpg',
	7: 'assets/images/showcase/multiplier-image-7.jpg',
	8: 'assets/images/showcase/multiplier-image-8.jpg',
	9: 'assets/images/showcase/multiplier-image-9.jpg',
	10: 'assets/images/showcase/multiplier-image-10.jpg',
	11: 'assets/images/showcase/multiplier-image-11.jpg',
	12: 'assets/images/showcase/multiplier-image-12.jpg',
	13: 'assets/images/showcase/multiplier-image-13.jpg',
	14: 'assets/images/showcase/multiplier-image-14.jpg',
	15: 'assets/images/showcase/multiplier-image-15.jpg',
	16: 'assets/images/showcase/multiplier-image-16.jpg',
	17: 'assets/images/showcase/multiplier-image-17.jpg',
	18: 'assets/images/showcase/multiplier-image-18.jpg',
	19: 'assets/images/showcase/multiplier-image-19.jpg',
	20: 'assets/images/showcase/multiplier-image-20.jpg',
	21: 'assets/images/showcase/multiplier-image-21.jpg',
	22: 'assets/images/showcase/multiplier-image-22.jpg',
	23: 'assets/images/showcase/multiplier-image-23.jpg',
	24: 'assets/images/showcase/multiplier-image-24.jpg',
	25: 'assets/images/showcase/multiplier-image-25.jpg',
	26: 'assets/images/showcase/multiplier-image-26.jpg',
	27: 'assets/images/showcase/multiplier-image-27.jpg',
	28: 'assets/images/showcase/multiplier-image-28.jpg',
	29: 'assets/images/showcase/multiplier-image-29.jpg',
	30: 'assets/images/showcase/multiplier-image-30.jpg',
	31: 'assets/images/showcase/multiplier-image-31.jpg',
	32: 'assets/images/showcase/multiplier-image-32.jpg',
	33: 'assets/images/showcase/multiplier-image-33.jpg',
	34: 'assets/images/showcase/multiplier-image-34.jpg',
	35: 'assets/images/showcase/multiplier-image-35.jpg',
	36: 'assets/images/showcase/multiplier-image-36.jpg',
	37: 'assets/images/showcase/multiplier-image-37.jpg',
	38: 'assets/images/showcase/multiplier-image-38.jpg',
	39: 'assets/images/showcase/multiplier-image-39.jpg',
	40: 'assets/images/showcase/multiplier-image-40.jpg',
	41: 'assets/images/showcase/multiplier-image-41.jpg',
	42: 'assets/images/showcase/multiplier-image-42.jpg',
	43: 'assets/images/showcase/multiplier-image-43.jpg',
	44: 'assets/images/showcase/multiplier-image-44.jpg',
	45: 'assets/images/showcase/multiplier-image-45.jpg',
	46: 'assets/images/showcase/multiplier-image-46.jpg',
	47: 'assets/images/showcase/multiplier-image-47.jpg',
	48: 'assets/images/showcase/multiplier-image-48.jpg',
	49: 'assets/images/showcase/multiplier-image-49.jpg',
	50: 'assets/images/showcase/multiplier-image-50.jpg',
	51: 'assets/images/showcase/multiplier-image-51.jpg',
	52: 'assets/images/showcase/multiplier-image-52.jpg',
	53: 'assets/images/showcase/multiplier-image-53.jpg',
	54: 'assets/images/showcase/multiplier-image-54.jpg',
	55: 'assets/images/showcase/multiplier-image-55.jpg',
	56: 'assets/images/showcase/multiplier-image-56.jpg',
	57: 'assets/images/showcase/multiplier-image-57.jpg',
	58: 'assets/images/showcase/multiplier-image-58.jpg',
	59: 'assets/images/showcase/multiplier-image-59.jpg',
	60: 'assets/images/showcase/multiplier-image-60.jpg',
	61: 'assets/images/showcase/multiplier-image-61.jpg',
	62: 'assets/images/showcase/multiplier-image-62.jpg',
	63: 'assets/images/showcase/multiplier-image-63.jpg',
	64: 'assets/images/showcase/multiplier-image-64.jpg',
	65: 'assets/images/showcase/multiplier-image-65.jpg',
	66: 'assets/images/showcase/multiplier-image-66.jpg',
	67: 'assets/images/showcase/multiplier-image-67.jpg',
	68: 'assets/images/showcase/multiplier-image-68.jpg',
	69: 'assets/images/showcase/multiplier-image-69.jpg',
	70: 'assets/images/showcase/multiplier-image-70.jpg',
	71: 'assets/images/showcase/multiplier-image-71.jpg',
	72: 'assets/images/showcase/multiplier-image-72.jpg',
	73: 'assets/images/showcase/multiplier-image-73.jpg',
	74: 'assets/images/showcase/multiplier-image-74.jpg',
	75: 'assets/images/showcase/multiplier-image-75.jpg',
	76: 'assets/images/showcase/multiplier-image-76.jpg',
	77: 'assets/images/showcase/multiplier-image-77.jpg',
	78: 'assets/images/showcase/multiplier-image-78.jpg',
	79: 'assets/images/showcase/multiplier-image-79.jpg',
	80: 'assets/images/showcase/multiplier-image-80.jpg',
	81: 'assets/images/showcase/multiplier-image-81.jpg',
	82: 'assets/images/showcase/multiplier-image-82.jpg',
	83: 'assets/images/showcase/multiplier-image-83.jpg',
	84: 'assets/images/showcase/multiplier-image-84.jpg',
	85: 'assets/images/showcase/multiplier-image-85.jpg',
	86: 'assets/images/showcase/multiplier-image-86.jpg',
	87: 'assets/images/showcase/multiplier-image-87.jpg',
	88: 'assets/images/showcase/multiplier-image-88.jpg',
	89: 'assets/images/showcase/multiplier-image-89.jpg',
	90: 'assets/images/showcase/multiplier-image-90.jpg',
	91: 'assets/images/showcase/multiplier-image-91.jpg',
	92: 'assets/images/showcase/multiplier-image-92.jpg',
	93: 'assets/images/showcase/multiplier-image-93.jpg',
	94: 'assets/images/showcase/multiplier-image-94.jpg',
	95: 'assets/images/showcase/multiplier-image-95.jpg',
	96: 'assets/images/showcase/multiplier-image-96.jpg',
	97: 'assets/images/showcase/multiplier-image-97.jpg',
	98: 'assets/images/showcase/multiplier-image-98.jpg',
	99: 'assets/images/showcase/multiplier-image-99.jpg',	
};


function loadImages(images, index, callback) {
	if (index < images.length) {
		img.src = new Image();
		images[index] = img;
		images[index].onload = function() {
			loadImages(images, ++index, callback);
		};
	} else {
		callback(images);
	}
}

window.onload = function() {
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
		
		let i = 1;

		loadImages(machineImages, 0, (machineImages) => {
			const preloadedImages = [];

			for (const [, value] of Object.entries(machineImages)) {
				preloadedImages.push(value);
			}; 

			scroll.on('scroll', function(e) {
				if ($('.js-showcase').hasClass('is-inview')) {
					if (e.direction === 'down' && i < 98) {
						i++;
					} else if (e.direction === 'up' && i > 1){
						i--;
					};
					const y = e.scroll.y;
					let label = Math.min(Math.floor(y/30), i);
					const imageToUse = preloadedImages[label];
					$('.js-showcase-gallery').attr('style', `background-image: url('${imageToUse}');`);
				};
			});
		});
	};

	if(! ('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
		initLocomotive(); 
	};
}





