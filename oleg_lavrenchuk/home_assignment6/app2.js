function myFunction() {
    var elem = document.getElementById("test");
    var txt;
    cssObj = window.getComputedStyle(elem);

    for (var i = 0; i < cssObj.length; i++) {
        cssObjProp = cssObj.item(i)
        if (cssObjProp == 'background-color') {
            txt = cssObjProp + ' = ' + cssObj.getPropertyValue(cssObjProp);
        }
    }
    document.getElementById("output").innerHTML = txt;
}
myFunction();