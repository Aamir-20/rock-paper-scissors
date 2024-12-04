// Rock-Paper-Scissors game.

playGame()

function getComputerChoice() {
    const randNo = Math.floor(Math.random() * 3) + 1;
    if (randNo == 1) return "rock";
    else if (randNo == 2) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let choice = prompt("User choice:")
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`Computer's choice: ${computerSelection}`);
        console.log(`Human's choice: ${humanSelection}`);
        
        playRound(humanSelection, computerSelection);
        
        console.log(`Computer's score: ${computerScore}`);
        console.log(`Human's score: ${humanScore}`);
    }
    

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || (computerChoice === "rock" && humanChoice === "scissors")) {
            if (humanChoice === "rock") {
                humanScore++;
                console.log("You win! Rock beats Scissors");
            }
            else {
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            }
            return;
        }
        else if ((humanChoice === "rock" && computerChoice === "paper") || (computerChoice === "rock" && humanChoice === "paper")) {
            if (humanChoice === "paper") {
                humanScore++;
                console.log("You win! Paper beats Rock");
            }
            else {
                computerScore++;
                console.log("You lose! Paper beats Rock");
            }
            return;
        }
        else if ((humanChoice === "scissors" && computerChoice === "paper") || (computerChoice === "scissors" && humanChoice === "paper")) {
            if (humanChoice === "scissors") {
                humanScore++;
                console.log("You win! Scissors beats Paper");
            }
            else {
                computerScore++;
                console.log("You lose! Scissors beats Paper");
            }
            return;
        }
    }
}