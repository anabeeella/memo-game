function initCountdown() {
  let seconds = 0;
  let minutes = 2;
  let secondsText;
  let minutesText;

  function refreshCountdown() {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      seconds = 0;
      minutes = 0;
      clearInterval(countDown);
      timeUp();
    }

    secondsText = seconds;
    minutesText = minutes;

    if (seconds < 10) {
      secondsText = "0" + seconds;
    }
    if (minutes < 10) {
      minutesText = "0" + minutes;
    }

    document.querySelector("#minutes").innerText = minutesText;
    document.querySelector("#seconds").innerText = secondsText;
  }
  /*Cuando el intervalo está dentro de una variable, puedo manipularla pasándola como argumento*/
  countDown = setInterval(refreshCountdown, 1000);
}
