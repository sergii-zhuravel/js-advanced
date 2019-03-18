// нет иерархии наследования
//class extends
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  stop() {
    this.speed = 0;
    alert(this.name + " на месте");
  }
  run(speed) {
    this.speed += speed;
    alert(this.name + " бежит со скоростью " + this.speed);
  }
}

class Rodent {
  jump() {
    this.speed++;
    alert(this.name + " прыгает со скоростю " + this.speed);
  }
}

class Hamster {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  eat() {
    this.speed++;
    alert(this.name + " ест " + this.speed);
  }
}


Rodent.prototype = Object.create(Animal.prototype);
Rodent.prototype.constructor = Rodent;

Hamster.prototype = Object.create(Hamster.prototype);
Hamster.prototype.constructor = Hamster;

//function extends

function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.stop = function() {
  this.speed = 0;
  alert(this.name + " на месте");
};

Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert(this.name + " бежит со скоростью " + this.speed);
};

function Rodent(name) {
  this.name = name;
  this.speed = 0;
}

Rodent.prototype = Object.create(Animal.prototype);
Rodent.prototype.constructor = Rodent;

Rodent.prototype.jump = function() {
  this.speed++;
  alert(this.name + " прыгает со скоростю " + this.speed);
};

function Hamster(name){
  this.name = name;
}

Hamster.prototype = Object.create(Rodent.prototype);
Hamster.prototype.constructor = Hamster;