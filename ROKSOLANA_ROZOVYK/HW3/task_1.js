function Pizza(toppings, border, size){
    this.toppings = toppings;
    this.border = border;
    this.size = size;
    this.makePizza = function()
    {
        let str_toppings = this.toppings.join(', ');
        if(this.border)
           console.log(`${this.size} Pizza with border and with toppings: ${str_toppings}`);
        else console.log(`${this.size} Pizza with toppings: ${str_toppings}`);
        return;
    }
    this.packPizza = function()
    {
        console.log(`Pizza packed into ${size} box`);
        return;
    }
}

let pizza1 = new Pizza(['cheese', 'tomato', 'bacon'], false, 'large');
let pizza2 = new Pizza(['pineapple', 'chicken', 'bacon'], true, 'big');

pizza1.makePizza();
pizza1.packPizza();
pizza2.makePizza();
pizza2.packPizza();