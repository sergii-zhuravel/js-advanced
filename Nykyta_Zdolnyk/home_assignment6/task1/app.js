var body = document.body;
var input = body.querySelector("#todo-input");
console.log(input.value);

var li = body.querySelector(".todo-item");
console.log(li);

var clone_li = li.cloneNode(true);
clone_li.firstChild.textContent = "Second todo ";
body.querySelector("#todo-list").appendChild(clone_li);
