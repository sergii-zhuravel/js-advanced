// Задача 6.1
// ------------------------
// Дано:
// HTML страница в которой есть только такой код
// <div>
//     <input id="todo-input" value="Placeholder" /> <button id="button-add">Add</button>
//     <p>ToDo List:</p>
//     <ol id="todo-list">
//         <li class="todo-item">
//             First todo
//             <span class="delete-button" onclick="removeItem(event)" title="Delete current item">x</span>
//         </li>
//     </ol>
// </div>

// Написать JavaScript код, который:
// 1. Найдет todo-input и получит значение введенное в поле
// 2. Найдет элемент li
// 3. Создаст deep клон элемента li
// 4. Поменять только текст у клона элемента li

let toDo = document.querySelector("#todo-input");
console.log(toDo.value);
let li = document.querySelector("li");
let li2 = li.cloneNode(true);
li2.textContent = "second ToDo";
