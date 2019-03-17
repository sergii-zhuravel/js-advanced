function guessTheNumber() {
  var luckyNum = Math.round(Math.random() * (10 - 1) + 1);
  var playerNum = +prompt("Угадайте число от 1 до 10");
  if (luckyNum === playerNum) {
    alert("Угадал");
  } else {
    alert("Повезет в следующий раз!Загаданное число: " + luckyNum);
  }
}
guessTheNumber();

