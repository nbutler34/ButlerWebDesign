$(document).ready(function() {
    // run function on initial page load
    var lastClicked = 0;

    // variables();
    interactions(lastClicked);

	// run function on resize of the window
    $(window).resize(function() {
  
    });

    // run function on scroll
    $(window).scroll(function() {

    });
});

function interactions(lastClicked) {
	$('.game').click(function(){
		$('.game').toggleClass('red2');
		$('.console').toggleClass('red1');

		if(checkTime(lastClicked) < 500){
			console.log('onScreen dblclick should run');
			$('.onScreen').dblclick();
		}	

		lastClicked = (new Date()).getTime();
	});

	$('.console').hover(function(){
		$('.console').toggleClass('stretch');
		console.log('hovering');
	});

	$('.onScreen').dblclick(function(){
		console.log('onScreen dblclick was run');

		if( $('.onScreen').is('#Infamous') ){
			console.log('it worked this time');
			$('#FalloutNV').toggleClass('onScreen');
			$('#Infamous').toggleClass('onScreen');
		} 
		else if( $('.onScreen').is('#FalloutNV') ){
			console.log('it worked');
			$('#BioShock8').toggleClass('onScreen');
			$('#FalloutNV').toggleClass('onScreen');
		}

		else if( $('.onScreen').is('#BioShock8') ){
			console.log('it worked 2');
			$('#NFSHotPursuit').toggleClass('onScreen');
			$('#BioShock8').toggleClass('onScreen');
		}

		else if( $('.onScreen').is('#NFSHotPursuit') ){
			console.log('it worked 3');
			$('#BatmanAA').toggleClass('onScreen');
			$('#NFSHotPursuit').toggleClass('onScreen');
		}

		else if( $('.onScreen').is('#BatmanAA') ){
			console.log('it worked 4');
			$('#Infamous').toggleClass('onScreen');
			$('#BatmanAA').toggleClass('onScreen');
		}

		else{
			console.log('fix it');
		}
	})
}

function checkTime(lastClicked){
    	var timeNow = (new Date()).getTime();
    	var diff = timeNow - lastClicked;

    	return diff;
    }

function variables() {
	
}