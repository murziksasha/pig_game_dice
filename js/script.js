'use strict';

document.addEventListener('DOMContentLoaded', ()=> {

const scorePlayer1 = document.querySelector('#score--0'),
      scorePlayer2 = document.querySelector('#score--1'),
      currentScorePlayer1 = document.querySelector('#current--0'),
      currentScorePlayer2 = document.querySelector('#current--1');

const btnNewGame = document.querySelector('.btn--new'),
      btnRollDice = document.querySelector('.btn--roll'),
      btnHold = document.querySelector('.btn--hold');

const diceNumberPic = document.querySelector('.dice');

const sectionPlayer1 = document.querySelector('.player--0'),
      sectionPlayer2 = document.querySelector('.player--1');

let scores = [0, 0];

let currentScore,
    activePlayer,
    playing;

newGame();
startTheGame();

function newGame() {
  diceNumberPic.classList.add('hide');
  currentScore = 0,
  activePlayer = 0,
  playing = true;
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
  scores = [0, 0];
}


btnNewGame.addEventListener('click', ()=>{
  newGame ();
  removeActive();
  sectionPlayer1.classList.add('player--active');
  document.getElementById(`current--1`).textContent = currentScore;
  document.getElementById(`current--0`).textContent = currentScore;

  });

function rndDiceNumber() {
  const rndNumber = Math.floor((Math.random() * 6) + 1);
  return rndNumber;
}

function removeActive(){
  sectionPlayer1.classList.remove('player--active');
  sectionPlayer2.classList.remove('player--active');
  sectionPlayer1.classList.remove('player--winner');
  sectionPlayer2.classList.remove('player--winner');
  
}

function dynamicPlayerControl(rndNumberForCurrent = 0) {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  sectionPlayer1.classList.toggle('player--active');
  sectionPlayer2.classList.toggle('player--active');
  currentScore = 0;
  currentScore += rndNumberForCurrent;
}



function startTheGame() {

  btnRollDice.addEventListener('click', e => {
    
 if(playing) {
    const rndNumberForCurrent = rndDiceNumber();
    diceNumberPic.classList.remove('hide');
    diceNumberPic.src = `img/dice-${rndNumberForCurrent}.png`;
    if(rndNumberForCurrent !==1) {
      currentScore += rndNumberForCurrent;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      dynamicPlayerControl(rndNumberForCurrent);
    }
  }
   
  });




  btnHold.addEventListener('click', ()=>{
    if(playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
      removeActive();
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    } else {
      dynamicPlayerControl();
    }
  }
  });



 


}






});