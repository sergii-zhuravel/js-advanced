//8.1

var userLogin = getCookie("userLogin");
var login_form = document.querySelector(".login_form");
var greet_block = document.querySelector(".user_greeting");
var greet = document.querySelector("#greeting");

if (userLogin && userLogin.length > 0) {
    login_form.style.display = "none";
    greet_block.style.display = "block";
    greet.innerHTML = `Welcome ${userLogin}!`;
}
else{
    login_form.style.display = "block";
    greet_block.style.display = "none";
}

function logIn(){
    var input_value = document.getElementById("login_input");
    userLogin = input_value.value;
    setCookie("userLogin", userLogin, 3);
    location.reload();
}

function logOut()
{
    deleteCookie();
    location.reload();
}
        
function getCookie(key) {
    var cookie = document.cookie;
        var cookieArray = cookie.split(";");
        for (var i = 0; i < cookieArray.length; i++) {
          var keyValueArray = cookieArray[i].split("=");
          if (keyValueArray[0].trim() == key) {
            return keyValueArray[1];
        }
    }
}
        
function setCookie(key, value, expires) {
    var date  = new Date;
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    document.cookie = key + '=' + value + ';path=/;expires=' + date.toUTCString();
} 

function deleteCookie() {
        setCookie("userLogin", userLogin, -1);
}

//8.2

/* var userLogin = localStorage.userLogin;
var login_form = document.querySelector(".login_form");
var greet_block = document.querySelector(".user_greeting");
var greet = document.querySelector("#greeting");

if (userLogin && userLogin.length > 0) {
    login_form.style.display = "none";
    greet_block.style.display = "block";
    greet.innerHTML = `Welcome ${userLogin}!`;
}
else{
    login_form.style.display = "block";
    greet_block.style.display = "none";
}

function logIn(){
    var input_value = document.getElementById("login_input");
    userLogin = input_value.value;
    setLocalStorage(userLogin);
    location.reload();
}

function logOut()
{
    deleteLocalStorage();
    location.reload();
}
        
function getLocalStorage() {
    var key = localStorage.loginName;
    return key;
}
        
function setLocalStorage(value) {
    localStorage.userLogin = value;
    location.reload();
}

function deleteLocalStorage() {
    setLocalStorage("");
} */

