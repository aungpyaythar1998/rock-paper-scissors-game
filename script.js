
function winIfEqual(selection, winCondition) {
    let result;
    result = (selection === winCondition) ? "win" : "lose";
    return result;
}

function playRound(playerSelection, computerSelection) {
    let roundResult;

    if (playerSelection === computerSelection) {
        return "draw";
    } 

    switch(playerSelection) {
        case "rock":
            roundResult = winIfEqual(computerSelection, "scissor");
            break;
        case "paper":
            roundResult = winIfEqual(computerSelection, "rock");
            break;
        case "scissor":
            roundResult = winIfEqual(computerSelection, "paper");
            break;
    }
    return roundResult;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateUserScoreUI(userScore);
    updateComputerScoreUI(computerScore);
}

function announceWinner() {
    if (userScore == roundsToWin && computerScore == roundsToWin) {
        resultDisplay.textContent = "You drew ";
    } else if (userScore == roundsToWin) {
        resultDisplay.textContent = "You won ";
    } else if (computerScore == roundsToWin) {
        resultDisplay.textContent = "You lost ";
    }
    resultDisplay.textContent += `${userScore} vs ${computerScore} against computer!`
}

function updateUserScoreUI(score) {
    userScoreUI.textContent = score;
}

function updateComputerScoreUI(score) {
    computerScoreUI.textContent = score;
}

function announceComputerChoice(choice) {
    const computerChoiceUI = document.querySelector("#computer-choice");
    computerChoiceUI.textContent = choice;
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissor"];
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}


function playGame(e) {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();

    announceComputerChoice(computerChoice);
    const roundResult = playRound(userChoice, computerChoice);
    if (roundResult == "win") {
        userScore += 1;
        updateUserScoreUI(userScore);
    } else if (roundResult == "lose") {
        computerScore += 1;
        updateComputerScoreUI(computerScore);
    } else if (roundResult == "draw") {
        userScore += 1;
        updateUserScoreUI(userScore);
        computerScore += 1;
        updateComputerScoreUI(computerScore);
    }

    if(userScore == roundsToWin || computerScore == roundsToWin) {
        announceWinner();
        resetGame();
    }
}


let userScore = 0;
let computerScore = 0;
const userScoreUI = document.querySelector("#user-score");
const computerScoreUI = document.querySelector("#computer-score");
const resultDisplay = document.querySelector("#result");
const roundsToWin = 5;

const buttons = document.querySelectorAll("button");
buttons.forEach(eachButton => {
    eachButton.addEventListener("click", playGame);
});



