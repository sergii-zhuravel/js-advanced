// Задача 7.1
// ------------------------
// Есть JavaScript код
// <script>
//   document.addEventListener("DOMContentLoaded", myFunction());
//   function myFunction() {
//     console.log('Hello from My Function');
//   }
//   console.log('Hello from main JS code');
// </script>

// Вопрос:
// 1. В каком порядке выведется текст?
// 2. Есть ли в коде ошибки? Если да, то какие?

function myFunction() {
  console.log("Hello from My Function");
}

document.addEventListener("DOMContentLoaded", myFunction);

console.log("Hello from main JS code");

// 1. Первым выведется текст "Hello from main JS code", т.к. он сразу попадет в стек вызова. Вторым(после загрузки ДОМ), выведется текст функции 'myFunction'.

// 2. Ошибка заключалась в том, что функция 'myFunction' бала вызвана параметром внутри аргументов 'addEventListener'. Она отрабатывала не дожидаясь наступления события
