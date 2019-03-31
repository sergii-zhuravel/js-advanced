class Status {

    itemsCount = 0;

    createTasks(key, array) {
        this[key] = array;
    }

    printTasks(key) {
        var board = document.getElementById(key);
        for (var i = 0; i < this[key].length; i++) {
            this.itemsCount += 1;
            var div = document.createElement('div');
            var closeBtn = document.createElement('button');
            closeBtn.setAttribute('onclick', 'removeTask(event)');
            div.draggable = true; 
            div.ondragstart = onDragStart;
            div.classList.add('task-block');
            div.setAttribute('id', this[key][i].id);
            div.textContent = this[key][i].userId + ': ' + this[key][i].title;
            div.appendChild(closeBtn);
            board.appendChild(div);
        }
    }
}

var todo = [];
var inprogress = [];
var done = [];
let status = new Status();

document.addEventListener("DOMContentLoaded", checkLocalStorage);

// check tasks in localStorage
// if it's empty - upload tasks from the server
function checkLocalStorage() {
    if (localStorage.length == 0) {
        uploadFilesFromTheServer();
    } else {
        initBoard('todo');
        initBoard('inprogress');
        initBoard('done');
    }
}

// upload tasks from the server
function uploadFilesFromTheServer() {
    var url = 'https://jsonplaceholder.typicode.com/todos';

    fetch(url)
        .then(response => response.json())
        .then(json => {
            sortTasks(json);
        });
}

// sort uploaded tasks by completed status
function sortTasks(data) {
    var taskList = data;

    for (var i = 0; i < taskList.length; i++) {
        if (!taskList[i].completed) {
            taskList[i].taskStatus = 'todo';
            todo.push(taskList[i]);
        } else {
            taskList[i].taskStatus = 'done';
            done.push(taskList[i]);
        }
    }

    addTasksToLocalStorage('todo', todo);
    addTasksToLocalStorage('inprogress', inprogress);
    addTasksToLocalStorage('done', done);   
}

// add tasks to the localStorage
function addTasksToLocalStorage(key, taskList) {
    var stringify = JSON.stringify(taskList);

    localStorage.setItem(key, stringify);
    initBoard(key);
}

// init bord
function initBoard(key) {
    var currentKey = localStorage.getItem(key);
    var parsedArray = JSON.parse(currentKey);
    
    status.createTasks(key, parsedArray);
    status.printTasks(key);
}

// create new task
var showFormbutton = document.querySelector('.show-form');
var formPopup = document.querySelector('.form-cover');
var form = document.getElementById('create-todo');

// show form
showFormbutton.addEventListener('click', openForm);

function openForm() {
    formPopup.classList.add('active');
}

// submit form
form.addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault;
    var newTask = {};
    var user = document.getElementById('user');
    var description = document.getElementById('description');
    var id = status.itemsCount++;

    newTask.id = id;
    newTask.userId = user.value;
    newTask.title = description.value;
    newTask.completed = false;
    newTask.taskStatus = 'todo';
    
    if (localStorage.getItem('todo') === null) {
        localStorage.setItem('todo', '[]');
    }

    var todoList = JSON.parse(localStorage.getItem('todo'));
    todoList.push(newTask);
    localStorage.setItem('todo', JSON.stringify(todoList)); 
    window.location.reload();
}

// remove task
function removeTask(e) {
    var currentBoard = event.target.parentNode.parentNode;
    var boardId = currentBoard.getAttribute('id');
    var currentTask = event.target.parentNode.getAttribute('id');
    var taskList = JSON.parse(localStorage.getItem(boardId));

    // remove task from board
    event.target.parentNode.remove();
    
    for (var i = 0; i < taskList.length; i++) {
        if (taskList[i].id == currentTask) {
            taskList.splice(i, 1);
        }
    }

    localStorage.setItem(boardId, JSON.stringify(taskList));
};

// remove item from first board and add to second on drop event
function moveItemToOtherBoard(boardFrom, boardTo, id) {

    var RemoveFromBoard = JSON.parse(localStorage.getItem(boardFrom));
    var addToBoard = JSON.parse(localStorage.getItem(boardTo));
    var currentItem = document.getElementById(id);
    var itemCopy = {};
    
    // remove Item
    for (var i = 0; i < RemoveFromBoard.length; i++) {
        if (RemoveFromBoard[i].id == currentItem.id) {
            itemCopy.userId = RemoveFromBoard[i].userId;
            itemCopy.id = RemoveFromBoard[i].id;
            itemCopy.title = RemoveFromBoard[i].title;
            itemCopy.taskStatus = boardTo;
            RemoveFromBoard.splice(i, 1);
        }
    }

    localStorage.setItem(boardFrom, JSON.stringify(RemoveFromBoard));

    // add Item
    addToBoard.push(itemCopy);
    localStorage.setItem(boardTo, JSON.stringify(addToBoard));
}
