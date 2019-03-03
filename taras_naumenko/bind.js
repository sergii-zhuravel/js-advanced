//привязка контекста с помощью bind
function f() {
  alert( this );
}
var g = bind(f, "Context");
g();

привязка контекста с помощью call/apply
function() {
  return f.apply("Context", arguments);
};