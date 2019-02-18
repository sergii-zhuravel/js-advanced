var url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' // NASA Astronomy Picture of the day

makeRequest(url, 'GET', null); // make request to NASA API

function showPictureInformation(httpRequest) {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            var responseData = JSON.parse(httpRequest.responseText);
            console.log(responseData);
            var img = document.getElementById('image-container');
            var title = document.getElementById('title');
            var desc = document.getElementById('desc');
            img.setAttribute('src', responseData.url);
            img.onclick = function() {
                img.setAttribute('src', responseData.hdurl);
            }
            title.innerHTML = responseData.title;
            desc.innerHTML = responseData.explanation;
        } else if (httpRequest.status == 404) {
            console.log("For O For");
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