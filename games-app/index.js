import {Trie, TrieNode} from "./trie.js"

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

/*****************************************************************************
 *      (UTILITY) CREATE A FUNCTION THAT "ROLLS" EACH DICE AND RETURNS     *
 *  A RANDOM POSSIBLE LETTER FROM EACH DICE && RANDOMIZE DICE WITHIN BOARD *
 *****************************************************************************/
let diceContainer = document.getElementById("dice");
let diceCount = dice.length;

/********************************************************
 * //======*** RANDOMIZE DICE WITHIN BOARD ***=======// * 
 ********************************************************/
function shuffleArray(input) {
    if (Math.random() < .5) {
        return input;
    } else {
        return input.reverse();
    }
}
/*******************************************************************
 *               ========*** NOTE ***==========                *
 *               ===========******=============                *
 *  THE ABOVE FUNCTION COULD ALSO USE THE .SLICE() AND .CONCAT() *
 *   METHODS ALONG WITH MATH.RANDOM() TO SLICE DICE AT A RANDOM  *
 *              INDEX AND REJOIN TOGETHER RANDOMLY.              *
 *******************************************************************/

/*******************************************
 *      "ROLLS" EACH DICE AND RETURNS      *
 * A RANDOM POSSIBLE LETTER FROM EACH DICE *
 *******************************************/
function getDiceRollArray(diceCount) {

        const lettersArray = dice.map(function(die) {
            let currentDie = die.split('');
            let diceRoll = Math.floor(Math.random() * 6);
            let number = currentDie[diceRoll];
            return number;
        });

        return shuffleArray(lettersArray);
        
}

/******************************************************************************
 * // (INDEX) CREATE A FUNCTION THAT DISPLAYS THE DICE ON THE BOARD USING DOM *
 ******************************************************************************/
let currentDiceArray = getDiceRollArray(diceCount)

function displayDice() {
    
 	diceContainer.innerHTML = currentDiceArray.map((number) =>
 		`<div class="dice">${number}</div>`).join("")
}

displayDice();



/************************************************************************
 * /******************************************************************* *
 *  *    CREATE A FUNCTION THAT DISPLAYS WHICH DICE ARE SELECTED    *   *
 *    * AND ADDS THE LETTERS (IN SELECTED ORDER) TO THE #CURRENTWORD    *
 *              * ALLOWS SELECTION OF ONLY ADJACENT DICE.*              *
/************************************************************************/
let currentWord = [];
let showCurrentWord = document.getElementById("currentWord");
let displayedDice = document.querySelectorAll('.dice')
let lastSelectedIndex = null


displayedDice.forEach(die => {
        die.addEventListener('click', (event) => {
            let nextSelectedIndex = Array.from(displayedDice).indexOf(event.target);
            if (lastSelectedIndex === null) {
                lastSelectedIndex = nextSelectedIndex;
                selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex - 5) {
                lastSelectedIndex = nextSelectedIndex;
                selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex - 4) {
                lastSelectedIndex = nextSelectedIndex;
                selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex - 3) {
                 lastSelectedIndex = nextSelectedIndex;
                 selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex - 1) {
                 lastSelectedIndex = nextSelectedIndex;
                 selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex + 1) {
                 lastSelectedIndex = nextSelectedIndex;
                 selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex + 3) {
                 lastSelectedIndex = nextSelectedIndex;
                 selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex + 4) {
                 lastSelectedIndex = nextSelectedIndex;
                 selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex + 5) {
                 lastSelectedIndex = nextSelectedIndex;
                 selectDie(die);

            } else if (nextSelectedIndex === lastSelectedIndex) {
                selectDie(die);
                lastSelectedIndex = null;
            } else {
                alert("You must select an adjacent die.");
            }
            
        });
    });


// for (let i = 0; i < displayedDice.length; i++) {
//     displayedDice[i].addEventListener('click', selectDie);
    
// }

function selectDie(die) {

        if (!die.classList.contains('selected')) {
        die.classList.add('selected');
        currentWord.push(die.innerHTML);

    } else {
        die.classList.remove('selected');
        currentWord.pop(die.innerHTML);
        //currentWord.splice(i, 1);
    }

    let wordDisplay = currentWord.join('');
    showCurrentWord.innerHTML = wordDisplay;  
}
 

// Create a function that checks #currentWord after #submitBtn
// display word & it's score (3-4: 1; 5: 2; 6: 3; 7: 5; 8+: 11)
// add word score to total points

let points = 0;
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

// Create a function to add previously guessed words to.
let guessedWords = [];


// Display submitted word, it's score, and recalculate total score
function playWord() {
    calculatePoints();
    let row = scoreTable.insertRow(1);
    let wordCell = row.insertCell(0);
    let pointsCell = row.insertCell(1);
    wordCell.innerHTML = currentWord.join('');
    pointsCell.innerHTML = points;
    totalHolder.innerHTML = totalPoints;
    checkDictionary();
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



/************************
 * LOAD WORDS INTO TRIE *
 ************************/
async function loadWordsIntoTrie() {
    const statusElement = document.getElementById('status');
    statusElement.textContent = 'Trie status: Loading...';

    try {
        // The path is relative to your index.html file, assuming a local server
        const response = await fetch('wordsList.txt');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        
        // Split the text into words (assuming words are newline separated)
        const words = text.split('\n').map(word => word.trim()).filter(word => word.length > 0);

        // Insert each word into the Trie
        for (const word of words) {
            myTrie.insert(word);
        }

        statusElement.textContent = `Trie status: Loaded ${words.length} words.`;
        console.log('Trie populated:', myTrie);

    } catch (error) {
        statusElement.textContent = 'Trie status: Error loading file. Ensure a local server is running and the file path is correct.';
        console.error('Error fetching file:', error);
    }
}

loadWordsIntoTrie();

/****************************************
 * SEARCH TRIE WITH DFS FOR CURRENTWORD *
 ****************************************/
function checkDictionary() {
    
    if(Trie.search(currentWord) === false) {
        alert("That is not a valid word, please try again.");
    } else if (guessedWords.includes(wordDisplay)) {
        alert("That word has already been guessed, please choose another word.")
    } else {
        guessedWords.push(wordCell.innerHTML);
        resetWord();
        lastSelectedIndex = null;
    }
}

export {loadWordsIntoTrie, checkDictionary}