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
