$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});

	$('.ryu').mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

	$('.ryu').mousedown(function(){
		console.log('mousedown');
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		//play hadouken sfx
		//shw hadouken n animate
	})
	$('.ryu').mouseup(function(){
		console.log('mouseup');
		// ryu goes back to his ready position
		$('.ryu-thorwing').hide();
		$('.ryu-ready').show();
	});
});