// правильно

function Pizza(toppings, bortik, size) {
    this.toppings = toppings;
    this.bortik = bortik;
    this.size = size;
    this.makePizza = function() {
       if (this.bortik){
   console.log(this.size + " Pizza with bortik" + " and with toppings: " + this.toppings);
    }else {
   console.log(this.size + " Pizza without bortik" + " and with toppings: " + this.toppings);
    }
    }
    this.packPizza = function() {
   console.log("Pizza packed into pack: " + this.size);
    }
   }
   
   var myPizza1 = new Pizza(['onion', 'bekon', 'tomato'], true, 'big');
   var myPizza2 = new Pizza(['cheeze', 'olive'], false, 'small');
   
   myPizza1.makePizza();
   myPizza1.packPizza();
   myPizza2.makePizza();
   myPizza2.packPizza();