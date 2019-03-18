// работает правильно, но есть лишние переменные и естт переменные объявленные без ключевого слова var (или let или const)
function plus(operand1, operand2) {
  operand1 = document.getElementById("operand1").value;
  operand2 = document.getElementById("operand2").value;
  result = +operand1 + +operand2;
  operand2 = document.getElementById("result").innerHTML = result;
}
function minus(operand1, operand2) {
  operand1 = document.getElementById("operand1").value;
  operand2 = document.getElementById("operand2").value;
  result = +operand1 - +operand2;
  operand2 = document.getElementById("result").innerHTML = result;
}
function multiply(operand1, operand2) {
  operand1 = document.getElementById("operand1").value;
  operand2 = document.getElementById("operand2").value;
  result = +operand1 * +operand2;
  operand2 = document.getElementById("result").innerHTML = result;
}
function divide(operand1, operand2) {
  operand1 = document.getElementById("operand1").value;
  operand2 = document.getElementById("operand2").value;
  result = +operand1 / +operand2;
  operand2 = document.getElementById("result").innerHTML = result;
}

// параметры operand1, operand2 не используются все 4 раза
// забыл var или let или const в объявлении переменных
// в каждой ф-ции в последней строке operand2 =  лишнее
