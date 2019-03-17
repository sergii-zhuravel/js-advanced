var animal = {
    name: 'animal',
    legs: 4,
    walk: function() {
        return 'walking';
    }
}

var gullDragon = {
    wings: true,
    fly: function() {
        return 'flying';
    }
}
gullDragon.__proto__ = animal;

var tiger = {
    mustache: true,
    growl: function() {
        return 'grrrrr';
    }
}
tiger.__proto__ = animal;

var cat = {
    lowSize: true,
    sleep: function() {
        return 'sleeping';
    }
}
cat.__proto__ = tiger;

console.log(cat.growl());
console.log(cat.walk());
console.log(gullDragon.walk());
console.log(tiger.walk());
