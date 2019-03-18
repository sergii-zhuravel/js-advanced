var body = document.body;
var button = document.createElement('button');
var input = document.createElement('input');
var submit = document.createElement('input');

function searchCookie() {
    var cookie = document.cookie;
    var massKey = cookie.split(';');
    for (var i = 0; i < massKey.length; i++) {
        var key = massKey[i].split('=');
        if (key[0].trim() == 'loginName') {
            console.log('Добро пожаловать на наш сайт ' + key[1]);
            button.textContent = 'Log out';
            button.onclick = function () {
                var date = new Date(0);
                document.cookie = massKey[i] + ';expires=' + date.toUTCString();
                document.cookie = 'loginName;expires=' + date.toUTCString();
                location.reload();
            }
            body.appendChild(button);
            return;
        }
    }
    return createCookie();
}

function createCookie() {
    input.placeholder = 'Введите имя';
    submit.type = 'submit';
    submit.value = 'Добавить';
    submit.onclick = function () {
        document.cookie = input.value
        return searchCookie();
    }
    body.appendChild(input);
    body.appendChild(submit);
}
searchCookie();