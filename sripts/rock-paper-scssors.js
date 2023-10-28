let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();
const WIN = "You Win.";
const LOSE = "You Lose.";
const TIE = "Tie.";

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = LOSE;
    } else if (computerMove === "Paper") {
      result = WIN;
    } else if (computerMove === "Scissors") {
      result = TIE;
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = WIN;
    } else if (computerMove === "Paper") {
      result = TIE;
    } else if (computerMove === "Scissors") {
      result = LOSE;
    }
  } else if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = TIE;
    } else if (computerMove === "Paper") {
      result = LOSE;
    } else if (computerMove === "Scissors") {
      result = WIN;
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You 
<img src="./images/${playerMove.toLowerCase()}-emoji.png" class="move-icon">
<img src="./images/${computerMove.toLowerCase()}-emoji.png" class="move-icon">
Computer`;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}
