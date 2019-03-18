// var url = 'https://jsonplaceholder.typicode.com/posts'

// makeRequest('https://www.meteoprog.ua/ru/api/city/Kyiv', 'GET', null);
// makeRequest(url, 'GET', null);

// makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', 'title=foo&body=test&userId=1');

function doSomethingWithConent(httpRequest) {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            var obj = JSON.parse(httpRequest.responseText);
            console.log(obj);
        } else if(httpRequest.status == 201) {
            var getUrl = url + '/' + JSON.parse(httpRequest.responseText).id;
            makeRequest(getUrl, "GET", null);
        }
        else {
            console.error('С запросом возникла проблема.');
        }
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
            } catch (e) { }
        }
    }

    if (!httpRequest) {
        alert('Не вышло :( Невозможно создать экземпляр класса XMLHTTP ');
        return false;
    }
    httpRequest.onreadystatechange = function () { doSomethingWithConent(httpRequest); };
    httpRequest.open(method, url, true);
    httpRequest.send(params);

    // for post 
    // var params = 'orem=ipsum&name=binny';
    // http.open('POST', url, true);
    // /Send the proper header information along with the request
    // http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // http.send(params);
}