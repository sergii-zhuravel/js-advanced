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

class Hamster {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  jump() {
    this.speed++;
    alert(this.name + " прыгает со скоростю " + this.speed);
  }
}

Hamster.prototype = Object.create(Animal.prototype);
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

function Hamster(name) {
  this.name = name;
  this.speed = 0;
}

Hamster.prototype = Object.create(Animal.prototype);
Hamster.prototype.constructor = Hamster;

Hamster.prototype.jump = function() {
  this.speed++;
  alert(this.name + " прыгает со скоростю " + this.speed);
};
