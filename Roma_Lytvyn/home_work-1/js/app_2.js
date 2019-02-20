
var calculateBtn = document.getElementById('calculate');

calculateBtn.addEventListener('click', function(e) {
    e.preventDefault();

    var printResult = document.getElementById('result');
    var firstNumber = document.getElementById('first_number').value;
    var secondNumber = document.getElementById('second_number').value;
    var operator = document.getElementById('operator').value;
    var result;

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (operator) {

        case '+':
            result = firstNumber + secondNumber;
            break;

        case '-':
            result = firstNumber - secondNumber;
            break;

        case '*':
            result = firstNumber * secondNumber;
            break;

        case '/':
            result = firstNumber / secondNumber;
            break;
    }

    printResult.innerHTML = result;

});