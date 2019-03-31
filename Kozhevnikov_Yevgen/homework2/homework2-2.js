function CarWithManulTransmission (wheels, color){
  this.wheels = wheels || 4;
  this.color = color || 'white';
  this.engineOn = false;
  this.transmission = 0;
  this.setTransmission = function(n) {
    this.transmission = n;
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
    this.setTransmission(1);
    console.log("Im driving. I'm a " + this.color + " car");
  }
}

var ford = new CarWithManulTransmission(undefined, 'red');
ford.drive();



function CarWithAutomaticTransmission (wheels, color, speed){
  this.wheels = wheels || 4;
  this.color = color || 'white';
  this.speed = speed || 0;
  this.transmission = Math.ceil(this.speed / 20);
  this.engineOn = false;
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
    console.log("Im driving. I'm a " + this.color + " car. My current speed is " + this.speed + " and autoset transmission is " + this.transmission);
  }
}

var mersedes = new CarWithAutomaticTransmission(undefined, 'black', 65);
mersedes.drive();

var bmw = new CarWithAutomaticTransmission(undefined, 'white', 83);
bmw.drive();