function levelUp() {
  currentLevel++;
}

function updateLevel() {
  let textLevel = currentLevel + 1;
  if (textLevel < 10) {
    textLevel = "0" + textLevel;
  }
  document.querySelector("#level").innerText = textLevel;
}

function newLevel() {
  levelUp();
  updateLevel();
  initGame();
}
