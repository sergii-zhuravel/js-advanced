/* ------------------------
Задача 4.2
------------------------
1) Создать иерархию объектов с помощью прототипного наследования (3 уровня)
2) Создать туже самую цепочку насследования но с помощью ES6 классов
------------------------ */
var MilitaryBattalion = {
  allStrength: function(x) {
    this.strength = x;
  },
  headquaters: function() {
    return Math.floor(this.strength / 4);
  }
};
var Squadrons = {
  ArmouredSquadron: function() {
    return Math.floor(this.strength / 2);
  },
  SupportSquadron: function() {
    return Math.floor(this.strength / 4);
  }
};
var platoons = {
  armouredPlatoon: function() {
    return Math.floor(this.strength / 5);
  },
  supportPlatoon: function() {
    return Math.floor(this.strength / 10);
  }
};
MilitaryBattalion.__proto__ = Squadrons;
Squadrons.__proto__ = platoons;
console.log(MilitaryBattalion.allStrength(100));
console.log(MilitaryBattalion.ArmouredSquadron());
console.log(MilitaryBattalion.SupportSquadron());
console.log(MilitaryBattalion.armouredPlatoon());
console.log(MilitaryBattalion.supportPlatoon());

class MilitaryBattalionClassExample {
  constructor(x) {
    this.strength = x;
  }
  allStrengthClassExample() {
    console.log(this.strength);
  }
  headquatersClassExample() {
    return Math.floor(this.strength / 4);
  }
}
class SquadronsClassExample extends MilitaryBattalionClassExample {
  constructor(x) {
    super(x);
  }
  ArmouredSquadronClassExample() {
    return Math.floor(this.strength / 2);
  }
  SupportSquadronClassExample() {
    return Math.floor(this.strength / 4);
  }
}
class platoonsClassExample extends SquadronsClassExample {
  constructor(x) {
    super(x);
  }
  armouredPlatoonClassExample() {
    return Math.floor(this.strength / 5);
  }
  supportPlatoonClassExample() {
    return Math.floor(this.strength / 10);
  }
}

var battalion = new MilitaryBattalionClassExample(100);
var squad = new SquadronsClassExample(100);
var plat1 = new platoonsClassExample(100);
console.log(battalion.headquatersClassExample());
console.log(squad.headquatersClassExample());
console.log(plat1.headquatersClassExample());
console.log(plat1.ArmouredSquadronClassExample());
