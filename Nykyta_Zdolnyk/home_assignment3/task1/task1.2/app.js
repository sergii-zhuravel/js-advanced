//Подумайте и предложите как можно улучшить модель/абстракцию

function Pizza(toppings, bortik, size) {
    this.toppings = toppings;
    this.bortik = bortik;
    this.size = size;
}

Pizza.prototype.makePizza = function() {
    var listFields = this.size + " Pizza " + (this.bortik ? "with bortik" : "without bortik") + " and with toppings " + this.toppings.join(', '); 
    return listFields;
};

Pizza.prototype.packPizza = function() {
    var msg = "Pizza packed into " + this.size + " box"; 
        return msg;
};

var myPizza1 = new Pizza(['onion', 'bacon', 'tomato'], true, 'big');
console.log(myPizza1.makePizza());
console.log(myPizza1.packPizza());

var myPizza2 = new Pizza(['onion', 'bacon', 'tomato', 'parmesan'], false, 'small');
console.log(myPizza2.makePizza());
console.log(myPizza2.packPizza());
