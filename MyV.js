//Get all HTML elements in DOM
const ResultDisplay = document.getElementById("result");
const PlayerChoiceDisplay = document.getElementById("player-choice");
const ComputerChoiceDisplay = document.getElementById("computer-choice");
const Choices = document.querySelectorAll("button");


//Global variables
let playerChoice
let computerChoice
let results

//Main logic to run the entire code
function Play(e) {;   
    playerChoice = e.target.id;
    PlayerChoiceDisplay.innerHTML = playerChoice;
    getComputerChoice();
    ComputerChoiceDisplay.innerHTML = computerChoice
    getWinner()
}

//Get computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1) {
        computerChoice = "rock"
    }

    if(randomNumber === 2) {
        computerChoice = "paper"
    }

    if(randomNumber === 3) {
        computerChoice = "scissors"
    }
    
}

//logic code to determine winner
function getWinner() {
    if(playerChoice === computerChoice) {
       results = "Draw"
    }
    if(playerChoice === "rock" && computerChoice === "scissors") {
       results = "player";
       
    }
    if (playerChoice === "scissors" && computerChoice === "paper") {
       results = "player";
       
    }
    if (playerChoice === "paper" && computerChoice === "rock") {
       results = "player";
       
    }
    if (playerChoice === "rock" && computerChoice === "paper") {
       results = "computer";
       
       
    }
    if (playerChoice === "scissors" && computerChoice === "rock") {
       results ="computer";
       
       
    }
    if (playerChoice === "paper" && computerChoice === "scissors") {
        
        results = "computer"
       
    }
    ResultDisplay.innerHTML = results
}

   




//declare events
Choices.forEach(function(choice){
    choice.addEventListener("click", Play)
});
