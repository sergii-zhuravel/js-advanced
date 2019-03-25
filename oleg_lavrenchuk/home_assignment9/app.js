var button = document.getElementById('button_search');
var input = document.getElementById('data');
var div = document.getElementById('inform');
var obj;

async function request(url) {
    var response = await fetch(url);
    obj = await response.json();
}

window.onload = function () {
    button.onclick = async function () {
        div.innerHTML = '';
        var url = 'https://api.github.com/search/repositories?q=' + input.value;
        await request(url);
        var massObj = obj.items;
        for (var i = 0; i < 10; i++) {
            createElements(massObj[i]);
        }
    }
}

function createElements(obj) {
    var image = document.createElement('img');
    var span = document.createElement('span');
    var fullName = document.createElement('a');
    var descript = document.createElement('span');

    image.setAttribute('src', obj.owner['avatar_url']);
    image.setAttribute('width', '100px');
    image.setAttribute('height', '100px');
    fullName.textContent = obj.full_name;
    fullName.href = obj.html_url;
    span.innerHTML = '<br><b>Имя репозитория</b>: ';
    descript.innerHTML = '<br><b>Описание:</b> ' + obj.description + '<hr>';

    div.appendChild(image);
    div.appendChild(span);
    span.appendChild(fullName);
    div.appendChild(descript);
}
