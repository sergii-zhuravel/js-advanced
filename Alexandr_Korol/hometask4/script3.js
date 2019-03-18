// правильно
class Base {
    constructor(){
        this.basevariable = 1;
        this.forpublic = 500;
    }
    getvar(){
        return this.basevariable;
     }
    
}
class Derived extends Base{
    constructor(){
        super()
        this.inform = 2;
        this.basevariable = 'inform';
    }
    input(){
        console.log('Here should be some input');
    }
}
class Derived2 extends Derived{
    constructor(){
        super()
        this.somevar = 12;
    }
    basevar(){
        console.log(this.getvar());
    }
}
class Derived3 extends Derived{
    constructor(){
        super()
        this.something = 3
        this.forpublic = 'something'
        
    }
    
    changevar(){
        console.log(this.forpublic);
    }
}
var ob = new Derived3();
console.log(ob.getvar());