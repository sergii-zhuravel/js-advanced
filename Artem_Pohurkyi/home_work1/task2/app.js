// работает корректно, но насколько я понимаю условие - ввод должен быть реализован через <input> в html
var firstNum = prompt("Введите первое число:");
var secondNum = prompt("Введите второе число:");
var operation = prompt("Выберете операцию( + , - , * , / ):")

// лучше использовать while
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
// лучше использовать объявление var result один раз а не несколько
// желательно делать отступы, чтобы код восприниался легче
/*
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

*/
document.write("Введённые числа: " + firstNum + ", " + secondNum + "</br>");
document.write("Выбранная операция: " + operation + "</br>");
document.write("Результат: " + result);