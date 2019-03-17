var firstNum = prompt("Введите первое число:");
var secondNum = prompt("Введите второе число:");
var operation = prompt("Выберете операцию( + , - , * , / ):")

for(var i = 1; i > 0; i++){
    if(operation != '+' && operation != '-' && operation != '*' && operation != '/' ){
        var operation = prompt("Неправильный ввод! Выберете операцию( + , - , * , / ):")
    }else{
        break;
    }
}

switch (operation){
    case "+":
    var result = + firstNum + + secondNum;
    break;
    case "-":
    var result = firstNum - secondNum;
    break;
    case  "*":
    var result = firstNum * secondNum;
    break;
    case "/":
    var result = firstNum / secondNum;
    break;
    default:
    alert("Opps...");
}

document.write("Введённые числа: " + firstNum + ", " + secondNum + "</br>");
document.write("Выбранная операция: " + operation + "</br>");
document.write("Результат: " + result);