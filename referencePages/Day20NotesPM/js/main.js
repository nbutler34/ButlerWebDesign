$(document).ready(function() {
    // run function on initial page load
    demoFunction();
    mouseEvent();
    // run function on resize of the window
    $(window).resize(function() {
      
    });
    // run function on scroll
    $(window).scroll(function() {

    });
});

function demoFunction() {
	$('p').click(function(){
		$('p').toggleClass('bigger');
		$('body').addClass('bgColor');
		$('p').css('color', 'white')
	});
}

function mouseEvent() {
	$('.square').mouseenter(function(){
		$('.square').addClass('bgColor');
		console.log('mouse enter .square');
	});
	$('.square').mouseleave(function(){
		$('.square').removeClass('bgColor');
		console.log('mouse enter .square');
	});

}