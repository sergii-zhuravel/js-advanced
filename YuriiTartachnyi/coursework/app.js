var state;
state = {
  todo: [{id: 1, title: "Test todo 1"}, {id: 2, title: "Test todo 2"}],
  inprogress: [],
  done: [],
  addItemToState: function (key, item) {
    this[key].push(item);
    // this.storage();
  },
  deleteItemFromState: function (key, item) {
    this[key] = this[key].filter(element => element.id != item.id);
    this.storage();
  },
  moveItemToOtherPanel: function (key1, key2, itemId) {
    var item = state[key1].find(element => element.id == itemId);
    this.deleteItemFromState(key1, item);
    this.addItemToState(key2, item);
    this.storage();
  },
  storage: function(){
      localStorage.setItem("early", JSON.stringify([this.todo,this.inprogress,this.done]));
  }
};

document.addEventListener('DOMContentLoaded', initBoard);

function initBoard() {
  if(localStorage.getItem('early')){
    var data = JSON.parse(localStorage.getItem('early'));
    state.todo = data[0];
    state.inprogress = data[1];
    state.done = data[2];
  }else{
    state.storage();
  }
 initPanel('todo', state.todo);
 initPanel('inprogress', state.inprogress);
 initPanel('done', state.done);
}

function initPanel(key, todoList) {
  var panel = document.getElementById(key);
  for(var i = 0; i< todoList.length; i++ ) {
    var currentItemObject = todoList[i];
    var newTodoElement = createTodoElement(currentItemObject.id, currentItemObject.title);
    panel.appendChild(newTodoElement);
  }

}

function createTodoElement(id_n, title_n) {
  var todoElement = document.createElement("span");
  todoElement.id = id_n;
  todoElement.setAttribute("onclick", "maq();");
  todoElement.draggable = true;
  todoElement.ondragstart=onDragStart;
  todoElement.textContent = title_n;
  return todoElement;
}

function addFunc() {
  var toDoItem = document.getElementById('new-todo').value,
      curentId = document.querySelectorAll('#todo span').length+1,
      newItem = new createTodoElement ();

  state.todo.push({id: curentId, title: toDoItem});
  state.storage();

  newItem.id = curentId;
  newItem.textContent = toDoItem;
  todo.appendChild(newItem);
}

var btn = document.querySelector("#btn");
btn.addEventListener("click", addFunc);

function dropFunc() {
  localStorage.removeItem('early');
  location.reload();
}
function maq(){
  console.log(this);
}
