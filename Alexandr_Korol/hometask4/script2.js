var Base = {
     basevariable: 1,
     forpublic: 500,
     getvar: function(){
        return this.basevariable;
     }

}
var Derived = {
    inform: 2,
    basevariable: 'inform',
    input: function(){
        console.log('Here should be some input');
    }   
}
var Derived2 = {
    somevar: 12,
    basevar: function(){
        console.log(this.getvar());
    }
}
var Derived3 = {
    something: 3,
    forpublic: 'something',
    changevar: function(){
        console.log(this.forpublic);
    }
}
Derived.__proto__=Base;
Derived2.__proto__=Derived;
Derived3.__proto__=Derived;
console.log(Derived3.basevariable);
console.log(Derived3.input());
