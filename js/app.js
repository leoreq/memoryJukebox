//quiz question array that will be global variables
    var questions = [{
        song: "ByTheWay",
        file:"sound/ByTheWay.mp3",
        image:"url('./images/RHCPband.JPG')",
        choices:['Red Hot Chili Peppers – “By The Way”','Metallica – “Enter Sandman”','Beastie Boys – “Sabotage”','Beck – “Loser”','Soundgarden – “Black Hole Sun”'],
        qNum : 0,
        correct : 'Red Hot Chili Peppers – “By The Way”',
        correctSong: "“By The Way”",
        correctArtist: "Red Hot Chili Peppers"
        }]
//Update function to be run after every iteration to update questions 
function update() {
	$('#messageBox').text('Let the games begin');
	$(".prizeSection").css("display", "none");
	$(".choicesSection ul li").remove();
	$('.displaySection audio').remove();
	$('.displaySection').append('<audio id="'+questions[0].song+'" controls src="' + questions[0].file + '"></audio>');		
	for(var i = 0; i < questions[0].choices.length; i++)
		{
	        //console.log("DEBUG:the option "+questions[0].choices[i]+" compared with "+questions[0].correct+"will be "+(questions[0].choices[i]==questions[0].correct)+" ");
	        bstatus="INCORRECT";
	        if (questions[0].choices[i]==questions[0].correct)
	        {bstatus="CORRECT"  }
	        else {bstatus="INCORRECT"};
	        $('.choicesSection')
	        .find('ul')
	        .prepend('<li><button class="bigbutton" id="'+bstatus+'">' + questions[0].choices[i] + '</button></li>')		
	    };
	}


function Prize() {
	$('#messageBox').css("display", "none");
	$('#messageBox').text('CORRECTOU!!!').fadeIn(3000);
	$("#recordPlayer").css("display", "none");
	$("#recordPlayer").css("background-image", questions[0].image).fadeIn(3000);
	$('.displaySection audio').remove();
	$(".choicesSection").css("display", "none");
	//$('.collectionSection').find('ul li').remove();
	$("#prizeHolder li").remove();
	$('#prizeHolder').append('<li><div class="recordPrize"></div><div class="prizeContainer"><h2 class="detailPrize"><strong>SONG:</strong>' + questions[0].correctSong + '</h2><h2 class="detailPrize"><strong>ARTIST:</strong>' + questions[0].correctArtist + '</h2></div></li>');
	$('.prizeSection').fadeIn(3000);
	$('.collectionSection').find('ul').append('<li><div class="recordPrize"></div><div class="prizeContainer"><h2 class="detailPrize"><strong>SONG:</strong>' + questions[0].correctSong + '</h2><h2 class="detailPrize"><strong>ARTIST:</strong>' + questions[0].correctArtist + '</h2></div></li>');
	$('.collectionSection').fadeIn(3000);
}

$(document).ready(function() {
//actions that happen immediately after document is loaded

console.log("ready");
//Option to display information menu


    
$('#instructionsbutton')
	.click(function(){
    	$("#MJinstructions").toggle();})

//GameStart Listener
$("#mjButtons").on("click", "#playbutton", function () {
        //set the counters
        numberCorrect = 0;
        currentQuestion = 0;
        //remove previous game traits
        $(".choicesSection").css("display", "inline");
        //update question info
        update();
        musicTag="#"+questions[0].song+"";
        console.log(musicTag);
        songPlayer(musicTag);
        //var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        //$("#question_wrapper").html(newQuestion);
        //$("#last_question_fact").html("");
    });

//CorrectAnswer Listener
$(".choicesSection").on("click", "#CORRECT", function () {
        //set the counters
        numberCorrect += 1;
        console.log("the answer is correct. Total correct answers are : "+numberCorrect);
        //run Reward Program
        Prize();
    });
});


function songPlayer (tag) {
	console.log(tag+" was played");
	$(tag)[0].volume = 0.5;
	$(tag)[0].load();
	$(tag)[0].play();
	
}