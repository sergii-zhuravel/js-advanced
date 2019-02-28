// var myCar = new Object();
// myCar.make = 'ZAZ';
// myCar.model = 'Tavria';
// myCar.year = '1989';
// myCar
// console.log(myCar.hasOwnProperty('model'))

// if (myCar.hasOwnProperty('model')) {
//   console.log(myCar.hasOwnProperty('model'));
// }

//////////////////////////

// var myCar = {
//     make: 'ZAZ',
//     model: 'Tavria',
//     year: '1989'
// }

/////////////////////////

// var o = Object.create()
// delete test;
// function testFunction() {
//     console.log(this);
//     console.log(this.test);
// }

// test = "Hello"
// //testFunction()

// var myObject = {
//   test: "Hello from my object",
//   testFunction: testFunction
// }

// myObject.testFunction()

var robot = {
  name: "QBot",
  humanLike: false,
  greating: function(a, b) {
    console.log("Hello, I'm a " + this.name + " - " + (this.humanLike ? "human like " : "not a human like ") + "robot");
  }
}

var robot2 = {
  name: "Rbot",
  humanLike: true
}

function myBind (func, context) {
  var args = [].slice.call(arguments);

  var returnFunction = function() {
    return func.apply(context, args);
  }
  return returnFunction;
}

var test = myBind(robot.greating, robot2);

test(1, 3);

// var outerFunction = robot.greating.bind(robot, 2, 1);
// outerFunction(3)
// console.log(outerFuntion == robot.greating)

//outerFuntion.call(robot);
//outerFuntion.call(null, 1, 2);
// var m = [4, 5, 6, 2, 9];
// console.log(Math.max.call(null, 3, 4, 1));
// console.log(Math.max.apply(null, m));


//robot.greating();

////////////////////////
// method borrowing

// function printArgs() {
//     arguments.join = [].join; // одолжили метод (1)
  
//     var argStr = arguments.join(':'); // (2)
  
//     console.log( argStr ); // сработает и выведет 1:2:3
//   }
  
//   printArgs(1, 2, 3);

// function printArgs() {
//     // вызов arr.slice() скопирует все элементы из this в новый массив
//     var args = [].slice.call(arguments);
//     console.log( args.join(', ') ); // args - полноценный массив из аргументов
//   }
  
//   printArgs('Ok', 'google', '!'); 

////////////////////////

// function showFullName() {
//     alert( this.firstName + " " + this.lastName );
//   }
  
//   var user = {
//     firstName: "Микита",
//     lastName: "Кожум'яка"
//   };
  
//   // функция вызовется с this=user
//   showFullName.call(user)

// После контекста в call можно передать аргументы для функции. Вот пример с более сложным вариантом showFullName, который конструирует ответ из указанных свойств объекта:
// var user = {
//     firstName: "Василий",
//     surname: "Петров",
//     patronym: "Иванович"
//   };
  
//   function showFullName(firstPart, lastPart) {
//     console.log( this[firstPart] + " " + this[lastPart] );
//   }
  
//   // f.call(контекст, аргумент1, аргумент2, ...)
//   showFullName.call(user, 'firstName', 'surname') // "Василий Петров"
//   showFullName.call(user, 'firstName', 'patronym') // "Василий Иванович"


///// apply
var arr = [3, 5, 6, 1]
console.log(Math.max(null, arr))


