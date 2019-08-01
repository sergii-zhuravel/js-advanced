var url = "https://jsonplaceholder.typicode.com/photos";

window.addEventListener("DOMContentLoaded", function() {
  var requestOptions = {
    url: url,
    method: "GET"
  };
  makeRequest(requestOptions, updateUIWithNewPhotos);
});

function updateUIWithNewPhotos(photosArray) {}

function displayPhotoInfo(photoObject) {}

function showBigImage(url) {}

function makeRequest(requestOptions, successHandler) {
  var httpRequest = false;

  if (window.XMLHttpRequest) {
    // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  if (!httpRequest) {
    alert("Не вышло :( Невозможно создать экземпляр класса XMLHTTP ");
    return false;
  }
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState == 4) {
      if (httpRequest.status == 200) {
        var responseData = JSON.parse(httpRequest.responseText);
        successHandler(responseData);
      } else {
        console.error("С запросом возникла проблема.");
      }
    }
  };
  httpRequest.open(requestOptions.method, requestOptions.url, true);
  httpRequest.send(requestOptions.params || null);
}
