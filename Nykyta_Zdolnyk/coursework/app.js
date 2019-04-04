var url = "https://jsonplaceholder.typicode.com/posts";
class State {
  constructor() {
    this.countId = 1;
    this.todo = [
      { id: this.countId++, title: "Test todo 1" },
      { id: this.countId++, title: "Test todo 2" }
    ];
    this.inprogress = [];
    this.done = [];
  }
  addItemToState = function(key, item) {
    this[key].push(item);
  };
  deleteItemFromState = function(key, item) {
    this[key] = this[key].filter(element => element.id != item.id);
  };
  moveItemToOtherPanel = function(key1, key2, itemId) {
    var item = this[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
  };
}

var todoStates = new State();

document.addEventListener("DOMContentLoaded", initBoard);

function initBoard() {
  if (localStorage.hasOwnProperty("todoStates")) {
    var localStorageObj = JSON.parse(localStorage.getItem("todoStates"));
    todoStates.countId = localStorageObj.countId;
    todoStates.todo = localStorageObj.todo;
    todoStates.inprogress = localStorageObj.inprogress;
    todoStates.done = localStorageObj.done;
    initPanel("todo", todoStates.todo);
    initPanel("inprogress", todoStates.inprogress);
    initPanel("done", todoStates.done);
  } else {
    console.log("obj");
    initPanel("todo", todoStates.todo);
    initPanel("inprogress", todoStates.inprogress);
    initPanel("done", todoStates.done);
  }
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  panel.innerHTML = "";
  for (var i = 0; i < todoList.length; i++) {
    var currentItemObject = todoList[i];
    var newTodoElement = createTodoElement(
      currentItemObject.id,
      currentItemObject.title
    );
    panel.appendChild(newTodoElement);
  }
}

function createTodoElement(id, title) {
  var todoElement = document.createElement("span");
  todoElement.id = id;
  todoElement.draggable = true; // for drag and drop
  todoElement.ondragstart = onDragStart; // for drag and drop
  todoElement.textContent = title;
  var deleteTodo = document.createElement("button");
  var style = `
    float: right;
    margin-right: 15px;
    // margin-left: 15px;
    // padding: 2px
    color: #b3b3b3;
    border-radius: 50%; 
    background-color: white;
    border: 1px solid #b3b3b3;
    font-family: 'Caveat', cursive;
    font-weight: bold;
  `;
  deleteTodo.textContent = "X";
  deleteTodo.style = style;
  deleteTodo.addEventListener("click", function(event) {
    var parentPanel = event.target.parentElement.parentElement.id;
    var item = event.target.parentElement;
    todoStates.deleteItemFromState(parentPanel, item);
    initPanel(parentPanel, todoStates[parentPanel]);
    writeDataToLocalStorage();
  });
  todoElement.appendChild(deleteTodo);
  return todoElement;
}

function writeDataToLocalStorage() {
  localStorage.setItem("todoStates", JSON.stringify(todoStates));
}

function addItem(e) {
  var input = e.target.parentElement.firstElementChild;
  if (input.value != "") {
    var obj = {
      id: todoStates.countId++,
      title: input.value
    };
    todoStates.addItemToState("todo", obj);
    initPanel("todo", todoStates.todo);
    writeDataToLocalStorage();
    input.value = "";
  }
}
function getTodoFromServer() {
  makeRequest(url, "GET", null);
}
function makeRequest(url, method, params) {
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
    parseResponse(httpRequest);
  };
  httpRequest.open(method, url, true);
  httpRequest.send(params);
}

function parseResponse(httpRequest) {
  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      var responseData = JSON.parse(httpRequest.responseText);
      var items = responseData.slice(0, 10);
      items.forEach(function(item, i, arr) {
        todoStates.todo.push({ id: todoStates.countId++, title: item.title });
      });
      writeDataToLocalStorage();
      initPanel("todo", todoStates.todo);
    } else if (httpRequest.status == 404) {
      console.log("For O For");
    } else {
      console.error("С запросом возникла проблема.");
    }
  }
}
