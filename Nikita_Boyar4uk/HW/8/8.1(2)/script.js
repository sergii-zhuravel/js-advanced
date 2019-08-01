// ------------------------
// Задача 8.1
// ------------------------
// Написать простую реализацию авторизацию с использованием document.cookie
// Например авторизационную куки можно назвать loginName

// При первом посещении страницьі если куки loginName еще нет, то показьіваем поле ввода (input) c сообщением - Ведите имя

// Если куки loginName уже существует и в нем есть значение - показьіваем приветствие
// -- Добро пожаловать на наш сайт (значение из loginName) --
// и показьіваем кнопку - Log out, при нажатии на которую нужно:
// 1. Удалить куки loginName (учили на занятии как и написали функцию)
// 2. Перезагрузить страницу  (js код - location.reload(); )

// ------------------------
// Задача 8.2
// ------------------------
// Реализовать 8.1 с помощью localStorage

let input = document.querySelector("#input");
let submit = document.querySelector("#submit");

// ================================================With Cookies===================================================================================

// submit.onclick = function() {
//   let value = input.value;
//   console.log(value);
//   setCookie("userLogin", value);
//   document.write(value + " " + "Добро пожаловать на сайт!");
// };

// function setCookie(name, value, options) {
//   options = options || {};

//   var expires = options.expires;

//   if (typeof expires == "number" && expires) {
//     var d = new Date();
//     d.setTime(d.getTime() + expires * 1000);
//     expires = options.expires = d;
//   }
//   if (expires && expires.toUTCString) {
//     options.expires = expires.toUTCString();
//   }

//   value = encodeURIComponent(value);

//   var updatedCookie = name + "=" + value;

//   for (var propName in options) {
//     updatedCookie += "; " + propName;
//     var propValue = options[propName];
//     if (propValue !== true) {
//       updatedCookie += "=" + propValue;
//     }
//   }

//   document.cookie = updatedCookie;
// }

// function getCookie(name) {
//   var matches = document.cookie.match(
//     new RegExp(
//       "(?:^|; )" +
//         name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
//         "=([^;]*)"
//     )
//   );
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }

// window.onload = function() {
//   let userLogin = getCookie("userLogin");
//   if (!userLogin) {
//     document.body.appendChild(input);
//   } else {
//     document.write(userLogin + " " + "Добро пожаловать на сайт!");
//   }
// };

// ================================================With LocalStorage===================================================================================

window.onload = function() {
  let userLogin = localStorage.getItem("userLogin");
  if (!userLogin) {
    document.body.appendChild(input);
  } else {
    document.write(userLogin + " " + "Добро пожаловать на сайт!");
  }
};

submit.onclick = function() {
  let value = input.value;
  console.log(value);
  localStorage.setItem("userLogin", value);
  document.write(value + " " + "Добро пожаловать на сайт!");
};
