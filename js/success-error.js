function success(theCards) {
  theCards.forEach(function (element) {
    element.classList.add("correct");
  });

  document.querySelector("#sound-success").cloneNode().play();
}

function error(theCards) {
  theCards.forEach(function (element) {
    element.classList.add("error");
  });
  document.querySelector("#sound-error").cloneNode().play();

  setTimeout(() => {
    theCards.forEach(function (element) {
      element.classList.remove("discovered");
      element.classList.remove("error");
    });
  }, 1600);
}
