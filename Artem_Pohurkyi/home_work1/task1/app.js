// работает не корректно
var randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
var num = parseInt(prompt("Угадайте число от 1 до 10:"));
checkNumber();

showResults();








function checkNumber(){
// для такой кострукции лучше использовать цикл while, поскольку счётчик i не нужен
// при первом вводе числа num имеет значение undefined изза того что num переобъявлена ниже в этой же ф-ции
// надо либо убрать var в строке 23 либо (еще лучше) использовать let в строке 3
    for(var i = 1; i > 0; i++){
        if (num >= 1 && num <= 10) {
        break;
        }else{
        var num = parseInt(prompt("Не правильный ввод. Введите число от 1 до 10:"));
        }
    }
}


function showResults(){
    if (num == randomNum){ // сейчас рекомендуется вместо == использовать ===
        alert('Вы угадали! Загаданое число:' + randomNum);
    }else{
        alert('Вы не угадали! Загаданое число:' + randomNum);
    }

}