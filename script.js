const selections = document.querySelectorAll(".selection");
selections.forEach(selection => selection.addEventListener("click", game));

/**
 * @type {HTMLElement}
 */
const display = document.querySelector(".display");

let playerScore = 0;
let computerScore = 0;

function displayMsg(msg) {
    const p = document.createElement("p");
    p.textContent = msg;
    display.appendChild(p);
}

function game() {

    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    const playerSelectionTitleCase = toTitleCase(playerSelection);
    const computerSelectionTitleCase = toTitleCase(computerSelection);
    const result = playRound(playerSelection, computerSelection);

    switch (result) {
        case -1:
            const msgLose = `You Lose! ${computerSelectionTitleCase} beats ${playerSelectionTitleCase}`;
            displayMsg(msgLose);
            computerScore++;
            break;
        case 0:
            const msgTie = `It's a Tie! ${playerSelectionTitleCase} vs. ${computerSelectionTitleCase}`;
            displayMsg(msgTie);
            break;
        case 1:
            const msgWin = `You Win! ${playerSelectionTitleCase} beats ${computerSelectionTitleCase}`;
            displayMsg(msgWin);
            playerScore++;
            break;
        default:
            const msgError = "Something went wrong";
            displayMsg(msgError);
            break;
    }

    document.querySelector(".player-score span").textContent = playerScore;
    document.querySelector(".computer-score span").textContent = computerScore;

    if (playerScore === 5) {
        const msg = "You are the winner at the end!";
        displayMsg(msg);
    } else if (computerScore === 5) {
        const msg = "Computer is the winner at the end!";
        displayMsg(msg);
    }
}

/**
 * 
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns 
 */
function playRound(playerSelection, computerSelection) {
    const playerSelectionLowerCase = playerSelection.toLowerCase();


    switch (true) {
        case playerSelectionLowerCase === computerSelection:
            return 0;
        case playerSelectionLowerCase === "rock" && computerSelection === "scissors":
        case playerSelectionLowerCase === "paper" && computerSelection === "rock":
        case playerSelectionLowerCase === "scissors" && computerSelection === "paper":
            return 1;
        default:
            return -1;
    }
}

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    return arr[getRandomNumber()];
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3);
}

/**
 * 
 * @param {string} str 
 * @returns 
 */
function toTitleCase(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}