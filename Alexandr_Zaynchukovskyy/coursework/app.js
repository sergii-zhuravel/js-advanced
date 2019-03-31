var newTodoInput;
var state;

var url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

document.addEventListener('DOMContentLoaded', initBoard);

function ToDo(title, state, id) {
  this.id = id || this.getNextId();
  this.title = title;
  this.state = state || 'todo';
}

ToDo.prototype.nextId = 0;
ToDo.prototype.getNextId = function () {
  return ++ToDo.prototype.nextId;
}

function StateCl() {
  this.toDoArr = [];

  this.addItemToState = function (item) {
    this.toDoArr.push(item);
    saveToDoInLS();
  };
  this.deleteItemFromState = function (itemId) {
    this.toDoArr = this.toDoArr.filter(element => element.id != itemId);
    saveToDoInLS();
  };
  this.moveItemToOtherPanel = function (key1, key2, itemId) {
    var item = state.toDoArr.find(element => element.id == itemId);
    item.state = key2;
    saveToDoInLS();
  }
}



function initBoard() {
  newTodoInput = document.getElementById('new-todo');
  state = loadToDoFromLS();
  if (state===undefined || state.toDoArr.length === 0) {
    state = new StateCl;
    return
  };
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

function addToDo() {
  var title = newTodoInput.value;
  if (title === undefined || title === '') {
    console.log('Нет значения');
    return;
  };

  var item = new ToDo(title);
  state.addItemToState(item);

  var key = item.state;
  var panel = document.getElementById(key);
  var newTodoElement = createTodoElement(item.id, item.title);
  panel.appendChild(newTodoElement);
  newTodoInput.value = '';
}

function removeToDo(e) {
  e.preventDefault();
  var id = e.target.parentElement.getAttribute('id');
  var el = document.getElementById(id);
  if (el) {
    el.parentNode.removeChild(el);
    state.deleteItemFromState(id);
  } else {
    console.error('Cannot find element, event:', e)
  }
}


function createTodoElement(id, title) {
  var todoElement = document.createElement("div");
  todoElement.id = id;
  todoElement.setAttribute("class", "todoline");
  todoElement.draggable = true; // for drag and drop
  todoElement.ondragstart = onDragStart; // for drag and drop
  var spanEl = document.createElement("span");
  spanEl.setAttribute("class", "todotext");
  spanEl.textContent = title;
  todoElement.appendChild(spanEl);
  var delBtnEl = document.createElement("span");
  delBtnEl.setAttribute("class", "delete-button");
  delBtnEl.setAttribute("onclick", "removeToDo(event)");
  delBtnEl.textContent = 'X';
  todoElement.appendChild(delBtnEl);
  return todoElement;
}

function cleanAll() {
  state = new StateCl;
  var todoEls = document.getElementsByClassName('todoline');

  for (var i = todoEls.length - 1; i >= 0; i--) {
    el = todoEls[i];
    el.parentNode.removeChild(el);
  }
  //saveToDoInLS();
}


function loadToDoFromLS() {
  cleanAll();
  var localState = localStorage.getItem('state');
  nState = new StateCl;
  if ((localState === null) === false) {
    var parsObj = JSON.parse(localState);
    nState.toDoArr = parsObj.toDoArr.map(function (el) {
      return new ToDo(el.title, el.state)
    });
    return nState;
  }
}

function saveToDoInLS() {
  localStorage.setItem('state', JSON.stringify(state));
}


function loadToDoFromServer() {
  cleanAll();
  makeRequest(url, 'GET', null);
}

function readConent(httpRequest) {

  if (httpRequest.readyState == 4) {
    if (httpRequest.status == 200) {
      state = new StateCl;
      var parsObj = JSON.parse(httpRequest.responseText);
      state.toDoArr = parsObj.map(function (el) {
        return new ToDo(el.title, (el.completed === true) ? 'done' : 'todo')
      });
      initPanel(state.toDoArr);
    } else {
      console.error('С запросом возникла проблема.');
    }
  }

}


function makeRequest(url, method, params) {
  var httpRequest = false;

  if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE
    try {
      httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
  }

  if (!httpRequest) {
    alert('Не вышло :( Невозможно создать экземпляр класса XMLHTTP ');
    return false;
  }
  httpRequest.onreadystatechange = function () {
    readConent(httpRequest);
  };
  httpRequest.open(method, url, true);
  httpRequest.send(params);
}