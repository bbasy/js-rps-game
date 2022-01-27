const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let stalemates = 0;

function playerSelection() {
  let selection = window.prompt("Choose: Rock, Paper, Scissors");
  // Input Validation
  let isValid = 1;
  selection = selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
  selection = choices.includes(selection) ? selection : isValid = 0;
  return isValid ? selection : playerSelection();
}

function computerSelection() {
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function returnVictor(playerSelection, computerSelection) {
  // Player is Rock
  if(playerSelection == choices[0]){
    if(computerSelection == choices[1]){
      computerScore++;
      return "You Lose! Paper beats Rock";
    }

    else if(computerSelection == choices[2]){
      playerScore++;
      return "You Win! Rock beats Scissors";
    }

    else {
      stalemates++;
      return "Stalemate!";
    }
  }

  // Player is Paper
  if(playerSelection == choices[1]){
    if(computerSelection == choices[0]){
      playerScore++;
      return "You Win! Paper beats Rock";
    }
    
    else if(computerSelection == choices[2]){
      computerScore++;
      return "You Lose! Scissors beats Paper";
    }

    else {
      stalemates++;
      return "Stalemate!"
    }
  }

  // Player is Scissors
  if(playerSelection == choices[2]){
    if(computerSelection == choices[1]){
      playerScore++;
      return "You Win! Scissors beats Paper";
    }

    else if(computerSelection == choices[0]){
      computerScore++;
      return "You Lose! Rock beats Scissors";
    }

    else {
      stalemates++;
      return "Stalemate!";
    }
  }
}

function playRound() {
  let player = playerSelection();
  let ai = computerSelection();
  return returnVictor(player, ai);
}

function game(){
  let rounds = 5;
  playerScore = 0;
  computerScore = 0;
  stalemates = 0;

  for (let i = 0; i < rounds; i++) {
    playRound();
  }

  return playerScore > computerScore ?
    console.log("You won with a score of: " + playerScore + " Opponent Score: " + computerScore + " Stalemates: " + stalemates):
    console.log("You lost with a score of: " + playerScore + " Opponent Score: " + computerScore + " Stalemates: " + stalemates);
}
