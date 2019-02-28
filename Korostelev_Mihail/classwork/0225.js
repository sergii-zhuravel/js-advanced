//ВКЛЮЧИ  QUOQA
var obj = {};
obj
console.log(obj.test);
// obj = { test:'test'} не верньій формат добавления ключа в обект
// obj.test = 'test' верньій формат добавления ключа в обект
console.log(obj.hasOwnProperty('test'));
//добавляем ключ
obj.test = 'test';
console.log(obj.hasOwnProperty('test'));

//удалить свойство
obj
delete obj.test;
obj

//
console.log(obj.hasOwnProperty('toString'));
console.log(obj.toString);//function

console.log(obj.__proto__.hasOwnProperty('toString'))//обращение к прототипу

var myObj = {keyName1:'value1',keyName2:'value2'};
for (var keyName in myObj){
    console.log(keyName + ' = ' + myObj[keyName]);//myObj.keyName вьізьівает undefined
}

//.this

var object = {
    welcomeMessage: function(){
        console.log("Hello world");
    }
};
object.welcomeMessage()
/*if (typeof object.welcomeMessage === 'function'){

}*/
console.log(typeof object.welcomeMessage === 'function');
console.log(typeof typeof(object))

//меняем приветствие, делаем динамическое
//вариант использования this
var objectOne = {
    name: 'Nick',
    welcomeMessageOne : function(){
        console.log("Hello " + this.name);
    }
};
console.log("1")
console.log(objectOne.welcomeMessageOne())

//
function person(name){
    this.name = name,
    this.greeting = function(){
        console.log('Hello ' + name);
    }
};
var obbj = new person('Mick');
var hob = new person('Oleg')
hob.greeting()
