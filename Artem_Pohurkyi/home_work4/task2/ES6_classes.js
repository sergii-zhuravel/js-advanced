class PizzaMargarita{
    constructor(){
        this.base = 'dough';
        this.sauce = 'tomato';
        this.toping1 = 'cheese';
        this.toping2 = 'tomatoes';
    }
    info(){
        return "the easiest pizza";
    }
}

class PizzaSalami extends PizzaMargarita{
    constructor(){
        super();
        this.toping = 'salami sausage';
    }
    specialTopingsSalami(){
        return 'salami sausage';
    }
};

class HuntingPizza extends PizzaMargarita{
    constructor(){
        super();
        this.toping = 'hunting sausage';
    }
    specialTopingsHunting(){
        return 'hunting sausage';
    }
};

class MeatPizza extends PizzaSalami{
    constructor(){
        super();
        this.toping3 = 'bekon';
        this.toping4 = 'chicken fillet';
    }
    specialTopingsMeat(){
        return 'bekon and chicken fillet'
    }
};

class PizzaBBQ extends HuntingPizza{
    constructor(){
        super();
        this.toping3 = 'cucumber';
        this.toping4 = 'baked ham';
        this.toping5 = 'tabasco';
    }
    specialTopingsBBQ(){
        return 'cucumber, baked ham and tabasco'
    }
};
    