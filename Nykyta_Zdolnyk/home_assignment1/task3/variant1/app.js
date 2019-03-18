// работает правильно
var userStr = prompt("Введите слово или фразу!");

checkPalindrom(userStr);

function getReverseString(str) {
  var newStr = "";
  var str = str.split(" ").join("");

  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function checkPalindrom(str) {
  if (str.split(" ").join("") === getReverseString(str)) {
    alert("Введенное слово (фраза) является палиндромом!");
  } else {
    alert("Введенное слово (фраза) НЕ является палиндромом!");
  }
}
