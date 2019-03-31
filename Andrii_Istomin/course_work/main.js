var state = {
  todo: [
    { id: 1, title: "Test todo 1" },
    { id: 2, title: "Test todo 2" },
    { id: 3, title: "Test todo 3" }
  ],
  inprogress: [],
  done: [],
  addItemToState: function(key, item) {
    this[key].push(item);
  },
  deleteItemFromState: function(key, item) {
    this[key] = this[key].filter(element => element.id != item.id);
  },
  moveItemToOtherPanel: function(key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
  }
};

let addTodoButton = document.getElementById("addtodo-button");
let panels = document.getElementById("todo");
var elem = { id: 5, title: "HELOOOOO" };

addItemToPanel=()=> {
  let inputValue = document.getElementById("new-todo").value;
  let panel = document.getElementById("todo");
  let id = state.todo[state.todo.length - 1].id + 1;
  let newElem = { id: id, title: inputValue };
  state.addItemToState("todo",newElem)
  panel.innerHTML = ""
  initPanel("todo", state.todo);
  console.log(state.todo)
}

addTodoButton.addEventListener("click", addItemToPanel);
document.addEventListener("DOMContentLoaded", initBoard);

// console.log(elem)
// console.log(state.todo)
// state.todo.push(elem)
// console.log(state.todo)
// state.addItemToState(todo, elem)

function initBoard() {
  initPanel("todo", state.todo);
  initPanel("inprogress", state.inprogress);
  initPanel("done", state.done);
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
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
  return todoElement;
}
