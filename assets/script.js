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
]

document.addEventListener('DOMContentLoaded', (event) => {
    const arrowLeftElement = document.querySelector('.arrow_left');
	const arrowRightElement = document.querySelector('.arrow_right');
	const dotsContainer = document.querySelector('.dots');

    if (arrowLeftElement) {
        arrowLeftElement.addEventListener('click', () => {
            console.log('arrow_left element was clicked');
        });
    }
	if (arrowRightElement) {
		arrowRightElement.addEventListener('click', () => {
			console.log('arrow_right element was clicked');
		});
	}
	if (dotsContainer) {
		for (let i = 0; i < slides.length; i++) {
			const newDot = document.createElement('div');
			if (i === 0) {
				newDot.classList.add('dot', 'cursor-pointer', `dot-${i}`, 'dot_selected');
			} else {
				newDot.classList.add('dot', 'cursor-pointer', `dot-${i}`);
			}
            dotsContainer.appendChild(newDot);
        }
	}
});
