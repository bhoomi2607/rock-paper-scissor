let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// generate game choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randId = Math.floor(Math.random() * 3);
  return options[randId];
};
// game draw
const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "It was a draw!";
  msg.style.backgroundColor = "#271f30";
};

//winner message
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `you won! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#9bc59d";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!");
    msg.innerText = `you lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#6c5a49";
  }
};

//deciding who will win
const playGame = (userChoice) => {
  //generate comp choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice == "paper" ? false : true;
    }
    if (userChoice == "paper") {
      userWin = compChoice == "scissors" ? false : true;
    }
    if (userChoice == "scissors") {
      userWin = compChoice == "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
