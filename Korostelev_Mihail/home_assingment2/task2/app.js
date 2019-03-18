/*Необходимо создать JS приложение (js и html файл) 
в которое сначала скопировать реализацию конструктора CarWithManulTransmission 
которую рассматривали на занятии (можно посмотреть в основном репозитории javascript-advanced/lesson2-OOP/cars.js)

Создать реализацию конструктора CarWithAutomaticTransmission
 в котором не будет метода setTransmission (так как передача задается автоматически)

Создать несколько реализаций обьектов с помощью конструктора CarWithAutomaticTransmission*/

// скопировать реализацию конструктора CarWithManulTransmission

// автоматическая коробка не переключает передачи
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

//реализациz конструктора CarWithAutomaticTransmission
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

var nissan = new CarWithAutomaticTransmission(undefined, "red");
nissan.drive();
var scoda = new CarWithAutomaticTransmission(6, "yellow");
scoda.drive();
var citroen = new CarWithAutomaticTransmission(4, "navy");
citroen.drive();
