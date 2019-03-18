var body = document.body;
var button = document.createElement('button');
var login = document.createElement('input');
var val = document.createElement('input');
var submit = document.createElement('input');

function searchStorage() {
    var localStorage = window.localStorage;
    var storageObj = JSON.parse(JSON.stringify(localStorage));
    for (var key in storageObj) {
        if (key === 'loginName') {
            console.log('Добро пожаловать на наш сайт ' + storageObj[key]);
            button.textContent = 'Log out';
            button.onclick = function () {
                localStorage.removeItem('loginName');
                location.reload();
            }
            body.appendChild(button);
            return;
        }
    }
    return createStorage();
}

function createStorage() {
    login.placeholder = 'Введите логин';
    val.placeholder = 'Введите значение';
    submit.type = 'submit';
    submit.onclick = function () {
        window.localStorage.setItem(login.value, val.value);
        return searchStorage();
    }
    body.appendChild(login);
    body.appendChild(val);
    body.appendChild(submit);
}
searchStorage();