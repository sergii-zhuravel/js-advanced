var min = 1;
var max = 10;

var userNumber = prompt('Enter number from ' + min + ' to ' + max + ' : ', 1);
var mathRandom;

function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

if (userNumber >= 1 && userNumber <= 10) {
    mathRandom = randomInteger(min, max);

    if (userNumber == mathRandom) {
        alert('That\'s right!');
    } else {
        alert('You will luck next time. Right number: ' + mathRandom);
    }

} else {
    document.location.reload();
}
