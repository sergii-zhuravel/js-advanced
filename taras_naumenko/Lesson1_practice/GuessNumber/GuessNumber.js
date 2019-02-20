var rendomFloat = Math.random()*10;
var generateFixed = rendomFloat.toFixed(0); // or maybe Math.round(rendomFloat) will be better?

var userNumber = prompt ('Enter number from 1 to 10');

if (userNumber == generateFixed) {
alert ("Угадал");
}
else alert ("Повезет в следующий раз " + generateFixed);

