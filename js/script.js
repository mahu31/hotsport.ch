$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__menu, .header__language').toggleClass('active');
		$('.page').toggleClass('page_active');
		$('body').toggleClass('body_active');
	});
});
