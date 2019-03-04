// Home work 3

// task 3.1 "Pizza time"!

function CreatePizza(pizzaRim = false, size = 'big', toppings) {
    this.toppings = toppings || ['tomato', 'cheese', 'pepperoni'];
    this.pizzaRim = pizzaRim;
    this.size = size;

    this.makePizza = function() {
        rim = '';
        if (this.pizzaRim) {rim = 'with rim, and '};
        return this.size + ' pizza ' + rim + 'with toppings: ' + this.toppings.join(', ');
    };

    this.packPizza = function() {
        return this.size + ' pizza is packed and it\'s on the way to you';
    };
}

var bigPizza = new CreatePizza(false, 'big', ['mushrooms', 'meat', 'pepper' ,'cheese']);
var smallPizza = new CreatePizza(true, 'small', ['tomato', 'cheese', 'pepperoni']);
var makeBigPizza = bigPizza.makePizza();
var packBigPizza = bigPizza.packPizza();
var makeSmallPizza = smallPizza.makePizza();
console.log(makeBigPizza);
console.log(packBigPizza);
console.log(makeSmallPizza);


// task 3.2

function applyAll(func) {
    var numbers = [];
    for (var i = 1; i < arguments.length; i++) {
        numbers.push(arguments[i]);
    }
    return func.apply(null, numbers);
}

var mathMax = applyAll(Math.max, 12, 33, 7);
var mathMin = applyAll(Math.min, -11, -33, 2);

console.log(mathMax);
console.log(mathMin);

// task 3.3

var turistA = {
    name: 'Jack',
    country: 'USA',
    visitedCountries: 'France Canada Spain',
    lang: 'english'
}

var turistB = {
    name: 'Ivan',
    country: 'Ukraine',
    visitedCountries: 'Turkey Italy England',
    lang: 'ukrainian'
}

// .call();
function getLanguage() {
    var lang = this.lang;
    console.log(lang);
}

var turistALang = getLanguage.call(turistA);
var turistBLang = getLanguage.call(turistB);

// .apply();
function addNewCountry(country) {
    this.visitedCountries += country;
    return ' ' + this.visitedCountries;
}

var turistAVisitedCountry = addNewCountry.apply(turistA, [' Ukraine']);
console.log(turistAVisitedCountry);

var turistBVisitedCountry = addNewCountry.apply(turistB, [' Japan Austria']);
console.log(turistBVisitedCountry);

// .bind();
function getName() {
    var name = this.name;
    return name;
}

var turistAname = getName.bind(turistA);
console.log(turistAname); //nothing is going on

var turistAnameShow = turistAname();
console.log(turistAnameShow); //now it show the name