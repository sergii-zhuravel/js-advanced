// window.addEventListener('storage', updateUIState, false); // standard way, but doesn't work in all browsers
var event = new Event('store');
document.addEventListener('store', updateUIState, false);


document.addEventListener('DOMContentLoaded', function(){
    // window.onstorage = updateUIState;
})
var todoItemTemplate = document.getElementById('todo-list').firstElementChild;

function addItem() {
    var input = document.getElementById('todo-input');
    var todosCount = localStorage['todos.count'] || 0;
    localStorage['todo.item.' + ++todosCount] = input.value;
    localStorage['todos.count'] = todosCount;
    input.value = '';
    // console.log('New item was added into LocalStorage');
    updateUIState();
}

function updateUIState(e) {
    var todosCount = localStorage['todos.count'] || 0;
    if (!todosCount) return false;
    for (var i = 1; i <= todosCount; i++) {
        console.log(localStorage['todo.item.' + i]);
        var newItem = todoItemTemplate.cloneNode(true);
        newItem.firstChild.textContent = input.value;
    }
}


// function getCookie(key) {
//     var cs = document.cookie.split('; ');
//     for(var i = 0; i <= cs.length; i++) {
//      var cookieKeyValue = cs[i].split('=');
//     if (cookieKeyValue[0] === key) return cookieKeyValue[1];
//     }
//     return null;
//   }

// function setCookie(key, value, expires) {
//   var date  = new Date;
//   date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
//   document.cookie = key + '=' + value + ';path=/;expires=' + date.toUTCString();
// }

// setCookie('age', 20, 3)


// function deleteCookie(key) {
//   setCookie(key, '', -1);
// }
// deleteCookie('age')