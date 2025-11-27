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

//======*** Randomize dice within board ***=======//
//====================******=====================//
function shuffleArray(input) {
    if (Math.random() < .5) {
        return input;
    } else {
        return input.reverse();
    }
}
//========*** NOTE ***==========//
//===========******=============//
// The above function could also use the .slice() and .concat()
// methods along with Math.random() to slice dice at a random 
// index and rejoin together randomly. 

function getDiceRollArray(diceCount) {
//   for (let i = 0; i < diceCount; i++) {
//    return new Array(diceCount).fill(0).map(function() {
//         let currentDie = dice[i].split('');
//         let diceRoll = Math.floor(Math.random() * 6);
//         let number = currentDie[diceRoll];
//         return number;
//     }) 
//   }
        const lettersArray = dice.map(function(die) {
            let currentDie = die.split('');
            let diceRoll = Math.floor(Math.random() * 6);
            let number = currentDie[diceRoll];
            return number;
        });

        return shuffleArray(lettersArray);

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
let currentWord = [];
let showCurrentWord = document.getElementById("currentWord");
let displayedDice = document.getElementsByClassName("dice");

for (let i = 0; i < displayedDice.length; i++) {
    displayedDice[i].addEventListener('click', selectDie);
}

function selectDie() {
    if (!this.classList.contains('selected')) {
        this.classList.add('selected');
        currentWord.push(this.innerHTML);
    } else {
        this.classList.remove('selected');
        currentWord.pop(this.innerHTML);
        //currentWord.splice(i, 1);
    }

    let wordDisplay = currentWord.join('');
    showCurrentWord.innerHTML = wordDisplay
}
 

// Create a function that checks #currentWord after #submitBtn
// display word & it's score (3-4: 1; 5: 2; 6: 3; 7: 5; 8+: 11)
// add word score to total points

let totalPoints = 0;
let totalHolder = document.getElementById("totalPoints");
let scoreTable = document.getElementById("scoreTable");
let submitBtn = document.getElementById("submitBtn");

// Calculate score
function calculatePoints() {
    let p = currentWord.length;
    if (p > 2) {
        switch(true) {
        case (p === 3 || p === 4):
            points = 1;
            totalPoints += points;
            break;
        case (p === 5):
            points = 2;
            totalPoints += points;
            break;
        case (p === 6):
            points = 3;
            totalPoints += points;
            break;
        case (p === 7):
            points = 5;
            totalPoints += points;
            break;
        case (p > 7):
            points = 11;
            totalPoints += points;
            break;
        default:
            points = 0;
    }
    } else {
        alert("Your word must be more than three characters long!");
    }
    
}

// Display submitted word, it's score, and recalculate total score
function playWord() {
    calculatePoints();
    let row = scoreTable.insertRow(1);
    let wordCell = row.insertCell(0);
    let pointsCell = row.insertCell(1);
    wordCell.innerHTML = currentWord.join('');
    pointsCell.innerHTML = points;
    totalHolder.innerHTML = totalPoints;
    resetWord();
}

submitBtn.addEventListener('click', playWord);


// Reset Function, resets selections when reset button is clicked
let resetBtn = document.getElementById("resetBtn");

function resetWord() {
    currentWord = [];
    showCurrentWord.innerHTML = '';
    for(let i = 0; i < displayedDice.length; i++) {
       displayedDice[i].classList.remove('selected');
   }
}

resetBtn.addEventListener('click', resetWord);

///// EXTRAS //////
// Create a function that checks #currentWord after #submitBtn is 
// clicked against a dictionary of words.

// Allows selection of ONLY adjacent dice.