var userNum = Number(prompt("Угадайте число от 1 до 10"));
var hiddenNumber = getRandomNumber();

checkNumbers(hiddenNumber, userNum);

function getRandomNumber() {
  return Math.floor(Math.random() * 11) + 1;
}

function checkNumbers(randomNumber, userNumber) {
  if (randomNumber === userNumber) {
    alert("Угадал!");
  } else {
    alert("Повезет в следующий раз! Загаданным число было " + randomNumber);
  }
}
