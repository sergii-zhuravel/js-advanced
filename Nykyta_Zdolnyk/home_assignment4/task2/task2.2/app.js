class Sensor {
  initSensor() {
    this.macAddress = "71 2D 00 13 A2 00 41 80 D8 62";
  }

  getDate() {
    var date = new Date();
    var dateString = date.toISOString();
    return dateString;
  }

  startMeasurement() {
    var str = "Measurement " + this.type + " is started at " + this.getDate();
    return str;
  }

  stopMeasurement() {
    var str = "Measurement " + this.type + " is stoped at " + this.getDate();
    return str;
  }
}

class TemperatureSensor extends Sensor {
  initTemperature() {
    this.type = "Temperature";
    this.values = {
      value: 22.8,
      units: "°C"
    };
  }

  getValue() {
    var str = this.type + " is " + this.values.value + this.values.units;
    return str;
  }
}

var temp = new TemperatureSensor();
temp.initTemperature();
console.log(temp.startMeasurement());
console.log(temp.getValue());
console.log(temp.stopMeasurement());

class HumiditySensor extends TemperatureSensor {
  initHumidity() {
    this.type = "Humidity";
    this.values = {
      value: "36",
      units: "%"
    };
  }

  endMeasurment() {
    return "End of measurment";
  }
}

var hum = new HumiditySensor();
hum.initHumidity();
console.log(hum.startMeasurement());
console.log(hum.getValue());
console.log(hum.stopMeasurement());
console.log(hum.endMeasurment());
