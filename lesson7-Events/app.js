 var link = document.querySelector('a');

 link.addEventListener('click', linkClick, true);
 function linkClick(event) {
   console.log(event.currentTarget);
   event.stopPropagation();
  //  event.preventDefault();
  }

var display = document.getElementById('display');

var saveBtn = document.querySelector('[data-action="save"]');
var loadBtn = document.querySelector('[data-action="load"]');

saveBtn.onclick = function(myEvent) {
  display.innerHTML = "Hello world!" + Date();
}

function changeText(myEvent) {
    myEvent.target.innerHTML = "Hello world!";
    console.log(event.currentTarget);
    myEvent.stopPropagation();
}
function myFunc(){
  saveBtn.click();
}

saveBtn.addEventListener('click', changeText);
loadBtn.addEventListener('click', myFunc);
// saveBtn.addEventListener('click', changeText, true);