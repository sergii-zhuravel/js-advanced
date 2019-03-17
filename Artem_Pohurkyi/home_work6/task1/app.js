// 1. Найдет todo-input и получит значение введенное в поле
var input = document.getElementById('todo-input')
console.log(input.value)

// 2. Найдет элемент li
var li = document.body.firstElementChild.lastElementChild.firstElementChild

// 3. Создаст deep клон элемента li
var liClone = li.cloneNode(true)

// 4. Поменять только текст у клона элемента li
liClone.textContent = 'New first ToDo'