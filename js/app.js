$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});

			 .mouseleave(function(){ //chained from the first one $('.ryu').
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});

			 .mousedown(function(){
		console.log('mousedown');
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		//play hadouken sfx
		//shw hadouken n animate
	})
			 .mouseup(function(){
		console.log('mouseup');
		// ryu goes back to his ready position
		$('.ryu-thorwing').hide();
		$('.ryu-ready').show();
	});
});