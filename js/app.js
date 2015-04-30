$(document).ready(function() {
//actions that happen immediately after document is loaded

	console.log("ready");
	//show SF Logo
	$( ".sf-logo" ).fadeIn(  2000, function() {
	    // After SF Logo Finishess fading in it will fade out

		$( ".sf-logo" ).fadeOut( 1000, function() {
	    	// Animation complete then instructions.
	    	$( ".instructions" ).fadeIn( 2000, function() {
	    	// No mor things.
	 		});
		});
	    /*fade in the instructions*/

	});

//Events that affect RYU div with mouse actions
  	$('.ryu')
	  	.mouseenter(function() {
		  	console.log("Mouse has entered ryu");
		   	$('div.ryu-still').hide() ;
		   	$('div.ryu-ready').show() ;
		})
		.mouseleave(function() {
		  	console.log("Mouse has left ryu");
		   	$('div.ryu-still').show() ;
		   	$('div.ryu-ready').hide() ;
		})
		.mousedown(function() {
		   // play hadouken sound
		    // show hadouken and animate it to the right of the screen
		  
			console.log("Hadouken has been invoked");
		  	playHadouken();
		  	$('div.ryu-ready').hide() ;
		  	$('.ryu-still').hide();
			$('div.ryu-throwing').show() ;
		  	$('div.hadouken').finish().show().animate(
		  		{'left':'300px'},
		  		500,
		  		function(){
		  			$(this).hide();
		  			$(this).css('left','-127px');
		  		}
		  	); 
		})
		.mouseup(function() {
			console.log('mouseup');
		    // ryu goes back to his ready position
			$('.ryu-throwing').hide();
		  	$('.ryu-ready').show();
	  	});
	 
	$( document )
		.keydown(function(event) {
			if (event.which==88) {
		    	event.preventDefault();
		   		console.log( "you frikin cooled it")  ;
		   		$('.ryu-still').hide();
		  		$('.ryu-ready').hide();
		  		$('.ryu-cool').show();
			}
		})
		.keyup(function(event) {
			if (event.which==88) {
		    	event.preventDefault();
		   		console.log( "you frikin stopped being cool")  ;
		   		$('.ryu-still').show();
		  		$('.ryu-cool').hide();
		  		$('.ryu-ready').hide();
			}
		});

});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}