var word = prompt('Введите слово:');
var wordForCheck = word.split("").reverse().join("");
if (word == wordForCheck){
    alert("Введённое слово - полиндром")
}else{
    alert("Введённое слово - не полиндром");
}

