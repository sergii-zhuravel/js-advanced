// ------------------------
// Задача 3.1
// ------------------------


function Pizza(array, boolean , string) {
	// body...
	this.toppings = array;
	this.bortik = boolean;
	this.pizzaSize =string;
	this.makePizza= function() {
		// body...
		var pizza = "A "+ this.pizzaSize +" pizza with "+this.toppings;
		if (this.bortik){
		return pizza+=" and with bortik.";}
		else {
			return pizza+=" and without bortik.";}
		

	}
	this.packPizza=function (argument) {
		// body...
		return "Pizza packed into a "+this.pizzaSize+" box."
	}
}

var pizza1 = new Pizza(["cheese","tomato"], true, "big");
var pizza2 = new Pizza(["cheese","tomato","chicken"], false, "medium");
var pizza3 = new Pizza(["cucumber","tomato"], true, "small");


console.log(pizza2.makePizza());
console.log(pizza1.packPizza());




// ------------------------
// Задача 3.2
// ------------------------

function applyAll() {
	var array=[];
	for (var i = 1; i < arguments.length; i++) {
		array[i-1]=arguments[i];
	}

    //return array.slice(1,array.length);
	return arguments[0].apply(null,array.slice(0,array.length));	
}

 console.log( applyAll( Math.max,2, -2, 3,12,1) ); // 12



// // Применить Math.min к аргументам 2, -2, 3
console.log( applyAll(Math.min, 2, -2, 3,1,-13) ); // -13
// Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:


function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24


// ------------------------
// Задача 3.3
// ------------------------

// Привести пример использования привязки контекста с помощью call/apply/bind

function order_pizza() {
	
	return "Somebody has order a pizza with "+this.toppings; 

}

function add_ingridients() {
	
	var ingridients=[];
	for (var i = 1; i < arguments.length; i++) {
		ingridients[i-1]=arguments[i];
		this[arguments[0]].push(ingridients[i-1]);
	}
	return "All the ingridients are "+this[arguments[0]];
}


console.log(order_pizza.call(pizza1));
console.log(add_ingridients.call(pizza1,"toppings","sausages","tomatoes"));
console.log(add_ingridients.apply(pizza1,["toppings","pineapple","cucumber"]));

var a= order_pizza.bind(pizza3);
console.log(a());

var b= pizza1.makePizza.bind(pizza2);
console.log(b());



