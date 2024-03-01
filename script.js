// Define the askForName function
function askForName() {
  console.log("Name received:", playerName);
}
// ask the user for their name
let playerName = prompt("Please enter your name:");

// Check if the user entered a name
if (playerName != null && playerName != "") {
  // Update the "Player" text with the user's name
  document.getElementById("playerDisplay").textContent = playerName + ": ";
  askForName();
}


const choices = ["rock", "paper", "scissors"];
// changes the amount of wins by a computer/player
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
// changes the amount of wins by a computer/player end
// shows if you win
const resultDisplay = document.getElementById("resultDisplay");
// shows if win end
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)]; // picks one of three choises
  let result = "";

  if (playerChoice === computerChoice) {
    // shows a tie if selected same thing
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }

  playerDisplay.textContent = `${playerName}: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");// changes the color of the text
  
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }

  // Check if either player's or computer's score reaches 5
  if (playerScore === 5 || computerScore === 5) {
    // game result message
    if (playerScore === 5) {
      resultDisplay.textContent = "YOU WIN THE GAME! SCORE RESETS";
    } else {
      resultDisplay.textContent = "You lost the game! Score resets";
    }
    // Reset to 0
    playerScore = 0;
    computerScore = 0;
    // Update the score display
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  } else {
    // If neither player or computer has reached 5, continue the game
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }
}

