const MIN_VALUE = 0;
const MAX_VALUE = 10;
let name = prompt("Назови себя:");
let number = random(MAX_VALUE);
let guessCount = 1;

while (name == "") {
  name = prompt("Назови себя:");
}

function random(max) {
  return Math.round(Math.random() * max);
}

alert(
  name +
    ", это будет увлекательная игра. Тебе нужно будет угадать число от " +
    MIN_VALUE +
    " до " +
    MAX_VALUE +
    "."
);

let guess = prompt("Угадай число");

while (guess != number) {
  if (guess > number) {
    guess = prompt("Многовато, попробуй ещё");
    guessCount++;
  } else if (guess < number) {
    guess = prompt("Маловато, попробуй ещё");
    guessCount++;
  } else if (guess.typeof != Number) {
    guess = prompt("Я же просил, число!");
    guessCount++;
  }
}
alert(
  "Красавчик! Угадал с " + guessCount + " попыток. Это было число " + number
);
