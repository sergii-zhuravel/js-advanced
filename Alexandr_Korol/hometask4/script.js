// неправильно
//Функція для 4.1
function makeAdder(n){
    var variable = 15;
    return function summ(){
        return n + variable;
    };
}
var add10 = makeAdder(10);
console.log(add10());

//