const lazyImages = document.querySelectorAll('img[data-src]');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPosition = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src) {
			lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	})
};

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
	if (document.querySelectorAll('img[data-src]').length > 0) {
		lazyScrollCheck();
	}
}

function lazyScrollCheck() {
	let lazyIndex = lazyImagesPosition.findIndex(
		element =>
			pageYOffset > element - windowHeight
	);
	if (lazyIndex >= 0) {
		if (lazyImages[lazyIndex].dataset.src) {
			lazyImages[lazyIndex].src = lazyImages[lazyIndex].dataset.src;
			lazyImages[lazyIndex].removeAttribute('data-src');
		}
		delete lazyImagesPosition[lazyIndex]
	}
};

let buttonOpenOthers = document.querySelector('#buttonOthers');
buttonOpenOthers.addEventListener('click', function () {
	let cardsArray = document.querySelectorAll('.elements-casino__card');
	cardsArray[5].classList.add('show');
	cardsArray[6].classList.add('show');
})