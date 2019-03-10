var SimpleCalculator = {
    read: function(a,b){
    this.numberFirst = a//+prompt("Enter first number");
    this.numberSecond = b//+prompt("Enter first number");
},
    sum: function(){
        return this.numberFirst + this.numberSecond;
    },
    sub: function(){
        return this.numberFirst - this.numberSecond;
    }
}
console.log(SimpleCalculator.read(3,4));
console.log(SimpleCalculator.sum());

var AdvancedCalculator = {
    div: function(){
        return this.numberFirst / this.numberSecond;
    },
    pow: function(){
        return this.numberFirst * this.numberSecond;
    }
}
AdvancedCalculator.__proto__ = SimpleCalculator;
console.log(AdvancedCalculator.div());


/* function SimpleCalculator () {
    this.numberFirst = 0;
    this.numberSecond = 0;
};
SimpleCalculator.prototype.read = function() {
        this.numberFirst = 3//+prompt("Enter first number");
        this.numberSecond = 4//+prompt("Enter first number");
}
SimpleCalculator.prototype.sum = function(){
        return this.numberFirst + this.numberSecond;
};
SimpleCalculator.prototype.sub = function(){
        return this.numberFirst - this.numberSecond;
}
var simpleCalculator = new SimpleCalculator();
console.log(simpleCalculator.read());
console.log(simpleCalculator.sum());

function AdvancedCalculator () {
    this.numberFirst = 0;
    this.numberSecond = 0;

    this.div = function(){
        return this.numberFirst / this.numberSecond;
    };
    this.pow = function(){
        return this.numberFirst * this.numberSecond;
    };
}

AdvancedCalculator.prototype = SimpleCalculator.prototype;
var adv = new AdvancedCalculator();
console.log(adv.sum());

class AdvancedCalculator1{
    constructor(n1, n2){
        this.numberFirst = n1//+prompt("Enter first number");
        this.numberSecond = n2//+prompt("Enter first number");
    };
    read(){
        console.log(this.numberFirst, this.numberSecond)
    }
    div (){
        return this.numberFirst / this.numberSecond;
    };
    pow(){
        return this.numberFirst * this.numberSecond;
    };
}
class SimpleCalculator1 extends AdvancedCalculator1{
    constructor(n1,n2) {
        super(n1,n2);
    }
    sum(){
            return this.numberFirst + this.numberSecond;
        };
    sub(){
            return this.numberFirst - this.numberSecond;
        }
}
var calc = new SimpleCalculator1(5, 7);
calc.read();
console.log(calc.sum()); */