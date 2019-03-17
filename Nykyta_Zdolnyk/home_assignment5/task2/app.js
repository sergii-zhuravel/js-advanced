// Как получить доступ к стилям последнего элемента тега body?
var body = document.body;
styles = getComputedStyle(body.lastElementChild);
console.log(styles);
console.log(styles.border);

// Как проверить что в body вообще есть элементы?
if (body.lastElementChild.previousElementSibling) {
    console.log("Есть элементы");
} else {
    console.log("Нету элементов");
}