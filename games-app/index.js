// (data) Create an array of dice (each dice has 6 letters)
const dice = [
    "AEANEG",
    "WNGEEH",
    "AHSPCO",
    "LNHNRZ",
    "ASPFFK",
    "TSTIYD",
    "OBJOAB",
    "OWTOAT",
    "IOTMUC",
    "ERTTYL",
    "RYVDEL",
    "TOESSI",
    "LREIXD",
    "TERWHV",
    "EIUNES",
    "NUIHMR"
];

// (utility) Create a function that "rolls" each dice and returns
// a random possible letter from each dice
let diceContainer = document.getElementById("dice");
let diceCount = dice.length;

function getDiceRollArray(diceCount) {
  for (let i = 0; i < diceCount; i++) {
   return new Array(diceCount).fill(0).map(function() {
        let currentDie = dice[i].split('');
        let diceRoll = Math.floor(Math.random() * 6);
        let number = currentDie[diceRoll];
        return number;
    }) 
  }

// (index) Create a function that displays the dice on the board using DOM

function displayDice() {
    currentDiceScore = getDiceRollArray(diceCount)
 	diceContainer.innerHTML = currentDiceScore.map((number) =>
 		`<div class="dice">${number}</div>`).join("")
}

displayDice();


// Create a function that displays which dice are selected 
// and adds the letters (in selected order) to the #currentWord


// Create a function that checks #currentWord after #submitBtn
// display word & it's score (3-4: 1; 5: 2; 6: 3; 7: 5; 8+: 11)
// add word score to total points


// Calculate score


// Display submitted word, it's score, and recalculate total score



// Reset Function, resets selections when reset button is clicked


///// EXTRAS //////
// Create a function that checks #currentWord after #submitBtn is 
// clicked against a dictionary of words.

// Allows selection of ONLY adjacent dice.