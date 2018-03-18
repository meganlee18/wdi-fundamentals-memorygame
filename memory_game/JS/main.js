/*

console.log("User flipped " + cardOne);
console.log("User flipped " + cardFour);
*/


/*


Almost there! To add a little extra organization to our code, let's create a function to 
store the steps to check for a match.
Right below the cardsInPlay array and right above the flipCard function, create a function 
checkForMatch. This function will not have any parameters.
Move the following lines of code into the checkForMatch function.
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}

*/

var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
	} else {
	alert("Sorry,try again.")
}
}

var flipCard = function (cardsId) {
	cardsInPlay.push (cards[cardsId])
console.log("User flipped " + cards[cardsId])
checkForMatch();
}

flipCard(0);
flipCard(2);








