var wordBank =["dragon", "princess", "knight", "castle", "sword", "lance", "tournament", "wizard", "magic", "monster"];
var selectedWord = wordBank[[Math.floor(Math.random() * wordBank.length)]]
console.log(selectedWord);

//need to keep track of and display letters guessed, number of guesses remaining, number of wins
//compare guessed letter to letters in word & display matches in correct spot
///display a series of _ to mark number of letters (underlines? or borders? way to make it a 'reveal' of letters vid hide/show?)
//remove used words from bank?
//use modals instead of alerts?