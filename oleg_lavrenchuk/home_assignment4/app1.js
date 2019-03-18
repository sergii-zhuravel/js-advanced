// правильно

function makeAdder(n) {
    var n = n;
    return function(a) {
        return a + n;
    }
}
var add10 = makeAdder(10);
console.log(add10(25));


