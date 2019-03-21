function CarWithAutomaticTransmission (wheels, color){
  this.wheels = wheels || 4;
  this.color = color || 'white';
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
    alert("Im driving. I'm a " + this.color + " auto car");
  }
}

var tesla = new CarWithAutomaticTransmission(undefined, 'red');
tesla.drive();