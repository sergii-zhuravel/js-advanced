document.addEventListener("DOMContentLoaded", ready);
var divLogin = document.querySelector(".login");
var divLogout = document.querySelector(".logout");

function ready() {
  var str = " " + (getCookie("loginName") || "") + " ---";
  divLogout.firstElementChild.textContent += str;

  if (getCookie("loginName")) {
    divLogin.setAttribute("style", "display:none");
    divLogout.setAttribute("style", "display:block");
  } else {
    divLogout.setAttribute("style", "display:none");
    divLogin.setAttribute("style", "display:block");
  }
}

function login() {
  document.cookie =
    divLogin.firstElementChild.getAttribute("name") +
    " = " +
    divLogin.firstElementChild.value;
  location.reload();
}

function logout() {
  document.cookie =
    "loginName = " +
    getCookie("loginName") +
    "; expires = " +
    new Date().toUTCString();
  location.reload();
}

function getCookie(name) {
  var cookie = document.cookie.split(";");
  for (var i = 0; i < cookie.length; i++) {
    if (cookie[i].split("=")[0].trim() === name) {
      return decodeURIComponent(cookie[i].split("=")[1].trim());
    }
  }
  return false;
}
