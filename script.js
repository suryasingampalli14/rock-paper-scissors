function getComputerChoice(){
    const random=Math.random();
    if (random<0.34)
        return "rock";
    else if (random<0.67)
        return "paper";
    else return "scissors";

}
function HumanChoice(){
    const choice=prompt("Enter Your Choice rock,paper,scissors");
    return choice.toLowerCase();


}
let humanScore=0;
let computerScore=0;


function playRound(HumanChoice,ComputerChoice){
    HumanChoice=HumanChoice.toLowerCase();

    if(ComputerChoice===HumanChoice){
        console.log("You both chosen the same");
    }else if(
        (HumanChoice==="rock" && ComputerChoice==="scissors")||
        (HumanChoice==="paper" && ComputerChoice==="rock")||
        (HumanChoice==="scissors" && ComputerChoice==="paper") 
    ){
        console.log(`You Win ${HumanChoice} beats ${ComputerChoice}`);
        humanScore++;
    }else{
        console.log(`You Lose ${ComputerChoice} beats ${HumanChoice}`);
        computerScore++;
    }
    console.log(`Scores Humanscore:${humanScore},ComputerScore ${computerScore}`);



}
playRound();
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("Game Over!");
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

// Start the game
playGame();


