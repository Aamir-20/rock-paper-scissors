// Rock-Paper-Scissors game.

let humanScore = 0;
let computerScore = 0;
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

function playGame() {playGames:{
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
    
    // console.log(`Computer's choice: ${computerSelection}`);
    // console.log(`Human's choice: ${humanSelection}`);
    
    // playRound(humanSelection, computerSelection);
    
    // console.log(`Computer's score: ${computerScore}`);
    // console.log(`Human's score: ${humanScore}`);

    // buttons is a node list. It looks and acts much like an array.
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", (event) => {
            if (humanScore >= 5 || computerScore >= 5 ){
                return;
            }
            const humanSelection = button.id;
            const computerSelection = getComputerChoice();
            
            console.log(`Computer's choice: ${computerSelection}`);
            console.log(`Human's choice: ${humanSelection}`);
            
            let result = playRound(humanSelection, computerSelection);

            bodyRef = document.querySelector("body");  
            const divRef = document.querySelector("div"); 
            if (divRef !== null) {bodyRef.removeChild(divRef);}
            
            const div = document.createElement("div");   
            div.textContent = `Computer's score: ${computerScore} \n Human's score: ${humanScore}`;
            const div2 = document.createElement("div");            
            div2.textContent = result;
            div.appendChild(div2);
            bodyRef.appendChild(div);

            if (humanScore == 5 || computerScore == 5 ){
                const div3 = document.createElement("div");  
                let winner = "Human";
                if (humanScore < computerScore){winner = "Computer";}
                div3.textContent = winner + " is the winner!!!!";
                div.appendChild(div3);
            }
        });
    });


    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (computerChoice === "rock" && humanChoice === "scissors")) {
            if (humanChoice === "rock") {
                humanScore++;
                console.log("You win! Rock beats Scissors");
                return "You win! Rock beats Scissors";
            }
            else {
                computerScore++;
                console.log("You lose! Rock beats Scissors");
                return "You lose! Rock beats Scissors";
            }
        }
        else if ((humanChoice === "rock" && computerChoice === "paper") || 
            (computerChoice === "rock" && humanChoice === "paper")) {
            if (humanChoice === "paper") {
                humanScore++;
                console.log("You win! Paper beats Rock");
                return "You win! Paper beats Rock";
            }
            else {
                computerScore++;
                console.log("You lose! Paper beats Rock");
                return "You lose! Paper beats Rock";
            }
        }
        else if ((humanChoice === "scissors" && computerChoice === "paper") || 
            (computerChoice === "scissors" && humanChoice === "paper")) {
            if (humanChoice === "scissors") {
                humanScore++;
                console.log("You win! Scissors beats Paper");
                return "You win! Scissors beats Paper";
            }
            else {
                computerScore++;
                console.log("You lose! Scissors beats Paper");
                return "You lose! Scissors beats Paper";
            }
        }
        else {
            console.log("It's a tie!");
            return "It's a tie!";
        }
    }
}}