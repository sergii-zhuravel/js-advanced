//ex1
var url = 'https://api.github.com/search/repositories?q=';

function searchResult() {
    searchValue = document.getElementById('input-search').Value;
    if (searchValue === '') {
        console.log('Нет значения поиска');
        return;
    }

    //Сразу ограничим 10 ответами
    makeRequest(url + searchValue + '&per_page=10', 'GET', null);

}

function readConent(httpRequest) {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            var obj = JSON.parse(httpRequest.responseText);
            console.log(obj);
            createList(obj);
        } else {
            console.error('С запросом возникла проблема.');
        }
    }

}

function createList(obj) {
    var item;
    
    for (var i = 0; j < 10; i++) {
        item = obj[j];

        var list = document.createElement('ul');
        var avatar_url = document.createElement('li');
        var full_name = document.createElement('li');
        var description = document.createElement('li');
        var html_url = document.createElement('li');
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

function makeRequest(url, method, params) {
    var httpRequest = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
        // if (httpRequest.overrideMimeType) {
        //     // httpRequest.overrideMimeType('text/xml');
        // }
    } else if (window.ActiveXObject) { // IE
        try {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!httpRequest) {
        alert('Не вышло :( Невозможно создать экземпляр класса XMLHTTP ');
        return false;
    }
    httpRequest.onreadystatechange = function () {
        readConent(httpRequest);
    };
    httpRequest.open(method, url, true);
    httpRequest.send(params);

}