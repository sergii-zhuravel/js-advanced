/*     Как получить доступ к стилям последнего элемента тега body?
    Как проверить что в body вообще есть элементы?
    (написать код) */
    console.log(document.body.lastChild);

    if(document.body.childNodes.length) {
        console.log(document.body.childNodes.length);
    } else {
        console.log('nothing');
    }

