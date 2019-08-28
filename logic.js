console.log("Hello! Today we will be playing 5 rounds of rock paper scissors")
function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"]; //define three possible answers
  let index = Math.floor(Math.random() * options.length); // choose one randomly
  //result
  return options[index]; //return it
}
function playRound(playerSelection, computerSelection) {
  let winner;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  switch (playerSelection) {
      case "rock":
          if (computerSelection == "paper") winner = "computer";
          if (computerSelection == "scissors") winner = "player";
          if (computerSelection == "rock") winner = "no one";
          break;
      case "scissors":
          if (computerSelection == "paper") winner = "player";
          if (computerSelection == "scissors") winner =  "no one";
          if (computerSelection == "rock") winner = "computer";
          break;
      case "paper":
          if (computerSelection == "paper") winner = "no one";
          if (computerSelection == "scissors") winner = "computer";
          if (computerSelection == "rock") winner = "player";
          break;    
      default: console.log("You have played an invalid option");
  }
  return winner;
}
function game() {
    console.log("----");
    console.log(`Round 1`);
    let playerSelection = prompt("Enter your choice");
    let computerSelection = computerPlay();
    console.log(`The winner is ${playRound(playerSelection, computerSelection)}.\n`);
}
game();