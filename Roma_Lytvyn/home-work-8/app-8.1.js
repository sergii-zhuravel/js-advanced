document.addEventListener('DOMContentLoaded', function() {
    
    var registerBtn = document.querySelector('#register');
    var buttonsBlock = document.querySelector('.buttons-block');
    var message = document.querySelector('.message');
    var logoutBtn = document.querySelector('.logout');

    // check user status (check cookeis)
    function checkUserStatus(name) {
        var userStatus = getCookie(name);
        return userStatus;
    }

    var user = checkUserStatus("loginName");
    
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
        setCookie("loginName", user, {expires : -1});
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
            setCookie("loginName", inputValue, {expires : 1000});
        } 
    }

    function setCookie(name, value, options) {
        options = options || {};
    
        var expires = options.expires;
    
        if (typeof expires == "number" && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
    
        value = encodeURIComponent(value);
    
        var updatedCookie = name + "=" + value;
    
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
            updatedCookie += "=" + propValue;
            }
        }
    
        document.cookie = updatedCookie;
    }
    
    function getCookie(name) {
        var values = document.cookie.split(';');
        var result;
        for (var i = 0; i < values.length; i++) {
            var getName = values[i].split('='); 
            if (getName[0].trim() === name) result = getName[1].trim();
        }
        return decodeURIComponent(result);
    }
    
});
