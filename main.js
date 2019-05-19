// TODO: different way for generating the deck;
// TODO: New Card and Current Card=picture;

let deck = [];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const suits = ["spade", "club", "diamond", "heart"];
const drawnCards = [];
const btnStart = document.getElementById("start-game");
const btnLow = document.getElementById("low");
const btnHigh = document.getElementById("high");
const currentScoreText = document.getElementById("current-score-text");
const currentCardText = document.getElementById("current-card-text");
const newCardText = document.getElementById("new-card-text");
const resultText = document.getElementById("result-text");
let prevCard;
let score = 0;

btnStart.addEventListener("click", newGame);
btnLow.addEventListener("click", low);
btnHigh.addEventListener("click", high);
btnLow.hidden = true;
btnHigh.hidden = true;

function newGame() {
  populateDeck();
  prevCard = getCardFromDeck();
  score = 0;
  currentScoreText.innerText = score;
  currentCardText.innerText = prevCard.rank + " " + prevCard.suit;
  newCardText.innerText = "";
  btnLow.hidden = false;
  btnHigh.hidden = false;
  resultText.innerHTML = "";

}

function populateDeck() {
  deck = [];
  ranks.forEach(rank => {
    suits.forEach(suit => {
      deck.push({
        rank: rank,
        suit: suit,
        image: rank + suit + ".png"
      });
    });
  });
}

function low() {
  currentCardText.innerText = prevCard.rank + " " + prevCard.suit;
  const newCard = getCardFromDeck();
  newCardText.innerText = newCard.rank + " " + newCard.suit;

  if (newCard.rank < prevCard.rank) {
    score++;
    currentScoreText.innerText = score;
  } else {
    loseGame();
  }

  prevCard = newCard;
 
  checkForEndGame();
}

function high() {
  currentCardText.innerText = prevCard.rank + " " + prevCard.suit;
  const newCard = getCardFromDeck();
  newCardText.innerText = newCard.rank + " " + newCard.suit;

  if (newCard.rank > prevCard.rank) {
    score++;
    currentScoreText.innerText = score;
  } else {
    loseGame();
  }

  prevCard = newCard;

  checkForEndGame();
}

function checkForEndGame() {
  if (score >= 6) {
    btnLow.hidden = true;
    btnHigh.hidden = true;
    resultText.innerHTML = "You win";
  }
}

function getCardFromDeck() {
  let card;

  if (deck.length > 0) {
    const index = Math.floor(Math.random() * deck.length);
    card = deck[index];
    deck.splice(index, 1);
    drawnCards.push(card);
  }

  return card;
}

function loseGame() {
  resultText.innerHTML = "You lose";
  score = 0;
  currentScoreText.innerText = score;
  
  btnLow.hidden = true;
  btnHigh.hidden = true;
}
