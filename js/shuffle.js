function shuffle(theCards) {
  let result;

  let cardsTotal = theCards.concat(theCards);

  result = cardsTotal.sort(function () {
    return 0.5 - Math.random();
  });
  return result;
}

function distributeCards(theCards) {
  let table = document.querySelector("#table");
  let distributedCards = shuffle(theCards);
  table.innerHTML = "";

  distributedCards.forEach((element) => {
    let card = document.createElement("div");
    table.appendChild(card);
    card.innerHTML = `<div class="card" data-value="${element}">
          <div class="card__content">${element}</div>
          </div>`;
  });
}
