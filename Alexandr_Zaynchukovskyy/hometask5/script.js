//ex1
function vendorName() {
    var elem = document.getElementsByTagName('div')[0].lastElementChild;
    elem.textContent = navigator.vendor;
}

window.onload = vendorName;

//ex2
    //Как получить доступ к стилям последнего элемента тега body?
    //  document.body.lastElementChild.style;
    //Как проверить что в body вообще есть элементы?
    //  document.body.childElementCount != 0