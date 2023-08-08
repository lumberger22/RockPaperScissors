/* Script javascript file for the Rock Paper Scissors Game */

//Query selectors
const numberOfWins = document.querySelector('.numberOfWins');
const scoreContent = document.querySelector('.score-content');
const scoreText = document.querySelector('.score-text');
const rockSelection = document.querySelector('.rock');
const paperSelection = document.querySelector('.paper');
const scissorsSelection = document.querySelector('.scissors');
const roundResult = document.querySelector('.roundResult');
const circleEnd = document.querySelector('.circle-end');
const selection = document.querySelector('.circle');

//Variable declarations
let computerScore = 0;
let playerScore = 0;
let wins = 0;
let playerSelection = '';

//DOM Element Creation
const btn = document.createElement('button');
btn.textContent = 'PLAY AGAIN'
const scoreSection = document.getElementById('score-section');

//Text and Number displays
numberOfWins.textContent = wins;
scoreContent.textContent = (`${playerScore} - ${computerScore}`);
roundResult.textContent = ('MAKE A CHOICE TO BEGIN');

//Event Listeners
rockSelection.addEventListener("click", selectRock);

paperSelection.addEventListener("click", selectPaper);

scissorsSelection.addEventListener("click", selectScissors);

//Functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function selectRock() {
    playerSelection = 'rock';
    playRound();
}

function selectPaper() {
    playerSelection = 'paper';
    playRound();
}

function selectScissors() {
    playerSelection = 'scissors';
    playRound();
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
            roundResult.textContent = 'You beat the Hokie Bird!';
            wins = wins + 1;
            numberOfWins.textContent = wins;
            endGame();
            return;
        }
        else
            roundResult.textContent = 'The Hokie Bird beat you! You Lost!';
            endGame();
            return;
    }

}

function endGame() {
    scoreContent.textContent = '';
    scoreText.textContent = '';
    rockSelection.removeEventListener("click", selectRock);
    paperSelection.removeEventListener("click", selectPaper);
    scissorsSelection.removeEventListener("click", selectScissors);
    btn.addEventListener('click', startGame);
    scoreSection.appendChild(btn);
    
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    btn.remove();
    rockSelection.addEventListener("click", selectRock);
    paperSelection.addEventListener("click", selectPaper);
    scissorsSelection.addEventListener("click", selectScissors);
    scoreContent.textContent = (`${playerScore} - ${computerScore}`);
    roundResult.textContent = ('MAKE A CHOICE TO BEGIN');
}