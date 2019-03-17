function createCounter(){//
    var number = 0;
    return function () {
        return ++number;
    }
}
var counter1 = createCounter();//два не связанньіх счетчика
console.log(counter1());
console.log(counter1());
var counter2 = createCounter();
console.log(counter2());
console.log(counter2());

//с возможностью задавать свое значени счечик
function createCounter1(n){//
     return function () {
        return ++n;
    }
}
var counter11 = createCounter1();
console.log(counter11());//Nan  не задали значение
var counter12 = createCounter1(2);
console.log(counter12());//значение

//рекурсивная функция ОБЯЗАТЕЛЬНО условие прекращения
function countDown(){
    if(n === 0)return 0;//=== не правильное условие при минус значении цікл бесконечен
    console.log(n);
    return countDown(n--);
}

//cycle
function num(n){
    var sum = 0;//аккумулятор
    for (var i = 0; i <= n; i++){
        sum += i;
    }
    return sum
}
console.log(num(5));

//рекурсия
function numRecursia(n){
    if (n <= 1) return 0;
    return n + numRecursia(n-1);
}
console.log(numRecursia(2));

//ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ

//({})//создание обьекта
//({}).__proto__//object встроенньій
//({}).__proto__.__proto__//NULL
//({}).__proto__.__proto__.__proto__//ошибка у NULL нет Object (проверять обязательно на NULL) єто пик прототипов
//мой вариант
function protoProto(n){
    if (n === null) return NULL;
return n.__proto__;
}
console.log(protoProto(2))

//правильній вариант
function protoProtoTrue(n){
    if (n === null) return `NULL`;
return typeof n + ' => ' + protoProtoTrue(n.__proto__);
}
console.log(protoProtoTrue(2));

//НАСЛЕДОВАНИЕ
var Kolya = {
    name: 'Kolya',
    sayHello: function(){
        console.log('Hello I`m ' + this.name);
    }
}
var sonOfKolya = {
name: "Vlad"
}
sonOfKolya.__proto__ = Kolya; //привязка к предку(все пунктьі которіе не заданьі ранее наследнику скопируються/унаследуються)
sonOfKolya.sayHello();

//НАСЛЕДОВАНИЕ 2
function Person(name){
    this.name = name;
    this.sayHello = function (){
        console.log('Hello, my name is ' + this.name);
    }
}
var grandFather = {
    sleep: function(){
        console.log('I cant sleep');
    }
}
var newPerson = new Person('test');
newPerson.__proto__ = grandFather;
console.log(newPerson.__proto__);
console.log(grandFather.__proto__) 
/*function SUPERPERSON(){

}*/

//как создать прототип для наследования всеми
function Person1(name){
    this.name = name;
}

Person1.prototype.sayHello = function (){
        console.log('Hello, my name is ' + this.name);
    }
var father = new Person1('Jack');
console.log(father.__proto__);
father.sayHello();