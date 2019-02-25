var randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
var num = parseInt(prompt("Угадайте число от 1 до 10:"));

checkNumber();

showResults();








function checkNumber(){
    for(var i = 1; i > 0; i++){
        if (num >= 1 && num <= 10) {
        break;
        }else{
        var num = parseInt(prompt("Не правильный ввод. Введите число от 1 до 10:"));
        }
    }
}


function showResults(){
    if (num == randomNum){
        alert('Вы угадали! Загаданое число:' + randomNum);
    }else{
        alert('Вы не угадали! Загаданое число:' + randomNum);
    }

}