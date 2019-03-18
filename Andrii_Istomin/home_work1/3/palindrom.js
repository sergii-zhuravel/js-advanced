// рабоает правильно не вовсех случаях
function isPalindrom(str) {
  var originalString = str;
  var splittedString = str.split("");
  var reverseArray = splittedString.reverse();
  var joinedArray = reverseArray.join("");

  originalString == joinedArray
    ? alert("Слово - палиндром")
    : alert("Не палиндром");
  console.log(splittedString);
  console.log(reverseArray);
  console.log(joinedArray);
}
isPalindrom("топот");
// isPalindrom("nurses run") не правильно, нужно убрать пробелы