$(document).ready(function() {
	
	$('.ryu')
	.mouseenter(function() {
		$('.ryu-still').hide();
		$('ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken()
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','584px');
			} );
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		// $('.hadouken').hide();
	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

