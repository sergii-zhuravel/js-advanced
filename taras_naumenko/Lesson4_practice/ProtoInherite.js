//Создать иерархию объектов с помощью прототипного наследования (3 уровня)
var animal = {
  eats: true
};

var beast = {
  run: true
};

var lion = {
  hunter: true
};

beast.__proto__ = animal;
lion.__proto__ = beast;

console.log(lion.eats);
console.log(lion.run);
console.log(lion.hunter);

//Создать туже самую цепочку насследования но с помощью ES6 классов
class Animal {
  constructor(name) {
    this.name = name;
  }

   showAnimal() {
    console.log("I am animal")
  }
}

class Beast extends Animal {
  showBeast() {
    console.log("I am a beast")
  }
}

class Lion extends Beast {
  showLion() {
    console.log("I am a Lion")
  }
}

var thisLion = new Lion();
thisLion.showAnimal();
thisLion.showBeast();
thisLion.showLion();

