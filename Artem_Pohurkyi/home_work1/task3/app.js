// работает не всегда корректно, не учтен вариант с пробелами
var word = prompt('Введите слово:');
var wordForCheck = word.split("").reverse().join("");
if (word == wordForCheck){
    alert("Введённое слово - полиндром")
}else{
    alert("Введённое слово - не полиндром");
}

