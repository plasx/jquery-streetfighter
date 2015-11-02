$(document).ready(function(){
	$('.ryu').mouseenter(function(){ 					// event "Mouse enter event"
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
		.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
		.mousedown(function(){ // event callback functions
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate( // properties, duration, easing, complete
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','520px');
			});
		//play hadouken sound
		//show hadouken and animate it flyingaway
		//above are comment reminders of things to implement
	})
	.mouseup(function(){
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		//ryu goes back to his ready state.
	});


	$(window).keydown(function(event){
		if(event.which == 88){
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-taunt').show();
		}
	})
	.keyup(function(event){
		if(($(".ryu").mouseenter) && (event.which == 88)){
			$('.ryu-taunt').hide();
			$('.ryu-ready').show();
		}else if(($(".ryu").mouseleave) && (event.which == 88)){
			$('.ryu-taunt').hide();
			$('.ryu-still').show();
		}
	});
	function playHadouken(){
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
});