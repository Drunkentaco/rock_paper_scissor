function getComputerChoice() {
    let x = Math.random()
    if (x < 0.33) {
       return x = "Rock";
    } else if (x >= 0.33 && x < 0.66) {
       return x = "Paper";
    } else
        return x = "Scissor";
}

function getHumanChoice(){
    return prompt("Let's play a game! Choose rock, paper or scissor!");
}

let humanScore = 0
let computerScore = 0



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return console.log("It's a draw, how boring. (¬_¬)");

    } else if (humanChoice === "rock" && computerChoice === "paper"){
        return computerScore++, console.log("You lose! Paper beats Rock (˵ •̀ᴗ•́˵)و");
    } else if (humanChoice === "paper" && computerChoice === "scissor"){
        return computerScore++, console.log("You lose! Scissor beats Paper (˵ •̀ᴗ•́˵)و");
    } else if (humanChoice === "scissor" && computerChoice === "rock"){
        return computerScore++, console.log("You lose! Rock beats Scissor (˵ •̀ᴗ•́˵)و");
    
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        return humanScore++, console.log("You win...Rock beat Scissor (˃̣̣̥ᯅ˂̣̣̥)");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        return humanScore++, console.log("You win...Paper beat Rock (˃̣̣̥ᯅ˂̣̣̥)");
    } else (humanChoice === "scissor" && computerChoice === "paper")
            return humanScore++, console.log("You win...Scissor beat Rock (˃̣̣̥ᯅ˂̣̣̥)");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
humanSelection.toLowerCase();
    if (humanSelection === "rock"){
    humanSelection = "rock";
    } else if (humanSelection === "paper"){
        humanSelection= "paper";
    } else if (humanSelection === "scissor"){
        humanSelection = "scissor";
    } else console.log("Spelling error! Please try spelling without 's' at the end of the word. I'm only a dumb computer ˙◠˙")
/*

playRound
    new function "playRound"
    define two parameters for playRound: humanChoice and computerChoice
    Use thse two parameter to make arguments
    Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    Increment the humanScore or computerScore variable based on the round winner.

playGame
    Write a function "playGame"
    Move your playRound function and score variables so that they’re declared inside of the new playGame function
    Play 5 rounds by calling playRound 5 times.
    */