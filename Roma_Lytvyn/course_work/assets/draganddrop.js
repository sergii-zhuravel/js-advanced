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
    var targetElem = e.target;
    if (targetElem.classList.contains('task-block')) {
      targetElem = e.target.parentElement;
    }
    if (item.parentElement.id != targetElem.id) {
      moveItemToOtherBoard(item.parentElement.id, targetElem.id, item.id);
      targetElem.appendChild(item);
    }
  } else {
    console.error('Cannot find element, event:', e)
  }
}