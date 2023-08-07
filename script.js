/* Script javascript file for the Rock Paper Scissors Game */

//Query selectors
const numberOfWins = document.querySelector('.numberOfWins');
const scoreContent = document.querySelector('.score-content');
const rockSelection = document.querySelector('.rock');
const paperSelection = document.querySelector('.paper');
const scissorsSelection = document.querySelector('.scissors');
const roundResult = document.querySelector('.roundResult');

//Variable declarations
let computerScore = 0;
let playerScore = 0;
let wins = 0;
let playerSelection = '';

//Number & Text displays
numberOfWins.textContent = wins;
scoreContent.textContent = (`${playerScore} - ${computerScore}`);
roundResult.textContent = ('MAKE A CHOICE TO BEGIN');

//Event Listeners
rockSelection.addEventListener("click", () => {
    playerSelection = 'rock';
    playRound();
})

paperSelection.addEventListener("click", () => {
    playerSelection = 'paper';
    playRound();
})

scissorsSelection.addEventListener("click", () => {
    playerSelection = 'scissors';
    playRound();
})

//Functions
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

function gameActive () {
    if (playerScore === 3 || computerScore === 3) {
        return false;
    }
    else return true;
}

function endResult() {
    if (playerScore > computerScore) {
        roundResult.textContent = 'You Won Rock Paper Scissors!';
        return;
    }
    else
        roundResult.textContent = 'The Hokie Bird beat you! You Lost!';
        return;
}

function comparison(computerSelection, playerSelection) {
    if (computerSelection === 'rock') {
        if (playerSelection === 'rock') {
            return 'tie';
        }
        else if (playerSelection === 'scissors') {
            return 'loss';
        }
        else
            return 'win';
    }
    else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            return 'win';
        }
        else if (playerSelection === 'scissors') {
            return 'tie';
        }
        else
            return 'loss';
    }
    else {
        if (playerSelection === 'rock') {
            return 'loss';
        }
        else if (playerSelection === 'scissors') {
            return 'win';
        }
        else
            return 'tie';
    }
}

function playRound() {    
    let computerSelection = getComputerChoice();
    let result = comparison(computerSelection, playerSelection);

    if (result === 'win') {
        playerScore = playerScore + 1;
        roundResult.textContent = 'You won that round!';
    }
    else if (result === 'loss') {
        computerScore = computerScore + 1;
        roundResult.textContent = 'You lost that round!';
    }
    else
        roundResult.textContent = 'Thats a Tie';

    scoreContent.textContent = (`${playerScore} - ${computerScore}`);
    
    if (playerScore === 3 || computerScore === 3) {
        if (playerScore > computerScore) {
            roundResult.textContent = 'You Won Rock Paper Scissors!';
            return;
        }
        else
            roundResult.textContent = 'The Hokie Bird beat you! You Lost!';
            return;
    }

}