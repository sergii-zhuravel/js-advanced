var toDo = [];
count = 0;

runMyApp();

function runMyApp() {
  welcomeMes();
  askNextCommandWithDelay();
}

function askNextCommandWithDelay() {
  setTimeout(chooseCom, 20);
}

function welcomeMes() {
  var welMes = `<h1 id="welc"> Welcome to the app ToDo </h1>`;
  document.writeln(welMes);
}

function chooseCom() {
  var comm = prompt(`
   Enter the command:
         1: add a new task
         2: show tasks
         3: sort array toDo by Title
         0: finish work`);
  switch (comm) {
    case "1":
      addNewTask();
      break;
    case "2":
      showTask();
      break;
    case "3":
      sortList();
      break;
    case "0":
      finishWork();
  }
}

function addNewTask() {
  var newTask = prompt(`Please enter new task:`);
  toDo.push({ title: newTask, id: count++ });
  askNextCommandWithDelay();
}

function showTask() {
  clearScreen();
  for (i = 0; i < toDo.length; i++) {
    document.body.innerHTML +=
      "ID: " + toDo[i].id + " - Title: " + toDo[i].title + "</br>";
  }
  askNextCommandWithDelay();
}

function clearScreen() {
  document.body.innerHTML = "";
}

function sortList() {
  toDo.sort(function(a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  showTask();
}

function finishWork() {
  var endMes = `<h1 id="eM"> See you later! </h1>`;
  document.body.innerHTML = (endMes);
}

