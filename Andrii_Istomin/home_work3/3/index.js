function add(x, y) {
  alert(x + y);
}
function subtract(x, y) {
  alert(x - y);
}
subtract.call(add, 1, 2);
