var url = 'https://jsonplaceholder.typicode.com/posts'
// makeRequest(url, 'GET', null);
// makeRequest('https://jsonplaceholder.typicode.com/posts', 'POST', 'title=foo&body=test&userId=1');

function doSomethingWithConent(httpRequest) {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status === 200) {
            var obj = JSON.parse(httpRequest.responseText);
            console.log(obj);
        } else if (httpRequest.status === 201) {
            console.log("Новьій обьект бьіл создан, пробуем его прочитать")
            var id = JSON.parse(httpRequest.responseText).id;
            console.log("ID: " + id);
            var getUrl = url + '/' + id;
            makeRequest(getUrl, "GET", null);
        } else if (httpRequest.status === 404) {
            console.log("404 - not found");
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