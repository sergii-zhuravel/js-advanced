var input = document.getElementById('request');
var search = document.getElementById('search');
var printResult = document.getElementById('print-result');

search.addEventListener('click', createUrl);

function createUrl(e) {
    e.preventDefault();
    var inputValue = input.value;
    var url = 'https://api.github.com/search/repositories?q=' + inputValue + '&per_page=20';
    console.log(inputValue);
    makeRequest(url, 'GET', null); 
}

function printErsponseData(responseData) {

    for (var i = 0; i < 10; i++) {
        var ul = document.createElement('ul');
        var liAvatar = document.createElement('li');
        var liName = document.createElement('li');
        var liDesc = document.createElement('li');
        var liLink = document.createElement('li');
        
        printResult.appendChild(ul);
        liAvatar.textContent = 'Avatar: ' + responseData.items[i].owner.avatar_url;
        liName.textContent = 'Full name: ' + responseData.items[i].full_name;
        liDesc.textContent = 'Description: ' + responseData.items[i].description;
        liLink.textContent = 'HTML URL: ' + responseData.items[i].html_url;
        ul.appendChild(liAvatar);
        ul.appendChild(liName);
        ul.appendChild(liDesc);
        ul.appendChild(liLink);
    }
}

function showPictureInformation(httpRequest) {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            var responseData = JSON.parse(httpRequest.responseText);
            printErsponseData(responseData);

        } else if (httpRequest.status == 404) {
            console.log("Error: 404");
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
