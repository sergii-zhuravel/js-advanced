//ex1
function Pizza(toppings, bortik, size) {
    this.toppings = toppings;
    this.bortik = bortik;
    this.size = size;
    this.makePizza = function () {
        rez = this.size + ' Pizza'; // with {bortik} and with toppings {toppings}';
        if (this.bortik) {
            rez = rez + ' with bortik and'
        };
        rez = rez + ' with toppings: ' + toppings.join(', ');
        return rez;
    }
    this.packPizza = function () {
        return 'Pizza packed into ' + this.size + ' box';
    }
}

var myPizza1 = new Pizza(['onion', 'bekon', 'tomato'], true, 'big');
console.log(myPizza1.makePizza());
console.log(myPizza1.packPizza());

var myPizza2 = new Pizza(['bekon', 'tomato'], false, 'big');
console.log(myPizza2.makePizza());
console.log(myPizza2.packPizza());

//ex2

function applyAll(func) {
    var args = [].slice.call(arguments).slice(1);
    return func.apply(null, args);
}

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

var myMax = applyAll(Math.max, 2, 3, 4);
var myMin = applyAll(Math.min, 2, 3, 4);
var myMul = applyAll(mul, 2, 3, 4);
var mySum = applyAll(sum, 2, 3, 4);

console.log(myMax);
console.log(myMin);
console.log(myMul);
console.log(mySum);

//ex3 bind, call, apply
function f(a, b) {
    console.log(this);
    console.log((this.n1 + this.n2) * a + b );
}

var num = {
    n1 : 1,
    n2 : 2};

var g1 = f.bind(num);
g1(3, 4);

var g2 = f.call(num, 3, 4);

var g3 = f.apply(num, [3, 4]);

