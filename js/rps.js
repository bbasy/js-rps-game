const choices = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let aiScore = 0;
let stalemates = 0;
let selection = "";
let aiSelection = "";
let curRound = 0;

const btn = document.getElementsByClassName('input-btn');
const playerView = document.getElementById('pSelect');
const aiView = document.getElementById('aiSelect');
const playerBoard = document.getElementById('playerScore');
const roundBoard = document.getElementById('round');
const aiBoard = document.getElementById('aiScore');
const rockTxt = "&#9994";
const paperTxt = "&#9995";
const scisTxt = "&#9996";

function playerSelection(value) {
  selection = value;
  console.log(selection);
  computerSelection();
  return selection;
}

function computerSelection() {
  let random = Math.floor(Math.random() * 3);
  aiSelection = choices[random];
  return aiSelection;
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

  switch(aiSelection) {
    case choices[0]:
      aiView.innerHTML = rockTxt;
      break;

    case choices[1]:
      aiView.innerHTML = paperTxt;
      break;

    case choices[2]:
      aiView.innerHTML = scisTxt;
      break;
  }
}

function updateScore() {
  playerBoard.innerHTML = playerScore;
  roundBoard.innerHTML = curRound;
  aiBoard.innerHTML = aiScore;
}

function returnVictor(playerSelection, computerSelection) {
  // Player is Rock
  if(playerSelection == choices[0]){
    if(computerSelection == choices[1]){
      aiScore++;
      console.log("You Lose! Paper beats Rock");
    }

    else if(computerSelection == choices[2]){
      playerScore++;
      console.log("You Win! Rock beats Scissors");
    }

    else {
      stalemates++;
      console.log("Stalemate!");
    }
  }

  // Player is Paper
  if(playerSelection == choices[1]){
    if(computerSelection == choices[0]){
      playerScore++;
      return "You Win! Paper beats Rock";
    }
    
    else if(computerSelection == choices[2]){
      aiScore++;
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
      console.log("You Win! Scissors beats Paper");
    }

    else if(computerSelection == choices[0]){
      aiScore++;
      console.log("You Lose! Rock beats Scissors");
    }

    else {
      stalemates++;
      console.log("Stalemate!");
    }
  }
}

function playRound() {
  // Round is started once the player clicks one of three buttons
  changeViewTxt();
  returnVictor(selection, aiSelection);
  updateScore();
}

function game(){
  let rounds = 5;
  playerScore = 0;
  computerScore = 0;
  stalemates = 0;
  
  
}

// On button click

for(var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(e) {
    playRound();
  });
}