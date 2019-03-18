// правильно
function makeAdder(n){
    return function (b){
        return n + b;
    }
}
var add10 = makeAdder(10);
console.log(add10(20))