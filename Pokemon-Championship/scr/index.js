// let userScore = 0;
// let compScore = 0;
// // var vid = document.getElementById("myVideo");
// // vid.volume = 0.4;


// Array.prototype.random = function() {
// 	return this[Math.floor(Math.random() * this.length)];
// };

// let userScore_span = document.getElementById("user-score");
// let compScore_span = document.getElementById("comp-score");
// let trash = document.createElement("span");
// const scoreBoard_div = document.querySelector(".nametag");
// const result_p = document.querySelector(".result > p");
// const rock_div     = document.getElementById("rock");
// const paper_div    = document.getElementById("paper");
// const scissors_div = document.getElementById("scissors");


// function create_audio_from_file(filename) {
// 	var el = document.createElement("audio");
// 	el.src = filename;
// 	return el;
// }

// var gameTrack = create_audio_from_file("image/cynthia-theme.mp3");
// var win1      = create_audio_from_file("image/win1.mp3");
// var lose1     = create_audio_from_file("image/lose1.wav");
// var tie1      = create_audio_from_file("image/tie1.wav");

// gameTrack.play();

// function getCompChoice(){
// 	return ["rock", "paper", "scissors"].random();
// }

// function game(userChoice){
// 	window.onclick = hideChoices(); // ?

// 	const compChoice = getCompChoice();

// 	// eval
// 	switch(userChoice + compChoice){
// 		case "rockscissors":
// 		case "scissorspaper":
// 		case "paperrock":
// 			win(userChoice, compChoice);
// 			break;
// 		case "scissorsrock":
// 		case "paperscissors":
// 		case "rockpaper":
// 			lose(userChoice, compChoice);
// 			break;
// 		case "rockrock":
// 		case "paperpaper":
// 		case "scissorsscissors":
// 			draw(userChoice, compChoice);
// 			break;
// 	}
// }


// function update_result(compChoice, score, sound, text, message) {
// 	score++;

// 	sound.pause();
// 	sound.load();
// 	sound.play();
	
// 	text.innerHTML = score;
	
// 	showCompChoice(compChoice);
// 	result_p.innerHTML = message;
// }


// function create_message(player1, player2, result, player1_choice, player2_choice) {
// 	return `Your <span style="color:#00E4F2;">${makeWord(player1_choice)}</span>-type ${player1} ${result} ${player2}'s <span style="color:#F9F345;">${makeWord(player2_choice)}</span>-type Pokemon!<br> You won this match - Ready your next Pokemon.`;
// }

// function win(userChoice, compChoice){
// 	// let message1 = create_message('Pokemon', 'Cynthia', 'beat', userChoice, compChoice);
	
// 	let message = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon beat Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You won this match - Ready your next Pokemon.`;
// 	update_result(compChoice, userScore, win1, userScore_span, message);	
// }

// function lose(userChoice, compChoice){
// 	let message = `Your <span style="color:#00E4F2;"> ${makeWord(userChoice)}</span>-type Pokemon got beaten by Champion Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You lost this match - Ready your next Pokemon.`;
// 	update_result(compChoice, compScore, lose1, compScore_span, message);
// }

// function draw(userChoice, compChoice){
// 	let message = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon is the same type as Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span> type Pokemon.<br> It's a draw! Both Pokemon fainted.`;
// 	update_result(compChoice, 0, tie1, trash, message);	
// }


// // rename for clarity
// function makeWord(letter){
// 	if (letter === "rock") return "Grass";
// 	if (letter === "paper") return "Fire";
// 	return "Water";
// }


// function showCompChoice(compChoice){
// 	document.getElementById(compChoice).classList.add("computorChoice");
// }


// function hideChoices(){
// 	[rock_div, paper_div, scissors_div].forEach(function (o) {
// 		o.classList.remove("computorChoice","playerChoice");
// 	});	
// }

// function main(){
// 	rock_div.addEventListener('click', function(){
// 		game("rock");
// 		rock_div.classList.add("playerChoice");
// 	});

// 	paper_div.addEventListener('click', function(){
// 		game("paper");
// 		paper_div.classList.add("playerChoice");
// 	});

// 	scissors_div.addEventListener('click', function(){
// 		game("scissors");
// 		scissors_div.classList.add("playerChoice");
// 	})
// };

// main();
// var vid = document.getElementById("myVideo");
// vid.volume = 0.4;




let userScore = 0;
let compScore = 0;
// var vid = document.getElementById("myVideo");
// vid.volume = 0.4;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".nametag");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function createAudioFromFile(filename) {
	var track = document.createElement("audio");
	track.src = filename;
	return track;
}
var gameTrack = createAudioFromFile("image/cynthia-theme.mp3");
var win1      = createAudioFromFile("image/win1.mp3");
var lose1     = createAudioFromFile("image/lose1.wav");
var tie1      = createAudioFromFile("image/tie1.wav");
gameTrack.play();

// Array.prototype.random = function() {
// 	return this[Math.floor(Math.random() * this.length)];
// };

function getCompChoice(){	
	return ["rock", "paper", "scissors"][Math.round(Math.random()*3)];
}

function game(userChoice){
	window.onclick = hideChoices();
	const compChoice = getCompChoice();
	switch(userChoice + compChoice){
		case "rockscissors":
		case "scissorspaper":
		case "paperrock":
			win(userChoice, compChoice);
			break;
		case "scissorsrock":
		case "paperscissors":
		case "rockpaper":
			lose(userChoice, compChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, compChoice);
			break;
	}
}
function win(userChoice, compChoice){
	userScore++;
	win1.pause();
	win1.load();
	win1.play();
	userScore_span.innerHTML = userScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon beat Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You won this match - Ready your next Pokemon.`;
}

function lose(userChoice, compChoice){
	compScore++;
	lose1.pause();
	lose1.load();
	lose1.play();
	compScore_span.innerHTML = compScore;
	showCompChoice(compChoice);
	result_p.innerHTML = `Your <span style="color:#00E4F2;"> ${makeWord(userChoice)}</span>-type Pokemon got beaten by Champion Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You lost this match - Ready your next Pokemon.`;
}

function draw(userChoice, compChoice){
	showCompChoice(compChoice);
	tie1.pause();
	tie1.load();
	tie1.play();
	result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon is the same type as Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span> type Pokemon.<br> It's a draw! Both Pokemon fainted.`;
}
function makeWord(letter){
	if (letter === "rock") return "Grass";
	if (letter === "paper") return "Fire";
	return "Water";
}
function showCompChoice(compChoice){


	if (compChoice === "rock"){
		rock_div.classList.add("computorChoice");
	}
	if (compChoice === "paper"){
		paper_div.classList.add("computorChoice");
	}
	if (compChoice === "scissors"){
		scissors_div.classList.add("computorChoice");
	}
}


function hideChoices(){
	rock_div.classList.remove("computorChoice","playerChoice");
	paper_div.classList.remove("computorChoice","playerChoice");
	scissors_div.classList.remove("computorChoice","playerChoice");
}

function main(){
	rock_div.addEventListener('click', function(){
		game("rock");
		rock_div.classList.add("playerChoice");
	});

	paper_div.addEventListener('click', function(){
		game("paper");
		paper_div.classList.add("playerChoice");
	});

	scissors_div.addEventListener('click', function(){
		game("scissors");
		scissors_div.classList.add("playerChoice");
	})
};

main();
var vid = document.getElementById("myVideo");
vid.volume = .05;
