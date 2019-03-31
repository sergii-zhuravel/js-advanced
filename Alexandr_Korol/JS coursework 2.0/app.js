var counter = 1;
class Todo{
    constructor(id,title){
        this.id = id;
        this.title = title;
    }
    createTodoElement(){
      if(this.id <= counter)
        this.id = counter;
        var todoElement = document.createElement("span");
        todoElement.id = counter;
        todoElement.draggable = true; // for drag and drop
        todoElement.ondragstart=onDragStart; // for drag and drop
        todoElement.textContent = this.title;
        return todoElement; 
    }
    addTodoElement(todoElement) {
      
      var tolocalstorage = {
            
      id: todoElement.id,
      title: todoElement.textContent,
      position: 'todo'
  }
        
        var panel = document.getElementById(tolocalstorage.position);
        var deleter = document.createElement('div');
        todoElement.classList.add('todoelement');
        panel.appendChild(todoElement);
        deleter.classList.add('delete_btn');
        panel.appendChild(todoElement);
        todoElement.appendChild(deleter);
        tolocalstorage = JSON.stringify(tolocalstorage);
        localStorage.setItem(counter, tolocalstorage);
        
    }
}
// ADD TODO
addEventListener('click', function(event){
    var target = event.target;
    if(target.className === 'add_todo')
    {
        
        var information = document.querySelector('#new-todo').value;
        var todo = new Todo(counter,information);
        var newElement = todo.createTodoElement();
        todo.addTodoElement(newElement);
        counter++;
        
        
    }
});
addEventListener('click', function(event){
    var target = event.target;
    if(target.className === 'delete_btn')
        {target.parentNode.classList.add('deleted');
        target.parentNode.remove();
        localStorage.removeItem(target.parentNode.id);}
        
});



document.addEventListener('DOMContentLoaded', initBoard);
function initBoard() {
   initPanel('todo');
   initPanel('inprogress');
   initPanel('done');
  }
  
  function initPanel(key) {
    var panel = document.getElementById(key);
    var len = localStorage.length;
    for ( var i = 0; i < len; i++ ) {
      // console.log( JSON.parse(localStorage.getItem( localStorage.key( i ) )) );
      var current = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
      if(current.position === key){
      var todoElement = document.createElement("span");
        todoElement.id = current.id;
        todoElement.draggable = true; // for drag and drop
        todoElement.ondragstart=onDragStart; // for drag and drop
        todoElement.textContent = current.title;
        var panel = document.getElementById(key);
        var deleter = document.createElement('div');
        todoElement.classList.add('todoelement');
        panel.appendChild(todoElement);
        deleter.classList.add('delete_btn');
        panel.appendChild(todoElement);
        todoElement.appendChild(deleter);
      console.log(current);
      }
    }
    
      
    
    //циклом треба перебрати всі елементи в масив, відсортувати і занести назад
      
      
        
    
    
  }
document.addEventListener('DOMContentLoaded', checkme);
function checkme(){
    if(localStorage.length == 0)
    counter = 1;
    else
    counter = localStorage.length + 1;
}

function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.getAttribute('id'));
}

function allowDrop(ev) {
  ev.preventDefault();
}


function drop(e) {
  e.preventDefault();
  var data = e.dataTransfer.getData("text");
  var item = document.getElementById(data);
  if (item) {
    
    moveItemToOtherPanel(item.parentElement.id, e.target.id, item.id)
    e.target.appendChild(item);
  } else {
    console.error('Cannot find element, event:', e)
  }
}
function moveItemToOtherPanel(key1,key2,itemId){
  var item = localStorage.getItem(itemId);
  item = JSON.parse(item);
  console.log('From move: ' + item);
  deleteItemFromState(itemId);
  addItemToState(key2, item);
}
function deleteItemFromState(itemId){
  localStorage.removeItem(itemId);
}
function addItemToState(key2,item){
  console.log(item);
  var itemId = item.id;
  item.position = key2;
  item = JSON.stringify(item);
  localStorage.setItem(itemId,item);
}

function fromserver(){
  var request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos',false);
  request.send(null);
  var info = request;
  console.log(request.status);
  if (request.readyState == 4) {
    if (request.status == 200) {
      info = JSON.parse(request.response);
      for(var j = 0; j< 5; j++)
      {
        var todoElement = document.createElement("span");
        todoElement.id = counter;
        todoElement.draggable = true; // for drag and drop
        todoElement.ondragstart=onDragStart; // for drag and drop
        todoElement.textContent = info[j].title;
        var panel = document.getElementById('todo');
        var deleter = document.createElement('div');
        todoElement.classList.add('todoelement');
        panel.appendChild(todoElement);
        deleter.classList.add('delete_btn');
        panel.appendChild(todoElement);
        todoElement.appendChild(deleter);
        var tolocalstorage = {
            
          id: todoElement.id,
          title: todoElement.textContent,
          position: 'todo'
      }
        tolocalstorage = JSON.stringify(tolocalstorage);
        localStorage.setItem(counter, tolocalstorage);
        console.log(info[j].title);
        counter++;
      }
    }}
  }