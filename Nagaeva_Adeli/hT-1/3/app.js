function chekPalindrome() {
    var str = prompt("Введите слово или фразу для проверки на полиндром:")
    var str2 = str.split('').reverse().join('');
    if(str == str2)
		alert("Полиндром");
	else
		alert("Не полиндром");
}

chekPalindrome();