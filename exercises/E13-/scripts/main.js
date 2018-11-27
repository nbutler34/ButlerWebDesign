$(document).ready(function() {
    // run function on initial page load
    setCode();

	// run function on resize of the window
    $(window).resize(function() {
  
    });

    // run function on scroll
    $(window).scroll(function() {

    });
});

function setCode() {
	var color1 = 1 + Math.floor(Math.random() * 4);
	var color2 = 1 + Math.floor(Math.random() * 4);
	var color3 = 1 + Math.floor(Math.random() * 4);
	var color4 = 1 + Math.floor(Math.random() * 4);

	if(color1 == 1){
		$('#fake__FIRST').addClass('red');
	}
	else if(color1 == 2){
		$('#fake__FIRST').addClass('green');
	}
	else if(color1 == 3){
		$('#fake__FIRST').addClass('blue');
	}
	else if(color1 == 4){
		$('#fake__FIRST').addClass('yellow');
	}

	if(color2 == 1){
		$('#fake__SECOND').addClass('red');
	}
	else if(color2 == 2){
		$('#fake__SECOND').addClass('green');
	}
	else if(color2 == 3){
		$('#fake__SECOND').addClass('blue');
	}
	else if(color2 == 4){
		$('#fake__SECOND').addClass('yellow');
	}

	if(color3 == 1){
		$('#fake__THIRD').addClass('red');
	}
	else if(color3 == 2){
		$('#fake__THIRD').addClass('green');
	}
	else if(color3 == 3){
		$('#fake__THIRD').addClass('blue');
	}
	else if(color3 == 4){
		$('#fake__THIRD').addClass('yellow');
	}

	if(color4 == 1){
		$('#fake__FOURTH').addClass('red');
	}
	else if(color4 == 2){
		$('#fake__FOURTH').addClass('green');
	}
	else if(color4 == 3){
		$('#fake__FOURTH').addClass('blue');
	}
	else if(color4 == 4){
		$('#fake__FOURTH').addClass('yellow');
	}
}

function setColor(tile, color) {
	if(tile == 'FIRST'){
		if(color == 'RED') {
			$('#FIRST').addClass('red');
			$('#FIRST').removeClass('green');
			$('#FIRST').removeClass('blue');
			$('#FIRST').removeClass('yellow');
		}
		else if(color == 'GREEN') {
			$('#FIRST').addClass('green');
			$('#FIRST').removeClass('red');
			$('#FIRST').removeClass('blue');
			$('#FIRST').removeClass('yellow');
		}
		else if(color == 'BLUE') {
			$('#FIRST').addClass('blue');
			$('#FIRST').removeClass('red');
			$('#FIRST').removeClass('green');
			$('#FIRST').removeClass('yellow');
		}
		else if(color == 'YELLOW') {
			$('#FIRST').addClass('yellow');
			$('#FIRST').removeClass('red');
			$('#FIRST').removeClass('green');
			$('#FIRST').removeClass('blue');
		}
	}

	else if(tile == 'SECOND'){
		if(color == 'RED') {
			$('#SECOND').addClass('red');
			$('#SECOND').removeClass('green');
			$('#SECOND').removeClass('blue');
			$('#SECOND').removeClass('yellow');
		}
		else if(color == 'GREEN') {
			$('#SECOND').addClass('green');
			$('#SECOND').removeClass('red');
			$('#SECOND').removeClass('blue');
			$('#SECOND').removeClass('yellow');
		}
		else if(color == 'BLUE') {
			$('#SECOND').addClass('blue');
			$('#SECOND').removeClass('red');
			$('#SECOND').removeClass('green');
			$('#SECOND').removeClass('yellow');
		}
		else if(color == 'YELLOW') {
			$('#SECOND').addClass('yellow');
			$('#SECOND').removeClass('red');
			$('#SECOND').removeClass('green');
			$('#SECOND').removeClass('blue');
		}
	}

	else if(tile == 'THIRD'){
		if(color == 'RED') {
			$('#THIRD').addClass('red');
			$('#THIRD').removeClass('green');
			$('#THIRD').removeClass('blue');
			$('#THIRD').removeClass('yellow');
		}
		else if(color == 'GREEN') {
			$('#THIRD').addClass('green');
			$('#THIRD').removeClass('red');
			$('#THIRD').removeClass('blue');
			$('#THIRD').removeClass('yellow');
		}
		else if(color == 'BLUE') {
			$('#THIRD').addClass('blue');
			$('#THIRD').removeClass('red');
			$('#THIRD').removeClass('green');
			$('#THIRD').removeClass('yellow');
		}
		else if(color == 'YELLOW') {
			$('#THIRD').addClass('yellow');
			$('#THIRD').removeClass('red');
			$('#THIRD').removeClass('green');
			$('#THIRD').removeClass('blue');
		}
	}

	else if(tile == 'FOURTH'){
		if(color == 'RED') {
			$('#FOURTH').addClass('red');
			$('#FOURTH').removeClass('green');
			$('#FOURTH').removeClass('blue');
			$('#FOURTH').removeClass('yellow');
		}
		else if(color == 'GREEN') {
			$('#FOURTH').addClass('green');
			$('#FOURTH').removeClass('red');
			$('#FOURTH').removeClass('blue');
			$('#FOURTH').removeClass('yellow');
		}
		else if(color == 'BLUE') {
			$('#FOURTH').addClass('blue');
			$('#FOURTH').removeClass('red');
			$('#FOURTH').removeClass('green');
			$('#FOURTH').removeClass('yellow');
		}
		else if(color == 'YELLOW') {
			$('#FOURTH').addClass('yellow');
			$('#FOURTH').removeClass('red');
			$('#FOURTH').removeClass('green');
			$('#FOURTH').removeClass('blue');
		}
	}
}

