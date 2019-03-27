//ex1
function makeAdder(a) {
    var a = a;
    return function(b) {
        return a + b;
    }
}

var add10 = makeAdder(10);
console.log(add10(25));

//ex2.1
var Unit = {
    name: 'Unit1'
}

var SubUnit = {
    subname: 'Unit1.1'
}

var SubSubUnit = {
    subsubname: 'Unit1.1.1'
}

SubSubUnit.__proto__ = SubUnit;
SubUnit.__proto__ = Unit;

console.log(SubSubUnit.name);
console.log(SubSubUnit.subname);
console.log(SubSubUnit.subsubname);

//ex2.2
class ClUnit{
    constructor(){
        this.name = 'Unit1';
    }    
}

class ClSubUnit extends ClUnit{
    constructor(){
        super();
        this.subname = 'Unit1.1';
    }    
}

class ClSubSubUnit extends ClSubUnit{
    constructor(){
        super();
        this.subsubname = 'Unit1.1.1';
    }    
}

var elClUnit = new (ClUnit);
var elClSubUnit = new (ClSubUnit);
var elClSubSubUnit = new (ClSubSubUnit);

console.log(elClSubSubUnit.name);
console.log(elClSubSubUnit.subname);
console.log(elClSubSubUnit.subsubname);