var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


//check for matching card
var checkForMatch = function (){
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
} else {
	alert ("Sorry, try again!");
	}
}
}

// flips a card
var flipCard = function (){
	var cardId = [];
	cardsInPlay.push(cards[cardId]);
 checkForMatch();
 console.log("User flipped " + cards[cardId]);
}
flipCard(0);

var cardOne = [0];
cardsInPlay.push('cardOne');
console.log("User flipped Queen");

var cardTwo = [2];
cardsInPlay.push('cardTwo');
console.log("User flipped King");