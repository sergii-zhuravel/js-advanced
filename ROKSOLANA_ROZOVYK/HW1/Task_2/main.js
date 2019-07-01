let result = 0;
let number_a;
let number_b;

function setNumbers()
{
    number_a = +document.getElementById("firstNumber").value;
    number_b = +document.getElementById("secondNumber").value;
}

function Add()
{
    result = number_a + number_b;
    if(number_a != undefined || number_b != undefined)
       document.getElementById("result").innerHTML = result;
    else alert("Error inputting numbers");
}

function Subtr()
{
    result = number_a - number_b;
    if(number_a != undefined || number_b != undefined)
       document.getElementById("result").innerHTML = result;
    else alert("Error inputting numbers");
}

function Mult()
{
    result = number_a * number_b;
    if(number_a != undefined || number_b != undefined)
       document.getElementById("result").innerHTML = result;
    else alert("Error inputting numbers");
}

function Div()
{
    result = number_a / number_b;
    if(number_a != undefined || number_b != undefined)
       document.getElementById("result").innerHTML = result;
    else alert("Error inputting numbers");
}