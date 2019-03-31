function CarWithAutomaticTransmission(wheels, color) {
  this.wheels = wheels || 4;
  this.color = color || 'white';
  this.engineOn = false;

  this.switchEngine = function () {
    if (this.engineOn) {
      console.log("Turning engine off");
      this.engineOn = false;
    } else {
      console.log("Turning engine on");
      this.engineOn = true;
    }
  };
  this.drive = function () {
    this.switchEngine();
    console.log("Im driving. I'm a " + this.color + " car");
  }
}


var ford = new CarWithAutomaticTransmission(undefined, 'red');
ford.drive();

var kamaz = new CarWithAutomaticTransmission(6, 'grey');
kamaz.drive();

var samokat = new CarWithAutomaticTransmission(2, 'metal');
samokat.drive();