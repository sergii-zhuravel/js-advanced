function hello(argName, argSurname) {
    console.log('Hello ' + this[argName] + ' ' + this[argSurname]);
}

var user = {
    name: 'Oleg',
    surname: 'Lavrenchuk'
}
hello.call(user, 'name', 'surname');

function goodBye() {
    console.log('Good bye ' + this.name + ' ' + this.surname);
}

var user2 = {
    name: 'Vasya',
    surname: 'Vasin'
}
goodBye.call(user2);

var bindFunc = hello.bind(user2,'name');
bindFunc('surname');

var mass = [1,7,32,2,8,12];
console.log(Math.max.apply(this,mass));
console.log(Math.min.apply(this,mass));







