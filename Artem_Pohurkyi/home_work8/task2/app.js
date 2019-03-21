author();

function author(){
    checkName();
}

function checkName(){
    getName('logIn');
    if (getName('logIn') === null){
        createElem();
    }else{
        welcomeText()
    }
}

function getName(name) {
        return localStorage.getItem(name)
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
        button.onclick = createName;
}

function createName(){
    var value = document.getElementById("cookie-create").value;
    localStorage.setItem("logIn", value)
    var inp = document.getElementById("cookie-create");
    inp.value = ""
}


function welcomeText(){
    var text = document.createElement('h1');
    var name = localStorage.getItem('logIn');
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
    deleteName('logIn');
    location.reload();
}

function deleteName(key) {
    localStorage.removeItem(key)
}