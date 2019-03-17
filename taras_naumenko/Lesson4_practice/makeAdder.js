function makeAdder(n){
var c = n;
return function(n) {
    return c + n;
  }
}

var add10 = makeAdder(10);
console.log(add10(25));