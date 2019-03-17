function getValue() {
    var value  = document.getElementById('todo-input').value;
    return 'Value: ' + value;
}
console.log(getValue());

function cloneElement() {
    var ol = document.getElementById('todo-list');
    var li = document.querySelector('.todo-item');
    var cloneLi = li.cloneNode(true);
    cloneLi.firstChild.textContent = 'Two todo ';
    ol.appendChild(cloneLi);
}
cloneElement();