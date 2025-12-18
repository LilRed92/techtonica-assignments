/****************************************
 * SEARCH TRIE WITH DFS FOR CURRENTWORD *
 ****************************************/
function checkDictionary() {
    
    if(search(currentWord) === false) {
        alert("That is not a valid word, please try again.");
    } else if (guessedWords.includes(wordDisplay)) {
        alert("That word has already been guessed, please choose another word.")
    } else {
        guessedWords.push(wordCell.innerHTML);
        resetWord();
        lastSelectedIndex = null;
    }
}




const myTrie = new Trie();

