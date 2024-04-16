function initGame() {
  movements = 0;
  distributeCards(levels[currentLevel].cards);

  maxCountdown();

  document.querySelector("#movs").innerText = "00";
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#nextLevel").classList.remove("visible");

  document.querySelectorAll(".card").forEach(function (e) {
    e.addEventListener("click", discover);
  });

  initCountdown();
}

function restart() {
  currentLevel = 0;
  updateLevel();
  initGame();
}

initGame();

document.querySelectorAll(".restart").forEach(function (element) {
  element.addEventListener("click", restart);
});

document.querySelector("#level-up").addEventListener("click", newLevel);
