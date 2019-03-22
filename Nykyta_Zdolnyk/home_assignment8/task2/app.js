document.addEventListener("DOMContentLoaded", ready);
var divLogin = document.querySelector(".login");
var divLogout = document.querySelector(".logout");

function ready() {
  console.log(localStorage);
  var str = " " + (getValueFromLocalStorageByName("loginName") || "") + " ---";
  divLogout.firstElementChild.textContent += str;

  if (getValueFromLocalStorageByName("loginName")) {
    divLogin.setAttribute("style", "display:none");
    divLogout.setAttribute("style", "display:block");
  } else {
    divLogout.setAttribute("style", "display:none");
    divLogin.setAttribute("style", "display:block");
  }
}

function login() {
  localStorage[divLogin.firstElementChild.getAttribute("name")] =
    divLogin.firstElementChild.value;
  location.reload();
}

function logout() {
  delete localStorage["loginName"];
  location.reload();
}

function getValueFromLocalStorageByName(name) {
  if (localStorage.hasOwnProperty(name)) {
    return localStorage[name];
  } else {
    return false;
  }
}
