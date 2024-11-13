function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber < 0.33) {
       return "rock";
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
       return "paper";
    } else (randomNumber >= 0.66)
        return "scissor";
}

function getHumanChoice(){
    let playerInput = prompt("Let's play a 5 rounds game! Choose rock, paper or scissor!");
    let choice = playerInput.toLowerCase();
    
    if (choice !== "rock" && choice !== "paper" && choice !== "scissor"){
        return console.log("Spelling Error! Please try spelling without 's' at the end of the word. ˙◠˙");
    }else
    return choice = playerInput.toLowerCase();
}

let roundNumber = 0

let humanScore = 0;
let computerScore = 0;

function playGame(){
   
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            return "Draw";
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissor") ||
            (humanChoice === "scissor" && computerChoice === "rock")
        ){    
            return "You lose!";
        } else if(
            (humanChoice === "rock" && computerChoice === "scissor")||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissor" && computerChoice === "paper")
        ){
            return "You win!";
        }else( humanChoice === undefined)
            return playGame()
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    console.log("Round " + (roundNumber + 1) + ":");
    console.log("You choose " + humanSelection);
    console.log("I choose " + computerSelection);
    
    const roundResult = playRound(humanSelection, computerSelection);
        if(roundResult === "You win!"){
            humanScore++, roundNumber++, 
            console.log("You win... " + humanSelection + " beats " + computerSelection + " (˃̣̣̥ᯅ˂̣̣̥)"),
            finalResult();
        }else if (roundResult === "You lose!"){
            computerScore++, roundNumber++
            console.log("You lose! " + computerSelection + " beats " + humanSelection + " (˵ •̀ᴗ•́˵)و"),
            finalResult();
        }else if (roundResult === "Draw"){
            roundNumber++,
            console.log("It's a draw ಠ_ಠ"),
            finalResult();
        }else return
        
    function finalResult(){
        if (roundNumber < 5){
            return playGame();
        }else(roundNumber = 5)
            return gameOver();
        }   
    
    function gameOver(){
        console.log("Game over!")
        if (humanScore > computerScore){
            console.log(humanScore + " || " + computerScore + " Darn it, you won the game (っ- ‸ - ς)")
        }else if (computerScore > humanScore){
            console.log(humanScore + " || " + computerScore + " YYYYYEEEEEEEESSSSSSS I WINNNNN <(^-^<) <( ^-^ )> (>^-^)>")
        }else{
            console.log(humanScore + " || " + computerScore + " It's a tie ... how boring (¬_¬)")
        }
    }
    
}
playGame()