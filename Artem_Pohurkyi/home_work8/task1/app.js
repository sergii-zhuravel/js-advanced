author();

function author(){
    checkName();
}

function checkName(){
    getCookie('logIn');
    if (getCookie('logIn') === undefined){
        createElem();
    }else{
        welcomeText()
    }
}

function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

function createElem(){
        var input = document.createElement('input');
        var button = document.createElement('button')
        document.body.appendChild(input);
        document.body.appendChild(button);
        input.value = "Enter your name"
        input.id = "cookie-create"
        button.id = "ok"
        button.textContent = "ok"
        button.onclick = createCookie;
        
}

function createCookie(){
    var value = document.getElementById("cookie-create").value;
    setCookie("logIn", value, 1)
    var inp = document.getElementById("cookie-create");
    inp.value = ""
}

function setCookie(key, value, expires) {
    var date  = new Date;
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    document.cookie = key + '=' + value + ';path=/;expires=' + date.toUTCString();
}

function welcomeText(){
    var text = document.createElement('h1');
    var name = getCookie('logIn');
    document.body.appendChild(text);
    text.textContent = 'Добро пожаловать на наш сайт ' + name;
    var button = document.createElement('button');
    document.body.appendChild(button);
    button.id = "log-out";
    button.textContent = "Log out";
    button.onclick = logOut;
    // button.onclick = reload;
}

function logOut(){
    deleteCookie('logIn');
    location.reload();
}

function reload(){
    if (getCookie('logIn') === ""){
    location.reload();
    }
}

function deleteCookie(key) {
    setCookie(key, '', -1);
}