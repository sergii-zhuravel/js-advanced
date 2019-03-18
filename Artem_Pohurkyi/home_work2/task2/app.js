// работает правильно, есть рекомендации
function CarWithAutomaticTransmission(wheels, color, speed) {
  this.wheels = wheels || 4;
  this.color = color || "white";
  this.engineOn = false;
  this.speed = speed || 0; //  km/h
  this.Transmission = function() { // методы лучше называть camelCase и как действие, например changeTransmission или switchTransmission
    if ((speed > 0 && speed < 20) || speed == 20) { // можно (speed > 0 && speed <= 20)
      this.transmission = 1;
    };
    if ((speed > 20 && speed < 50) || speed == 50) {
      this.transmission = 2;
    };
    if ((speed > 50 && speed < 80) || speed == 80) {
      this.transmission = 3;
    };
    if ((speed > 80 && speed < 110) || speed == 110) {
      this.transmission = 4;
    };
    if (speed > 110) {
      this.transmission = 5;
    };
    return this.transmission;
  };
  this.switchEngine = function() {
    if (this.engineOn) {
      console.log("Turning engine off");
      this.engineOn = false;
    } else {
      console.log("Turning engine on");
      this.engineOn = true;
    }
  };
  this.drive = function() {
    this.switchEngine();
    this.Transmission();
    console.log("Im driving. I'm a " + this.color + " car");
  };
}

var ford = new CarWithAutomaticTransmission(undefined, "red", 50);
var opel = new CarWithAutomaticTransmission(undefined, "green", 90);
var motorbike = new CarWithAutomaticTransmission(2, "green", 70);
ford.drive();
opel.drive();
motorbike.drive();
