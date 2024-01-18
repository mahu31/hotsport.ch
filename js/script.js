// function initializeHeaderBurger() {
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		console.log("Clicked");
		$('.header__burger, .header__menu, .header__language').toggleClass('active');
		$('.page').toggleClass('page_active');
		$('body').toggleClass('body_active');
	});
});
