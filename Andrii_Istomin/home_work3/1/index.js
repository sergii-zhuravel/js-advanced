// правильно, есть замечания

class Pizza {
    constructor(toppings, bortik, size){
        this.toppings = toppings;
        this.bortik = bortik;
        this.size = size;
    }
    makePizza(){
        return (this.size + " Pizza with " + this.bortik + " and with toppings: " + this.toppings)
    }
    packPizza(box){ // размер упаковки должен вычисляться в зависимости от размера пицы
        return("Pizza packed into " + box + " box")
    }
}

var pizza = new Pizza(["sause", "mozarella", "cheddar"], "kolbaska", "L")
var pizza1 = new Pizza(["sause", "peperoni", "tomato"], "", "XL")
var pizza2 = new Pizza(["sause", "mozarella", "cheddar"], "kolbaska", "XXL")

console.log(pizza.makePizza())
console.log(pizza1.makePizza())
console.log(pizza2.makePizza())
console.log(pizza.packPizza("BIG"))



