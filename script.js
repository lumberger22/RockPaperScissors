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

function playRound(computerSelection, playerSelection) {
    let playerSelection = playerSelection.toLowerCase();
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
        }
        else if (playerSelection === 'scissors') {
            return 'Thats a Tie! Both you and the computer chose Scissors!';
        }
        else
            return 'You Lose! Scissors beats Paper!';
    }
    else
        if (playerSelection === 'rock') {
            return 'You Win! Rock beats Paper!';
        }
        else if (playerSelection === 'scissors') {
            return 'You Lose! Paper beats Rock!';
        }
        else
            return 'Thats a Tie! Both you and the computer chose Paper!';
}