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

//Number & Text displays
numberOfWins.textContent = wins;
scoreContent.textContent = (`${playerScore} - ${computerScore}`);
roundResult.textContent = ('MAKE A CHOICE TO BEGIN');

//Event Listeners
rockSelection.addEventListener("click", () => {
    playerSelection = 'rock';
    playRound;
})

paperSelection.addEventListener("click", () => {
    playerSelection = 'paper';
    playRound;
})

scissorsSelection.addEventListener("click", () => {
    playerSelection = 'scissors';
    playRound;
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

function playRound() {
    if (!gameActive) {
        endResult;
        return;
    }
    console.log('Start of round');
    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    playerScore = playerScore + 1;
    scoreContent.textContent = (`${playerScore} - ${computerScore}`);

/*    if (computerSelection === 'rock') {
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
*/
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