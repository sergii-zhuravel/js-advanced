// Задача 5.1
// ------------------------
// Дано:
// HTML страница в которой есть только такой код
// <div>
//   <span>Browser name: </span><span>BROWSERNAME</span>
// </div>

// Написать JavaScript код, который выведет вместо BROWSERNAME - данные текущего браузера. Попробуйте подобрать одно из свойств
// объекта navigator. Проверьте свойство в разных браузерах.
// Для нахождения объекта куда нужно вставить контент - использовать изученные методы навигации по DOM элементам
// Для обновления контента тега span - использовать соответствующие свойсво элемента
document.lastElementChild.lastElementChild.firstElementChild.lastElementChild.innerText =
  navigator.userAgent;
