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


initLocomotive();

// const iOS = !window.MSStream && /iPad|iPhone|iPod/.test(navigator.userAgent); // fails on iPad iOS 13
// function iOSversion() {
// 	if (iOS) { // <-- Use the one here above
// 		if (window.indexedDB) { 
// 			window.scrollTo(3, 5);
// 			// console.log(window.indexedDB)
// 			// bottomBar.style.top = 'calc(100vh - 24.2rem)';
// 			// return 'iOS 8 and up'; 
// 		}
// 	}	

// 	// return console.log('Not an iOS device');
// }


// iOSversion()
