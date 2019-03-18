// home task 6.2
function myFunction(){
    var elem = document.getElementById("test"),
    txt,
    cssObj = window.getComputedStyle(elem),
    bg = cssObj.getPropertyValue('background-color');

    /* for (i = 0; i < cssObj.length; i++) {
        cssObjProp = cssObj.item(i)
        txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
    }
    document.getElementById("output").innerHTML = txt; */
    
    document.getElementById("output").innerHTML = 'background-color:' + bg;
}

myFunction()