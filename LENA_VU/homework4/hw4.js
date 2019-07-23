    
// ------------------------
// Задача 4.1
// ------------------------


function makeAdder(num) {
	return function(array) {
		for (var i = 0; i < array.length; i++) {
			array[i]+=num;
			}
			return array;
	}

}

function makeAdder1(num) {
	return function(array) {
		array.forEach(function(argument) {
			argument+=num;
		})
		return array;
	}

}



var add10 = makeAdder(10)
console.log(add10([10, 20, 30])) // должно вывести  [20, 30, 40]
var add20 = makeAdder(20)
console.log(add20([10, 20, 30])) // должно вывести  [30, 40, 50]


// ------------------------
// Задача 4.2
// ------------------------



function Dancer(name,weight,styles) {
	this.name = name;
	this.weight= weight;
	this.danceStyles=styles;

}

Dancer.prototype.dance= function() {
	console.log("My name is "+this.name+".I am a "+this.danceStyles+" dancer.");
}


function DStudent(name,weight,styles,academies) {
	this.name = name;
	this.weight= weight;
	this.danceStyles=styles;
	this.danceAcademies=academies;

}

DStudent.prototype=Object.create(new Dancer());


DStudent.prototype.attendAcademy=function (academy){
	this.danceAcademies.push(academy);
}

DStudent.prototype.chooseStyles=function (style){
	this.danceStyles.push(style);
}

var Lena= new DStudent('Lena',80,["hip-hop","jazz-funk"],["Dside"]);
Lena.attendAcademy("Myway Dance Academy");
Lena.chooseStyles("shuffle");
Lena.dance(); //I am a hip-hop,jazz-funk,shuffle dancer.
