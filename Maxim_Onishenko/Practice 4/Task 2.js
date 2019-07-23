function adder(n){
    return function (m){
        return n + m;
    }
}
let myAdder = adder(5);
myAdder(4)