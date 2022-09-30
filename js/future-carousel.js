(function () {
	const slides = [
		`<div class="future__slide">
			<img src="img/future/future-carousel-img-1.png" alt="future-carousel-img-1">
		</div>`,
		`<div class="future__slide">
			<img src="img/future/future-carousel-img-2.png" alt="future-carousel-img-2">
		</div>`,
		`<div class="future__slide">
			<img src="img/future/future-carousel-img-3.png" alt="future-carousel-img-3">
		</div>`,
		`<div class="future__slide">
			<img src="img/future/future-carousel-img-4.png" alt="future-carousel-img-4">
		</div>`,
		`<div class="future__slide">
			<img src="img/future/future-carousel-img-5.png" alt="future-carousel-img-5">
		</div>`,
		`<div class="future__slide">
			<img src="img/future/future-carousel-img-6.png" alt="future-carousel-img-6">
		</div>`
	];
	let currentSlideIdx = 0;
	function renderCarousel() {
		const slideContainer = document.querySelector('.future__carousel-slides');
		slideContainer.innerHTML = slides[currentSlideIdx];
		if (window.innerWidth > 600) {
			const secondSlideIdx =currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1 ;
			slideContainer.innerHTML += slides[secondSlideIdx];
			if (window.innerWidth > 900) {
				const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1 ;
				slideContainer.innerHTML += slides[thirdSlideIdx];
			}
		}
	}

	function prev() {
		currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1 ;
		renderCarousel();
	}

	function next() {
		currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1 ;
		renderCarousel();
	}

	const prevButton = document.querySelector('.future__carousel-btn-prev');
	prevButton.addEventListener('click', prev);

	const nextButton = document.querySelector('.future__carousel-btn-next');
	nextButton.addEventListener('click', next);
	
	setInterval(renderCarousel, 3);

	renderCarousel();
})();