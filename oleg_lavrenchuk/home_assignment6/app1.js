function getValue() {
    var value  = document.getElementById('todo-input').value;
    return 'Value: ' + value;
}
console.log(getValue());
function cloneElement() {
    var ol = document.getElementById('todo-list');
    var clone = ol.firstChild.cloneNode(true);
    clone.firstChild.textContent = 'Oleg';
    clone.appendChild(ol);
}
cloneElement();