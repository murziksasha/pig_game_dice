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

const scores = [0, 0];

let currentScore = 0,
    activePlayer = 0;

startTheGame();
newGame();

btnNewGame.addEventListener('click', ()=>{
  removeActive();
  newGame ()
  diceNumberPic.classList.add('hide');
  sectionPlayer1.classList.add('player--active');
  });

function rndDiceNumber() {
  const rndNumber = Math.floor((Math.random() * 6) + 1);
  return rndNumber;
}

function removeActive(){
  sectionPlayer1.classList.remove('player--active');
  sectionPlayer2.classList.remove('player--active');
}

function newGame() {
  scorePlayer1.textContent = 0;
  scorePlayer2.textContent = 0;
}

function startTheGame() {
  btnRollDice.addEventListener('click', e => {
    const rndNumberForCurrent = rndDiceNumber();
    diceNumberPic.classList.remove('hide');
    diceNumberPic.src = `img/dice-${rndNumberForCurrent}.png`;
    if(rndNumberForCurrent !==1) {
      currentScore += rndNumberForCurrent;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else  {
      removeActive()
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      currentScore += rndNumberForCurrent;
      document.querySelector(`.player--${activePlayer}`).classList.add(`player--active`);

    }

    btnHold.addEventListener('click', ()=>{
      document.getElementById(`score--${activePlayer}`).textContent += currentScore;
    })

   
  });

}






});