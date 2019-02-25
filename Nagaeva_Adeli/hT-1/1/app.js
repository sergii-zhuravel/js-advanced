function randomNum() {
  var ran = Math.floor(Math.random());
  var num = prompt("Введите число от 1 до 10");

  if (num == ran) alert("Вы угадали!");
  else alert("Попробуйте еще.");
}
randomNum();
