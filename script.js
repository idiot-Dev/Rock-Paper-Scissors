let humanScore = 0, computerScore = 0;
let result = "";
let gameOver = false;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    //let max = 3, min = 0;
    //let computerChoice = Math.floor(Math.random()*(max - min) + min);
    switch(computerChoice){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

function playRound(humanChoice, computerChoice){
    if (gameOver === true)
        return;

    if(humanChoice === computerChoice){
            result= "It's a draw.";
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors")||
            (humanChoice === "paper" && computerChoice === "rock")||
            (humanChoice === "scissors" && computerChoice === "paper")){
        result= `You Win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else {
        result= `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    document.getElementById("player-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result").textContent = result;
    if(humanScore === 5 || computerScore === 5)
        winner();
}

function winner(){
    let finalResult = "";
    
    if (humanScore === 5)
        finalResult= "YOU ARE THE WINNER.";
    else
        finalResult= "YOU LOST!, THE COMPUTER IS THE WINNER.";

    document.getElementById("result").textContent = finalResult;

    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

//DOM Selection 
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});