/*Task 1
 var a = document.querySelectorAll('.btn-style');
a.forEach(function(el){el.style.backgroundColor = 'green'});//установить текст
var b = document.getElementById('background');//# не надо есть ID
document.querySelectorAll('button').forEach(el => {if(el.textContent =='Del') console.log(el)}) */
//task2
var div = document.createElement("div");
div.textContent = "Hi";
div.innerText = "Hello world";
div.style.width = "300px";
div.style.color = "green";
document.body.appendChild(div);
setTimeout(function() {
  document.body.removeChild(div);
}, 5000);
