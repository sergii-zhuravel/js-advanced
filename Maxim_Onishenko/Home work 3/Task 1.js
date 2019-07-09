function Pizza(toppings,bortik,size,vegan){
    this.toppings = toppings;
    this.vegan = vegan;
    this.bortik = bortik;
    this.size = size;
    this.makePizza = function(){ return `${size} Pizza with ${bortik} and with toppings ${toppings}`
    }
    this.packPizza = function(){return `Pizza packed into ${size}box`}
}

var Margarita = new Pizza(['ketchup', 'cheeze','mozarela'], true, 'small', true);
var papperoni = new Pizza(['salami','tomatoes','cheese','mashrooms'],false,'medium',false);
Margarita.makePizza();
papperoni.packPizza();