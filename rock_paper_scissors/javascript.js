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
    let choice = prompt("Let's play a game! Choose rock, paper or scissor!");
    let y = choice.toLowerCase();
    if (y === "rock"){
        return y = "rock";
    } else if (y === "paper"){
        return y = "paper";
    } else if (y === "scissor"){
        return y = "scissor";
    } else return console.log("Spelling error! Please try spelling without 's' at the end of the word. I'm only a dumb computer ˙◠˙")
}
console.log(getHumanChoice())
/*
 


Player's Score
    Create variables named "humanScore" and "computerScore" in global spore
    initialize those variables with the value of 0

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