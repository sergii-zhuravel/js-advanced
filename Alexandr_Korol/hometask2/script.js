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

//Car wih automatic transmission
  function CarWithAutomaticTransmission (wheels, color){
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
      console.log("Im driving a " + this.color + " car " + "with " + this.wheels + " " + "wheels");
    }
  }
  var wheels = prompt('Enter a number of wheels');
  var color = prompt('Enter a color of a car');
  var bmw = new CarWithAutomaticTransmission(wheels, color);
   wheels = prompt('Enter a number of wheels');
   color = prompt('Enter a color of a car');
  var volvo = new CarWithAutomaticTransmission(wheels, color);
  wheels = prompt('Enter a number of wheels');
   color = prompt('Enter a color of a car');
  var nissan = new CarWithAutomaticTransmission(wheels, color);
  bmw.drive();
  volvo.drive();
  nissan.drive();