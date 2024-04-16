let cardItems = [
  ["🦄", "🌈"],
  ["🍭", "🎂"],
  ["🤡", "🪄"],
];

let currentLevel = 0;
let levels = [
  {
    cards: cardItems[0],
    movsMax: 3,
  },
  {
    cards: cardItems[0].concat(cardItems[1]),
    movsMax: 8,
  },
  {
    cards: cardItems[0].concat(cardItems[1], cardItems[2]),
    movsMax: 12,
  },
];

let movements = 0;
let countDown;
