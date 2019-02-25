var name = "dfdsfdf";

function Person(name) {
  this.greeting = function() {
    console.log("Hello " + name);
  }
}

// var obj = {
//   name: 'Nick',
//   greeting: function() {
//     console.log("Hello " + this.name);
//   }
// };
var obj = new Person("Mykyta");
obj.greeting();
console.log(obj.name);