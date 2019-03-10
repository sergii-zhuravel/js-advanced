var buttons = document.getElementsByClassName('btn-style');
for (var i in buttons) {
    buttons[i].style = 'background: green';
}

var elem = document.getElementById('background');
console.log(elem);  

var delButton = document.getElementById('delete');
console.log(delButton);

var allButtons = document.getElementsByTagName('button');
console.log(allButtons);