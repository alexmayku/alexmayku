import LocomotiveScroll from 'locomotive-scroll';

// if (! document.querySelector('[data-scroll-container]')) {
// 	return;
// }

const initLocomotive = () => {
	if (document.querySelector('[data-scroll-container]') === null) {
		return;
	} else {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			smartphone: {
				smooth: true
			},
			tablet: {
				smooth: true
			}
		}); 
	}
}

initLocomotive();



