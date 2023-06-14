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
        default:
            return "invalid";
    }
    return roundResult;
}

function getComputerChoice() {
    let options = ["rock", "paper", "scissor"];
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice];
}



