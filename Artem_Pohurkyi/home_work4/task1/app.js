// правильно
function makeAdder(n) {
    var n = n;
    return function(count) {
        return n + count;
    }
}

var add10 = makeAdder(10);

console.log(add10(25));