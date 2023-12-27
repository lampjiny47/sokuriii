const bannerSwiper = () => {
	let swiperWrap = document.querySelectorAll("[class^='swiperBanner']");
	let customOpt = {}
	let defaultObj = {
		slidesPerView : 1,
		spaceBetween : 0,
		pagination : {
			el : ".swiper-pagination01"
		},
		navigation : {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		loop : true,
	}

	swiperWrap.forEach(element => {
		let slideItem = element.querySelectorAll('.swiper-slide');

		customOpt = {
			slidesPerView : element.dataset.slidesPerView,
			spaceBetween : element.dataset.spaceBetween,
			loop : element.dataset.navigation,
			pagination : element.dataset.pagination,
			navigation : element.dataset.loop
		}

		if(slideItem.length > 1){
			customOpt.slidesPerView = customOpt.slidesPerView == null ? 1 : element.dataset.slidesPerView;

			customOpt.spaceBetween = customOpt.slidesPerView == null ? 1 : element.dataset.slidesPerView;
		}

		// console.log(slideItem.length);
		// console.log(element);
	});
}