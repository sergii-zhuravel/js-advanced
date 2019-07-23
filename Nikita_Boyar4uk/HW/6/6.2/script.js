// Дано:
// HTML страница в которой есть только такой код

// <div id="test" style="height: 50px;background-color: lightblue;">Test Div</div>
// <p>Расчетные стили для test div: <br><span id="output"></span></p>

// <script>
// function myFunction(){
//     var elem = document.getElementById("test");
//     var txt;
//     cssObj = window.getComputedStyle(elem)

//     for (i = 0; i < cssObj.length; i++) {
//         cssObjProp = cssObj.item(i)
//         txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
//     }
//     document.getElementById("output").innerHTML = txt;
// }
// </script>

// Вопрос:
// Как получить расчетный стиль для фонового цвета у дива с id="test"?

// function myFunction() {
//   var elem = document.getElementById("test");
//   var txt;
//   cssObj = window.getComputedStyle(elem);

//   for (i = 0; i < cssObj.length; i++) {
//     cssObjProp = cssObj.item(i);
//     txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
//   }
//   document.getElementById("output").innerHTML = txt;
// }

let test = document.querySelector("#test");

let testComputedStyle = getComputedStyle(test);

document.getElementById("output").innerHTML =
  "BackgroundColor " + "= " + testComputedStyle.backgroundColor;
