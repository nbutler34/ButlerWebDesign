$(document).ready(function() {
	var distance = $('nav').offset(),
	$window = $(window);

	interactions();

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

function mIn(id) {
	if(id == 'p-p') {
		$('p-p__hover__identifier').removeClass('tile__text__hidden');
		console.log('statement run');
	}
	else if(id == 'st') {
		$('#st__hover__identifier').removeClass('tile__text__hidden');
	}
	else if(id == 'hy') {
		$('#hy__hover__identifier').removeClass('tile__text__hidden');
	}
	else if(id == 'en') {
		$('#en__hover__identifier').removeClass('tile__text__hidden');
	}
}

function mOut(id) {
	if(id == 'p-p') {
		$('#p-p__hover__identifier').addClass('tile__text__hidden');
	}
	else if(id == 'st') {
		$('#st__hover__identifier').addClass('tile__text__hidden');
	}
	else if(id == 'hy') {
		$('#hy__hover__identifier').addClass('tile__text__hidden');
	}
	else if(id == 'en') {
		$('#en__hover__identifier').addClass('tile__text__hidden');
	}
}

function interactions() {
	$('#push__pull__info').mouseenter(mIn('p-p'));
	$('#push__pull__info').mouseleave(mOut('p-p'));

	$('#strength__info').mouseenter(mIn('st'));
	$('#strength__info').mouseleave(mOut('st'));

	$('#hypertrophy__info').mouseenter(mIn('hy'));
	$('#hypertrophy__info').mouseleave(mOut('hy'));

	$('#endurance__info').mouseenter(mIn('en'));
	$('#endurance__info').mouseleave(mOut('en'));
}