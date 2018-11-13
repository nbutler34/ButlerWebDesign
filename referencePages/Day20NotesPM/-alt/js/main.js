$(document).ready(function() {
    // run function on initial page load
	demoFunction();
	
	// run function on resize of the window
    $(window).resize(function() {
      
    });

    // run function on scroll
    $(window).scroll(function() {

    });
});

function demoFunction() {
	$('p').addClass('bigger');
	// added a message to the console, helpful in debugging
	console.log('added bigger');
	$('p').click(function(){
		$('p').css('color', 'white');
		// added a message to the console, helpful in debugging
		console.log('added white');
		$('body').toggleClass('bodyBG');
	});
}