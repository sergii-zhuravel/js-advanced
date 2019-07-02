let word = prompt("Check your word");

function checkPalindrom (str) {
    str = str.replace(/\s+/g, '');
    return str == str.split('').reverse().join('');
}

if(checkPalindrom(word))
   alert("The word is a palindrome");
else alert("The word is not a palindrome");