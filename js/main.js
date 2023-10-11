let botScore = 0,
	playerScore = 0;

document.getElementById("rock").onclick = playerThrowsRock;
document.getElementById("scissors").onclick = playerThrowsScissors;
document.getElementById("paper").onclick = playerThrowsPaper;

function playerThrowsRock() {
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon, "rock");
}
function playerThrowsScissors() {
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon, "scissors");
}
function playerThrowsPaper() {
	let botsWeapon = getRandomWeapon();
	checkWhoWon(botsWeapon, "paper");
}
function getRandomWeapon() {
	let randomNumber = Math.random();
	let botsWeapon = "rock";
	if (randomNumber < 0.33) {
		botsWeapon = "scissors";
	} else if (randomNumber < 0.6666) {
		botsWeapon = "paper";
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon, playersWeapon) {
	if (botsWeapon == playersWeapon) {
		displayCompleteMessage("There was tie");
	} else if (
		(botsWeapon == "scissors" && playersWeapon == "paper") ||
		(botsWeapon == "paper" && playersWeapon == "rock") ||
		(botsWeapon == "rock" && playersWeapon == "scissors")
	) {
		increaseBotScore();
	} else {
		increasePlayerScore();
	}
}

function increaseBotScore() {
	botScore += 1;
	document.getElementById("computerScore").innerHTML = botScore;
	displayCompleteMessage("Sorry, try again!");
}

function increasePlayerScore() {
	playerScore += 1;
	document.getElementById("humanScore").innerHTML = playerScore;
	displayCompleteMessage("Winner, Winner, Chicken dinner");
}

function displayCompleteMessage(msg) {
	document.getElementById("status").innerHTML = msg;
}
