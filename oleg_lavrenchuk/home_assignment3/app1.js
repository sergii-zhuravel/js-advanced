function Pizza(toppings, bortik, size) {
  this.toppings = toppings;
  this.bortik = bortik;
  this.size = size;
  this.makePizza = function() {
    this.bortik ? this.bortik = 'bortik' : this.bortik = 'no bortik';
    return this.size + ' Pizza with ' + this.bortik + ' and with toppings ' + this.toppings;
  }
  this.packPizza = function() {
    return 'Pizza packed into ' + this.size + ' box';
  }
}
var paperonni = new Pizza(['cheese','bacon'],true, '50cm');
console.log(paperonni.makePizza());
console.log(paperonni.packPizza());
var fiveCheeses = new Pizza(['cheese','cheese','cheese','cheese','cheese'],false, '100cm');
console.log(fiveCheeses.makePizza());
console.log(fiveCheeses.packPizza());

