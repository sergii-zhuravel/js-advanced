var state = [];

document.addEventListener('DOMContentLoaded', initBoard);

function ToDo(title) {
  this.id = 1;
  this.title = title;
  this.state = 'todo';

  this.addItemToState = function (key, item) {
    this[key].push(item);
  },
  this.deleteItemFromState = function (key, item) {
    this[key] = this[key].filter(element => element.id != item.id);
  },
  this.moveItemToOtherPanel = function (key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
  }
};

function addToDo(title){
  var newEl = new ToDo(title);
  ToDo.addItemToState;
}

function removeToDo(id){
  var newEl = new ToDo(id);
  state.push(newEl);
}


function initBoard() {
  state = loadToDoFromLS();
  if (state.length === 0){return};
  initPanel('todo', state.todo);
  initPanel('inprogress', state.inprogress);
  initPanel('done', state.done);
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  for (var i = 0; i < todoList.length; i++) {
    var currentItemObject = todoList[i];
    var newTodoElement = createTodoElement(currentItemObject.id, currentItemObject.title);
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

function loadToDoFromLS(){
  var localState = localStorage.getItem('State');
  if (localState === null) {
    return []
  }
  else{
    return localState;
  }
}

function saveToDoInLS(){
  localStorage.setItem('State', JSON.stringify(State));
}