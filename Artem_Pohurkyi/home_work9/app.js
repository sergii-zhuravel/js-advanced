var url = 'https://api.github.com/search/repositories?q=react+language:javascript&per_page=100';

var inpt = document.getElementById('search-input');
var btn = document.getElementById('search');
btn.textContent = "Search";
btn.addEventListener('click', myApp);


function myApp(a){
    a.preventDefault();
    if (inpt.value === ''){
        alert('Введите запрос!')
    }
    var request = inpt.value;
    var url = 'https://api.github.com/search/repositories?q=' + request;
    makeRequest(url, 'GET', null);
}

function showInfo(items){
    console.log(items);

    for (var j = 0; j < 10; j++) {
        var list = document.createElement('ul');
        var avatar = document.createElement('li');
        var name = document.createElement('li');
        var desc = document.createElement('li');
        var html_url= document.createElement('li');
        var info = document.createElement('div');
        var img = document.createElement('img');

        document.body.appendChild(info);
        info.appendChild(list);
        list.appendChild(name);
        list.appendChild(desc);
        list.appendChild(avatar);
        avatar.appendChild(img);
        list.appendChild(html_url);

        img.setAttribute('src', items[j].owner.avatar_url);
        name.textContent = 'Full name: ' + items[j].full_name;
        desc.textContent = 'Description: ' + items[j].description;
        html_url.textContent = 'Html url: ' + items[j].html_url;
        info.style.borderBottom = '1px solid black';
    }
}

function showPictureInformation(httpRequest) {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            obj = JSON.parse(httpRequest.responseText);
            var items = obj.items;
            showInfo(items);
         } else if (httpRequest.status == 404) {
            console.log("Ресурс не найден.");
        }
        else {
            console.error('Unknown error.');
        }
    }
}


function makeRequest(url, method, params) {
    var httpRequest = false;

     if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) { }
        }
    }

     if (!httpRequest) {
        alert('Не вышло :( Невозможно создать экземпляр класса XMLHTTP ');
        return false;
    }

     httpRequest.onreadystatechange = function () { showPictureInformation(httpRequest); };
    httpRequest.open(method, url, true);
    httpRequest.send(params);
}
