var userStr = prompt("Введите слово или фразу!");

checkPalindrom(userStr);

function checkPalindrom(str) {
  if (
    userStr.split(" ").join("") ===
    userStr
      .split(" ")
      .join("")
      .split("")
      .reverse()
      .join("")
  ) {
    alert("Введенное слово (фраза) является палиндромом!");
  } else {
    alert("Введенное слово (фраза) НЕ является палиндромом!");
  }
}
