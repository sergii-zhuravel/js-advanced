function styleForLastElement() {
    var lastElement = document.body.lastElementChild.style;
    return lastElement;
}
console.log(styleForLastElement());

function elementsInBody() {
    var elementsCount = document.body.childElementCount;
    return 'Количество элементов в body: ' + elementsCount;
}
console.log(elementsInBody());