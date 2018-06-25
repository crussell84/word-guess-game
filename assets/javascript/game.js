var wordBank =["dragon", "princess", "knight", "castle", "sword", "lance", "tournament", "wizard", "magic", "monster"];
var selectedWord = wordBank[[Math.floor(Math.random() * wordBank.length)]]
console.log(selectedWord);
var guessesRemaining = 12;

//need to keep track of and display letters guessed, number of guesses remaining, number of wins
//compare guessed letter to letters in word & display matches in correct spot
///display a series of _ to mark number of letters (underlines? or borders? way to make it a 'reveal' of letters vid hide/show?)
//remove used words from bank?
//use modals instead of alerts?


document.onkeyup = function (event){
 var userGuess = event.key;

 userGuess = userGuess.toLowerCase();
 //add logic to check if keypressed is letter
 //add logic to check if letter already guessed
 //add logic for when guessesRemaining hits 0
if (selectedWord.includes(userGuess)) {
    //update display of selected word & guessed letters
    console.log(userGuess);
    guessesRemaining--;
}
else {
    //update display of guessed letters & guesses remaining
    guessesRemaining--;
}


}