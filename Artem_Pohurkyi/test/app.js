// function sumNum(n){
//   if (n <= 0) return 0;
//   return n + sumNum(n - 1);
// }

// suma chisel chisla

// function listPrototypes(o){
// if(o === null) return 'null';
// return typeof o + '=>' + listPrototypes(o.__proto__);
// }
// listPrototypes({});

// spisok prototipov
 

// var Kolya = {
//   name: 'Kolya',
//   sayHello: function(){
//     console.log("Hello, I'm " + this.name);
//   }
// }
// var SonOfKolya = {
//   name: 'Valera'
// }

// SonOfKolya.__proto__ = Kolya;
// SonOfKolya.sayHello();

// listPrototypes(SonOfKolya)

// ___________________



// function Person(name){
//   //this = {}
//   this.name = name;
//   this.sayHello = function(){
//     console.log("Hello, I'm " + this.name);
//   }
//   //this.__proto__ = Person.prototype
// }

// var grandfather = {
//   sleep: function(){
//     console.log("I cannot sleep")
//   }
// }
// Person.prototype = grandfather;
// var newPerson = new Person("test")



// function Person(name){
//  this.name = name;
// }
// Person.prototype.sayHello = function(){
//   console.log("Hello, I'm " + this.name);
// }

// var o = new Person('sdgfsd')
// o.sayHello()

// var SimpleCalculator = {
//   read: function read(){
//     first = prompt('Enter first value: '),
//     second = prompt('Enter second value: ')
//   },
//   sum: function sum(){
//     return first + second;
//   },
//   sub: function sub(){
//     return first - second;
//   }
// }

// var AdvancedCalculator = {
//   div: function div(){
//     return first / second;
//   },
//   pow: function pow(){
//     return first * second;
//   }
// }

// AdvancedCalculator.__proto__ = SimpleCalculator;

class SimpleCalculator{
    constructor(a, b){
        this.a = 10;
        this.b = 5;
    }
    showSum(){
        console.log(a + b);
    }
}

class AdvancedCalculator extends SimpleCalculator{
    constructor(a, b){
        super(a,b)
    }
    showPow(){
        console.log(a * b);
    }
}

var sCalc = new SimpleCalculator(10, 5);
var aCalc = new AdvancedCalculator(10, 5);

aCalc.showSum(10, 5);