// ------------------------
// Задача 5.1
// ------------------------

document.body.children[0].children[1].innerHTML =
  navigator.appCodeName +
  "<br> App name: " +
  navigator.appName +
  "<br>Browser version: " +
  navigator.appVersion;

// ------------------------
// Задача 5.2
// ------------------------
// Как получить доступ к стилям последнего элемента тега body?
document.body.lastElementChild; //!!! а где стили?)

// Как проверить что в body вообще есть элементы?

if (document.body.lastElementChild) {
  console.log("Body has elements");
} else {
  console.log("There are no elements in body");
}

//!!! Можно взять document.body.children (или document.body.childNodes для узлов) и проверить что массив длинной больше 0
