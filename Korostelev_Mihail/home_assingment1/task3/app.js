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
