$(document).ready(function() {
    // run function on initial page load

    interactions();

	// run function on resize of the window
    $(window).resize(function() {
  
    });

    // run function on scroll
    $(window).scroll(function() {

    });
});

function variables() {

}

function interactions() {
    $('tile').click(function(){
        $('#A1').addClass('SELECTED');
    });
}


