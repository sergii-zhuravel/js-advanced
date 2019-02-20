function isPalindrome(str) {
  str = str.replace(/\s+/g, '');
  return  str == str.split('').reverse().join('') ? true : false;
  }

  alert('[topot] is Palindrome: ' + isPalindrome('topot'));
  alert('[nurses run] is Palindrome: ' + isPalindrome('nurses run'));
 
