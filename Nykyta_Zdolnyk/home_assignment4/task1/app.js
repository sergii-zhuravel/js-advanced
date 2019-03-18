// правильно
function makeAdder(n) {
    var num = n;
  return function(m) {
      num += m;
    return num;
  };
}

var add10 = makeAdder(10);
console.log(add10(25));
