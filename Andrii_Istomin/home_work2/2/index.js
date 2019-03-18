// автоматическая коробка не переключает передачи
// есть ошибки при вызове
function CarWithManulTransmission(wheels, color) {
  this.wheels = wheels || 4;
  this.color = color || "white";
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
  };
}

var ford = new CarWithManulTransmission(undefined, "red");
ford.drive();

function CarWithAutomaticTransmission(wheels, color) {
  this.wheels = wheels || 4;
  this.color = color || "white";
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
    this.setTransmission(1);
    console.log("Im driving. I'm a " + this.color + " car");
  };
}

var ladaSedan = new CarWithAutomaticTransmission(4, black); // нужно в кавычках "black"
ladaSedan.engineOn(); // engineOn не метод, а поле
ladaSedan.drive();

var btr = new CarWithAutomaticTransmission(8, green);
btr.engineOn();
btr.drive();
