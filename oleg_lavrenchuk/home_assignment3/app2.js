// всё правильно

function applyAll() {
  var mass = [];
  for (key in arguments) {
    mass.push(arguments[key]);
  }
  mass.splice(0, 1);
  return arguments[0](mass);
}

function mathMax(arg) {
  return Math.max.apply(this, arg);
}

function mathMin(arg) {
  return Math.min.apply(this, arg);
}

function sum(arg) {
  return [].reduce.call(arg, function(a, b) {
    return a + b;
  });
}

function mul(arg) {
  return [].reduce.call(arg, function(a, b) {
    return a * b;
  });
}
console.log(applyAll(mathMax, 12, 7, 4));
console.log(applyAll(mathMin, 12, 7, 4));
console.log(applyAll(sum, 12, 7, 4));
console.log(applyAll(mul, 12, 7, 4));
