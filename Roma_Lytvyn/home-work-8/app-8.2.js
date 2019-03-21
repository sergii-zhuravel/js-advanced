document.addEventListener('DOMContentLoaded', function() {
    
    var registerBtn = document.querySelector('#register');
    var buttonsBlock = document.querySelector('.buttons-block');
    var message = document.querySelector('.message');
    var logoutBtn = document.querySelector('.logout');

    // check user status
    function checkUserStatus() {
        var userStatus = localStorage.loginName;
        return userStatus;
    }

    var user = checkUserStatus();
    
    // show different content according to the user status
    if (user === "undefined") {} 
    else if (user) {
        loginMessage();
    }

    // if user logged
    function loginMessage() {
        buttonsBlock.style = "display: none";
        logoutBtn.style = "display: block";
        message.textContent = "Welcome, " + user + "!";
    }

    // click on log out 
    logoutBtn.addEventListener('click', logOutUser);
    
    function logOutUser() {
        localStorage.removeItem("loginName");
        location.reload();
    }

    // adding event listeners to registration button
    registerBtn.addEventListener('click', createRegistretionForm);

    // create register form
    function createRegistretionForm() {
        createForm("register");
        document.querySelector('#register_form').addEventListener('click', registerUser);
    }

    // create and show form 
    function createForm(action) {
        var form = document.createElement('form');
        var input = document.createElement('input');
        var button = document.createElement('button');

        button.textContent = action.charAt(0).toUpperCase() + action.slice(1);
        button.setAttribute('type', "submit");
        form.setAttribute('id', action + '_form');
        form.appendChild(input);
        form.appendChild(button);
        document.body.appendChild(form);
                
        setAttributes(input, {
           type: "text",
           placeholder: "Please enter your name",
           required: "required"
        });

        function setAttributes(elem, obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    elem[prop] = obj[prop];
                }
            }
        }

        buttonsBlock.style = "display: none";
    }

    // on register form submit
    function registerUser(e) {
        
        var input = e.target.previousSibling;
        var inputValue = input.value;
        if (inputValue != '') {
            localStorage.setItem("loginName", inputValue);
        } 
    }

});
