function CarWithManulTransmission (wheels, color){
    this.wheels = wheels || 4;
    this.color = color || 'white';
    this.engineOn = false;
    this.transmission = 0;
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
    }
  }
  
  var mercedes = new CarWithManulTransmission(undefined, 'red');
  mercedes.drive();
  var bentley = new CarWithManulTransmission(4, 'blue');
  var customCar = new CarWithManulTransmission(3, 'yellow');