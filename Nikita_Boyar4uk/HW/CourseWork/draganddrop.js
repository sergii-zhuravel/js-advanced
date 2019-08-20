function onDragStart(event) {
  event.dataTransfer.setData("text", event.target.getAttribute("id"));
  event.dataTransfer.setData("content", event.innerHTML);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var item = document.getElementById(data);

  if (item) {
    state.moveItemToOtherPanel(item.parentElement.id, event.target.id, item.id);
    event.target.appendChild(item);
  } else {
    console.error("Cannot find element, event:", event);
  }
}
