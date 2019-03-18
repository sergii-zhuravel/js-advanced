// правильно

//document.body.lastElementChild.lastElementChild.innerText = navigator.userAgent - для консолі
var text = document.body.firstElementChild.lastElementChild;
text.textContent = navigator.userAgent;
//для завдання 2
var styles = document.body.lastElementChild.style;
//
//для того щоб узнати к-сть елементів у body
var buddy = document.body.children;