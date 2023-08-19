game();

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = getComputerChoice();
        const playerSelectionTitleCase = toTitleCase(playerSelection);
        const computerSelectionTitleCase = toTitleCase(computerSelection);
        const result = playRound(playerSelection, computerSelection);

        switch (result) {
            case -1:
                console.log(`You Lose! ${computerSelectionTitleCase} beats ${playerSelectionTitleCase}`);
                computerScore++;
                break;
            case 0:
                console.log(`It's a Tie! ${playerSelectionTitleCase} vs. ${computerSelectionTitleCase}`);
                break;
            case 1:
                console.log(`You Win! ${playerSelectionTitleCase} beats ${computerSelectionTitleCase}`);
                playerScore++;
                break;
            default:
                console.log("Something went wrong");
                break;
        }
    }

    if (playerScore > computerScore) {
        console.log("You are the winner at the end!");
    } else if (computerScore > playerScore) {
        console.log("Computer is the winner at the end!");
    } else {
        console.log("No winner! It's a Tie");
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