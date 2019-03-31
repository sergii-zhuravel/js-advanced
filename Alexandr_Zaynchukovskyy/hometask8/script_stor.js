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
    return localStorage.getItem('loginName');

}

function setName(key, value, expires) {
    localStorage.setItem(key,value)
}


function deleteName(key) {
    localStorage.removeItem(key);
}

//--- Служебные
