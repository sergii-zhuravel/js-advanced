// 1. Найдет todo-input и получит значение введенное в поле
document.getElementById("todo-input").value

// 2. Найдет элемент li
var protoLi = document.getElementsByClassName('todo-item')

//3. Создаст deep клон элемента li
var cloneLi = protoLi.cloneNode(true);

//4. Поменять только текст у клона элемента li
cloneLi.innerHTML = 'text';