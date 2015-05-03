$(document).ready(function() {
//actions that happen immediately after document is loaded

	console.log("ready");
	//Option to display information menu

$('#instructionsbutton')
	.click(function(){
    	$("#MJinstructions").toggle();})


});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}