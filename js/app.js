//quiz question array that will be global variables
var questions = [
	{correctArtist:'U2 ',correctSong:'“Elevation”',file: "sound/Elevation.mp3",image: "url('./images/U2.jpg')",correct:'U2 – “Elevation”',choices:['Nirvana – “Smells Like Teen Spirit”','U2 – “Elevation”','R.E.M. – “Losing My Religion”','Pearl Jam – “Jeremy”','Alanis Morissette – “You Oughta Know”'],song:"Elevation",prize: "url('./images/recordU2.jpg')"}
	,
	{correctArtist:'Red Hot Chili Peppers ',correctSong:'“By The Way”',file:"sound/ByTheWay.mp3",image: "url('./images/RHCPband.jpg')",correct:'Red Hot Chili Peppers – “By The Way”',choices:['Red Hot Chili Peppers – “By The Way”','Metallica – “One”','Beastie Boys – “Sabotage”','Beck – “Loser”','Soundgarden – “Black Hole Sun”'],song:"ByTheWay",prize: "url('./images/recordRHCP.JPG')"}
	,
	{correctArtist:'Metallica ',correctSong:'“Nothing Else Matters”',file: "sound/NothingElseMatters.mp3",image: "url('./images/METALLICAband.jpg')",correct:'Metallica – “Nothing Else Matters”',choices:['Eminem – “My Name Is”','Counting Crows – “Mr. Jones”','Radiohead – “Creep”','Metallica – “Nothing Else Matters”','Oasis – “Wonderwall”'],song:"NothingElseMatters",prize: "url('./images/recordMETALLICA.jpg')"}
	,
	{correctArtist:'Korn ',correctSong:'“Freak On A Leash”',file: "sound/FreakOnALeash.mp3",image: "url('./images/KORNband.jpg')",correct:'Korn – “Freak On A Leash”',choices:['Green Day – “Good Riddance (Time of Your Life)”','Goo Goo Dolls – “Iris”','Collective Soul – “Shine”','Korn – “Freak On A Leash”','Alice in Chains – “Man in the Box”'],song:"FreakOnALeash",prize: "url('./images/recordKORN.jpg')"}
	,
	{correctArtist:'Blur ',correctSong:'“Song 2”',file: "sound/Song2.mp3",image: "url('./images/BLURband.jpg')",correct:'Blur – “Song 2”',choices:['Blur – “Song 2”','Sugar Ray – “Fly”','Weezer – “Buddy Holly”','Live – “I Alone”','Will Smith – “Gettin’ Jiggy Wit It”'],song:"Song2",prize: "url('./images/recordBLUR.jpg')"}
    ]

//Update function to be run after every iteration to update questions 
function update() {
	if(currentQuestion==0){$('#messageBox').text('Let the games begin');}
	else{
		displayQuestion=	currentQuestion+1;
		$('#messageBox').text('This is question #'+displayQuestion);}
		
	$("#recordPlayer").css("background-image", "url('./images/player.JPG')");
	$(".prizeSection").css("display", "none");
	$(".choicesSection ul li").remove();
	$('.displaySection audio').remove();
	$('.displaySection').append('<audio id="'+questions[currentQuestion].song+'" controls src="' + questions[currentQuestion].file + '"></audio>');		
	musicTag="#"+questions[currentQuestion].song+"";
    console.log(musicTag);
    songPlayer(musicTag);
	for(var i = 0; i < questions[currentQuestion].choices.length; i++)
		{
	        //console.log("DEBUG:the option "+questions[0].choices[i]+" compared with "+questions[0].correct+"will be "+(questions[0].choices[i]==questions[0].correct)+" ");
	        bstatus="INCORRECT";
	        if (questions[currentQuestion].choices[i]==questions[currentQuestion].correct)
	        {bstatus="CORRECT"  }
	        else {bstatus="INCORRECT"};
	        $('.choicesSection')
	        .find('ul')
	        .prepend('<li><button class="bigbutton" id="'+bstatus+'">' + questions[currentQuestion].choices[i] + '</button></li>')		
	    };
	$(".choicesSection").css("display", "inline");
	$(".collectionSection").css("display", "inline");
	}


