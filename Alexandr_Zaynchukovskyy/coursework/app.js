document.addEventListener('DOMContentLoaded', initBoard);
var newTodoInput;

function ToDo(title) {
  this.id = 1;
  this.title = title;
  this.state = 'todo';
}

function StateCl() {
  this.toDoArr = [];

  this.addItemToState = function(item) {
    this.toDoArr.push(item);
    saveToDoInLS();
  };
  this.deleteItemFromState = function(key, item) {
    this.toDoArr = this.toDoArr.filter(element => element.id != item.id);
    saveToDoInLS();
  };
  this.moveItemToOtherPanel = function(key1, key2, itemId) {
    var item = state.toDoArr.find(element => element.id == itemId);
    item.state = key2;
    saveToDoInLS();
  }
}

function addToDo(){
  var title = newTodoInput.value;
  if (title === undefined||title === '') {
    console.log('Нет значения');
    return;
  };

  var item = new ToDo(title);
  state.addItemToState(item);
  newTodoInput.value = '';
}

function removeToDo(id){
  var newEl = new ToDo(id);
  state.addItemToState(newEl);
}


function initBoard() {
  newTodoInput = document.getElementById('new-todo');
  state = loadToDoFromLS();
  if (state.toDoArr.length === 0){return};
  initPanel(state.toDoArr);
}

function initPanel(todoList) {
  for (var i = 0; i < todoList.length; i++) {
    var currentItemObject = todoList[i];
    var key = todoList[i].state;
    var panel = document.getElementById(key);
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
  var localState = localStorage.getItem('state');
  nState = new StateCl;
  if ((localState === null) === false) {
    var parsObj = JSON.parse(localState);
    nState.toDoArr = parsObj.toDoArr.slice();
    return nState;
  }
}

function saveToDoInLS(){
  localStorage.setItem('state', JSON.stringify(state));
}