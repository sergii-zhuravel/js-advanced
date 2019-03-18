// сделано хорошо (лаконично), но не учтены варианты с пробелами
var word = prompt("enter text");
var wordReverse = word
  .split("")
  .reverse()
  .join("");
if (wordReverse === word) {
  console.log("True");
} else {
  console.log("false");
}
