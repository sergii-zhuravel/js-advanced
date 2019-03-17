
function CarWithAutomaticTransmission(maxSpeed) {

    this.maxSpeed = maxSpeed;
    this.currentSpeed = 0;
    this.engineOn = false;

    this.increaseSpeed = function(increase) {
        this.engineOn = true;
        if (increase < 0) {
            console.log('Current speed: ' + this.currentSpeed + ' km/h');
        } else if (this.currentSpeed + increase <= this.maxSpeed) {
            this.currentSpeed = this.currentSpeed + increase;
            console.log('Acceleration. Current speed: ' + this.currentSpeed + ' km/h');
        } else {
            this.currentSpeed = maxSpeed;
            console.log('It\'s the max speed for this car. Current speed: ' + this.currentSpeed + ' km/h');
        }
    }

    this.decreaseSpeed = function(decrease) {
        if (decrease < 0) {
            console.log('Current speed: ' + this.currentSpeed + ' km/h');
        } else if(this.currentSpeed - decrease > 0) {
            this.currentSpeed = this.currentSpeed - decrease;
            console.log('Slowed down. Current speed: ' + this.currentSpeed + ' km/h');
        } else {
            this.currentSpeed = 0;
            console.log('Car is stoped.');
            this.engineOn = false;
        }
    }
}

var audi = new CarWithAutomaticTransmission(300);
audi.increaseSpeed(120);
audi.decreaseSpeed(30);