// Привести пример использования привязки контекста с помощью call/apply/bind

//==================================CALL=================================================
let obj = {
	model:'core i3',
	type: 'processor',
	price: 200
}

function getModelToUpperCase () {
	this.model = this.model.toUpperCase()
	return this
}

getModelToUpperCase.call(obj)
console.log(obj)


//==================================APPLY=================================================

let arr = []
arr.push(1)
arr.push(-2)
arr.push(5)
arr.push(77)

console.log(Math.max.apply(null,arr))


//==================================BIND=================================================

let obj1 = {
	model:'core i3',
	type: 'processor',
	price: 200
}

let obj2 = {
	model:'core i5',
	type: 'processor',
	price: 250
}

let getModelToUpperCaseObj1 = getModelToUpperCase.bind(obj1)
let getModelToUpperCaseObj2 = getModelToUpperCase.bind(obj2)

console.log(obj1)
console.log(obj2)

getModelToUpperCaseObj1()
getModelToUpperCaseObj2()

console.log(obj1)
console.log(obj2)


