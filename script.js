function getComputerChoice() {
  const random = Math.random();
  if (random < 0.34)
    return "rock";
  else if (random < 0.67)
    return "paper";
  else
    return "scissors";
}

function getHumanChoice() {
  const choice = prompt("Enter your choice (rock, paper, scissors):");
  return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`✅ You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`❌ You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  console.log(`🧮 Score => You: ${humanScore}, Computer: ${computerScore}`);
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("🏁 Game Over!");
  if (humanScore > computerScore) {
    console.log("🎉 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}

// Run the game
playGame();
