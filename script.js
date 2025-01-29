function getComputerChoice(){
    let max = 3, min = 0;
    let computerChoice = Math.floor(Math.random()*(max - min) + min);
    switch(computerChoice){
        case 0:
            console.log("Computer choice is: rock");
            return "rock";
            break;
        case 1:
            console.log("Computer choice is: paper");
            return "paper";
            break;
        case 2:
            console.log("Computer choice is: scissors");
            return "scissors";
            break;
        default:
            break;
    }
}

function getHumanChoice(){
    humanChoice = prompt("Enter: rock, paper, scissors");
    humanChoice = humanChoice.toLowerCase();
    console.log(`Your choice is: ${humanChoice}`);
    return humanChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice){
    if((humanChoice === "rock" && computerChoice === "rock")||
        (humanChoice === "paper" && computerChoice === "paper")||
        (humanChoice === "scissors" && computerChoice === "scissors")){
            console.log("It's a draw.");
        }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore += 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore += 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore += 1;
    }
}

function playGame(){
    for (let i = 1; i <= 5; i++){    
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        console.log(`humanScore: ${humanScore}\ncomputerScore: ${computerScore}`);
    }
}

playGame()

if (humanScore === computerScore)
    console.log("NOBODY WON! it'S A DRAW.");
else if(humanScore > computerScore)
    console.log("YOU ARE THE WINNER.");
else
    console.log("YOU LOST!, THE COMPUTER IS THE WINNER.");
