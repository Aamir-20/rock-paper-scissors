console.log("hello world1")

function getComputerChoice() {
    const randNo = Math.floor(Math.random() * 3) + 1;
    if (randNo == 1) return "rock";
    else if (randNo == 2) return "paper";
    else return "scissors";
}

console.log(getComputerChoice())