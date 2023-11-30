function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "Rock";
  } else if (randomNumber == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
function getPlayerSelection() {
  let playerSelection = prompt("Choose Rock, Paper, or Scissors");
  if (playerSelection === null) {
    alert("You Canceled The Game");
    return null;
  }
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
    return playerSelection;
  } else {
    alert("Please choose Rock, Paper, or scissors");
    return getPlayerSelection();
  }
}
function compareAnswers(playerChoice, computerChoice) {
  if (playerChoice === null) {
    return null;
  } else if (playerChoice == computerChoice) {
    return `You choose ${playerChoice} and computer choose ${computerChoice}, it's a Tie!`;
  } else if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `You Lose! ${computerChoice} beats ${playerChoice}`;
  }
}
function game() {
  let playerWins = 0;
  let computerWins = 0;
  
  for (let round = 1; round <=5; round++) {
    console.log(`Round ${round}:`);
    playerChoice = getPlayerSelection();
    if (playerChoice == null) {
      console.log("You Canceled The Game!");
      break;
    }
    computerChoice = getComputerChoice();
    let result = compareAnswers(playerChoice, computerChoice);
    console.log(`Computer: ${computerChoice}`);
    console.log(`You: ${playerChoice}`);
    console.log(result);
    if (result.includes("Win")) {
      playerWins++;
    } else if (result.includes("Lose")) {
      computerWins++;
    }
  }
  if (playerChoice == null) {
    console.log("To start the game press CTRL + R");
  } else if (playerWins > computerWins) {
    console.log(`You win the game with ${playerWins} out of 5 rounds!`);
    console.log("To restart the game press CTRL + R");
  } else if (computerWins > playerWins) {
    console.log(`You lose the game with ${computerWins} out 5 rounds!`);
    console.log("To restart the game press CTRL + R");
  } else {
    console.log("The game is a tie!");
    console.log("To restart the game press CTRL + R");
  }
}
game()