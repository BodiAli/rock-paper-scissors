document.addEventListener("DOMContentLoaded", function () {
  const rockElement = document.querySelector(".rock");
  const paperElement = document.querySelector(".paper");
  const scissorsElement = document.querySelector(".scissors");
  const h2Element = document.querySelector(".output h2");
  const scoreElement = document.querySelector(".score");
  const winnerMessage = document.querySelector(".winner-message");
  const playAgainParagraph = document.querySelector(".play-again");
  const playAgainButton = document.querySelector("#play-again-button");
  const weaponChoice = document.querySelector(".weapon-result");
  const result = document.querySelector(".game-result");


  playAgainParagraph.style.display = "none";

  h2Element.style.marginBottom = "-80px";
  let userScore = 0;
  let computerScore = 0;
  const winningScore = 5;
  let gameOver = false;

  rockElement.addEventListener("click", function () {
    if (!gameOver) playGame("rock");
  });

  paperElement.addEventListener("click", function () {
    if (!gameOver) playGame("paper");
  });

  scissorsElement.addEventListener("click", function () {
    if (!gameOver) playGame("scissors");
  });

  playAgainButton.addEventListener("click", function () {
    resetGame();
    playAgainButton.blur();
  });

  function playGame(userChoice) {
    if (gameOver) return;
  
    const computerChoice = getComputerChoice();
    const weaponChoice = document.querySelector(".weapon-result");
    const result = document.querySelector(".game-result");
    const roundResult = determineWinner(userChoice, computerChoice);
  
    weaponChoice.textContent = `You choose ${userChoice}, computer chooses ${computerChoice}`;
    result.textContent = roundResult;
  
    h2Element.style.marginBottom = "0";
  
    if (roundResult.includes("Win")) {
      userScore++;
    } else if (roundResult.includes("Lose")) {
      computerScore++;
    }
  
    scoreElement.textContent = `Score: You ${userScore} - ${computerScore} Computer`;
  
    if (userScore === winningScore || computerScore === winningScore) {
      announceWinner();
      playAgainParagraph.style.display = "block";
      gameOver = true;
    }
  
 
    const clickedButton = document.querySelector(`.${userChoice} img`);
    clickedButton.classList.add("clicked");
  
    setTimeout(() => {
      clickedButton.classList.remove("clicked");
    }, 200);
  }
  

  function resetGame() {
    gameOver = false;
    userScore = 0;
    computerScore = 0;
    h2Element.style.marginBottom = "-100px";
    scoreElement.textContent = "";
    winnerMessage.textContent = "";
    weaponChoice.textContent = ""; 
    result.textContent = "";
    playAgainParagraph.style.display = "none";
  }
    

  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
      return "rock";
    } else if (randomNumber === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "The Game Is A Tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return `You Win! ${userChoice} beats ${computerChoice}`;
    } else {
      return `You Lose! ${computerChoice} beats ${userChoice}`;
    }
  }

  function announceWinner() {
    if (userScore === winningScore) {
      winnerMessage.textContent = "Congratulations! You are the overall winner!";
    } else {
      winnerMessage.textContent = "Sorry, the computer is the overall winner. Try again!";
    }
  }
});
