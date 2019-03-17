class Animal {
  constructor() {
    this.name = "jivotnoe";
    this.legs = 4;
  }
  walk() {
    return "walking";
  }
}

class gullDragon extends Animal {
  constructor() {
    super();
    this.wings = true;
  }
  fly() {
    return "flying";
  }
}

class Tiger extends Animal {
  constructor() {
    this.mustache = true;
  }
  growl() {
    return "grrrrrr";
  }
}

class Cat extends Animal {
  constructor() {
    this.lowSize = true;
    super();
  }
  sleep() {
    return "sleeping";
  }
}
var greyDragon = new gullDragon();
console.log(greyDragon.walk());
var greyCat = new Cat();
console.log(greyCat.growl());
var blackTiger = new Tiger();
console.log(blackTiger.walk());