function checkAnswer() {
	var points = 0;

	if( $('#fake__FIRST').hasClass('red') ){
		if( $('#FIRST').hasClass('red') ){
			points = points + 1;
			$('#FIRST').addClass('guess__Correct');
			$('#FIRST').removeClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
		}
		else{
			$('#FIRST').addClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
			$('#FIRST').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__FIRST').hasClass('green') ){
		if( $('#FIRST').hasClass('green') ){
			points = points + 1;
			$('#FIRST').addClass('guess__Correct');
			$('#FIRST').removeClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
		}
		else{
			$('#FIRST').addClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
			$('#FIRST').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__FIRST').hasClass('blue') ){
		if( $('#FIRST').hasClass('blue') ){
			points = points + 1;
			$('#FIRST').addClass('guess__Correct');
			$('#FIRST').removeClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
		}
		else{
			$('#FIRST').addClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
			$('#FIRST').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__FIRST').hasClass('yellow') ){
		if( $('#FIRST').hasClass('yellow') ){
			points = points + 1;
			$('#FIRST').addClass('guess__Correct');
			$('#FIRST').removeClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
		}
		else{
			$('#FIRST').addClass('guess__Wrong');
			$('#FIRST').removeClass('guess__Default');
			$('#FIRST').removeClass('guess__Correct');
		}
	}

	if( $('#fake__SECOND').hasClass('red') ){
		if( $('#SECOND').hasClass('red') ){
			points = points + 1;
			$('#SECOND').addClass('guess__Correct');
			$('#SECOND').removeClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
		}
		else{
			$('#SECOND').addClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
			$('#SECOND').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__SECOND').hasClass('green') ){
		if( $('#SECOND').hasClass('green') ){
			points = points + 1;
			$('#SECOND').addClass('guess__Correct');
			$('#SECOND').removeClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
		}
		else{
			$('#SECOND').addClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
			$('#SECOND').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__SECOND').hasClass('blue') ){
		if( $('#SECOND').hasClass('blue') ){
			points = points + 1;
			$('#SECOND').addClass('guess__Correct');
			$('#SECOND').removeClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
		}
		else{
			$('#SECOND').addClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
			$('#SECOND').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__SECOND').hasClass('yellow') ){
		if( $('#SECOND').hasClass('yellow') ){
			points = points + 1;
			$('#SECOND').addClass('guess__Correct');
			$('#SECOND').removeClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
		}
		else{
			$('#SECOND').addClass('guess__Wrong');
			$('#SECOND').removeClass('guess__Default');
			$('#SECOND').removeClass('guess__Correct');
		}
	}

	if( $('#fake__THIRD').hasClass('red') ){
		if( $('#THIRD').hasClass('red') ){
			points = points + 1;
			$('#THIRD').addClass('guess__Correct');
			$('#THIRD').removeClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
		}
		else{
			$('#THIRD').addClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
			$('#THIRD').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__THIRD').hasClass('green') ){
		if( $('#THIRD').hasClass('green') ){
			points = points + 1;
			$('#THIRD').addClass('guess__Correct');
			$('#THIRD').removeClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
		}
		else{
			$('#THIRD').addClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
			$('#THIRD').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__THIRD').hasClass('blue') ){
		if( $('#THIRD').hasClass('blue') ){
			points = points + 1;
			$('#THIRD').addClass('guess__Correct');
			$('#THIRD').removeClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
		}
		else{
			$('#THIRD').addClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
			$('#THIRD').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__THIRD').hasClass('yellow') ){
		if( $('#THIRD').hasClass('yellow') ){
			points = points + 1;
			$('#THIRD').addClass('guess__Correct');
			$('#THIRD').removeClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
		}
		else{
			$('#THIRD').addClass('guess__Wrong');
			$('#THIRD').removeClass('guess__Default');
			$('#THIRD').removeClass('guess__Correct');
		}
	}

	if( $('#fake__FOURTH').hasClass('red') ){
		if( $('#FOURTH').hasClass('red') ){
			points = points + 1;
			$('#FOURTH').addClass('guess__Correct');
			$('#FOURTH').removeClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
		}
		else{
			$('#FOURTH').addClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
			$('#FOURTH').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__FOURTH').hasClass('green') ){
		if( $('#FOURTH').hasClass('green') ){
			points = points + 1;
			$('#FOURTH').addClass('guess__Correct');
			$('#FOURTH').removeClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
		}
		else{
			$('#FOURTH').addClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
			$('#FOURTH').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__FOURTH').hasClass('blue') ){
		if( $('#FOURTH').hasClass('blue') ){
			points = points + 1;
			$('#FOURTH').addClass('guess__Correct');
			$('#FOURTH').removeClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
		}
		else{
			$('#FOURTH').addClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
			$('#FOURTH').removeClass('guess__Correct');
		}
	}
	else if( $('#fake__FOURTH').hasClass('yellow') ){
		if( $('#FOURTH').hasClass('yellow') ){
			points = points + 1;
			$('#FOURTH').addClass('guess__Correct');
			$('#FOURTH').removeClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
		}
		else{
			$('#FOURTH').addClass('guess__Wrong');
			$('#FOURTH').removeClass('guess__Default');
			$('#FOURTH').removeClass('guess__Correct');
		}
	}

	console.log(points);

	if( points == 4){
		$('#win').addClass('show');
		$('#win').removeClass('dontShow');
		console.log("you win");
	}
}