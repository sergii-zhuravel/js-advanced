var person = {
    name: 'Artem',
    lastName: 'Pohurskyi',
    sayHi: 'Hi, ',
    greating: function (){
        return console.log(this.sayHi + this.name)
    },
}

var greaTing = person.greating;
var showGreating = greaTing.bind(person);
showGreating();

var fullName = function () {
    return console.log('Full name: ' + this.name + ' ' + this.lastName)
}
var showFullName = fullName.call(person)

var address = function (add){
    return console.log(this.name + ' live in ' + add)
}
var showAddress = address.apply(person, ['Boryspol'])