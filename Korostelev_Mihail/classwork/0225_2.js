/*Задача 1.1
--------------------------------------------------
Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
*/

function Calculator () {
this.read = function () {
    this.a = 5;
    this.b = 6;
};
this.sum = function (){
    return this.a+this.b;
}
this.mul = function (){
 return this.a*this.b
}
}
var calculator = new  Calculator() //this == new object
calculator.read();//this == calculator
calculator.sum();
calculator.mul();
var myOwmSum = calculator.read;
myOwmSum() //this == undefined
myOwmSum.call(calculator);//вьізвать отдельную функцию и передать контекст
var tempObj = {
    a: 2,
    b: 3
};
//разница в способе передачи
myOwmSum.call(tempObj,2);//
myOwmSum.call(tempObj,[2]);//передает массив

var arr = [4,5,10];
var r = Math.max.apply(this,arr);


var character = {
    step: 0,
    up: function() { // вверх
      this.step++;
      return this;//ответ
    },
    down: function() { // вниз
      this.step--;
      return this;//ответ
    },
    showPosition: function() { // вывести текущую позицию
      console.log( this.step );
    }
  };

character.up();
character.up();
character.down();
//character.showPosition(); // 1
//character.up().up().down().showPosition();
character.up().up().down().up().down().showPosition();//ответ