$(document).ready(function() {
	var distance = $('nav').offset(),
	$window = $(window);

	console.log(distance.top);

	$(window).on('scroll', function() {
		if( ($window.scrollTop() >= distance.top) && ( $('nav').hasClass('show') )) {
			// console.log('alteration prevented');
			return false;
		}
		else if( $window.scrollTop() <= distance.top && !( $('nav').hasClass('show') )) {
			// console.log('alteration prevented');
			return false;
		}

		if( ($window.scrollTop() >= distance.top) && !( $('nav').hasClass('show') )) {
			$('nav').addClass('show');
			// console.log('show added');
		}
		else if( $window.scrollTop() <= distance.top && ( $('nav').hasClass('show') )) {
			$('nav').removeClass('show');
			// console.log('show removed')
		}
	});

})