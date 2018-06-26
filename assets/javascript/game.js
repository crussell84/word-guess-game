var wordBank = ["dragon", "princess", "knight", "castle", "sword", "lance", "tournament", "wizard", "magic", "monster"];
var guessesRemaining = 12;
var guessedLetters = [];
var displayedWord = "";
var wins = 0;
var losses = 0;
function selectWord() {
    var randomWord = wordBank[[Math.floor(Math.random() * wordBank.length)]];
    return randomWord;
}

var selectedWord = selectWord();
console.log(selectedWord);
//need to keep track of and display letters guessed, number of guesses remaining, number of wins
//compare guessed letter to letters in word & display matches in correct spot
///display a series of _ to mark number of letters (underlines? or borders? way to make it a 'reveal' of letters vid hide/show?)
//remove used words from bank?
//use modals instead of alerts?
var wordDiv = document.getElementById("wordDisplay");

function setDisplayWord() {
    for (var i = 0; i < selectedWord.length; i++) {
        displayedWord = displayedWord + "_";
        wordDiv.textContent = displayedWord;

    }
}

setDisplayWord();

function newRound(){
    displayedWord = "";
    selectedWord = selectWord();
    setDisplayWord();
    guessesRemaining = 12;
    guessedLetters = [];
    console.log(selectedWord);
}


//fucnction to replace the underscore in the display string
function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}

document.onkeyup = function (event) {
    var userGuess = event.key;

    userGuess = userGuess.toLowerCase();
    //check if guess is letter
    if (userGuess.match(/[a-z]/i)) {
        //check if letter already guessed
        if (guessedLetters.indexOf(userGuess) === -1) {
            if (selectedWord.includes(userGuess)) {
                for (var i = 0; i < selectedWord.length; i++) {
                    if (userGuess === selectedWord.charAt(i)) {
                        displayedWord = setCharAt(displayedWord, i, userGuess);
                        wordDiv.textContent = displayedWord;
                    }
                }
                guessesRemaining--;
                guessedLetters.push(userGuess);
            }
            else {
                //update display of guessed letters & guesses remaining
                guessesRemaining--;
                guessedLetters.push(userGuess);
            }

            console.log(guessedLetters);
        }
        else {
            console.log("You've guessed that already!");
        }

    }
    else {
        console.log("Not a valid guess!");
    }
    //check for win/loss conditions & update
    if (displayedWord === selectedWord) {
        wins++;
        console.log("You're a winner! You've won " + wins + " games!");
        newRound();
    }
    else if (guessesRemaining === 0) {
        losses++;
        console.log("You lost, better luck next time! You have " + losses + " losses.");
        newRound();
    }
}