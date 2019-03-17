/*------------------------
Задача 3.1
------------------------
Создать "Класс"/функцию конструктор с 3 полями и 2мя методами которые работают с this

Описание класса:

Pizza
 - toppings []
 - bortik Boolean
 - size String
 - makePizza (return a string that lists all Pizza fields in format - "{size} Pizza with {bortik} and with toppings {toppings})
 - packPizza (return a string like "Pizza packed into {size}box)

 Подумайте и предложите как можно улучшить модель/абстракцию

 Создайте 2 пиццы - одну с разными топингами, одну с бортиком и одну без.
 Пример создания пиццы: var myPizza = new Pizza(['onion', 'bekon', 'tomato'], true, 'big')

 Вызовите методы у созданных обьектов.
------------------------*/
function Pizza(toppings, bortik, size) {
  this.toppings = toppings;
  this.bortik = bortik || false;
  this.size = size || "Middle";
  this.makePizza = function() {
    console.log(
      this.size +
        ' Pizza with bortik " ' +
        this.bortik +
        '" and with toppings: ' +
        this.toppings.join(", ") +
        "."
    );
  };
  this.packPizza = function() {
    console.log("Pizza packed into " + this.size + " box");
  };
}
var myPizza1 = new Pizza(["double cheese", "onion", "tomato"], false, "36 sm");
myPizza1.makePizza();
myPizza1.packPizza();
var myPizza2 = new Pizza(
  ["four cheeses", "beckon", "mushrooms"],
  "hot-dog",
  "small"
);
myPizza2.makePizza();
myPizza2.packPizza();
