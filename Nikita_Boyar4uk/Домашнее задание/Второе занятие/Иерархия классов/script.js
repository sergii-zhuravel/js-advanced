
// Разработать любую иерархию классов (не менее 4 классов, не мене 3х уровней),
//  в виде таблицы, схемы или структуированного текста Можно взять направление - UI Widgets или любое другое

//----------------------------------CLASS HUMANS-----------------------------------------------------------------
class Human {
	constructor (year,height,weight){
		this.year = year
		this.height = height 
		this.weight = weight
	}

	age(){
		return 2019 - this.year
	}
}

class Person extends Human{
	constructor(year,height,weight,name,surname){
		super(year,height,weight)

		this.name = name
		this.surname = surname
	}

	fullName(){
		return this.name + ' ' + this.surname
	}

	sayHello(){
		return `Hello! My name is ${this.fullName()}`
	}
}

class Teacher extends Person {
	constructor (year,height,weight,name,surname,theme){
		super(year,height,weight,name,surname)

		this.theme = theme
	}

	sayHello(){
		return `${super.sayHello()}.I'm ${this.theme} teacher`
	}
}

var newHuman = new Human(1993)

var Bogdan = new Person(1990, 175, 75, 'Bogdan', 'Ivanov')

var Ira = new Teacher(1980, 170, 70, 'Irina', 'Bondarenko','js')

//----------------------------------CLASS CIRCLE-----------------------------------------------------------------


class Point {
	constructor(x,y){
		this.x = x
		this.y = y
		
	}
}

class Circle extends Point {
	constructor (x,y,r){
		super(x,y)
		this.r = r
		this.p = 3.14
	}

	getDiameter(){
		return this.r * 2
	}

	getRSquere(){
		return this.r * this.r
	}

	getSquere(){
		return (this.p * this.getRSquere()).toFixed(2)
	}

	getCircumference(){
		return (this.p * this.getDiameter()).toFixed(2)
	}

	makeCircle(){
		console.group(`Круг:`)
		console.group(`Координаты:`)
		console.log(`X: ${this.x}`)
		console.log(`y: ${this.y}`)
		console.groupEnd()
		console.log(`Радиус: ${this.r}cм.`)
		console.log(`Квадрат радиуса: ${this.getRSquere()}см.`)
		console.log(`Диаметр: ${this.getDiameter()}см.`)
		console.log(`Длинна окружности: ${this.getCircumference()}см.`)
		console.log(`Площадь круга: ${this.getSquere()}см.`)

	}
}

class Sphere extends Circle{
	constructor(x,y,r,p){
		super(x,y,r,p)
	}

	getDСubed(){
		return Math.pow(this.getDiameter(), 3)
	}
	getVolume(){
		return ((1 / 6 ) * this.p * this.getDСubed()).toFixed(2)
	}

	getSurfaceArea(){
		return (4 * this.getSquere()).toFixed(2)
	}

	makeSphere(){
		console.log(`${super.makeCircle()}`)	
		console.log(`Объем сферы: ${this.getVolume()}см.`)
		console.log(`Площадь поверхности: ${this.getSurfaceArea()}см.`)
		console.groupEnd()
	}
}

var circle = new Circle(10, 15, 20)

var sphere = new Sphere(2,33,12)

//----------------------------------CLASS CIRCLE-----------------------------------------------------------------
