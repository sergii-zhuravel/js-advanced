// правильно

function Sensor() {
  this.macAddress = "71 2D 00 13 A2 00 41 80 D8 62";
}

Sensor.prototype.getDate = function() {
  var date = new Date();
  var dateString = date.toISOString();
  return dateString;
};

Sensor.prototype.startMeasurement = function() {
  var str = "Measurement " + this.type + " is started at " + this.getDate();
  return str;
};

Sensor.prototype.stopMeasurement = function() {
  var str = "Measurement " + this.type + " is stoped at " + this.getDate();
  return str;
};

function TemperatureSensor() {
  this.type = "Temperature";
  this.values = {
    value: 22.8,
    units: "°C"
  };
}

TemperatureSensor.prototype = Object.create(Sensor.prototype);

TemperatureSensor.prototype.getValue = function() {
  var str = this.type + " is " + this.values.value + this.values.units;
  return str;
};

var temp = new TemperatureSensor();
console.log(temp.startMeasurement());
console.log(temp.getValue());
console.log(temp.stopMeasurement());

function HumiditySensor() {
  this.type = "Humidity";
  this.values = {
    value: "36",
    units: "%"
  };
}

HumiditySensor.prototype = Object.create(TemperatureSensor.prototype);
HumiditySensor.prototype.endMeasurment = function() {
  return "End of measurment";
};

var hum = new HumiditySensor();
console.log(hum.startMeasurement());
console.log(hum.getValue());
console.log(hum.stopMeasurement());
console.log(hum.endMeasurment());
