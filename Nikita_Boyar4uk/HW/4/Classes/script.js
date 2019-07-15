let Line = function(height) {
  this.height = height;
};

Line.prototype.getHeight = function() {
  return this.height;
};

let Squere = function(height) {
  Line.call(this, height);
  this.squere = height * height;
};

Squere.prototype = Object.create(Line.prototype);
Squere.prototype.getSquere = function() {
  return this.squere;
};

let Cube = function(height) {
  Squere.call(this, height, this.squere);
  this.volume = Math.pow(this.height, 3);
  this.cubeSurfaceArea = this.squere * 6;
  this.cubePerimetr = this.height * 12;
};

Cube.prototype = Object.create(Squere.prototype);
Cube.prototype.getVolume = function() {
  return this.volume;
};

item1 = new Line(2);
item2 = new Squere(3);
item3 = new Cube(4);

console.log(item1);
console.log(item2);
console.log(item3);
