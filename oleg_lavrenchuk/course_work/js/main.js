class RequestAndRemove {
    constructor(url) {
        this.url = url;
        this.buttonAdd = document.querySelector('.input_button_add');
        this.buttonAdd.addEventListener('click', this.addTodo);
        this.downloadButton = document.querySelector('.button_download');
        this.downloadButton.addEventListener('click', this.downloadTodos);
    }
    async request() {
        var response = await fetch(url);
        this.object = await response.json();
        this.object.length = 10;
    }
    removeElement(event) {
        this.id = event.target.parentNode.id;
        for (var key in localStorage) {
            this.newKey = key.replace(/[0-9]/g, '');
            localStorage.removeItem(`${this.newKey}${this.id}`, localStorage[`${this.newKey}${this.id}`]);
        }
        event.target.parentNode.remove();
    }
};

class CreateTodos extends RequestAndRemove {
    createElements(obj) {
        var firstContent = document.querySelector('.first_content_todo');
        for (var i = 0; i < obj.length; i++) {
            var arr = obj[i];
            var todo = document.createElement('div');
            var span = document.createElement('span');
            var img = document.createElement('img');
            img.id = "del";
            img.addEventListener('click', super.removeElement);
            img.setAttribute('src', 'img/icon.svg');
            todo.draggable = true;
            todo.setAttribute('ondragstart', 'drag(event)');
            todo.classList.add('todos');
            if (obj[i].hasOwnProperty(`title`)) {
                span.innerHTML = arr.title + '<br>';
                todo.id = arr.id;
            } else {
                var m = Object.getOwnPropertyNames(arr);
                var check = document.getElementById(arr[m[i + 1]]);
                if (check) {
                    check.remove();
                }
                span.innerHTML = arr[m[i]] + ' <b>(download with LocalStorage)</b>' + '<br>';
                todo.id = arr[m[i + 1]];
            }
        }
        todo.appendChild(img);
        todo.appendChild(span);
        firstContent.appendChild(todo);
    }
};

class CheckLocalStorage extends CreateTodos {
    hasInlocalStorage() {
        var localObj = JSON.parse(JSON.stringify(localStorage));
        for (var i = 0; i < this.object.length; i++) {
            if (localObj[`title${i + 1}`] == this.object[i].title && localObj[`id${i + 1}`] == this.object[i].id || Object.keys(this.object).length == 0) {
                var newObj = {};
                var newArr = [];
                newObj[`title${i + 1}`] = localObj[`title${i + 1}`];
                newObj[`id${i + 1}`] = localObj[`id${i + 1}`];
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
};

class Commands extends CheckLocalStorage {
    addTodo() {
        var inp = document.querySelector('.input_todo');
        if (inp.value.trim().length === 0) {
            return 0;
        }
        var arr = [];
        var inpTodo = {};
        inpTodo.title = inp.value;
        inp.value = '';
        inpTodo.id = 'num' + Math.round(Math.random() * (1000 - 1) + 1);
        arr.push(inpTodo);
        super.createElements(arr);
    }

    async downloadTodos() {
        await super.request();
        super.hasInlocalStorage();
    }
};

var url = 'https://jsonplaceholder.typicode.com/todos';
new Commands(url);

