// SETTING ALL VARIABLES
const player0 = document.querySelector(`.player--0`);
const player1 = document.querySelector(`.player--1`);
const score0 = document.querySelector(`#score--0`);
const score1 = document.querySelector(`#score--1`);
const currentScore0 = document.querySelector(`#current--0`);
const currentScore1 = document.querySelector(`#current--1`);

// SETTING VARIABLES FOR DICE AND BUTTONS
const dice = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnHold = document.querySelector(`.btn--hold`);
const btnRoll = document.querySelector(`.btn--roll`);

// SETTING USER NAME WITH PROMPT
// const player1Name = window.prompt(`Enter a name for player 1`);
// const player2Name = window.prompt(`Enter a name for player 2`);
// document.querySelector(`#name--0`).textContent = player1Name ? player1Name : `Neo`;
// document.querySelector(`#name--1`).textContent = player2Name ? player2Name : `Morpheus`;

// INITIALIZING 
let score, currentScore, activePlayer, playing;

// // GAME STARTING STATE // SHOULD BE SET AT START AND ADDED TO NEW GAME BUTTON AS CALLBACK
const init = function() {
    // INITIALIZING
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    // SETTING DEFAULT VALUES
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    // dice.classList.add(`hidden`);
    player0.classList.remove(`player--winner`);
    player1.classList.remove(`player--winner`);
    player0.classList.add(`player--active`);
    player1.classList.remove(`player--active`);
};
init();
btnNew.addEventListener(`click`, init);



// PLAYER SHOULD CLICK BUTTON ROLL DICE TO OUT PUT RANOM DICE NUMBER
// btnRoll.addEventListener(`click`, function() {
//     // USER SHOULDNT BE ABLE TO PLAY GAME IF NOT STARTED!
//         // SET RANDOM NUMBER <= 6 AS A DICE
//         const diceNum = Math.trunc(Math.random() * 6) + 1;
//         console.log(diceNum)
//         dice.src = `../assets/img/dice-${diceNum}.png`;
// });