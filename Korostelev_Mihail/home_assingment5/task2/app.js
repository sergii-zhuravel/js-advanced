//Как получить доступ к стилям последнего элемента тега body?
var lastElementBody = document.body.lastElementChild;
var styleLastElementBody = getComputedStyle(lastElementBody);
console.log("Elements of style Body: " + styleLastElementBody.backgroundColor);
//Как проверить что в body вообще есть элементы?
var elemOfBody = document.body.children[0];
var childrenBody = document.body.children;
if (elemOfBody === undefined){
    console.log('There are no elements.')
}else{
    console.log("Body has elements: ");
    console.log(childrenBody);
}
