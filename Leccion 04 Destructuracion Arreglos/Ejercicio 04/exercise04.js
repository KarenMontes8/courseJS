const deck = [2, 6, 10];

function shiftThreeCardsAround(deck) {
  //Tu codigo aqui  👈;
  const [first, second, third] = deck;
  return [second, third, first];
}

console.log(shiftThreeCardsAround(deck));
