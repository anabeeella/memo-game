function finishGame() {
  if (currentLevel < levels.length - 1) {
    document.querySelector("#nextLevel").classList.add("visible");
    document.querySelector("#sound-level-up").play();
  } else {
    document.querySelector("#endGame").classList.add("visible");
    document.querySelector("#sound-congrats").play();
  }
  clearInterval(countDown);
}

function gameOver() {
  document.querySelector("#gameOver").classList.add("visible");
  document.querySelector("#sound-time-up").play();
  clearInterval(countDown);
}

function timeUp() {
  document.querySelector("#timeUp").classList.add("visible");
  document.querySelector("#sound-time-up").play();
}
