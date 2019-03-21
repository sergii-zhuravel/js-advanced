//1 Как получить доступ к стилям последнего элемента тега body?
var lastElem = document.body.lastElementChild;
window.getComputedStyle(lastElem);

//2 Как проверить что в body вообще есть элементы?
document.body.hasChildNodes(); 
