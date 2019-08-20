let url = "https://jsonplaceholder.typicode.com/todos";

const addBtn = document.querySelector("#addItem");

addBtn.addEventListener("click", getPost);

var state = {
  todo:
    JSON.parse(localStorage.getItem("todo")) ||
    localStorage.setItem("todo", "[]"),
  inprogress:
    JSON.parse(localStorage.getItem("inprogress")) ||
    localStorage.setItem("inprogress", "[]"),
  done:
    JSON.parse(localStorage.getItem("done")) ||
    localStorage.setItem("done", "[]"),

  addItemToState: function(key, item) {
    this[key].push(item);
    this.changeLocal(key, item);
  },

  deleteItemFromState: function(key, item) {
    this[key] = this[key].filter(element => element.id != item.id);
    this.changeLocal(key, item);
  },
  moveItemToOtherPanel: function(key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);

    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
  },
  changeLocal: function(key, item) {
    localStorage.setItem([key], JSON.stringify(this[key] || []));
  },
  deleteItem: function(event) {
    let parentElement = event.target.parentElement.parentElement.id;
    let itemId = event.target.parentElement.id;

    var item1 = document.getElementById(parentElement);

    var item = state[parentElement].find(element => element.id == itemId);
    this.deleteItemFromState(parentElement, item);

    initBoard();
  }
};

document.addEventListener("DOMContentLoaded", initBoard);

function initBoard() {
  state.todo =
    JSON.parse(localStorage.getItem("todo")) ||
    localStorage.setItem("todo", "[]");
  state.inprogress =
    JSON.parse(localStorage.getItem("inprogress")) ||
    localStorage.setItem("inprogress", "[]");
  state.done =
    JSON.parse(localStorage.getItem("done")) ||
    localStorage.setItem("done", "[]");
  state.itemArr =
    JSON.parse(localStorage.getItem("itemArr")) ||
    localStorage.setItem("itemArr", "[]");

  initPanel("todo", state.todo);
  initPanel("inprogress", state.inprogress);
  initPanel("done", state.done);
  state.itemCounter =
    state.todo.length + state.inprogress.length + state.done.length || 0;
}

function initPanel(key, todoList) {
  refreshCounter();
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

function refreshCounter() {
  counter =
    state.todo.length + state.inprogress.length + state.done.length || 0;
}

function createTodoElement(id, title) {
  var todoElement = document.createElement("div");

  todoElement.id = id;
  todoElement.className = "toDoItem";
  todoElement.draggable = true; // for drag and drop
  todoElement.ondragstart = onDragStart;
  // for drag and drop
  todoElement.innerHTML =
    title +
    '<span class = "delete" onclick="state.deleteItem(event)" >&#10006;</span>';

  return todoElement;
}

function addElement(post) {
  let counter = state.itemCounter || 0;

  let newElement = {
    id: post[counter + 1].id || 0,
    title: post[counter + 1].title || 0
  };

  state.addItemToState("todo", newElement);

  initBoard();
}

function getPost() {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(post => {
      addElement(post);
    })
    .catch(error => {
      console.log(error);
    });
}
