function adder(a,b){
    return a+b;
}
let myAdder =adder.bind(null,5)
myAdder(10)