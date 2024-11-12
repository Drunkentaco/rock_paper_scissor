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

function playGame(){

    let humanScore = 0;
    let computerScore = 0;
   
    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            return "Draw";
        } else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissor") ||
            (humanChoice === "scissor" && computerChoice === "rock")
        ){    
            return "You lose!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissor")||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissor" && computerChoice === "paper")
        ){
            return "You win!"
        }else return getHumanChoice();
    }

    for (let i = 0; i < 5; i++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Round " + (i + 1) + ":");
        console.log("You choose " + humanSelection);
        console.log("I choose " + computerSelection);
    
        const roundResult = playRound(humanSelection, computerSelection);
        if(roundResult === "You win!"){
            humanScore++, console.log("You win... " + humanSelection + " beats " + computerSelection + " (˃̣̣̥ᯅ˂̣̣̥)");
        }else if (roundResult === "You lose!"){
            computerScore++, console.log("You lose! " + computerSelection + " beats " + humanSelection + " (˵ •̀ᴗ•́˵)و")
        }else if (roundResult === "Draw"){
            console.log("It's a draw ಠ_ಠ")
        }else return
    }

    console.log("Game over!")
        if (humanScore > computerScore){
            return console.log(humanScore + " || " + computerScore + " Darn it, you won the game (っ- ‸ - ς)")
        }else if (computerScore > humanScore){
            return console.log(humanScore + " || " + computerScore + " YYYYYEEEEEEEESSSSSSS I WINNNNN <(^-^<) <( ^-^ )> (>^-^)>")
        }else{
            console.log(humanScore + " || " + computerScore + " It's a tie ... how boring (¬_¬)")
        }
}
playGame();