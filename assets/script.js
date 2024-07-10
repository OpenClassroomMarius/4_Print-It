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
	const firstDot = document.querySelector('.first_dot');
	const secondDot = document.querySelector('.second_dot');
	const thirdDot = document.querySelector('.third_dot');
	const fourthDot = document.querySelector('.fourth_dot');


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
	if (firstDot) {
		firstDot.addEventListener('click', () => {
			console.log('first_dot element was clicked');
		});
	}
	if (secondDot) {
		secondDot.addEventListener('click', () => {
			console.log('second_dot element was clicked');
		});
	}
	if (thirdDot) {
		thirdDot.addEventListener('click', () => {
			console.log('third_dot element was clicked');
		});
	}
	if (fourthDot) {
		fourthDot.addEventListener('click', () => {
			console.log('fourth_dot element was clicked');
		});
	}
});
