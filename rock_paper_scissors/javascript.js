/* Computer choice
    write a function "getComputerChoice"
        compute: math.random will get me numbers 0 to less than 1
        IF n=0-0.33 Then 
            n=Rock, 
        ELSE IF n=0.34-0.66 THEN
            n=Paper
        ELSE n=0.67-0.99 THEN
            n=Scissor

Human Choice
    write a function "getHumanChoice"
        input "choice" [use prompt("Let's play Rock, Paper, or Scissor")]
        Make humanChoice case-insensitives
        IF NOT spelling correct, "spelling erorr, please try again!"


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