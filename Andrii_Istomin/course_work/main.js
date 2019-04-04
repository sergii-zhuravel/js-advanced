class AddDel {
  constructor(url) {
    this.url = url;
    this.addButton = document.getElementById("addtodo-button");
    this.addButton.addEventListener("click", this.addTodo);
    this.downloadButton = document.getElementById("download-button");
    this.downloadButton.addEventListener("click", this.downloadTodos);
  }
  async request() {
    var response = await fetch(url);
    this.object = await response.json();
    this.object.length = 10;
  }
  removeElement(event) {
    this.id = event.target.parentNode.id;
    for (var key in localStorage) {
      this.newKey = key.replace(/[0-9]/g, "");
      localStorage.removeItem(
        `${this.newKey}${this.id}`,
        localStorage[`${this.newKey}${this.id}`]
      );
      localStorage.removeItem(this.id);
    }
    event.target.parentNode.remove();
  }
}

class NewTodo extends AddDel {
  createElements(obj) {
    var firstContent = document.querySelector(".todo");
    console.log(firstContent);
    for (var i = 0; i < obj.length; i++) {
      var arr = obj[i];
      var todo = document.createElement("span");
      var delButt = document.createElement("img");
      delButt.id = "del";
      delButt.addEventListener("click", super.removeElement);
      delButt.setAttribute("src", "icon.svg");
      todo.draggable = true;
      todo.setAttribute("ondragstart", "drag(event)");
      todo.classList.add("todos");
      if (obj[i].hasOwnProperty(`title`)) {
        todo.innerHTML = arr.title + "<br>";
        todo.id = arr.id;
      } else {
        var m = Object.getOwnPropertyNames(arr);
        var check = document.getElementById(arr[m[i + 1]]);
        if (check) {
          check.remove();
        }
        todo.innerHTML = arr[m[i]] + " <b>(from LocalStor)</b>" + "<br>";
        todo.id = arr[m[i + 1]];
      }
    }
    todo.appendChild(delButt);
    firstContent.appendChild(todo);
    localStorage.setItem(todo.id, todo.innerText);
  }
}

class CheckLocal extends NewTodo {
  hasInlocalStorage() {
    var local = JSON.parse(JSON.stringify(localStorage));
    for (var i = 0; i < this.object.length; i++) {
      if (
        (local[`title${i + 1}`] == this.object[i].title &&
          local[`id${i + 1}`] == this.object[i].id) ||
        Object.keys(this.object).length == 0
      ) {
        var newObj = {};
        var newArr = [];
        newObj[`title${i + 1}`] = local[`title${i + 1}`];
        newObj[`id${i + 1}`] = local[`id${i + 1}`];
        newArr.push(newObj);
        super.createElements(newArr);
      } else {
        var myObj = this.object[i];
        var myArr = [];
        for (var key in myObj) {
          localStorage.setItem(`${key}${i + 1}`, myObj[key]);
        }
        myArr.push(myObj);
        super.createElements(myArr);
      }
    }
  }
}

class Commands extends CheckLocal {
  addTodo() {
    var inp = document.getElementById("newtodo-input");
    if (inp.value.trim().length === 0) {
      return 0;
    }
    var arr = [];
    var inpTodo = {};
    inpTodo.title = inp.value;
    inp.value = "";
    inpTodo.id = "num" + Math.round(Math.random() * (1000 - 1) + 1);
    arr.push(inpTodo);
    super.createElements(arr);
  }

  async downloadTodos() {
    await super.request();
    super.hasInlocalStorage();
  }
}

var url = "https://jsonplaceholder.typicode.com/todos";
new Commands(url);
