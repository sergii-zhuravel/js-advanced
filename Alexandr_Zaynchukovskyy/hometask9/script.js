//ex1
var url = 'https://api.github.com/search/repositories?q=';

function searchResult() {
    var searchValue = document.getElementById('input-search').value;
    if (searchValue === undefined||searchValue === '') {
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
    var startElem = document.getElementById('GoOn');

    //clean up
    tables = document.getElementsByTagName('TABLE');
    for(var i = 0; i < tables.length; i++){
        startElem.removeChild(tables[i])
        el = tables[i];
    }
    startElem.appendChild(buildTable(obj.items));


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

function buildTable(data) {
    var table = document.createElement("table");
    table.className = "gridtable";
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var headRow = document.createElement("tr");
    ["Avatar", "Full name", "Description"].forEach(function (el) {
        var th = document.createElement("th");
        th.appendChild(document.createTextNode(el));
        headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    data.forEach(function (el) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var img = document.createElement('img');
        img.setAttribute('src', el.owner.avatar_url);
        td.appendChild(img);
        tr.appendChild(td);
        var td = document.createElement("td");
        full_name = document.createElement('a');
        full_name.innerHTML = el.full_name;
        full_name.setAttribute('href', el.html_url);
        td.appendChild(full_name);
        tr.appendChild(td); 
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(el.description))
        tr.appendChild(td); 


        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
}