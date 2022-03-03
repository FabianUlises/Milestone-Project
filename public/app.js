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
const diceCtn = document.querySelector(`#imgCtn`);

// INITIALIZING 
let score, currentScore, activePlayer, playing, player1Name, player2Name;
// FUNCTION FOR PLAYER NAME
const setUserName = function() {
    player1Name = window.prompt(`Enter a name for player 1`);
    player2Name = window.prompt(`Enter a name for player 2`);
    document.querySelector(`#name--0`).textContent = player1Name ? player1Name : `Neo`;
    document.querySelector(`#name--1`).textContent = player2Name ? player2Name : `Morpheus`;
}
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
    diceCtn.classList.add(`hidden`);
    player0.classList.remove(`player--winner`);
    player1.classList.remove(`player--winner`);
    player0.classList.add(`player--active`);
    player1.classList.remove(`player--active`);
    document.querySelector(`.btn--hold`).disabled = false;
    setUserName();
};
init();
btnNew.addEventListener(`click`, init);
// FUNCTION FOR SWITCHING PLAYER
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle(`player--active`);
    player1.classList.toggle(`player--active`);
};

// PLAYER SHOULD CLICK BUTTON ROLL DICE TO OUT PUT RANOM DICE NUMBER
btnRoll.addEventListener(`click`, function() {
    // USER SHOULDNT BE ABLE TO PLAY GAME IF NOT STARTED!
    if(playing) {
        // SET RANDOM NUMBER <= 6 AS A DICE
        const diceNum = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNum)
        dice.src = `./img/dice-${diceNum}.png`;
        diceCtn.classList.remove(`hidden`);
        // IF DICENUM === 1 CURRENT PLAYER LOSES AND SWITCHES
        if(diceNum !== 1) {
            // SETTING CURRENT SCORE TO EQUAL DICENUM
            currentScore += diceNum;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            // SWITCHING PLAYER
            switchPlayer();
        }

    }
});
// HOLD BUTTON
// if playering when button is pressed current score should be added to score Array
// set the score from array to equal score on Ui
// if score > 100 game is won
btnHold.addEventListener(`click`, function() {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    if(score[activePlayer] >= 100) {
        // GAME IS OVER
        playing = false;
        // ADD HIDDEN CLASS TO IMAGE DICE CONTAINER
        diceCtn.classList.add(`hidden`);
        // DISABLE HOLD BUTTON
        document.querySelector(`.btn--hold`).disabled = true;
        // ADD WINNING CLASS 
        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
    } else {
        // SWITCHING PLAYER
        switchPlayer();
    }
});