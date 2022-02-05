const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let stalemates = 0;
let selection = "";
let aiselection = "";

const btn = document.getElementsByClassName('input-btn')
const playerView = document.getElementById('pSelect')
const aiView = document.getElementById('aiSelect')
const rockTxt = "&#9994";
const paperTxt = "&#9995";
const scisTxt = "&#9996";

// On button click

for(var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(e) {
    playerSelection(this.value);
    changeViewTxt();
  });
}

function playerSelection(value) {
  selection = value;
  console.log(selection);
  return selection;
}

function computerSelection() {
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

function changeViewTxt() {
  switch(selection) {
    case choices[0]:
      playerView.innerHTML = rockTxt;
      break;

    case choices[1]:
      playerView.innerHTML = paperTxt;
      break;

    case choices[2]:
      playerView.innerHTML = scisTxt;
      break;
  }
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
  selection = "";
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
