let cl = console.log;

let buildDeck = function () {
  let deck = [];
  for (let rank = 2; rank < 15; rank++) {
    deck.push(createCard("Hearts", rank));
    deck.push(createCard("Spades", rank));
    deck.push(createCard("Diamonds", rank));
    deck.push(createCard("Clubs", rank));
  }
  return deck;
};
let createCard = function (suit, rank) {
  let name = getRankName(rank);
  let color = getSuitColor(suit);

  let card = {
    rank: rank,
    suit: suit,
    color: color,
    name: name,
  };
  return card;
};
let getSuitColor = function (suit) {
  if (suit === "Clubs" || suit === "Spades") {
    return "black";
  } else {
    return "red";
  }
};
let getRankName = function (rank) {
  switch (rank) {
    case 11:
      return "Jack";
    case 12:
      return "Queen";
    case 13:
      return "King";
    case 14:
      return "Ace";
    default:
      return rank.toString();
  }
};
let dealCard = function () {
  let index = Math.floor(Math.random() * deck.length);
  let card = deck.splice(index, 1)[0];
  return card;
};
let dealHand = function () {
  return [dealCard(), dealCard(), dealCard(), dealCard(), dealCard()];
};

let deck = buildDeck();
console.table(deck);

let hand = dealHand();
console.table(hand);

let hand2 = dealHand();
console.table(hand2);

let hand3 = dealHand();
console.table(hand3);

let hand4 = dealHand();
console.table(hand4);

let getHighestCard = function (hand) {
  let highestCard = 0;

  for (let index = 0; index < hand.length; index++) {
    const card = hand[index];
    for (let a = 0; a < hand.length; a++) {
      const card2 = hand[a];
      if (card.rank > card2.rank) {
        if (card.rank > highestCard) {
          highestCard = card.rank;
        }
      }
    }
  }
  return highestCard;
};

let compare = function(hand, hand2) {
if (getHighestCard(hand) > getHighestCard(hand2)) {
  return hand
} else if (getHighestCard(hand) < getHighestCard(hand2)) {
  return hand2
} else {
  return "Tie"
}
};
compare(hand, hand2)

let declareWinner function() {
  
}