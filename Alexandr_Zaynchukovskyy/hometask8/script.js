//ex1
var startElem;
var setNameBtn;
var delNameBtn;
var userNameInp;
var hiLbl;

document.addEventListener("DOMContentLoaded", myFunction);

function myFunction() {
    startElem = document.getElementById('GoOn');
    setNameBtn = document.createElement('button');
    delNameBtn = document.createElement('button');
    userNameInp = document.createElement('input');
    hiLbl = document.createElement('label');

    var userName = getName('loginName');
    if (userName === null) {
        showStartForm();
    } else {
        showHiForm();
    }
}

function showStartForm() {
    setNameBtn.type = 'submit';
    setNameBtn.value = 'Save';
    setNameBtn.innerText = 'Save';

    setNameBtn.onclick = function () {
        setName('loginName', userNameInp.value, 1);
        //clean up
        startElem.removeChild(userNameInp);
        startElem.removeChild(setNameBtn);
        showHiForm();
    }
    userNameInp.placeholder = 'Введите имя';
    startElem.appendChild(userNameInp);
    startElem.appendChild(setNameBtn);
}

function showHiForm() {
    userName = getName('loginName');
    hiLbl.innerText = 'Hi ' + userName;
    delNameBtn.type = 'submit';
    delNameBtn.value = 'Log out';
    delNameBtn.innerText = 'Log out';


    delNameBtn.onclick = function () {
        deleteName('loginName');
        location.reload();
        //clean up
        startElem.removeChild(hiLbl);
        startElem.removeChild(delNameBtn);
        showStartForm();
    }
    startElem.appendChild(hiLbl);
    startElem.appendChild(delNameBtn);
}


//+++ Служебные
function getName(key) {
    var cookie = document.cookie;
    if (cookie === '') {
        return null
    };

    var cs = cookie.split('; ');
    for (var i = 0; i <= cs.length; i++) {
        var cookieKeyValue = cs[i].split('=');
        if (cookieKeyValue[0] === key) return cookieKeyValue[1];
    }
    return null;
}

function setName(key, value, expires) {
    var date = new Date;
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    document.cookie = key + '=' + value + ';path=/;expires=' + date.toUTCString();
}


function deleteName(key) {
    setName(key, '', -1);
}

//--- Служебные
