$(document).ready(function(){
	$('.ryu').mouseenter(function(){ // event "Mouse enter event"
		//alert('mousu entered .ryu div'); // method call "alert method call"
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){ // event callback functions
		//play hadouken sound
		//show hadouken and animate it flyingaway
	})
	.mouseup(function(){
		console.log('mouseup');
		//ryu goes back to his ready state.
	});
});