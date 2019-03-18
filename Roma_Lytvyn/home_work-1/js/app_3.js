// не учтены пробелы
var string = prompt('Enter your palindrome: ', '');

function checkForPalindrome(string) {
    
    var strReverce = string.split('').reverse().join('');
    var result = '';

    if (strReverce == string) {
        result = 'It\'s a palindrome'; 
    } else {
        result = 'It\'s not a palindrome';
    }

    console.log(result);
}

checkForPalindrome(string);