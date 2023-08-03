/* Script javascript file for the Rock Paper Scissors Game */

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getComputerChoice() {
    let randomNumber = getRndInteger(1,4);
    if (randomNumber === 1) {
        return 'rock';
    }
    else if (randomNumber === 2) {
        return 'paper';
    }
    else
        return 'scissors';
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return 'Thats a Tie! Both you and the computer chose Rock!';
        }
        else if (playerSelection === 'scissors') {
            return 'You Lose! Rock beats Scissors!';
        }
        else
            return 'You Win! Paper beats Rock';
    }
    else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            return 'You Win! Rock beats Scissors!';
            let result = win;
        }
        else if (playerSelection === 'scissors') {
            return 'Thats a Tie! Both you and the computer chose Scissors!';
        }
        else
            return 'You Lose! Scissors beats Paper!';
    }
    else {
        if (playerSelection === 'rock') {
            return 'You Lose! Rock beats Paper!';
        }
        else if (playerSelection === 'scissors') {
            return 'You Win! Scissors beats paper!';
        }
        else
            return 'Thats a Tie! Both you and the computer chose Paper!';
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let result = playRound(playerSelection);
        console.log(result);
        if (result.substring(0,5) === 'Thats') {
            console.log("Computer: " + computerScore + " | player: " + playerScore);
        }
        else if (result.substring(0,5) === 'You W') {
            playerScore++;
            console.log("Computer: " + computerScore + " | player: " + playerScore);
        }
        else {
            computerScore++;
            console.log("Computer: " + computerScore + " | player: " + playerScore);
        }
    }

    console.log("The final score was, computer: " + computerScore + " | player: " + playerScore);
}