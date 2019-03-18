// не соблюдено условие от 1 до 10
var rendomFloat = Math.random()*10;
var generateFixed = rendomFloat.toFixed(0); // or maybe Math.round(rendomFloat) will be better?
// 1. .toFixed() возвращает строку
// 2. может получиться "0", 
// лучше использовать Math.round или Math.floor или Math.ceil


var userNumber = prompt ('Enter number from 1 to 10');

if (userNumber == generateFixed) {
alert ("Угадал");
}
else alert ("Повезет в следующий раз " + generateFixed);

