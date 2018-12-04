$(window).on('scroll', function() {
	if($(window).scrollTop()) {
		$('nav').addClass('show');
	}
	else {
		$('nav').removeClass('show');
	}
})