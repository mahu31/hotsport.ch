let thisLink = document.querySelectorAll('.header__link');

let li = [];
thisLink.forEach(elem => {
	li.push(elem.parentNode);
});

let thisLi;

li.forEach(elem => {
	if (elem.childNodes.length > 2) {
		elem.classList.add('list');
		thisLi = elem;
	}
});


let arrow = document.querySelectorAll('.arrow');

for (i = 0; i < arrow.length; i++) {
	let thisArrow = arrow[i];
	let subMenu = arrow[i].nextElementSibling;
	thisArrow.addEventListener('click', function getArrow() {
		thisArrow.classList.toggle('open'),
		subMenu.classList.toggle('active'),
		thisLi.classList.toggle('open')
	})
};

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
 buttonOpenOthers.addEventListener('click', function() {
 	let cardsArray = document.querySelectorAll('.elements-casino__card');
 	cardsArray[5].classList.add('show');
 	cardsArray[6].classList.add('show');
 })