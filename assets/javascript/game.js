var wordBank = ["dragon", "elf", "orc", "dwarf", "princess", "knight", "castle", "sword", "lance", "tournament", "wizard", "magic", "monster"];
var guessesRemaining = 12;
var guessedLetters = [];
var displayedWord = "";
var wins = 0;
var losses = 0;
var selectedWord = selectWord();
var wordDiv = document.getElementById("wordDisplay");

function selectWord() {
    var randomWord = wordBank[[Math.floor(Math.random() * wordBank.length)]];
    return randomWord;
}

function displayStats() {
    document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters;
    document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
}

function setDisplayWord() {
    for (var i = 0; i < selectedWord.length; i++) {
        displayedWord = displayedWord + "_";
        wordDiv.textContent = displayedWord;

    }
}

function newRound() {
    document.getElementById("lastWord").innerHTML = "<h2>Last Round's Word: " + selectedWord + "</h2>";
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

displayStats();

//idiot proofing
console.log(selectedWord);

//create the series of blanks
setDisplayWord();

document.onkeyup = function (event) {
    var userGuess = event.key;

    userGuess = userGuess.toLowerCase();
    //check if guess is letter
    if (userGuess.match(/[a-z]/i) && userGuess.length == 1) {
        //check if letter already guessed
        if (!guessedLetters.includes(userGuess)) {
            //check if letter is in selected word
            if (selectedWord.includes(userGuess)) {
                for (var i = 0; i < selectedWord.length; i++) {
                    //replace the correct blank with the letter guessed
                    if (userGuess === selectedWord.charAt(i)) {
                        displayedWord = setCharAt(displayedWord, i, userGuess);
                        wordDiv.textContent = displayedWord;
                    }
                }
            }
            //update display of guessed letters & guesses remaining no matter if it's in the word or not
            guessesRemaining--;
            guessedLetters.push(userGuess);
            console.log(guessedLetters);
        }
        else {
            alert("You've guessed that already!");
        }
    }
    else {
        alert("Not a valid guess!");
    }
    //check for win/loss conditions & update
    if (displayedWord === selectedWord) {
        wins++;
        alert("You're a winner! You've won " + wins + " games!");
        newRound();
    }
    else if (guessesRemaining === 0) {
        losses++;
        alert("You lost, better luck next time! You have " + losses + " losses.");
        newRound();
    }
    displayStats();
}