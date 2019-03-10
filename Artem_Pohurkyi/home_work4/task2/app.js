var PizzaMargarita = {
    base: 'dough',
    sauce: 'tomato',
    toping1: 'cheese',
    toping2: 'tomatoes'
}

var PizzaSalami = {
    toping: 'salami sausage',
};
PizzaSalami.__proto__ = PizzaMargarita;

var HuntingPizza = {
    toping: 'hunting sausage'
};
HuntingPizza.__proto__ = PizzaMargarita;

var MeatPizza = {
    toping3: 'bekon',
    toping4: 'chicken fillet'
};
MeatPizza.__proto__ = PizzaSalami;

var PizzaBBQ = {
    toping3: 'cucumber',
    toping4: 'baked ham',
    toping5: 'tabasco'
};
PizzaBBQ.__proto__ = HuntingPizza;