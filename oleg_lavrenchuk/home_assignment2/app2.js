function CarWithAutomaticTransmission(wheels, color) {
  this.wheels = wheels || 4;
  this.color = color || "white";
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
    console.log("Im driving. I'm a " + this.color + " car");
  };
}
var bugatti = new CarWithAutomaticTransmission(4, "red");
var porsche = new CarWithAutomaticTransmission(4, "black");
var suzuki = new CarWithAutomaticTransmission(2, "grey");
bugatti.drive();
porsche.drive();
suzuki.drive();
