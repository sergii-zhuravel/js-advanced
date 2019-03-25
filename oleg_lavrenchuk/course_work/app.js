var inp = document.querySelector('.input_todo')
var button = document.querySelector('.input_button');
var firstDiv = document.querySelector('.add_todo')
button.onclick = function() {
    if(inp.value.trim().length === 0) {
        console.log('пустая строка')
    }
    inp.value = ''

}