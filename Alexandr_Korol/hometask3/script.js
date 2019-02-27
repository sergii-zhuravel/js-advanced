function Pizza(){
      this.toppings = [];
      this.bortik = true;
      this.size;
      this.makePizza = function(){
          if(this.bortik === true)
          console.log(this.size + ' pizza with bortik and with such toppings: '+this.toppings);
          else
          console.log(this.size + ' pizza without bortik and with such toppings: '+this.toppings);
      };
      this.packPizza = function(){
          console.log('Pizza packed into '+ this.size + ' box');
      };
}
var obj = new Pizza();
obj.toppings = prompt('Enter the toppings');
obj.size = prompt('Enter the size of the pizza');
var Bortick = prompt('Would you like to have a bortik?Yes/No');
if(Bortick === 'Yes')
obj.bortik = true;
if(Bortick === 'No')
obj.bortik = false;
else
alert('Wrong choice. Your pizza will be made with bortik');
obj.makePizza();
obj.packPizza();