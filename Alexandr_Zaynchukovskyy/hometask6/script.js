//ex1
function inputValue() {
    var elemInput = document.getElementById('todo-input');
    console.log(elemInput.value);
    var elemLi = document.querySelector('[class~=todo-item]');
    console.log(elemLi.innerText);
    var elemLiClone = elemLi.cloneNode(true);
    elemol = document.getElementById('todo-list');
    elemol.append(elemLiClone);
    elemLiClone.innerText = 'must changed';

}

window.onload = inputValue;

