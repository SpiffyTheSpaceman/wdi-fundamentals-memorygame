console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    };
};

function flipCard() {
  var cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);

  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);


  if (cardsInPlay.length === 2) {
    checkForMatch();
  };
};

function createBoard() {
  var gameBoard = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    gameBoard.appendChild(cardElement);
  };
};

function createResetButton() {
  var resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", resetBoard);
};

function resetBoard() {
  var cardElements = document.querySelectorAll("#game-board img");
  cardsInPlay = [];
  for (var i = 0; i < cards.length; i++) {
    cardElements[i].setAttribute("src", "images/back.png");
  };
};

createBoard();
createResetButton();
