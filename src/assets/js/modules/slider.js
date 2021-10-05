import Swiper from "swiper/swiper-bundle";

const galleryThumbs = new Swiper(".js-slider-thumbs", {
	centeredSlides: false,
	centeredSlidesBounds: true,
	slidesPerView: 4,
	watchOverflow: true,
	spaceBetween: 10,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	lideToClickedSlide: true,
	direction: 'horizontal',
	640:{
		spaceBetween: 8,
	}
});

const galleryMain = new Swiper(".js-slider-main", {
	slidesPerView: 1,
	watchOverflow: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	preventInteractionOnTransition: true,
	effect: 'fade',
	fadeEffect: {
	rossFade: true
	},
	thumbs: {
		swiper: galleryThumbs
	}
});
