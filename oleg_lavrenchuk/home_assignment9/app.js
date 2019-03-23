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
    var fullName = document.createElement('span');
    var descript = document.createElement('span');
    var link = document.createElement('a');

    image.setAttribute('src', obj.owner['avatar_url']);
    image.setAttribute('width', '100px');
    image.setAttribute('height', '100px');
    fullName.innerHTML = '<br><b>Имя репозитория:</b> ' + obj.full_name + '<br>';
    descript.innerHTML = '<b>Описание:</b> ' + obj.description + '<br>'
    link.href = obj.html_url;
    link.innerHTML = obj.html_url + '<br><hr>';

    div.appendChild(image);
    div.appendChild(fullName);
    div.appendChild(descript);
    div.appendChild(link);
}
