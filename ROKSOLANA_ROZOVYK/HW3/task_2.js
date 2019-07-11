function applyAll(func, ...args)
{
    return func.apply(null, args);
}

function sum() {
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
}
  
  function mul() {
    return [].reduce.call(arguments, function(a, b) {
      return a * b;
    });
}

console.log(applyAll(Math.max, 3, 5, 8, 12, 2));
console.log(applyAll(sum, 3, 5, 8, 12, 2));
console.log(applyAll(mul, 3, 5, 8, 12, 2));