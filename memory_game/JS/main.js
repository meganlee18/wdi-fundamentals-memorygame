/*

console.log("User flipped " + cardOne);
console.log("User flipped " + cardFour);
*/


/*

Use console.log() to display the card that the user flipped

The message that is displayed in the console should say "User flipped king".
After saving the changes you made to main.js, open the index.html file in Sublime Text, 
right click, and open the project in Chrome. Then navigate to the console and check to 
make sure that this message is displayed. If not, double-check to make sure that you've 
saved any changes to your main.js file.
Next we'll add logic to check to see if two cards have been played, because in our final game 
we will not want to check for a match until the user has selected two cards.

Write an if statement that checks to see if the length of the cardsInPlay array is 2.
For the condition, you can use the length property to find out how many items are in the 
cardsInPlay array and then use the === operator to see if the length is equal to 2.

Now we'll want to add logic that checks for equality between the two cards in the cardsInPlay 
array.
Inside of the if statement you created in the last step, create an if...else statement that checks 
r equality between the two cards in the cardsInPlay array.
For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal
 to the second card in the cardsInPlay array.
HINT: You'll want to use the === operator here.

If values are equal, execute an alert with the message "You found a match!"
alert("You found a match!");
If values are not equal, execute an alert with the message "Sorry, try again."

After saving your main.js file, open the index.html file in Sublime Text, right click, and open the
 project in Chrome. The alert "Sorry, try again." should pop up.

Test out storing different cards in the cardOne and cardTwo variables to make sure that everything 
is up and running!

*/

var card = ["queen", "queen", "king", "king"]
var cardsInPlay = []

var cardOne = card[0]
cardsInPlay.push (cardOne);
var cardTwo = card[2]
cardsInPlay.push (cardTwo);


console.log ("User flipped " + cardOne)
console.log ("User flipped " + cardTwo)

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!")
} else {
	alert("Sorry,try again.")
}



