//Найдет todo-input и получит значение введенное в поле
var a = document.querySelector('#todo-input');
console.log(a);

//Для отримання будь-якого значення введеного вручну
var b = document.querySelector('#button-add');
b.onclick = function(){
    console.log(a.value);
}

//2. Найдет элемент li 3. Создаст deep клон элемента li 4. Поменять только текст у клона элемента li
var list = document.querySelector('#todo-list').firstElementChild;
console.log(list);
var clone = list.cloneNode(true);
clone.firstChild.nodeValue = 'Text has been changed'
console.log(clone);

//Додасть елемент списку у кінець ol
var add = document.querySelector('#todo-list');
add.appendChild(clone);

