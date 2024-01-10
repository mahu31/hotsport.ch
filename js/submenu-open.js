function customizeHeader() {
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

	for (let i = 0; i < arrow.length; i++) {
		let thisArrow = arrow[i];
		let subMenu = arrow[i].nextElementSibling;

		thisArrow.addEventListener('click', function getArrow() {
			thisArrow.classList.toggle('open');
			subMenu.classList.toggle('active');
			thisLi.classList.toggle('open');
		});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	customizeHeader();
});