function Prize() {
	$('#messageBox2').text('CORRECTOU!!!');
	$('#prizeMessage strong').text('You have won a new record!!');
	$(".collectionSection").css("display", "none");//perhaps can be deleted
	$(".choicesSection").css("display", "none");//perhaps can be deleted
	$("#prizeHolder li").remove(); //Removes old prize
	//prize will only change, so image displayed will be generic from class recordPrize
	$('#prizeHolder').append('<li><div class="recordPrize" id="uniqueRecordPrize"></div><div class="prizeContainer"><h2 class="detailPrize"><strong>SONG:</strong>' + questions[currentQuestion].correctSong + '</h2><h2 class="detailPrize"><strong>ARTIST:</strong>' + questions[currentQuestion].correctArtist + '</h2></div></li>');
	$('#uniqueRecordPrize').css("background-image", questions[currentQuestion].prize);
	$('.prizeSection').css("display", "block");
	$("#bandPic").css("display", "none");
	$("#bandPic").css("background-image", questions[currentQuestion].image).fadeIn(3000);
	$('.displaySection audio').remove();
		//$('.collectionSection').find('ul li').remove();

	//collections will change and be stored for further references, so a unique id is built for each div
	$('.collectionSection').find('ul').append('<li><div class="recordPrize" id="prize'+questions[currentQuestion].song+'"></div><div class="prizeContainer"><h2 class="detailPrize"><strong>SONG:</strong>' + questions[currentQuestion].correctSong + '</h2><h2 class="detailPrize"><strong>ARTIST:</strong>' + questions[currentQuestion].correctArtist + '</h2></div></li>');
	$('#prize'+questions[currentQuestion].song+'').css("background-image", questions[currentQuestion].prize);
	//$('.collectionSection').fadeIn(3000);
}

function Wrong() {

	$('#messageBox2').text('NOPE');
	$('#prizeMessage strong').text('You have not earned a record');
	$('#prizeMessage ').css("margin-bottom", "3em");
	$(".choicesSection").css("display", "none");//perhaps can be deleted
	$("#prizeHolder li").remove(); //Removes old prize
	//prize will only change, so image displayed will be generic from class recordPrize
	//$('#prizeHolder').append('<li><div class="recordPrize"></div><div class="prizeContainer"><h2 class="detailPrize"><strong>SONG:</strong>' + questions[currentQuestion].correctSong + '</h2><h2 class="detailPrize"><strong>ARTIST:</strong>' + questions[currentQuestion].correctArtist + '</h2></div></li>');
	//$('.recordPrize').css("background-image", questions[currentQuestion].prize);
	$('.prizeSection').css("display", "block");
	$("#bandPic").css("display", "none");
	$("#bandPic").css("background-image", questions[currentQuestion].image).fadeIn(3000);
	$('.displaySection audio').remove();
	}

$(document).ready(function() {
//actions that happen immediately after document is loaded
console.log("ready");

//Instructions Listener
$('#instructionsbutton')
	.click(function(){
    	$("#MJinstructions").toggle();})
// DIFF Listener: Currently Disabled

$("#diffbutton").click(function(){
    alert("Current version only supports Groopie Method.");
});

//GameStart Listener 
$("#mjButtons").on("click", "#playbutton", function () {
    $("#playbutton").fadeOut(2000);
    $("#diffbutton").fadeOut(2000);
    //set the counters to zero
    numberCorrect = 0;
    currentQuestion = 0;
    //Load questions
    update();
    });

//GameNEXT Listener 
$(".prizeSection").on("click", "#nextButton", function () {
    if(currentQuestion<4) {
        currentQuestion += 1;
        console.log("current question is now"+currentQuestion);
        //Show collection
        $('.collectionSection').fadeIn(3000);
       	//update question info
        update();
    }
    else {
    	$(".prizeSection").css("display", "none");
    	$(".choicesSection").css("display", "none");
    	$("#recordPlayer").css("display", "none");
    	$("#instructionsbutton").css("display", "none");
    	$("#replaybutton").css("display", "inline");
    	//Show collection
    	$('#messageBox').text('END: Your final score is : '+numberCorrect+' out of 5 questions');
        $('.collectionSection').fadeIn(3000);
    }
    });

//CorrectAnswer Listener
$(".choicesSection").on("click", "#CORRECT", function () {
    //set the counters
    numberCorrect += 1;
    console.log("the answer is correct. Total correct answers are : "+numberCorrect);
    //run Reward Program
    Prize();
    });

//WrongAnswer Listener
$(".choicesSection").on("click", "#INCORRECT", function () {
    console.log("the answer is incorrect. Total correct answers so far are : "+numberCorrect);
    //run noReward Program
    Wrong();
    });

//replay game via page refresh
$('#replaybutton').click(function() {
    location.reload();
	});

});





function songPlayer (tag) {
	console.log(tag+" was played");
	$(tag)[0].volume = 0.5;
	$(tag)[0].load();
	$(tag)[0].play();
	
}