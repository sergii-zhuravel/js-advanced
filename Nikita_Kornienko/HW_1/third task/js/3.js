// Takes in a phrase
function isPalindrome (phrase) {
    let exp = /[\W]/g; // uses a regular expression to elliminate all non-alfanumeric characters
    let usedPhrase = phrase.replace(exp, '').toLowerCase(); // method .replace deletes all characters that are not alfanumeric
    let usedPhraseReversed = usedPhrase.split('').reverse().join(''); // turns a phrase into an array, spins it arround and joins it as a backwards phrase
    if(usedPhrase == usedPhraseReversed) { // determines if two phrases are the same 
      return true;
    } else {
      return false;
    }
    
  }
  
  function checkIfPalindrome (phrase) { // shows result in a console
    if(isPalindrome(phrase)) {
      console.log('The phrase is a palindrome!');
    } else {
      console.log('The phrase is not a palindrome!');
    }
  }
    
checkIfPalindrome('Nurses Run');
checkIfPalindrome('kkk');
checkIfPalindrome('A Roza Upala na lapu Azora');
checkIfPalindrome('Race Car');
checkIfPalindrome('Palindrome');