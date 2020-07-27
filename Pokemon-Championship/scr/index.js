
let userScore        = 0;
let compScore        = 0;

let userScore_span   = document.getElementById("user-score");
let compScore_span   = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".nametag");
const result_p       = document.querySelector(".result > p");
const rock_div       = document.getElementById("rock");
const paper_div      = document.getElementById("paper");
const scissors_div   = document.getElementById("scissors");

var gameTrack        = createAudioFromFile("image/cynthia-theme.mp3");
var win              = createAudioFromFile("image/win1.mp3");
var lose             = createAudioFromFile("image/lose1.wav");
var draw             = createAudioFromFile("image/tie1.wav");



function createAudioFromFile(filename) {
	var track = document.createElement("audio");
	track.src = filename;
	return track;
}

function getCompChoice() {
	return ["rock", "paper", "scissors"][Math.round(Math.random() * 3)];
}

function game(userChoice) {
	// window.onclick   = hideChoices();
	const compChoice = getCompChoice();
	switch (userChoice + compChoice) {
		case "rockscissors":
		case "scissorspaper":
		case "paperrock":
			battle(win, userChoice, compChoice);
			break;
		case "scissorsrock":
		case "paperscissors":
		case "rockpaper":
			battle(lose, userChoice, compChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			battle(draw, userChoice, compChoice);
			break;
	}
}

function battle(gameCondition,userChoice,compChoice) {
	if (gameCondition !== draw) {
	    gameCondition === win ? userScore += 100 : compScore += 100;
	}
	gameCondition.pause();
	gameCondition.load();
	gameCondition.play();
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	showCompChoice(compChoice);
	displayMessage(gameCondition,userChoice,compChoice);
}

function displayMessage(gameCondition,userChoice,compChoice) {
	switch (gameCondition) {
		case win:
			result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon beat Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You won this match - Ready your next Pokemon.`;
			break;
		case lose:
			result_p.innerHTML = `Your <span style="color:#00E4F2;"> ${makeWord(userChoice)}</span>-type Pokemon got beaten by Champion Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span>-type Pokemon!<br> You lost this match - Ready your next Pokemon.`;
			break;
		case draw:
			result_p.innerHTML = `Your <span style="color:#00E4F2;">${makeWord(userChoice)}</span>-type Pokemon is the same type as Cynthia's <span style="color:#F9F345;">${makeWord(compChoice)}</span> type Pokemon.<br> It's a draw! Both Pokemon fainted.`;
			break;
	}
}

	function makeWord(letter) {
		if (letter === "rock") return "Grass";
		if (letter === "paper") return "Fire";
		return "Water";
	}

	function showCompChoice(compChoice) {
		if (compChoice !== "rock") {
			compChoice === "paper" ? paper_div.classList.add("computorChoice") : scissors_div.classList.add("computorChoice");
		}
		else {
			rock_div.classList.add("computorChoice")
		}
	}

	function hideChoices() {
		rock_div.classList.remove    ("computorChoice", "playerChoice");
		paper_div.classList.remove   ("computorChoice", "playerChoice");
		scissors_div.classList.remove("computorChoice", "playerChoice");
	}

	function main() {
		rock_div.addEventListener('click', function () {
			game("rock");
			rock_div.classList.remove    ("computorChoice", "playerChoice");
			rock_div.classList.add("playerChoice");
		});
		paper_div.addEventListener('click', function () {
			game("paper");
			paper_div.classList.remove   ("computorChoice", "playerChoice");
			paper_div.classList.add("playerChoice");
		});
		scissors_div.addEventListener('click', function () {
			game("scissors");
			scissors_div.classList.remove("computorChoice", "playerChoice");
			scissors_div.classList.add("playerChoice");
		})
	};

	main();


	var vid = document.getElementById("myVideo");
	vid.volume = 0.1;
