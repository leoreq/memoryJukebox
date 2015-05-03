//quiz question array that will be global variables
    var questions = [{
        song: "#BYTHEWAY",
        choices: ["Got the Life : KoRN", "Crawling : Linkin Park", "By The Way : Red hot Chilli Peppers", "Nookie : Limp Bizkit"],
        qNum : 0,
        correct : "By The Way : Red hot Chilli Peppers",
        correctSong: "By The Way",
        correctArtist: "Red Hot Chilli Peppers"
        }]
//Update function to be run after every iteration to update questions 
function update() {
$('#messageBox').text('Let the games begin');
$(".choicesSection ul li").remove();
for(var i = 0; i < questions[0].choices.length; i++){
                console.log("DEBUG:the option "+questions[0].choices[i]+" compared with "+questions[0].correct+"will be "+(questions[0].choices[i]==questions[0].correct)+" ");
                bstatus="INCORRECT";
                if (questions[0].choices[i]==questions[0].correct)
                {bstatus="CORRECT"  }
                else {bstatus="INCORRECT"};
                $('.choicesSection')
                .find('ul')
                .prepend('<li><button class="bigbutton" id="'+bstatus+'">' + questions[0].choices[i] + '</button></li>')		
            };
}
$(document).ready(function() {
//actions that happen immediately after document is loaded

console.log("ready");
//Option to display information menu


    
$('#instructionsbutton')
	.click(function(){
    	$("#MJinstructions").toggle();})

//Display the start of the game
$("#mjButtons").on("click", "#playbutton", function () {
        //set the counters
        numberCorrect = 0;
        currentQuestion = 0;
        //remove previous game traits
        $(".choicesSection").css("display", "inline");
        $(".collectionSection").css("display", "inline");
        //update question info
        update();
        console.log(songPlayer(questions[0].song));
        songPlayer(questions[0].song);
        //var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        //$("#question_wrapper").html(newQuestion);
        //$("#last_question_fact").html("");
    });
});

function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function songPlayer (tag) {
	$(tag)[0].volume = 0.5;
	$(tag)[0].load();
	$(tag)[0].play();
}