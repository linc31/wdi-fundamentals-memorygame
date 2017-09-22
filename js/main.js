// array of cards
var cards = [
{ rank: "queen", suit: "hearts", cardImg: "images/queen-of-hearts.png"},
{ rank: "queen", suit: "diamonds", cardImg: "images/queen-of-diamonds.png"},
{ rank: "king", suit: "hearts", cardImg: "images/king-of-hearts.png"},
{ rank: "king", suit: "diamonds", cardImg: "images/king-of-diamonds.png"}
];
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
};

// flips a card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImg);
 console.log("User flipped " + cards[cardId].rank);
 console.log(cards[cardId].cardImg);
 console.log(cards[cardId].suit);
 cardsInPlay.push(cards[cardId].rank);
 
 if(cardsInPlay.length === 2){
 	checkForMatch();
 }
}

//create gamebboard
var createBoard = function() {
	for (i = 0; i < cards.length; i++){
		var newCardImg = document.createElement('img');
		newCardImg.setAttribute('src', 'images/back.png');
		newCardImg.setAttribute('data-id', i);
		newCardImg.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(newCardImg);
	}
}

createBoard();