let roundNumber = 0;
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {    

    button.addEventListener('click', (event) => {
        let humanSelection = event.target.id;
        
        function getComputerChoice() {
            let randomNumber = Math.random()
            if (randomNumber < 0.33) {
               return "rock";
            } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
               return "paper";
            } else (randomNumber >= 0.66)
                return "scissor";
        }
        
        const computerSelection = getComputerChoice();
        
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice){
                return "Draw";
            } else if (
                (humanChoice === "rock" && computerChoice === "paper") ||
                (humanChoice === "paper" && computerChoice === "scissor") ||
                (humanChoice === "scissor" && computerChoice === "rock")
            ){    
                return "You lose!";
            } else(
                (humanChoice === "rock" && computerChoice === "scissor")||
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissor" && computerChoice === "paper")
            )
                return "You win!";
        }

        const selection = document.querySelector('#selection');
        selection.textContent = `You choose ${humanSelection}, I choose ${computerSelection}.`   
    
        const result = document.querySelector('#result')

        const roundResult = playRound(humanSelection, computerSelection);
        if(roundResult === "You win!"){
            ++humanScore, ++roundNumber,
            result.textContent = `You win... ${humanSelection} beats ${computerSelection} (˃̣̣̥ᯅ˂̣̣̥)`,
            finalResult();
        }else if (roundResult === "You lose!"){
            ++computerScore, ++roundNumber,
            result.textContent = `You lose! ${computerSelection} beats ${humanSelection} (˵ •̀ᴗ•́˵)و`,
            finalResult();
        }else if (roundResult === "Draw"){
            ++roundNumber,
            result.textContent = "It's a draw ಠ_ಠ",
            finalResult();
        }else return
      
        const score = document.querySelector('#score');
        score.textContent = `Ugly Human: ${humanScore} || Sexy Computer: ${computerScore}`

        const round = document.querySelector('#round');
        round.textContent = `Round ${roundNumber}:`;
    
        function finalResult(){
            if (humanScore === 5 || computerScore === 5){
                const over = document.querySelector('#over');
                const final = document.querySelector('#final');
                over.textContent = 'GAME OVER!!!'
        
                if (humanScore === 5){
                    final.textContent = `Darn it, you won the game (っ- ‸ - ς)`,
                    event.stopPropagation()
                }else (computerScore === 5)
                    final.textContent = `YYYYYEEEEEEEESSSSSSS I WINNNNN <(^-^<) <( ^-^ )> (>^-^)>`,
                    event.stopPropagation()
            }else
                return;
        }   
    });
});