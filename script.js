/* Script javascript file for the Rock Paper Scissors Game */

//Query selectors and ID
const numberOfWins = document.querySelector('.numberOfWins');
const scoreContent = document.querySelector('.score-content');
const scoreText = document.querySelector('.score-text');
const rockSelection = document.querySelector('.rock');
const paperSelection = document.querySelector('.paper');
const scissorsSelection = document.querySelector('.scissors');
const roundResult = document.querySelector('.roundResult');
const circleEnd = document.querySelector('.circle-end');
const selection = document.querySelector('.circle');
const choiceCircle = document.querySelector('.choice-circle');

//ID GetElements
const scoreSection = document.getElementById('score-section');
const playerImg = document.getElementById('player-img');
const hokiebirdImg = document.getElementById('hokiebird-img');

//Variable declarations
let computerScore = 0;
let playerScore = 0;
let wins = 0;
let playerSelection = '';

//Class Creation

//DOM Element Creation

    //Play Again Button
    const btn = document.createElement('button');
    btn.textContent = 'PLAY AGAIN'
    btn.style.color = 'var(--vt-maroon)';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '17px';
    btn.style.fontWeight = 'bold';
    btn.style.borderColor = 'var(--vt-maroon)';
    btn.style.borderRadius = '7px';
    btn.style.backgroundColor = 'var(--vt-lightorange)';
    btn.style.fontFamily = '"Barlow Semi Condensed", sans-serif';
    btn.style.padding = '10px';

    //Rock Image Choice
    const rockImg1 = document.createElement('img');
    rockImg1.src = 'images/icon-rock.svg';
    rockImg1.style.transform = 'scale(1.5)';

    const rockImg2 = document.createElement('img');
    rockImg2.src = 'images/icon-rock.svg';
    rockImg2.style.transform = 'scale(1.5)';

    //Paper Image Choice
    const paperImg1 = document.createElement('img');
    paperImg1.src = 'images/icon-paper.svg';
    paperImg1.style.transform = 'scale(1.5)';

    const paperImg2 = document.createElement('img');
    paperImg2.src = 'images/icon-paper.svg';
    paperImg2.style.transform = 'scale(1.5)';

    //Scissors Image Choice
    const scissorsImg1 = document.createElement('img');
    scissorsImg1.src = 'images/icon-scissors.svg';
    scissorsImg1.style.transform = 'scale(1.5)';

    const scissorsImg2 = document.createElement('img');
    scissorsImg2.src = 'images/icon-scissors.svg';
    scissorsImg2.style.transform = 'scale(1.5)';
    
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

function showComputerChoice(choice) {

    if (choice === 'rock') {
        hokiebirdImg.appendChild(rockImg1);
    }
    else if (choice === 'paper') {
        hokiebirdImg.appendChild(paperImg1);
    }
    else
        hokiebirdImg.appendChild(scissorsImg1);
}

function removeComputerChoice() {
    if (hokiebirdImg.hasChildNodes()) {
        hokiebirdImg.removeChild(hokiebirdImg.firstElementChild);
    }
}

function showPlayerChoice(choice) {

    if (choice === 'rock') {
        playerImg.appendChild(rockImg2);
    }
    else if (choice === 'paper') {
        playerImg.appendChild(paperImg2);
    }
    else
        playerImg.appendChild(scissorsImg2);    
}

function removePlayerChoice() {
    if (playerImg.hasChildNodes()) {    
        playerImg.removeChild(playerImg.firstElementChild);
    }
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
    removeComputerChoice();
    removePlayerChoice();
    removeStylesFromCircle();
    let computerSelection = getComputerChoice();
    showPlayerChoice(playerSelection);
    showComputerChoice(computerSelection);
    let result = comparison(computerSelection, playerSelection);
    addStylestoCircle(result);

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
    removeComputerChoice();
    removePlayerChoice();
    removeStylesFromCircle();
    btn.remove();
    rockSelection.addEventListener("click", selectRock);
    paperSelection.addEventListener("click", selectPaper);
    scissorsSelection.addEventListener("click", selectScissors);
    scoreContent.textContent = (`${playerScore} - ${computerScore}`);
    roundResult.textContent = ('MAKE A CHOICE TO BEGIN');
}

function addStylestoCircle(result) {
    playerImg.style.backgroundColor = 'white';
    hokiebirdImg.style.backgroundColor = 'white';
    
    if (result === 'win') {
        playerImg.style.border = 'solid 20px green';
        playerImg.style.boxShadow = '0 10px var(--green-shadow)';
        hokiebirdImg.style.border = 'solid 20px var(--win-red)';
        hokiebirdImg.style.boxShadow = '0 10px var(--red-shadow)';
    }
    else if (result === 'loss') {
        playerImg.style.border = 'solid 20px var(--win-red)';
        playerImg.style.boxShadow = '0 10px var(--red-shadow)';
        hokiebirdImg.style.border = 'solid 20px green';
        hokiebirdImg.style.boxShadow = '0 10px var(--green-shadow)'
    }
    else {
        playerImg.style.border = 'solid 20px var(--vt-hokiestone)';
        playerImg.style.boxShadow = '0 10px var(--grey-shadow)';
        hokiebirdImg.style.border = 'solid 20px var(--vt-hokiestone)';
        hokiebirdImg.style.boxShadow = '0 10px var(--grey-shadow)'
    }
}

function removeStylesFromCircle() {
    playerImg.style.backgroundColor = 'var(--vt-maroon)';
    playerImg.style.border = 'none';
    playerImg.style.boxShadow = 'none';
    hokiebirdImg.style.backgroundColor = 'var(--vt-maroon)';
    hokiebirdImg.style.border = 'none';
    hokiebirdImg.style.boxShadow = 'none';
}