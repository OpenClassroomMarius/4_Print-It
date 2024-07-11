const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

document.addEventListener('DOMContentLoaded', (event) => {
    const arrowLeftElement = document.querySelector('.arrow_left');
	const arrowRightElement = document.querySelector('.arrow_right');
	const dotsContainer = document.querySelector('.dots');
	const bannerText = document.querySelector('.banner-text');
	const bannerImg = document.querySelector('.banner-img');
	let currentSlide = 0;

	if (bannerImg && bannerText) {
		function updateSlide() {
			bannerImg.src = `assets/images/slideshow/${slides[currentSlide].image}`;
			bannerText.innerHTML = slides[currentSlide].tagLine;
			updateDots();
		};

		function updateDots() {
			const dots = dotsContainer.querySelectorAll('.dot');
			dots.forEach((dot, index) => {
				if (index === currentSlide) {
					dot.classList.add('dot_selected');
				} else {
					dot.classList.remove('dot_selected');
				}
			});
		};

		if (arrowLeftElement) {
			arrowLeftElement.addEventListener('click', () => {
				if (currentSlide === 0) {
					currentSlide = slides.length - 1;
				} else {
					currentSlide -= 1;
				}
				updateSlide();
				console.log('arrow_left element was clicked');
			});
		}

		if (arrowRightElement) {
			arrowRightElement.addEventListener('click', () => {
				if (currentSlide === slides.length - 1) {
					currentSlide = 0;
				} else {
					currentSlide += 1;
				}
				updateSlide();
				console.log('arrow_right element was clicked');
			});
		}

		if (dotsContainer) {
			for (let i = 0; i < slides.length; i++) {
				const newDot = document.createElement('div');
				newDot.classList.add('dot', 'cursor-pointer', `dot-${i}`);
				if (i === 0) {
					newDot.classList.add('dot_selected');
				}
				newDot.addEventListener('click', () => {
					currentSlide = i;
					updateSlide();
					console.log(`dot ${i + 1} was clicked`);
				});
				dotsContainer.appendChild(newDot);
			}
		}

		updateSlide();
	} else {
		console.error('banner-img or banner-text element not found');
	}
});