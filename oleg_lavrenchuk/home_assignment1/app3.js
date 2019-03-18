// не учтены пробелы
function palindrome(arg) {
  var word = arg;
  var modificationWord = word.split("").reverse().join("");
  if (word === modificationWord) {
    console.log(arg + " - палиндром!");
  } else {
    console.log(arg + " - не палиндром");
  }
}
palindrome("топот");
palindrome("nurses run");
 