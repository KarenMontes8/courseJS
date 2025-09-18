const deck = [10, 7];

function swapTwoCards(deck) {
  //Tu codigo aqui  👈;
  [deck[0], deck[1]] = [deck[1], deck[0]];
  return deck;
}

console.log(swapTwoCards(deck));
// => [7, 10]
