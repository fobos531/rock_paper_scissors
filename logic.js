const round = document.getElementById('round');
round.textContent = "1";

function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"]; //define three possible answers
  let index = Math.floor(Math.random() * options.length); // choose one randomly
  //result
  return options[index]; //return it
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch (playerSelection) {
      case "rock":
          if (computerSelection == "paper") return false;
          if (computerSelection == "scissors") return true;
          if (computerSelection == "rock") return;
          break;
      case "scissors":
          if (computerSelection == "paper") return true;
          if (computerSelection == "scissors") return;
          if (computerSelection == "rock") return false;
          break;
      case "paper":
          if (computerSelection == "paper") return;
          if (computerSelection == "scissors") return false;
          if (computerSelection == "rock") return true;
          break;    
      default: alert("You have played an invalid option");
  }
}

function game(playerSelection) {
    let computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    const playerScore = document.getElementById("playerScore");
    const computerScore = document.getElementById("computerScore");
    if (result) {
        playerScore.innerText = +(playerScore.innerText) + 1;
    } else {
        computerScore.innerText = +(computerScore.innerText) + 1;
    }
    if (playerScore.innerText == 5) alert("Congratulations! You're the winner!");
    if (computerScore.innerText == 5) alert("Sheesh! Better luck next time :/"); 
    round.innerText = +(round.innerText) + 1;
    
}

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', function(e){
    let playerSelection = e.target.innerText.toLowerCase();
    game(playerSelection);
}));