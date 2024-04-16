function refreshMovs() {
  movements++;
  let movsText = movements;

  if (movements > levels[currentLevel].movsMax) {
    gameOver(); // Llamar a gameOver() cuando se excede el límite de movimientos
    return;
  }

  if (movements < 10) {
    movsText = "0" + movements;
  }
  document.querySelector("#movs").innerText = movsText;
}

function maxCountdown() {
  let movsMaxText = levels[currentLevel].movsMax;
  if (movsMaxText < 10) {
    movsMaxText = "0" + movsMaxText;
  }
  document.querySelector("#total-movs").innerText = movsMaxText;
}
