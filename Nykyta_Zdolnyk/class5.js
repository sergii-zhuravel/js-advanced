
function showWelcometext() {
    var div = document.body.firstElementChild;
    div.textContent = "Welcome Text";
    div.style = 'background-color: lightblue';
    div.className = "welcome-text";
    console.log(div.attributes);

}

showWelcometext();