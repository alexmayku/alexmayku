const bottomBar = document.querySelector('.js-bottom-bar');
// const $window = $(window);
// let winHeight = $window.height();

// const $window = $(window);
// let winHeight = $window.height();

// $bottomBar.hide(); 

// $window.on('scroll', function() {
// 	const $this = $(this);

// 	if ($this.scrollTop() > winHeight - 100) {
// 		$bottomBar.slideDown();
// 	} else {
// 		$bottomBar.slideUp();
// 	}
// }).on("resize", function() {
// 	winHeight = $(this).height();
// })


// const footer = document.querySelector('.js-footer');
// const main = document.querySelector('.js-main');
// const hero = document.querySelector('.js-hero');
// const footerHeight = footer.getBoundingClientRect().height * 3;

// console.log(footerHeight)

// const addSticky = () => {
// 	if (main === null) {
// 		return;
// 	}	
// 	const stickyBar = function(entries) {
// 		const [entry] = entries;

// 		if (! entry.isIntersecting) {
// 			console.log('no')
// 			bottomBar.classList.remove('is-intersecting');
// 		} else {
// 			bottomBar.classList.add('is-intersecting');

// 		};
// 	};

// 	const mainObserver = new IntersectionObserver(stickyBar, {
// 		root: null,
// 		threshold: 0,
// 		rootMargin: `-${footerHeight}px 0px 0px 0px`
// 	});

// 	mainObserver.observe(main);
// };

// addSticky();
