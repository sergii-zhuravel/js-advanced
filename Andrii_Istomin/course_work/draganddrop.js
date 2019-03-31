var arr = [];
function allowDrop(e) {
    e.preventDefault();
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.setData("content", e.target.textContent);
}
function drop(e, block) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    var content = e.dataTransfer.getData("content");
    if(block.id == "div2"){
        if(arr.indexOf(content) == -1){
            arr.push(content);
        }
    }
    if(block.id == "div1"){
        if(arr.indexOf(content) != -1){
           arr.splice(arr.indexOf(content), 1);
        }
    }
    block.appendChild(document.getElementById(data));
}