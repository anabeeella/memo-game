function discover() {
  let cardsDiscovered;
  let pendingCards;
  let totalDiscovered = document.querySelectorAll(".discovered:not(.correct)");

  if (totalDiscovered.length > 1) {
    /*el return hace que salga de la función*/
    return;
  }

  this.classList.add("discovered");

  document.querySelector("#sound-card").play();

  cardsDiscovered = document.querySelectorAll(".discovered:not(.correct)");
  if (cardsDiscovered.length < 2) {
    return;
  }

  compare(cardsDiscovered);
  refreshMovs();
  pendingCards = document.querySelectorAll(".card:not(.correct)");
  if (pendingCards.length === 0) {
    setTimeout(finishGame, 600);
  }
}

function compare(cardsToCompare) {
  if (cardsToCompare[0].dataset.value === cardsToCompare[1].dataset.value) {
    success(cardsToCompare);
  } else {
    error(cardsToCompare);
  }
}
