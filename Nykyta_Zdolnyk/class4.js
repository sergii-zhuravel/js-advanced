// function createCounter(n) { //замыкание
//     return function() {
//         return ++n;
//     }
// }

function countDown(n) {
    if (n === 0) return 0;
    console.log(n);
    return countDown(n-1)
}

// countDown(10);
var sum = 0;
function sumNumbers (n) {
    if (n <= 0) return 0;
    return n + sumNumbers(n-1); 
     
}

var o = {};
// console.log(sumNumbers(10));
function listProto(obj) {
    if (obj === null) return null;
    return  typeof(obj) + ' => ' + listProto(obj.__proto__);
}
// console.log(listProto(Array))

var Kolya = {
    name: 'Kolya',
    sayHello: function() {
        console.log("Hello, I'm " + this.name);
    }
}

var sonOfKolya = {
    name: "Vadim"
}

sonOfKolya.__proto__ = Kolya;
// sonOfKolya.sayHello();

function Person (name) {
    this.name = name;
    this.sayHello = function(){
        console.log("Hello, I'm " + this.name);
    }
}

var grandFather = {
    sleep: function(){
        console.log('I cannot sleep');
    }
}

var newPerson = new Person('Test');

// console.log(newPerson.__proto__)

var simpleCalculator = {
    read: function() {
       this.a = Number(prompt("Введите первое число")); 
       this.b = Number(prompt("Введите второе число")); 
    },
    sum: function() {
        return this.a + this.b;
    },
    sub: function() {
        return this.a - this.b;
    }
}

var advanceCalculator = {
    div: function() {
        return this.a / this.b;
    },
    pow: function() {
        return this.a * this.b;
    }
}

advanceCalculator.__proto__ = simpleCalculator;

//advanceCalculator.read();
//console.log(advanceCalculator.pow());

// function SimpleCalculator() {}

// function AdvanceCalculator() {}

// SimpleCalculator.prototype.read = function() {
//     this.a = Number(prompt("Введите первое число")); 
//     this.b = Number(prompt("Введите второе число")); 
//  }


// SimpleCalculator.prototype.sum  = function() { return this.a + this.b; }

// SimpleCalculator.prototype.sub  = function() { return this.a - this.b; }

// AdvanceCalculator.prototype.div = function() { return this.a / this.b; }

// AdvanceCalculator.prototype.pow = function() { return this.a * this.b; }

// AdvanceCalculator.prototype = new SimpleCalculator();

// var calc = new AdvanceCalculator();
// calc.read();
// console.log(calc.sum());

class SimpleCalculator {
    read() {
        this.a = Number(prompt("Введите первое число")); 
        this.b = Number(prompt("Введите второе число"));
    }
    sum() { return this.a + this.b; }
    sub() { return this.a - this.b; }
} 

class AdvanceCalculator extends SimpleCalculator {
    div() { return this.a / this.b;}
    pow() { return this.a * this.b; }
}

var calc = new AdvanceCalculator;
calc.read();
console.log(calc.sub());
