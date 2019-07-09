function sum() {
	// body...
	var sum=0;
	for (var i = 0; i < arguments.length; i++) {
		sum+=arguments[i];
	}
	return sum;

}


// var res=0;
// res = prompt("input any number");
// check(res);
// function check(res){
//     if (res%2){
//         console.log("odd");
//     }
//     else {console.log("even");}
// }

// // call apply 

// //bind 
 
// //closure

// Number(1).toString();
// var a=1;
// a.toString();

// 1.toString();    // error
// (1).toString();  // ok - coverts to Number

// typeof NaN // number
// typeof null // object

// function test() {
//     console.log(this.a);
// }
// test(); // undefined

// window.a= "hello";
// test();// hello


// var obj= Object.create(null)



// var character = {
//     step: 0,
    
//     up: function() { // вверх
//       this.step++;
//     },
    
//     down: function() { // вниз
//       this.step--;
//     },
//     showPosition: function() { // вывести текущую позицию
//       console.log( this.step );
//     }
//   };


