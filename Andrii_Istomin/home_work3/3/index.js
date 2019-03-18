// в call первый аргумент - контекст вызова, а не ф-ция
function add(x, y) {
  alert(x + y);
}
function subtract(x, y) {
  alert(x - y);
}
subtract.call(add, 1, 2);
