function nameBrowser() {
    var span = document.querySelector('div').lastElementChild;
    span.textContent = navigator.appVersion;
    }
nameBrowser();