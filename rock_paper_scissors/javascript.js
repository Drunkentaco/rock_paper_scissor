function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < 0.33) {
       return computerChoice = "rock";
    } else if (computerChoice >= 0.33 && computerChoice < 0.66) {
       return computerChoice = "paper";
    } else (computerChoice >= 0.66)
        return computerChoice = "scissor";
}

function getHumanChoice(){
    let playerInput = prompt("Let's play a game! Choose rock, paper or scissor!");
    let humanChoice = playerInput.toLowerCase();
    return humanChoice;
}



    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
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
        } else if (humanChoice === "scissor" && computerChoice === "paper"){
            return humanScore++, console.log("You win...Scissor beat Paper (˃̣̣̥ᯅ˂̣̣̥)");
        
        }else console.log("Spelling Error! Please try spelling without 's' at the end of the word. I'm only a dumb computer ˙◠˙")
    }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);